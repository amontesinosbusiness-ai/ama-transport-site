import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  project?: string;
  notes?: string;
};

export async function POST(request: Request) {
  try {
    console.log("API HIT - Starting dual integration");

    const body = await request.json();
    console.log("BODY:", body);

    const { name, email, phone, company, notes, message, project } = body;

    // ==========================================
    // 1. MONDAY.COM CRM INTEGRATION
    // ==========================================
    try {
      const columnValues = {
        "text_mm1hj070": email || "",
        "text_mm1hnyk3": company || "",
        "text_mm1hv228": name || "",
        "text_mm1h5ag6": notes || message || "",
        "text_mm1h11h": phone || "",
        "color_mm1h9nc6": { label: "New Lead" }
      };

      const query = `
        mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
          create_item(
            board_id: $boardId,
            item_name: $itemName,
            column_values: $columnValues
          ) {
            id
          }
        }
      `;

      const variables = {
        boardId: process.env.MONDAY_BOARD_ID,
        itemName: name || "New Website Lead",
        columnValues: JSON.stringify(columnValues)
      };

      const mondayResponse = await fetch("https://api.monday.com/v2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": process.env.MONDAY_API_TOKEN || "",
          "API-Version": "2024-01"
        },
        body: JSON.stringify({ query, variables })
      });

      const mondayData = await mondayResponse.json();

      if (!mondayResponse.ok || mondayData.errors) {
        console.error("MONDAY ERROR:", JSON.stringify(mondayData.errors || mondayData, null, 2));
      } else {
        console.log("MONDAY SUCCESS!");
      }
    } catch (mondayErr) {
      console.error("Failed to connect to Monday API:", mondayErr);
    }

    // ==========================================
    // 2. RESEND EMAIL NOTIFICATION
    // ==========================================
    const htmlTemplate = `
      <h2>New AMA Contact Inquiry</h2>
      <p><strong>Name:</strong> ${name || "N/A"}</p>
      <p><strong>Email:</strong> ${email || "N/A"}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Project Details:</strong> ${project || "N/A"}</p>
      <p><strong>Message:</strong><br/>${message || notes || "N/A"}</p>
    `;

    // We use a raw fetch request so you don't have to install any new packages
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // Note: Until you verify your domain in Resend, you MUST use this testing 'from' address
        from: "AMA Website <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL || "info@amatransportlogistics.com",
        subject: "New Website Lead!",
        html: htmlTemplate
      })
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("RESEND ERROR:", resendData);
      // We log the error but don't crash the whole route, so the user still sees a success message if Monday worked
    } else {
      console.log("EMAIL SUCCESS!");
    }

    // ==========================================
    // 3. FINAL SUCCESS RESPONSE TO WEBSITE
    // ==========================================
    return NextResponse.json({ ok: true, message: "Lead processed successfully" });

  } catch (error) {
    console.error("CRITICAL ROUTE ERROR:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to process form submission." },
      { status: 500 }
    );
  }
}
