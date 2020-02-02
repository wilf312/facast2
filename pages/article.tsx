import { Header } from '../components/atom/Header'
import { Episode } from '../domain'

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

const b = Episode.getEpisode('004')

console.log(b.pubDate)
console.log(displayTime(b.pubDate.getTime()))


export default () => <div>
  <Header />
  
  <h3>{`${b.uid} ${b.title}`}</h3>
  <h4>{displayTime(b.pubDate.getTime())}</h4>
</div>
