import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="text-6xl mb-6">🌼</div>
      <h1 className="text-2xl font-bold text-gray-800 mb-3">ページが見つかりません</h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-8">
        お探しのページは移動または削除された可能性があります。<br />
        トップページから探してみてください。
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-red-400 text-white font-bold py-3 px-8 rounded-2xl shadow-md text-sm"
        >
          🏠 トップページへ
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-medium py-3 px-8 rounded-2xl text-sm hover:border-orange-300 transition-colors"
        >
          📝 記事一覧へ
        </Link>
      </div>
    </div>
  )
}
