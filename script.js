// 枠組みの中身を書き換えて云々
const rCont = document.getElementById('content');

// 文字列選択の無効化
document.ondragstart = function () {
  return false;
};

// ページ切り替え
const loadSubPage = (name) => {
  rCont.innerHTML = `<iframe src='${name.toLowerCase()}.html'>`;
  document.getElementsByTagName('html')[0].style.setProperty('--accent-color', colors[Math.round(Math.random() * (colors.length - 1))])
}

// URLコピー
function copyUrl() {
  var url = location.href;
  navigator.clipboard.writeText(url);
  share.innerHTML = "URL Copied";
}
// 色テーブル
const colors = [
  "#ffaadb",
  "#aaefff",
  "#aaffc9",
  "#efffaa",
  "#ffadaa",
  "#e9aaff"
];

//色テーブル2
const colors2=[
  "#a0739f",
  "#7381a0",
  "#73a091",
  "#93a073",
  "#a09573",
  "#a07381"
  
];
// ページ読み込み時に実行(色のランダム化)
window.onload = function () {
  document
    .getElementsByTagName("html")[0]
    .style.setProperty(
      "--accent-color",
      colors[Math.round(Math.random() * (colors.length - 1))]
    );
};
window.onload = function () {
  document
    .getElementsByTagName("html")[0]
    .style.setProperty(
  "--accent-color-2",
    colors2[Math.round(Math.random() * (colors2.length - 1))]
    );
};
window.onload = function () {
  document
    .getElementsByTagName("html")[0]
    .style.setProperty(
  "--accent-color-3",
    colors2[Math.round(Math.random() * (colors2.length - 1))]
    );
};

//ナビゲーションバー
const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
