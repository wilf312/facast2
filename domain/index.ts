const { episodeList } = require('../public/episode.yml')
const { storageUrl } = require('../public/config.yml')


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

export const storage = {
  default: storageUrl,
  getStorageUrl: (number: string): string => {
    // console.log(storageUrl)
    // console.log(storageUrl.replace('fileNumber', number))
    return storageUrl.replace('fileNumber', number)
  }
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

/**
 * シェア機能
 */

export const share = () => {
  const nav: any = navigator
  if (nav.share) {
    nav.share({
      title: 'FAcast',
      text: '',
      url: 'https://facast.net/feed.xml'
    })
      .then(() => {
        // シェアしたら実行される
        console.log('Successful share');
      })
      .catch((error: Error) => {
        // シェアせず終了した場合もここに入ってくる。
        console.log('Error sharing', error);
      })
  } else {
    alert('Web Share API is not supported!!');
    // Web Share API未対応ブラウザ向けのフォールバックを実装する。
  }
}