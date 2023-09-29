let hexEl = document.querySelector(".main-div");
let hexCode = document.getElementById("hexCode");
  // console.log(colorCode)
let colorArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

function hexColor(){
  let hexOperator ="#"
  
  for(i=0; i<=5; i ++){
    hexOperator += colorArr[randomNumber()]
  }
  
  hexEl.style.backgroundColor = hexOperator
  hexCode.innerHTML = hexOperator
  console.log(hexOperator)
}


function randomNumber(){
  return randomNum = Math.floor(Math.random()*colorArr.length)
  
}
console.log(randomNumber())
randomNumber()