// /* eslint-disable @typescript-eslint/no-var-requires */

// const path = require("path");
// const Dotenv = require("dotenv-webpack");
// const withTM = require("next-transpile-modules");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

// module.exports = withTM({
//   transpileModules: ["@project/shared"],
//   typescript: {
//     transpileOnly: true,
//     allowJs: false
//   },
//   webpack: config => {
//     config.plugins = config.plugins || [];
//     config.plugins = config.plugins.filter(plugin => {
//       const n = plugin.constructor.name === "ForkTsCheckerWebpackPlugin";
//       const i = plugin instanceof ForkTsCheckerWebpackPlugin;
//       return !(n || i);
//     });
//     // config.plugins.push(
//     //   new ForkTsCheckerWebpackPlugin({
//     //     reportFiles: ['does-not-exist']
//     //   })
//     // )
//     config.plugins.push(
//       new Dotenv({
//         path: path.join(__dirname, ".env"),
//         systemvars: false
//       })
//     );
//     return config;
//   }
// });
