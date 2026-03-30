export default function ComingSoon() {
  return (
    <main style={{
      backgroundColor: '#0f172a',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      margin: 0,
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>AMA Transport Logistics</h1>
      <h2 style={{ fontSize: '1.5rem', color: '#94a3b8', fontWeight: 400, marginBottom: '2rem' }}>Hospitality FF&E Logistics</h2>
      <p style={{ fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.5' }}>
        Our new website is currently under construction to better serve your project freight and warehousing needs.
      </p>
      <p style={{ marginTop: '2rem' }}>
        For inquiries, please contact us at: <br /><br />
        <a href="mailto:info@amatransportlogistics.com" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>
          info@amatransportlogistics.com
        </a>
      </p>
    </main>
  );
}
