import { Category } from './types'

export const categories: Category[] = [
  {
    id: '1',
    name: '子育て便利グッズ',
    slug: 'kosodate',
    emoji: '👶',
    description: '忙しいママ・パパの毎日をもっとラクにする便利グッズをご紹介。',
  },
  {
    id: '2',
    name: '暮らし便利グッズ',
    slug: 'kurashi',
    emoji: '🏠',
    description: '日々の暮らしを快適にする、ちょっとした便利アイテムを集めました。',
  },
  {
    id: '3',
    name: 'キッチン用品',
    slug: 'kitchen',
    emoji: '🍳',
    description: '料理が楽しくなる・時短になるキッチングッズをご紹介。',
  },
  {
    id: '4',
    name: '収納グッズ',
    slug: 'storage',
    emoji: '📦',
    description: 'お家をすっきりキレイに保つ、おすすめ収納グッズをまとめています。',
  },
  {
    id: '5',
    name: '楽天セール',
    slug: 'sale',
    emoji: '🛍️',
    description: '楽天スーパーセール・お買い物マラソンのおすすめ商品をご紹介。',
  },
  {
    id: '6',
    name: '日用品',
    slug: 'daily',
    emoji: '🧴',
    description: 'ストック買いしたい、コスパ最高の日用品をピックアップ。',
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
