const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "pages/about.html"),
        contact: resolve(__dirname, "pages/contact.html"),
        works: resolve(__dirname, "pages/works.html"),
        blog: resolve(__dirname, "pages/blog.html"),
      },
    },
  },
};
