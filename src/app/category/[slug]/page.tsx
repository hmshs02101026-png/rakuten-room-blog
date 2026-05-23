import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug, categories } from '@/lib/categories'
import { getPostsByCategory } from '@/lib/posts'
import PostCard from '@/components/PostCard'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}

  return {
    title: `${category.name}の記事一覧`,
    description: category.description,
  }
}

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const posts = getPostsByCategory(slug)

  return (
    <div className="max-w-site mx-auto px-5 lg:px-10 py-14 lg:py-16">

      {/* パンくず */}
      <nav className="flex items-center gap-2 text-[10px] tracking-wide text-site-faint mb-10">
        <Link href="/" className="hover:text-site-accent transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-site-accent transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-site-muted">{category.name}</span>
      </nav>

      {/* ヘッダー */}
      <div className="text-center mb-12">
        <p className="section-label mb-4">{category.name}</p>
        <div className="thin-rule mb-5" />
        <p className="text-[12px] text-site-muted font-light leading-[1.9] max-w-[360px] mx-auto">
          {category.description}
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-[12px] text-site-faint mb-6">まだ記事がありません</p>
          <Link
            href="/blog"
            className="inline-block text-[10px] tracking-[0.2em] uppercase text-site-ink border-b border-site-ink/25 pb-0.5 hover:text-site-accent hover:border-site-accent transition-colors"
          >
            View All Posts
          </Link>
        </div>
      ) : (
        <>
          <p className="text-[10px] tracking-wide text-site-faint mb-8 text-center">{posts.length} posts</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} priority={i === 0} />
            ))}
          </div>
        </>
      )}

      {/* 他カテゴリー */}
      <section className="mt-16 pt-10 border-t border-site-rule">
        <p className="section-label mb-6 text-center">Other Categories</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {categories
            .filter((c) => c.slug !== slug)
            .map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="text-[10px] tracking-[0.2em] uppercase text-site-faint hover:text-site-accent transition-colors"
              >
                {cat.name}
              </Link>
            ))}
        </div>
      </section>

    </div>
  )
}
