import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'ひだまりROOMへのお問い合わせはこちらから。',
}

export default function ContactPage() {
  return (
    <div className="max-w-site mx-auto px-5 lg:px-10 py-14 lg:py-16">
      <div className="max-w-[560px] mx-auto">

        {/* ページヘッダー */}
        <div className="text-center mb-14">
          <p className="section-label mb-4">Contact</p>
          <div className="thin-rule mb-5" />
          <p className="text-[12px] text-site-muted font-light">
            ご質問・ご意見・コラボのご依頼などお気軽にどうぞ
          </p>
        </div>

        {/* フォーム */}
        <form className="space-y-7 mb-12">
          <div>
            <label className="block text-[10px] tracking-[0.18em] uppercase text-site-muted mb-3">
              お名前 <span className="text-site-accent">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="山田 花子"
              className="w-full px-4 py-3 border border-site-rule text-[13px] text-site-ink bg-transparent focus:outline-none focus:border-site-accent transition-colors placeholder:text-site-faint"
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.18em] uppercase text-site-muted mb-3">
              メールアドレス <span className="text-site-accent">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@email.com"
              className="w-full px-4 py-3 border border-site-rule text-[13px] text-site-ink bg-transparent focus:outline-none focus:border-site-accent transition-colors placeholder:text-site-faint"
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.18em] uppercase text-site-muted mb-3">
              お問い合わせ種別
            </label>
            <select
              name="type"
              className="w-full px-4 py-3 border border-site-rule text-[13px] text-site-ink bg-transparent focus:outline-none focus:border-site-accent transition-colors"
            >
              <option value="general">一般的なご質問</option>
              <option value="collab">コラボ・PR依頼</option>
              <option value="feedback">サイトへのご意見</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.18em] uppercase text-site-muted mb-3">
              メッセージ <span className="text-site-accent">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="お問い合わせ内容をご記入ください"
              className="w-full px-4 py-3 border border-site-rule text-[13px] text-site-ink bg-transparent focus:outline-none focus:border-site-accent transition-colors resize-none placeholder:text-site-faint"
            />
          </div>

          <button
            type="submit"
            className="w-full text-[10px] tracking-[0.3em] uppercase text-site-ink border border-site-ink/40 py-4 hover:bg-site-ink hover:text-white transition-all duration-300"
          >
            送信する
          </button>
        </form>

        {/* SNS */}
        <div className="border-t border-site-rule pt-10">
          <p className="section-label mb-6">SNSからも</p>
          <div className="flex gap-4">
            <a
              href="https://www.threads.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 border border-site-rule text-[10px] tracking-[0.18em] text-site-muted hover:border-site-accent hover:text-site-accent transition-colors"
            >
              Threads
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 border border-site-rule text-[10px] tracking-[0.18em] text-site-muted hover:border-site-accent hover:text-site-accent transition-colors"
            >
              Instagram
            </a>
          </div>
          <p className="text-[10px] text-site-faint mt-5 leading-[1.9]">
            ※ お返事までに数日いただく場合があります。ご了承ください。
          </p>
        </div>

      </div>
    </div>
  )
}
