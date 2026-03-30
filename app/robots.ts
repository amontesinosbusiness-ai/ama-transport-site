import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/wip/',
    },
    sitemap: 'https://www.amatransportlogistics.com/sitemap.xml',
  }
}
