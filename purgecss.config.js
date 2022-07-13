const jekyllEnv = process.env.JEKYLL_ENV || "development";
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    // These are the files that Purgecss will search through
    content: ["_site/**/*.html", "_site/**/*.js"],
    // These are the stylesheets that will be subjected to the purge
    css: ["./assets/css/**/*.css"],
    output: ["_site/assets/css/"],
  };