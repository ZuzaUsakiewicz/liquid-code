const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        works: resolve(__dirname, "works.html"),
        blog: resolve(__dirname, "blog.html"),
      },
    },
  },
};
