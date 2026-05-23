import type { Metadata } from 'next'
import Link from 'next/link'
import { categories } from '@/lib/categories'

export const metadata: Metadata = {
  title: '楽天ROOMのご紹介',
  description: 'ひだまりROOMが厳選した楽天アイテムをまとめた楽天ROOMのご紹介ページです。',
}

export default function RoomPage() {
  return (
    <div className="max-w-site mx-auto px-5 lg:px-10 py-14 lg:py-16">
      <div className="max-w-[560px] mx-auto">

        {/* ページヘッダー */}
        <div className="text-center mb-14">
          <p className="section-label mb-4">楽天ROOM</p>
          <div className="thin-rule mb-5" />
          <p className="text-[12px] text-site-muted font-light">
            ブログで紹介したアイテムをまとめてチェックできます
          </p>
        </div>

        {/* メインCTA */}
        <div className="border border-site-rule p-10 text-center mb-14">
          <span className="font-script italic text-[48px] text-site-ink block mb-5 tracking-widest leading-none">
            room
          </span>
          <p className="text-[12px] text-site-muted leading-[2] font-light mb-8">
            実際に買って良かったものだけを<br />カテゴリー別にまとめています
          </p>
          <a
            href="https://room.rakuten.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[10px] tracking-[0.28em] uppercase text-site-ink border border-site-ink/25 px-12 py-3.5 hover:bg-site-ink hover:text-white transition-all duration-300"
          >
            楽天ROOMを開く
          </a>
        </div>

        {/* 特徴 */}
        <div className="border-t border-site-rule pt-12 mb-14">
          <p className="section-label mb-8">楽天ROOMの特徴</p>
          <div className="space-y-8">
            {[
              {
                title: '画像で一目でわかる',
                desc: '商品画像と一緒に紹介しているので、気になるものがすぐに見つかります。',
              },
              {
                title: '使い心地コメントつき',
                desc: '実際に使って感じたことをコメントしています。失敗しない買い物の参考に。',
              },
              {
                title: 'カテゴリー別で探しやすい',
                desc: '子育て・キッチン・収納など、カテゴリーごとにまとめています。',
              },
              {
                title: '随時更新中',
                desc: '気になる新商品を見つけたら随時追加しています。',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <span className="font-script italic text-[28px] text-site-accent/40 leading-none flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-[13px] font-medium text-site-ink mb-1">{item.title}</p>
                  <p className="text-[12px] text-site-muted font-light leading-[1.9]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* カテゴリーリンク */}
        <div className="border-t border-site-rule pt-12 mb-14">
          <p className="section-label mb-8">ブログ記事はこちら</p>
          <ul>
            {categories.map((cat, i) => (
              <li key={cat.id} className={i < categories.length - 1 ? 'border-b border-site-rule' : ''}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="flex items-center justify-between py-3.5 text-[12px] text-site-muted hover:text-site-accent transition-colors font-light group"
                >
                  <span className="flex items-center gap-3">
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

        {/* アフィリエイト注記 */}
        <p className="text-[10px] text-site-faint leading-[1.9]">
          ※ 当サイトは楽天アフィリエイトプログラムに参加しています。紹介リンクからご購入いただくと、
          当サイトに少額の紹介料が発生します（お客様の購入価格は変わりません）。
          記事内容は実際に使用した感想をもとに執筆しています。
        </p>

      </div>
    </div>
  )
}
