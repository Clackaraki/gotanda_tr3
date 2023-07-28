
const form = document.getElementById('input-form');
const result = document.getElementById('result');
const noteStackIllustration = document.getElementById('note-stack-illustration');
const penIllustration = document.getElementById('pen-illustration');
const period = document.getElementById('period');
const totalPages = document.getElementById('total-pages');
const pageDetails = document.getElementById('page-details');
const recalculateButton = document.getElementById('recalculate-button');
const shareButton = document.getElementById('share-button');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const startYear = document.getElementById('start-year').value;
  const startMonth = document.getElementById('start-month').value;
  const endYear = document.getElementById('end-year').value;
  const endMonth = document.getElementById('end-month').value;
  const textbook = document.getElementById('textbook').value;
  const reference = document.getElementById('reference').value;
  const exercise = document.getElementById('exercise').value;
  const note = document.getElementById('note').value;
  const other = document.getElementById('other').value;

  
  const total = parseInt(textbook) + parseInt(reference) + parseInt(exercise) + parseInt(note) + parseInt(other);
  const totalCm = (total / 200) * 15;

  noteStackIllustration.style.height = `${totalCm}cm`;
  penIllustration.style.height = `15cm`;
  period.textContent = `${startYear}年${startMonth}月〜${endYear}年${endMonth}月`;
  totalPages.textContent = `${total}ページ = ${totalCm.toFixed(2)}cm`;


  pageDetails.innerHTML = `
    <li>教科書: ${textbook}ページ</li>
    <li>参考書: ${reference}ページ</li>
    <li>問題集: ${exercise}ページ</li>
    <li>ノート: ${note}ページ</li>
    <li>その他: ${other}ページ</li>
  `;

  form.classList.add('hidden');
  result.classList.remove('hidden');
});

recalculateButton.addEventListener('click', function() {
  form.reset();
  result.classList.add('hidden');
});

shareButton.addEventListener('click', function() {
  const total = document.getElementById('total-pages').textContent;
  const text = `私の参考書やノートの積み上げ記録です！\n${total}の勉強をしました！📚💪`;
  const url = window.location.href;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(twitterUrl, '_blank');
});
