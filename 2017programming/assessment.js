(function() {
    'use strict';
    const answers = [
        '{userName}のいいところは声です。{userName}の特徴的な声はみなを惹きつけ、心に残ります。',
        '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
        '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
        '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
        '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
        '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
        '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
        '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
        '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
        '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
        '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
        '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
        '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
        '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
        '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
        '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
    ];

    /**
     * 
     * @param {string} userName 
     * @return {string} 診断結果
     */
    function assessment(userName) {

        // 全ての文字コード番号を足す
        let sumOfCharCode = 0;
        for (let i = 0; i < userName.length; i++) {
            sumOfCharCode += userName.charCodeAt(i);
        }

        // 文字コードの値の合計値を回答の数で割って余りから配列の参照するindexを求める（＝配列の中に収まる）
        const index = sumOfCharCode % answers.length;
        const result = answers[index].replace(/\{userName\}/g, userName);

        return result;
    }

    console.assert(
        assessment('おはよう') === 'おはようのいいところは見た目です。内側から溢れ出るおはようの良さに皆が気を惹かれます。',
        '診断結果選択後の名前を置き換える処理が正しくありません'
    )

    console.assert(
        assessment('おはよう') === assessment('おはよう'),
        '同じ名前で診断をした場合に異なる内容が出力されています'
    )

})();