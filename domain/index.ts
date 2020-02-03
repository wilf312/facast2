const { episodeList } = require('../public/episode.yml')


type episodeListItemBefore = {
  title: string
  description: string
  pubDate: string
  duration: number
  showNotes: string
  uid: string
}
export type episodeListItem = {
  title: string
  description: string
  pubDate: Date
  duration: number
  showNotes: string
  uid: string
}

const episodeListCasted = episodeList.map((d: episodeListItemBefore): episodeListItem => {
  return {
    ...d,
    pubDate: new Date(d.pubDate)
  }
})

const getEpisode = (uid: string): episodeListItem => {
  return episodeListCasted.find((item: episodeListItem) => {
    return item.uid === uid
  }) || {}
}

export const Episode = {
  episodeList: episodeListCasted,
  getEpisode
}

/**
 * レスポンシブ用スタイル
 * @param css 
 */
export const Sp = (css: string) => {
  return `@media (max-width: 768px) {
    ${css}
  }`
}

