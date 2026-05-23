import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { categories } from '@/lib/categories'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const categoryUrls = categories.map((cat) => ({
    url: `${siteUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/room`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/profile`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    ...categoryUrls,
    ...postUrls,
  ]
}
