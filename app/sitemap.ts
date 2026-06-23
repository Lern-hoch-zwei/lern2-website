import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://lern2.com', lastModified: new Date() },
    { url: 'https://lern2.com/ar', lastModified: new Date() },
    { url: 'https://lern2.com/tr', lastModified: new Date() },
    { url: 'https://lern2.com/fa', lastModified: new Date() },
    { url: 'https://lern2.com/impressum', lastModified: new Date() },
    { url: 'https://lern2.com/datenschutz', lastModified: new Date() },
  ]
}
