import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import { categories } from '@/lib/categories'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '記事一覧',
  description: '子育て・暮らし・キッチン・収納など、楽天おすすめグッズを紹介する記事をまとめています。',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-site mx-auto px-5 lg:px-10 py-14 lg:py-16">

      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <p className="section-label mb-4">Blog</p>
        <div className="thin-rule mb-5" />
        <p className="text-[12px] text-site-muted font-light">{posts.length}件の記事</p>
      </div>

      {/* カテゴリーフィルター */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
        <Link
          href="/blog"
          className="text-[10px] tracking-[0.2em] uppercase text-site-ink border-b border-site-ink pb-0.5"
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.slug}`}
            className="text-[10px] tracking-[0.2em] uppercase text-site-faint hover:text-site-accent transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* 記事一覧グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {posts.map((post, i) => (
          <PostCard key={post.id} post={post} priority={i === 0} />
        ))}
      </div>

    </div>
  )
}
