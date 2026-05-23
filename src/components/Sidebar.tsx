import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'
import { categories } from '@/lib/categories'

export default function Sidebar() {
  const popularPosts = getAllPosts().slice(0, 4)

  return (
    <aside className="space-y-12">

      {/* ── Profile ── */}
      <div>
        <p className="section-label mb-6 text-center">Profile</p>
        <div className="w-[76px] h-[76px] rounded-full overflow-hidden mx-auto mb-4 border border-site-rule bg-site-pale flex items-center justify-center text-3xl">
          🌼
        </div>
        <p className="text-center font-serif text-[15px] text-site-ink mb-0.5">ひだまり</p>
        <p className="text-center text-[9px] tracking-[0.2em] text-site-accent uppercase mb-4">hidamari</p>
        <p className="text-[11px] text-site-muted leading-[1.9] font-light text-center">
          2児のママ。北欧インテリアと暮らしのグッズが好き。楽天ROOMで実際に使ってよかったものを紹介中。
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer"
            className="text-[10px] tracking-wider text-site-faint hover:text-site-accent transition-colors">
            Threads
          </a>
          <span className="text-site-rule text-xs">|</span>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
            className="text-[10px] tracking-wider text-site-faint hover:text-site-accent transition-colors">
            Instagram
          </a>
        </div>
        <div className="thin-rule mt-6" />
      </div>

      {/* ── Category ── */}
      <div>
        <p className="section-label mb-5">Category</p>
        <ul>
          {categories.map((cat, i) => (
            <li key={cat.id} className={i < categories.length - 1 ? 'border-b border-site-rule' : ''}>
              <Link
                href={`/category/${cat.slug}`}
                className="flex items-center justify-between py-3 text-[12px] text-site-muted hover:text-site-accent transition-colors font-light group"
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-sm">{cat.emoji}</span>
                  {cat.name}
                </span>
                <svg className="w-2.5 h-2.5 text-site-faint group-hover:text-site-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Popular Posts ── */}
      <div>
        <p className="section-label mb-5">Popular Posts</p>
        <div className="space-y-5">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-3 items-start">
              <div className="relative flex-shrink-0 w-[60px] h-[60px] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="60px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] tracking-wide text-site-accent block mb-0.5 font-sans uppercase">
                  {post.category}
                </span>
                <p className="text-[12px] text-site-ink leading-snug line-clamp-2 group-hover:text-site-accent transition-colors font-serif">
                  {post.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Room CTA ── */}
      <div className="border border-site-rule p-6 text-center">
        <p className="section-label mb-3">楽天ROOM</p>
        <span className="font-script italic text-[22px] text-site-ink block mb-3 tracking-widest leading-none">
          room
        </span>
        <p className="text-[11px] text-site-muted leading-[1.9] font-light mb-5">
          紹介したアイテムをまとめてチェックできます
        </p>
        <a
          href="https://room.rakuten.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[10px] tracking-[0.22em] uppercase text-site-ink border border-site-ink/25 py-2.5 hover:bg-site-ink hover:text-white hover:border-site-ink transition-all duration-300"
        >
          View Room
        </a>
      </div>

    </aside>
  )
}
