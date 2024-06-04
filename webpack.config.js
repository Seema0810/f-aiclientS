const path = require("path");
module.exports = {
  // your existing configuration...

  //   resolve: {
  //     fallback: {
  //       util: require.resolve("util/"),
  //       path: require.resolve("path-browserify"),
  //     },
  //   },
  // resolve.fallback: { "path": false }
  resolve: {
    fallback: {
      path: false,
    },
  },

  // your existing configuration...
};
