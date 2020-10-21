const Podcast = require("podcast");
const fs = require("fs");
const yaml = require("js-yaml");

let config;
let episode;
try {
  episode = yaml.safeLoad(fs.readFileSync("./public/episode.yml", "utf8"));
  config = yaml.safeLoad(fs.readFileSync("./public/config.yml", "utf8"));
} catch (e) {
  console.log(e);
}

const { episodeList } = episode;
const { domain, author } = config;

/* lets create an rss feed */
const feed = new Podcast({
  title: "FAcast",
  description: "FAcast",
  feed_url: `${domain}/feed.xml`,
  site_url: `${domain}`,
  image_url: `${domain}/static/ogp.png`,
  docs: "雑談系Podcast",
  author: author,
  managingEditor: author,
  webMaster: author,
  copyright: "2018 Okada Genya",
  language: "ja",
  categories: ["car", "auto", "frontend"],
  pubDate: episodeList[0].pubDate,
  ttl: "60",
  itunesAuthor: author,
  itunesSubtitle: "雑談系Podcast",
  itunesSummary: "雑談系Podcast",
  itunesOwner: { name: "Okada Genya", email: "g.okada.wilf@gmail.com" },
  itunesExplicit: false,
  itunesCategory: [
    {
      text: "Technology",
      subcats: [
        {
          text: "Technology"
        }
      ]
    }
  ],
  itunesImage: `${domain}/static/ogp.png` // 1400? http://cdn.rebuild.fm/images/icon1400.j`
});

/* loop over data and add to feed */
const feedConst = {
  itunesAuthor: author,
  itunesExplicit: false
};

episodeList
  .reverse()
  .forEach(
    ({ title, description, pubDate, duration, uid, size }) => {
      const path = `/facast/storage/${uid}.mp3`;
      const fileDomain = 'https://storage.googleapis.com'

      feed.addItem(
        Object.assign(
          {},
          {
            title: `${uid} ${title}`,
            description,
            url: `${fileDomain}${path}`, // link to the item
            date: pubDate, // any format that js Date can parse.
            itunesDuration: duration,
            enclosure: {
              url: `${fileDomain}${path}`,
              type: "audio/mpeg",
              length: `${size}`
            }
          },
          feedConst
        )
      );
    }
  );

// cache the xml to send to clients
const xml = feed.buildXml();

if (!fs.existsSync('out')) {
  fs.mkdirSync('out');
}

fs.writeFile("out/feed.xml", xml, err => {
  if (err) throw err;
  console.log("The file has been saved!");
});
