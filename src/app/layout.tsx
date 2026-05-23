import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ひだまりROOM | 楽天で見つけた暮らしと子育てのお気に入り',
    template: '%s | ひだまりROOM',
  },
  description:
    '子育てママ目線で選んだ、暮らしが豊かになる楽天アイテムをご紹介。便利グッズ・キッチン用品・収納アイデアなど、日々の生活をちょっとラクにするヒントが見つかります。',
  keywords: ['楽天ROOM', '子育て', '便利グッズ', 'ママ', '時短', '暮らし', '収納'],
  authors: [{ name: 'ひだまりROOM' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: 'ひだまりROOM',
    title: 'ひだまりROOM | 楽天で見つけた暮らしと子育てのお気に入り',
    description:
      '子育てママ目線で選んだ、暮らしが豊かになる楽天アイテムをご紹介。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ひだまりROOM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ひだまりROOM | 楽天で見つけた暮らしと子育てのお気に入り',
    description:
      '子育てママ目線で選んだ、暮らしが豊かになる楽天アイテムをご紹介。',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'ky2FpMuEEfdIH4Zb05aOATjpFsZNbQoDmeT0sKxpZXs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-site-bg">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
