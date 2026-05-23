import Link from 'next/link'
import { categories } from '@/lib/categories'

const links = [
  { href: '/blog',    label: 'Blog' },
  { href: '/room',    label: '楽天ROOM' },
  { href: '/profile', label: 'Profile' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-site-surface border-t border-site-rule pb-20 lg:pb-0">
      <div className="max-w-site mx-auto px-6 pt-14 pb-10">

        {/* Logo */}
        <div className="text-center mb-12">
          <Link href="/" className="group inline-block">
            <span className="block text-[9px] tracking-[0.4em] text-site-accent uppercase mb-1 font-sans">
              暮らしと子育てのお気に入り
            </span>
            <span className="font-script italic text-[24px] text-site-ink tracking-widest leading-none group-hover:text-site-accent transition-colors">
              hidamari room
            </span>
          </Link>
          <div className="thin-rule mt-5" />
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">

          {/* About */}
          <div>
            <p className="section-label mb-5">About</p>
            <p className="text-[12px] text-site-muted leading-[2] font-light">
              2児のママ目線で選んだ、楽天のお気に入りアイテムを紹介するブログです。
              暮らし・子育て・キッチン・収納など日々の生活をちょっと豊かにするものを集めています。
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="https://www.threads.com/@batako___mama" target="_blank" rel="noopener noreferrer"
                className="text-[10px] tracking-wider text-site-faint hover:text-site-accent transition-colors">
                Threads
              </a>
              <span className="text-site-rule">|</span>
              <a href="https://www.instagram.com/batako___mama" target="_blank" rel="noopener noreferrer"
                className="text-[10px] tracking-wider text-site-faint hover:text-site-accent transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Category */}
          <div>
            <p className="section-label mb-5">Category</p>
            <ul className="space-y-0">
              {categories.map((cat, i) => (
                <li key={cat.id} className={i < categories.length - 1 ? 'border-b border-site-rule' : ''}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="flex items-center gap-2.5 py-2.5 text-[12px] text-site-muted hover:text-site-accent transition-colors font-light"
                  >
                    <span className="w-3 h-px bg-site-rule block flex-shrink-0" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="section-label mb-5">Links</p>
            <ul className="space-y-0 mb-8">
              {links.map((item, i) => (
                <li key={item.href} className={i < links.length - 1 ? 'border-b border-site-rule' : ''}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2.5 py-2.5 text-[12px] text-site-muted hover:text-site-accent transition-colors font-light"
                  >
                    <span className="w-3 h-px bg-site-rule block flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="https://room.rakuten.co.jp/battabata_mama/items"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-[10px] tracking-[0.2em] uppercase text-site-ink border border-site-rule py-3 hover:bg-site-ink hover:text-white hover:border-site-ink transition-all duration-300"
            >
              Visit Rakuten Room
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-site-rule pt-6 text-center space-y-1">
          <p className="text-[10px] tracking-wide text-site-faint">
            © 2024 hidamari room. All rights reserved.
          </p>
          <p className="text-[10px] text-site-faint">
            ※ 当サイトは楽天アフィリエイトプログラムに参加しています。
          </p>
        </div>

      </div>
    </footer>
  )
}
