import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Sidebar from '@/components/Sidebar'

const HERO_IMG = 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&q=80'

export default function HomePage() {
  const posts       = getAllPosts()
  const featured    = posts[0]
  const recent      = posts.slice(1, 4)
  const ranking     = posts.slice(0, 3)

  return (
    <div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO  –  写真 ＋ welcome テキスト
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-site-surface border-b border-site-rule">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr]">

            {/* 左：写真 */}
            <div className="relative overflow-hidden" style={{ minHeight: 'clamp(240px, 55vw, 560px)' }}>
              <Image
                src={HERO_IMG}
                alt="暮らしのひとコマ"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            {/* 右：テキスト */}
            <div className="flex flex-col items-center justify-center px-8 lg:px-14 py-14 lg:py-0 bg-[#faf7f3]">
              <p className="section-label mb-5">暮らしと子育てのお気に入り</p>
              <div className="thin-rule mb-7" />
              <h1 className="font-script italic text-[56px] lg:text-[64px] text-site-ink tracking-widest leading-none mb-6">
                welcome
              </h1>
              <p className="text-[12px] text-site-muted leading-[2.1] text-center max-w-[240px] mb-8 font-light">
                子育てしながら、暮らしをちょっとだけ豊かにするアイテムを探しています。
                楽天ROOMで紹介中。
              </p>
              <a
                href="https://room.rakuten.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.28em] uppercase text-site-ink border border-site-ink/25 px-8 py-2.5 hover:bg-site-ink hover:text-white transition-all duration-300"
              >
                Visit Room
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MAIN CONTENT ＋ SIDEBAR
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="max-w-site mx-auto px-5 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-14">

          {/* ── メインコンテンツ ── */}
          <main>

            {/* NEW POSTS 見出し */}
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-site-rule" />
              <p className="section-label">New Posts</p>
              <div className="h-px flex-1 bg-site-rule" />
            </div>

            {/* 大きい最新記事 */}
            <div className="mb-12">
              <PostCard post={featured} priority size="large" />
            </div>

            {/* セパレーター */}
            <div className="border-t border-site-rule mb-10" />

            {/* 3記事グリッド */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
              {recent.map((post, i) => (
                <PostCard key={post.id} post={post} priority={i === 0} />
              ))}
            </div>

            {/* View All */}
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block text-[10px] tracking-[0.3em] uppercase text-site-ink border-b border-site-ink/25 pb-0.5 hover:text-site-accent hover:border-site-accent transition-colors"
              >
                View All Posts
              </Link>
            </div>

          </main>

          {/* ── サイドバー ── */}
          <Sidebar />

        </div>
      </div>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          RANKING
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-site-surface border-t border-b border-site-rule py-14 lg:py-16">
        <div className="max-w-site mx-auto px-5 lg:px-10">

          <div className="text-center mb-10">
            <p className="section-label mb-3">Ranking</p>
            <div className="thin-rule" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
            {ranking.map((post, i) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article>
                  {/* ランク番号 */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-script italic text-[36px] text-site-accent/40 leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-site-rule" />
                  </div>

                  <div className="relative overflow-hidden mb-4" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>

                  <span className="text-[9px] tracking-[0.15em] uppercase text-site-accent font-sans block mb-2">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-[14px] text-site-ink leading-snug group-hover:text-site-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ROOM BANNER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-site-pale py-16 lg:py-20">
        <div className="max-w-[480px] mx-auto px-6 text-center">
          <p className="section-label mb-5">楽天ROOM</p>
          <div className="thin-rule mb-7" />
          <span className="font-script italic text-[40px] text-site-ink block mb-5 tracking-widest leading-none">
            room
          </span>
          <p className="text-[12px] text-site-muted leading-[2] font-light mb-8">
            ブログで紹介したアイテムはすべて楽天ROOMにまとめています。
            気になったものはここからチェックしてください。
          </p>
          <a
            href="https://room.rakuten.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[10px] tracking-[0.28em] uppercase text-site-ink border border-site-ink/25 px-10 py-3 hover:bg-site-ink hover:text-white transition-all duration-300"
          >
            View Rakuten Room
          </a>
        </div>
      </section>

    </div>
  )
}
