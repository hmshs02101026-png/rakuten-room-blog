export type Category = {
  id: string
  name: string
  slug: string
  emoji: string
  description: string
}

export type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  categorySlug: string
  tags: string[]
  publishedAt: string
  updatedAt: string
  coverImage: string
  rakutenRoomUrl: string
  readingTime: number
}
