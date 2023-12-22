module.exports = {
  content: ["./frontend/**/*.ejs", "./frontend/**/*.js"],
  css: ["./frontend/public/css/*.css"],
  whitelist: ['body[data-theme="dark"]', 'body[data-theme="light"]'],
};
