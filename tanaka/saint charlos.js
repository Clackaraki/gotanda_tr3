
var y = 440;
var frameCount = 0;
var gameloop;
var frameCount2 = 0;
var gameloop2;

addEventListener("keydown", keydownfunc);

function keydownfunc(event) {
  var key_code = event.keyCode;
  if (key_code === 38 && !gameloop) {
    y -= 5;
    frameCount = 0;
    update();
    gameloop = setInterval(update, 50); // 50ミリ秒の間隔に変更
  }
  if (key_code === 40 && !gameloop2) {
    y += 5;
    frameCount2 = 0;
    update2();
    gameloop2 = setInterval(update2, 50); // 50ミリ秒の間隔に変更
  }

  document.getElementById('character').style.top = y + "px";
  document.getElementById('character').style.height = characterSize + "px"; // キャラクターのサイズを設定
}



function update() {
  frameCount++;
  if (frameCount === 8) { // 5フレームごとに画像を切り替える
    frameCount = 0;
    y -= 5;
    characterSize -= 2; // キャラクターのサイズを2ピクセルずつ小さくする
  }
  if (frameCount === 1){
    document.getElementById('character').src = '7.png';
    y -= 5;
    characterSize -= 2; // キャラクターのサイズを2ピクセルずつ小さくする
  }
  if (frameCount === 2){
  document.getElementById('character').src = '8.png';
  y -= 5;
  characterSize -= 2; // キャラクターのサイズを2ピクセルずつ小さくする
  }
  if (frameCount === 3){
    document.getElementById('character').src = '9.png';
    y -= 5;
    characterSize -= 2; // キャラクターのサイズを2ピクセルずつ小さくする
  }
  if (frameCount === 4){
    document.getElementById('character').src = '10.png';
    y -= 5;
    characterSize -= 2; // キャラクターのサイズを2ピクセルずつ小さくする
  }
  if (frameCount === 5){
    document.getElementById('character').src = '11.png';
    y -= 5;
    characterSize -= 2; // キャラクターのサイズを2ピクセルずつ小さくする
  }
  if (frameCount === 6){
    document.getElementById('character').src = '12.png';
    y -= 5;
    characterSize -= 2; // キャラクターのサイズを2ピクセルずつ小さくする
  }
  if (frameCount === 7){
    document.getElementById('character').src = '13.png';
    y -= 5;
    characterSize -= 2; // キャラクターのサイズを2ピクセルずつ小さくする
  }
  if (frameCount === 0){
    document.getElementById('character').src = '14.png';
    y -= 5;
    characterSize -= 2; // キャラクターのサイズを2ピクセルずつ小さくする
  }
}

function update2() {
  frameCount2++;
  if (frameCount2 === 6) { // 5フレームごとに画像を切り替える
    frameCount2 = 0;
    y += 5;
    characterSize += 2;// キャラクターのサイズを2ピクセルずつ大きくする
  }
  if (frameCount2 === 1){
    document.getElementById('character').src = '1.png';
    y += 5;
    characterSize += 2;// キャラクターのサイズを2ピクセルずつ大きくする
  }
  if (frameCount2 === 2){
  document.getElementById('character').src = '2.png';
  y += 5;
  characterSize += 2;// キャラクターのサイズを2ピクセルずつ大きくする
  }
  if (frameCount2 === 3){
    document.getElementById('character').src = '3.png';
    y += 5;
  }
  if (frameCount2 === 4){
    document.getElementById('character').src = '4.png';
    y += 5;
    characterSize += 2;// キャラクターのサイズを2ピクセルずつ大きくする
  }
  if (frameCount2 === 5){
    document.getElementById('character').src = '5.png';
    y += 5;
    characterSize += 2;// キャラクターのサイズを2ピクセルずつ大きくする
  }
  if (frameCount2 === 0){
    document.getElementById('character').src = '6.png';
    y += 5;
    characterSize += 2;// キャラクターのサイズを2ピクセルずつ大きくする
  }
}
document.addEventListener("keyup", () => {
  // キーが離されたらどのキーも押されていない状態とみなし、処理を停止
  stopUpdate();
  stopUpdate2();
  document.getElementById('character').src = '0.png';
  document.getElementById('character').style.height = "100px";
});

// どのキーも押されていない場合の処理
function stopUpdate() {
  clearInterval(gameloop);
  gameloop = null; // タイマーをリセット
}

function stopUpdate2() {
  clearInterval(gameloop2);
  gameloop2 = null; // タイマーをリセット
}
