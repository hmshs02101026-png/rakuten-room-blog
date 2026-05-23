import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/posts'
import RakutenCTA from '@/components/RakutenCTA'
import PostCard from '@/components/PostCard'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site.vercel.app'

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: post.coverImage, width: 800, height: 450, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

function renderContent(content: string): React.ReactNode[] {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    if (trimmed.startsWith('### ')) {
      elements.push(<h3 key={key++}>{trimmed.slice(4)}</h3>)
    } else if (trimmed.startsWith('## ')) {
      elements.push(<h2 key={key++}>{trimmed.slice(3)}</h2>)
    } else if (trimmed === '---') {
      elements.push(<hr key={key++} />)
    } else {
      elements.push(<p key={key++}>{trimmed}</p>)
    }
  }

  return elements
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(post.slug, post.categorySlug)

  return (
    <div className="max-w-site mx-auto px-5 lg:px-10 py-14 lg:py-16">
      <div className="max-w-[700px] mx-auto">

        {/* パンくず */}
        <nav className="flex items-center gap-2 text-[10px] tracking-wide text-site-faint mb-10">
          <Link href="/" className="hover:text-site-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-site-accent transition-colors">Blog</Link>
          <span>/</span>
          <Link href={`/category/${post.categorySlug}`} className="hover:text-site-accent transition-colors">
            {post.category}
          </Link>
        </nav>

        {/* カテゴリー・タイトル */}
        <div className="mb-8">
          <span className="text-[9px] tracking-[0.2em] uppercase text-site-accent font-sans block mb-4">
            {post.category}
          </span>
          <h1 className="font-serif text-[22px] lg:text-[26px] text-site-ink leading-snug mb-5">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <time className="text-[10px] text-site-faint" dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </time>
            <span className="w-4 h-px bg-site-rule" />
            <span className="text-[10px] text-site-faint">約{post.readingTime}分</span>
          </div>
        </div>

        {/* アイキャッチ */}
        <div className="relative overflow-hidden mb-10" style={{ aspectRatio: '16/9' }}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, 700px"
          />
        </div>

        {/* 記事本文上CTA */}
        <RakutenCTA url={post.rakutenRoomUrl} />

        {/* 本文 */}
        <div className="prose-blog">
          {renderContent(post.content)}
        </div>

        {/* タグ */}
        <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-site-rule">
          {post.tags.map((tag) => (
            <span key={tag} className="text-[10px] tracking-wide text-site-faint">
              #{tag}
            </span>
          ))}
        </div>

        {/* 記事末尾CTA */}
        <RakutenCTA url={post.rakutenRoomUrl} />

        {/* 関連記事 */}
        {relatedPosts.length > 0 && (
          <section className="mt-14">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-site-rule" />
              <p className="section-label">Related Posts</p>
              <div className="h-px flex-1 bg-site-rule" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {relatedPosts.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </section>
        )}

        {/* 記事一覧へ */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block text-[10px] tracking-[0.3em] uppercase text-site-ink border-b border-site-ink/25 pb-0.5 hover:text-site-accent hover:border-site-accent transition-colors"
          >
            View All Posts
          </Link>
        </div>

      </div>
    </div>
  )
}
