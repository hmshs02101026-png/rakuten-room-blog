import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/types'

type Props = {
  post: Post
  priority?: boolean
  size?: 'default' | 'large'
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export default function PostCard({ post, priority = false, size = 'default' }: Props) {
  if (size === 'large') {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article>
          <div className="relative overflow-hidden mb-5" style={{ aspectRatio: '16/10' }}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              priority={priority}
              sizes="(max-width: 768px) 100vw, 65vw"
            />
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[9px] tracking-[0.2em] uppercase text-site-accent font-sans">
              {post.category}
            </span>
            <span className="w-6 h-px bg-site-rule" />
            <time className="text-[10px] text-site-faint">{formatDate(post.publishedAt)}</time>
          </div>
          <h2 className="font-serif text-[18px] lg:text-[20px] text-site-ink leading-snug mb-3 group-hover:text-site-accent transition-colors">
            {post.title}
          </h2>
          <p className="text-[12px] text-site-muted leading-[1.9] line-clamp-3 font-light mb-4">
            {post.excerpt}
          </p>
          <span className="text-[10px] tracking-[0.2em] text-site-accent border-b border-site-accent/40 pb-0.5 uppercase">
            Read More
          </span>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article>
        <div className="relative overflow-hidden mb-3" style={{ aspectRatio: '4/3' }}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            priority={priority}
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
        <span className="text-[9px] tracking-[0.15em] uppercase text-site-accent font-sans block mb-1.5">
          {post.category}
        </span>
        <h2 className="font-serif text-[14px] text-site-ink leading-snug mb-1.5 group-hover:text-site-accent transition-colors line-clamp-2">
          {post.title}
        </h2>
        <time className="text-[10px] text-site-faint">{formatDate(post.publishedAt)}</time>
      </article>
    </Link>
  )
}
