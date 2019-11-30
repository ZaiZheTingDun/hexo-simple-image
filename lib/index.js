module.exports = function(data) {
  data.content = data.content.replace(
    /!{1}\[([^\[\]]*)\]\((\S*)\s?(?:".*")?\)/,
    (_, label, href, str) => {
      if (/^(?:ftp|http|https):.+/.exec(href)) {
        return str;
      }
      const regResult = /^\.?[\/|\\].*[\/|\\](.*)/.exec(href);
      if (regResult[1]) {
        return `{% asset_img ${regResult[1]} ${label} %}`;
      }
      return `{% asset_img ${regResult[0]} ${label} %}`;
    });
  return data;
};
