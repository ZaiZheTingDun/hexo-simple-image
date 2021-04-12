module.exports = function(data) {
  data.content = data.content.replace(
    /!{1}\[([^\[\]]*)\]\((\S*)\s?(?:"(.*)")?\)/g,
    (_, alt, href, title, str) => {
      if (/^(?:ftp|http|https):.+/.exec(href)) {
        return str;
      }
      const regResult = /^.*[\/|\\](.*)/.exec(href);
      if (!regResult) {
        throw `[hexo-simple-image] Error when analyze path '${href}', Please use correct image path.`;
      }
      if (regResult[1]) {
        return `{% asset_img ${regResult[1]} '"${title}" "${alt}"' %}`;
      }
      return `{% asset_img ${regResult[0]} '"${title}" "${alt}"' %}`;
    });
  return data;
};
