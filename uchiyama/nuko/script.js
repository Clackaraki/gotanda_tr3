 document.addEventListener("DOMContentLoaded", function() {
        const convertButton = document.getElementById("convertButton");
        const output = document.getElementById("output");
        const catImageElement = document.getElementById("catImage");
    
        convertButton.addEventListener("click", function() {
            const inputText = document.getElementById("inputText").value;
            const negativeWords = [
                "悲し", "不満", "不安", "葛藤", "迷惑", "嫌な予感", "不完全", "つらい", "心を痛める", "絶望的な",
                "暗い気持ち", "自己嫌悪", "悔し", "挫折感", "先が見えな", "行き詰ま", "胸が苦しい", "心がざわつく",
                "苦し", "屈辱的", "物悲し", "見込みがな", "苦", "屈辱感を感じ", "期待はずれ", "絶望感を抱", "重荷に感じ",
                "悪化す", "失望感を抱", "辛", "心が折れそう", "気後れ", "落ち込", "疲労困憊", "もどかし", "苦悩す",
                "落胆す", "焦燥感を抱", "憂鬱", "煩わし", "無気力", "自信を失", "不正解", "心細", "無駄",
                "やる気をなく", "自暴自棄", "イラつ", "不幸", "もうだめ", "痛まし", "無力", "怒りを感じ", "緊張す",
                "腹立たし", "つまらな", "わけがわからな", "残念", "緊迫", "期待外れ", "不運", "おっかな", "失敗す", "もがく",
                "達成感がない", "不愉快", "欲求不満", "悲観的", "自信喪失", "眠れな", "心細く", "悪夢", "嫌悪感",
                "思い通りにいかな", "不信感を抱", "モヤモヤ", "どん底", "やりきれな", "わずらわし", "めげる",
                "不適切", "落胆感", "やる気が出な", "心が揺れ", "うんざり", "嫉妬", "自信が持てな", "遠回し", "むなし",
                "期待外れ", "不満足", "言い訳", "窮屈", "ダメ", "やる気をなく", "忍耐力",
                "悩ましい", "悲しい", "嫌な", "不満な", "落ち込む", "やる気のない", "不満足な",
                "意欲の低い", "モチベーションが下がる", "疲れた", "つまらない", "不機嫌な", "インパクトのない", "めんどくさい",
                "もやもやする", "期待はずれな", "落ち込む", "不安な", "不満な", "疲れた", "イラつく", "不満足な", "わびしい",
                "腹立たしい", "がっかりする", "不快な", "嫌悪感を抱く", "鬱々とする", "落胆する", "不安定な",
                "悔しい", "ダメな", "落ち込む", "つらい", "やる気が出ない", "腹立たしい", "イライラする", "不愉快な", "不快な", "疲れた",
                "不満な", "悲しい", "嫌な", "がっかりする", "鬱な", "憂鬱な", "落ち込む", "不安な", "不満足な",
                "厄介な", "憂鬱な", "悔しい", "がっかりする", "不愉快な", "腹立たしい", "イラつく", "めんどくさい",
                "インパクトのない", "期待外れ", "不安な", "つらい", "つかれた", "認められない", "いらない", "頑張れない", "嫌い", "きらい",
                "別れた", "死にた", "気がおかし", "やだ", "ヤダ", "振られ","しにた","かなし","消えたい","きえたい","いらない"
            ];
    
            let convertedText = inputText;
    
            // ネガティブワードを「にゃーにゃー」に変換
            negativeWords.forEach(word => {
                const regex = new RegExp(word, "gi");
                convertedText = convertedText.replace(regex, "にゃーにゃー");
            });
    
            // 結果を表示
            output.innerText = convertedText;
    
            // ランダムな猫の写真を表示
            displayRandomCatImage();
        });
    
    
        // ランダムな猫の写真を表示
        function displayRandomCatImage() {
            const catImages = [
                "cat-images/cat1.jpg",
                "cat-images/cat2.jpg",
                "cat-images/cat3.jpg",
                "cat-images/cat4.png",
                "cat-images/cat5.jpg",
                "cat-images/cat6.jpg",
                "cat-images/cat7.jpg",
                "cat-images/cat8.jpg",
                "cat-images/cat9.png",
                "cat-images/cat10.jpg",
                "cat-images/cat11.jpg",
                "cat-images/cat12.jpg",
                "cat-images/cat13.jpg",
                "cat-images/cat14.jpeg",
                "cat-images/cat15.jpg",
                // 他の猫の写真ファイル名を追加...
            ];
    
            const randomIndex = Math.floor(Math.random() * catImages.length);
            const randomCatImage = catImages[randomIndex];
            catImageElement.src = randomCatImage;
        }

        function whiteImage(){
            const whiteImage = [
                "cat-images/FFFFFF.jpg",
            ]
        }
        catImageElement.src = whiteImage;

    });
    