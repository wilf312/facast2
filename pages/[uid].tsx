import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router'

import { Episode, episodeListItem, storage } from '../domain'
import { Header } from '../components/atom/Header'
import { Audio } from '../components/atom/Audio'
import { Wrap } from '../components/template/Wrap'

function displayTime(unixTime: number) {
  var date = new Date(unixTime)
  var diff = new Date().getTime() - date.getTime()
  var d = new Date(diff);

  if (d.getUTCFullYear() - 1970) {
    return d.getUTCFullYear() - 1970 + '年前'
  } else if (d.getUTCMonth()) {
    return d.getUTCMonth() + 'ヶ月前'
  } else if (d.getUTCDate() - 1) {
    return d.getUTCDate() - 1 + '日前'
  } else if (d.getUTCHours()) {
    return d.getUTCHours() + '時間前'
  } else if (d.getUTCMinutes()) {
    return d.getUTCMinutes() + '分前'
  } else {
    return d.getUTCSeconds() + '秒前'
  }
}

const Title = styled.h1`
  font-size: 24px;
`
const TitleWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const ShowNotesLabel = styled.h3`
  margin-top: 48px;
  margin-bottom: 16px;
`

const ShowNotes = styled.div`
  white-space: pre-line;
  line-height: 1.8em;
  font-size: 14px;
`

export default () => {
  const router = useRouter()
  const { uid } = router.query

  const [article, setArticle] = useState<episodeListItem>({
    title: '',
    description: '',
    showNotes: '',
    pubDate: new Date(),
    duration: 0,
    uid: ''
  })
  useEffect(() => {
    setArticle(Episode.getEpisode(uid as string))
  }, [])

  if (!article.uid) {
    return null
  }

  const url = storage.getStorageUrl(article.uid)

  return <Wrap>
    <Header />
    <TitleWrap>
      <Title>{`${article.uid} ${article.title}`}</Title>
      <time>{displayTime(article.pubDate.getTime())}</time>
    </TitleWrap>
    <Audio src={url} />

    {article.showNotes && (<div>
      <ShowNotesLabel>Memo</ShowNotesLabel>
      <ShowNotes>{article.showNotes}</ShowNotes>
    </div>)}
  </Wrap>

}