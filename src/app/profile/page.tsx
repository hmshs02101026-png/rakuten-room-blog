import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'プロフィール',
  description: 'ひだまりROOM管理人のプロフィールページです。子育て中のママが楽天で見つけたお気に入りグッズを紹介しています。',
}

export default function ProfilePage() {
  return (
    <div className="max-w-site mx-auto px-5 lg:px-10 py-14 lg:py-16">
      <div className="max-w-[560px] mx-auto">

        {/* ページヘッダー */}
        <div className="text-center mb-14">
          <p className="section-label mb-4">Profile</p>
          <div className="thin-rule" />
        </div>

        {/* プロフィール */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-5 border border-site-rule bg-site-pale flex items-center justify-center text-3xl">
            🌼
          </div>
          <p className="font-serif text-[18px] text-site-ink mb-1">ひだまり</p>
          <p className="text-[9px] tracking-[0.3em] text-site-accent uppercase mb-5">hidamari</p>
          <div className="flex items-center justify-center gap-5">
            <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer"
              className="text-[10px] tracking-wider text-site-faint hover:text-site-accent transition-colors">
              Threads
            </a>
            <span className="text-site-rule">|</span>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
              className="text-[10px] tracking-wider text-site-faint hover:text-site-accent transition-colors">
              Instagram
            </a>
          </div>
        </div>

        {/* About */}
        <div className="border-t border-site-rule pt-10 mb-10">
          <p className="section-label mb-6">About</p>
          <div className="space-y-4 text-[14px] text-site-ink leading-[2.1] font-light">
            <p>はじめまして。ひだまりROOMへようこそ。</p>
            <p>2人の子どもを育てながら、毎日の暮らしをもっとラクに、もっと楽しくを探求しているママです。</p>
            <p>
              楽天市場でのお買い物が好きで、実際に使ってよかったものだけを正直にご紹介しています。
              便利グッズ・キッチン用品・収納グッズ・子育てアイテムなど、日々の暮らしに役立つものを厳選しています。
            </p>
            <p>「これ買ってよかった！」が誰かの参考になれたらうれしいです。</p>
          </div>
        </div>

        {/* こんな方に */}
        <div className="border-t border-site-rule pt-10 mb-12">
          <p className="section-label mb-6">こんな方に</p>
          <ul className="space-y-3">
            {[
              '子育て中で時間がないが質の良いグッズを探している',
              '楽天セールで何を買うか迷っている',
              '家の中をすっきり整えたい',
              'キッチングッズや日用品をコスパよく選びたい',
              '忙しい毎日をもう少しラクにしたい',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[13px] text-site-muted font-light leading-[1.9]">
                <span className="w-3 h-px bg-site-accent/60 mt-[11px] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 楽天ROOMへ */}
        <div className="border border-site-rule p-8 text-center">
          <p className="section-label mb-3">楽天ROOM</p>
          <div className="thin-rule mb-5" />
          <p className="text-[12px] text-site-muted leading-[1.9] font-light mb-6">
            ブログで紹介したアイテムを<br />まとめてチェックできます
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

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="text-[10px] tracking-[0.3em] uppercase text-site-ink border-b border-site-ink/25 pb-0.5 hover:text-site-accent hover:border-site-accent transition-colors"
          >
            View All Posts
          </Link>
        </div>

      </div>
    </div>
  )
}
