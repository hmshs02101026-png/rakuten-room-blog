type Props = {
  url?: string
  label?: string
}

export default function RakutenCTA({ url = 'https://room.rakuten.co.jp/battabata_mama/items', label }: Props) {
  return (
    <div className="border border-site-rule p-8 text-center my-10">
      <p className="section-label mb-3">楽天ROOM</p>
      <div className="thin-rule mb-5" />
      <p className="text-[12px] text-site-muted leading-[1.9] font-light mb-6">
        {label || '紹介したアイテムはすべて楽天ROOMにまとめています。'}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[10px] tracking-[0.28em] uppercase text-site-ink border border-site-ink/25 px-10 py-3 hover:bg-site-ink hover:text-white transition-all duration-300"
      >
        View Rakuten Room
      </a>
    </div>
  )
}
