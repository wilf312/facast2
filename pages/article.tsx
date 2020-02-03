import { useState, useEffect } from "react";
import styled from "styled-components";
import { Episode, episodeListItem } from '../domain'
import { Header } from '../components/atom/Header'
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

const ShowNotes = styled.div`
  white-space: pre-line;
  line-height: 1.8em;
  FONT-SIZE: 14px;
`

export default () => {

  const [article, setArticle] = useState<episodeListItem>({
    title: '',
    description: '',
    showNotes: '',
    pubDate: new Date(),
    duration: 0,
    uid: ''
  })

  useEffect(() => {
    setArticle(Episode.getEpisode('004'))
  }, [])


  return <Wrap>
    <Header />

    <h3>{`${article.uid} ${article.title}`}</h3>
    <audio data-v-1eebddf0="" src="/static/storage/003.mp3" controls></audio>
    <h4>{displayTime(article.pubDate.getTime())}</h4>

    {article.showNotes && (<div>
      <h5>Memo</h5>
      <ShowNotes>{article.showNotes}</ShowNotes>
    </div>)}


  </Wrap>
}