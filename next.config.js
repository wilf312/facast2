
// const { episodeList } = require('./public/episode.yml')

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.yml$/,
      use: "js-yaml-loader"
    });
    return config;
  },
  // export のパス指定
  exportTrailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
    };

    // episodeList.forEach(episode => {
    //   paths[`/${episode.uid}`] = { page: '/[episode.uid]', query: { id: show.id } };
    // });

    return paths;
  }
};