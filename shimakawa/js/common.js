
(function ($) {
  'use strict';

  //合計問題数
  let $questionTotalNum = 5;

  /* -----------------------------------------------
    難読漢字クイズ
  -------------------------------------------------- */
  const prefecturalCapital = [
    {
      id: "01",
      question: "『四月一日』は何と読む？",
      answer01: "わたぬき",
      answer02: "うそつき",
      answer03: "しがつついたち",
      answer04: "えいぷりるふーる",
    },
    {
      id: "02",
      question: "『南瓜』は何と読む？",
      answer01: "かぼちゃ",
      answer02: "なんか",
      answer03: "みなみうり",
      answer04: "ずっきーに",
    },
    {
      id: "03",
      question: "『月見里』は何と読む？",
      answer01: "やまなし",
      answer02: "げつみり",
      answer03: "つきみざと",
      answer04: "やまがた",
    },
    {
      id: "04",
      question: "『蝸牛』は何と読む？",
      answer01: "かたつむり",
      answer02: "むしうし",
      answer03: "やどかり",
      answer04: "かぎゅう",
    },
    {
      id: "05",
      question: "『湯湯婆』",
      answer01: "ゆたんぽ",
      answer02: "ゆばあば",
      answer03: "ゆゆばあ",
      answer04: "ゆばばあ",
    },
  ];

  //質問をランダムにする
  function shuffleQuiz(array) {
    for (let i = (array.length - 1); 0 < i; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      let selected = array[i];
      array[i] = array[random];
      array[random] = selected;
    }
    return array;
  }
  let quizId = ["01", "02", "03", "04", "05"];
  shuffleQuiz(quizId);

  //現在の質問数
  let $currentNum = 0;

  //得点
  let $pointPerCorrect = 10;

  let questionObject = (function () {
    class Obj {
      constructor($target) {

        //質問の番号
        this.$questionNumber = $target.find('.quiz-question-number');

        //質問文
        this.$questionName = $target.find('.quiz-question');

        //選択肢ボタン
        this.$questionButton = $target.find('.quiz-button');
        this.$button01 = $target.find('.button01');
        this.$button02 = $target.find('.button02');
        this.$button03 = $target.find('.button03');
        this.$button04 = $target.find('.button04');

        //選択肢のテキスト
        this.$answer01 = $target.find('.quiz-text01');
        this.$answer02 = $target.find('.quiz-text02');
        this.$answer03 = $target.find('.quiz-text03');
        this.$answer04 = $target.find('.quiz-text04');

        //score
        this.$score = $target.find('.score-wrap .score');

        this.init();
      }
      //初回設定
      init() {
        //イベント登録
        this.event();
      }
      event() {
        let _this = this;
        let score = 0;

        //ウインドウ読み込み時
        $(window).on('load', function () {
          //value取得
          let value = quizId[$currentNum]; //最初は0（1番目）

          //次の質問を取得
          let nextQuestion = _this.searchQuestion(value);
          //次の質問に切り替える
          _this.changeQuestion(nextQuestion);
          //回答のシャッフル
          _this.shuffleAnswer($('.quiz-answer'));
        });

        //button クリック
        this.$questionButton.on("click", function () {

          if ($(this).hasClass('button01')) {
            $(this).parents('.quiz-answer').addClass('is-correct');
            score = score + $pointPerCorrect;
          } else {
            $(this).parents('.quiz-answer').addClass('is-incorrect');
          }

          $(this).addClass('is-checked');

          if ($currentNum + 1 == $questionTotalNum) {
            setTimeout(function () {
              $('.finish').addClass('is-show');
              $('.score-wrap .score').text(score);
            }, 1000);
          } else {
            setTimeout(function () {
              //現在の数字の更新
              $currentNum = $currentNum + 1;

              //次の質問番号を取得
              let value = quizId[$currentNum];

              //次の質問を取得
              let nextQuestion = _this.searchQuestion(value);

              //次の質問に切り替える
              _this.changeQuestion(nextQuestion);

              //クラスを取る
              _this.$questionButton.removeClass('is-checked');
              $('.quiz-answer').removeClass('is-correct').removeClass('is-incorrect');

              //回答のシャッフル
              _this.shuffleAnswer($('.quiz-answer'));

            }, 1000);
          }
          return false;
        });
      }
      searchQuestion(questionId) {
        let nextQuestion = null;
        prefecturalCapital.forEach(function (item) {
          if (item.id == questionId) {
            nextQuestion = item;
          }
        });
        return nextQuestion;
      }
      changeQuestion(nextQuestion) {
        let _this = this;

        //質問文の入れ替え
        _this.$questionName.text(nextQuestion.question);

        //質問番号を1つ増やす
        let numPlusOne = $currentNum + 1;
        _this.$questionNumber.text(numPlusOne);

        //選択肢のテキストの入れ替え
        _this.$answer01.text(nextQuestion.answer01);
        _this.$answer02.text(nextQuestion.answer02);
        _this.$answer03.text(nextQuestion.answer03);
        _this.$answer04.text(nextQuestion.answer04);
      }
      shuffleAnswer(container) {
        let content = container.find("> *");
        let total = content.length;
        content.each(function () {
          content.eq(Math.floor(Math.random() * total)).prependTo(container);
        });
      }
    }
    return Obj;
  })();

  let quiz = $('.quiz');
  if (quiz[0]) {
    let queInstance = new questionObject(quiz);
  }

})(jQuery);