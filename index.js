async function makeIssue() {
    const token = process.env.GH_TOKEN;
    const OWNER = "shienka07";
    const REPO = "lucky_color";

    const color = ["🩷", "❤️", "🧡", "💛", "💚", "🩵", "💙", "💜", "🖤", "🩶", "🤍", "🤎"];
    const colorName = ["분홍", "빨강", "주황", "노랑", "초록", "하늘", "파랑", "보라", "검정", "회", "하얀", "갈"];
    const randomNum = Math.floor(Math.random() * color.length);
    const randomColor = color[randomNum];
    const randomColorName = colorName[randomNum];
    let emoji = "";

    if ((randomNum / 10) == 10 && (randomNum / 10) == 9) {
        emoji = "😍";
    } else if ((randomNum / 10) == 8 && (randomNum / 10) == 7) {
        emoji = "😆";
    } else if ((randomNum / 10) == 6 && (randomNum / 10) == 5) {
        emoji = "😃";
    } else if ((randomNum / 10) == 4 && (randomNum / 10) == 3) {
        emoji = "😉";
    } else {
        emoji = "🥹";
    }

    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title: "Today's Lucky Score",
            body: `## Today's Lucky Score

오늘 당신의 행운 점수는 ${Math.floor(Math.random() * 100) + 1} 점 입니다 ${emoji}
            
오늘의 컬러는 ${randomColorName}색 ${randomColor} 입니다
 ${randomColorName}색 ${randomColor} 아이템을 가지고 다녀보세요! 
오늘 하루 행운이 가득할 거예요 ${randomColor}`,
        })
    });
    if (response.ok) {
        console.log("성공");
    } else {
        console.log("실패");
    }
}

makeIssue();