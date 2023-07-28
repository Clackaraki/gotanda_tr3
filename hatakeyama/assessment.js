'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  console.log(userName);
  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;
  }

  // 診断結果表示エリアの作成
  resultDivision.innerText = '';
  const header = document.createElement('h3');
  header.innerText = '結果';
  resultDivision.appendChild(header);

  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivision.appendChild(paragraph);

  // TODO ツイートエリアの作成
};


const answers = [
  '###userName###の魂のかたちは…ハーツラビュル!',
  '###userName###の魂のかたちは…サバナクロー!',
  '###userName###の魂のかたちは…オクタヴィネル!',
  '###userName###の魂のかたちは…スカラビア!',
  '###userName###の魂のかたちは…ポムフィオーレ!',
  '###userName###の魂のかたちは…イグニハイド!',
  '###userName###の魂のかたちは…ディアソムニア!',
  '###userName###の魂のかたちは…オンボロ寮!'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
  // 全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  // 文字のコード番号の合計を回答の数で割って添字の数値を求める
  const index = sumOfCharCode % answers.length;
  let result = answers[index];

  result = result.replaceAll('###userName###', userName);
  return result;
}





