'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { href: '/',        label: 'HOME'    },
  { href: '/blog',    label: 'BLOG'    },
  { href: '/room',    label: 'ROOM'    },
  { href: '/profile', label: 'PROFILE' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-40">

      {/* ── Top announcement bar ── */}
      <div className="bg-site-beige/50 border-b border-site-rule text-center py-1.5">
        <p className="text-[10px] tracking-[0.18em] text-site-muted">
          楽天ROOMで紹介アイテムをチェック →&nbsp;
          <a
            href="https://room.rakuten.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-site-accent transition-colors"
          >
            Room を見る
          </a>
        </p>
      </div>

      {/* ── Logo ── */}
      <div className="bg-site-surface border-b border-site-rule">
        <div className="max-w-site mx-auto px-6 py-5 flex items-center justify-between lg:justify-center relative">
          <Link href="/" className="text-center group">
            <span className="block text-[9px] tracking-[0.4em] text-site-accent uppercase mb-1 font-sans transition-opacity group-hover:opacity-70">
              暮らしと子育てのお気に入り
            </span>
            <span className="block font-script italic text-[26px] lg:text-[30px] text-site-ink tracking-widest leading-none">
              hidamari room
            </span>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden absolute right-5 top-1/2 -translate-y-1/2 p-2 text-site-muted"
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Desktop nav ── */}
      <nav className="hidden lg:block bg-site-surface border-b border-site-rule">
        <ul className="flex items-center justify-center gap-10 py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[10px] tracking-[0.22em] text-site-muted hover:text-site-accent transition-colors uppercase"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Mobile drawer ── */}
      {open && (
        <nav className="lg:hidden bg-site-surface border-b border-site-rule absolute w-full shadow-sm">
          <ul>
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-site-rule/60 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-6 py-3.5 text-[11px] tracking-[0.2em] text-site-ink uppercase"
                >
                  {item.label}
                  <svg className="w-3 h-3 text-site-faint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

    </header>
  )
}
