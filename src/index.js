module.exports = function check(str, bracketsConfig) {
  let open = "";
  let close = "";
  for (let i = 0; i < bracketsConfig.length; i++) {
    open = open + bracketsConfig[i][0];
    close = close + bracketsConfig[i][1];
  }
  let opened = "";
  for (let j = 0; j < str.length; j++) {
    if (open.indexOf(str[j]) !== -1) {
      if ((close.indexOf(str[j]) !== -1) && (str[j] === opened[opened.length - 1])) {
        opened = opened.slice(0, opened.length - 1);
      } else {
        opened = opened + str[j];
      }
    } else {
      if ((opened[opened.length - 1] !== open[close.indexOf(str[j])]) || opened === "") {
        return false;
      } else {
        opened = opened.slice(0, opened.length - 1);
      }
    }
  }
  if (opened === "") {
    return true;
  } else {
    return false;
  }
}