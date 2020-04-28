module.exports = function(data) {
  data.content = data.content.replace(
    /!{1}\[([^\[\]]*)\]\((\S*)\s?(?:".*")?\)/g,
    (_, label, href, str) => {
      if (/^(?:ftp|http|https):.+/.exec(href)) {
        return str;
      }
      const regResult = /^\.?[\/|\\].*[\/|\\](.*)/.exec(href);
      if (!regResult) {
        throw `[hexo-simple-image] Error when analyze path '${href}', Please use correct image path.`;
      }
      if (regResult[1]) {
        return `{% asset_img ${regResult[1]} ${label} %}`;
      }
      return `{% asset_img ${regResult[0]} ${label} %}`;
    });
  return data;
};
