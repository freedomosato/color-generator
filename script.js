let simpleColor = document.querySelector(".main-div");
let colorCode = document.getElementById("colorCode");
  console.log(colorCode)
colorArr = ["#fff", "#aaa", "#bbb", "#ccc", "#ddd", "#eee","#222", "#111", "#000", "#333", "#444", "#555", "#666", "#777", "#888", "#999", "#808080"]

function colorGen(){
  let randomNum = Math.floor(Math.random()*colorArr.length)
  console.log(randomNum)
  simpleColor.style.backgroundColor = colorArr[randomNum]
  colorCode.innerHTML = colorArr[randomNum]
}