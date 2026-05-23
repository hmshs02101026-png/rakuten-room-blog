export default function FloatingCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-site-surface/95 backdrop-blur-sm border-t border-site-rule px-5 py-3">
      <a
        href="https://room.rakuten.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full bg-site-ink text-white text-[10px] tracking-[0.25em] uppercase py-3 hover:bg-site-accent transition-colors duration-300"
      >
        楽天ROOM を見る
      </a>
    </div>
  )
}
