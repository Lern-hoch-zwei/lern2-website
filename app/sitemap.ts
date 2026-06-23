import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.lern2.com'
  return [
    { url: `${base}`, lastModified: new Date() },
    { url: `${base}/ar`, lastModified: new Date() },
    { url: `${base}/tr`, lastModified: new Date() },
    { url: `${base}/fa`, lastModified: new Date() },
    { url: `${base}/impressum`, lastModified: new Date() },
    { url: `${base}/datenschutz`, lastModified: new Date() },
  ]
}
