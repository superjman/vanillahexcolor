const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const button = document.getElementById('btn');
const hexCode = document.getElementById('hexCode');

button.addEventListener('click', changeHexColor);

function changeHexColor(){
  let string = "#";
  for(let i=0;i<6;i++){
    let index = Math.floor(Math.random()*hex.length);
    string += hex[index];
  }
  document.body.style.backgroundColor = string;
  hexCode.innerHTML = "HEX COLOR: " + string;
}
