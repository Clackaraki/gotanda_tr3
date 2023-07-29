function start(){
  target = document.getElementById("fun");
}

let fun = document.getElementById("fun");
let degree = 0;
function fundegree(){
degree = degree+6;
fun.style.transform = 'rotateZ('+ degree + 'deg)';
}
setInterval(fundegree,20);