module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.yml$/,
      use: "js-yaml-loader"
    });
    return config;
  }
};
