const kanbanContainer = document.getElementById('kanban-container');

const texts = [
    "信じる者を救うﾈｺの力", "光をもたらすﾈｺの存在", "光を照らすﾈｺの存在", "全てを見守るﾈｺの御手",
    "全知全能のﾈｺの御業", "守り続けるﾈｺの御心", "導きを与えるﾈｺの声", "導きを示すﾈｺの声",
    "希望を与えるﾈｺの光", "平和をもたらすﾈｺの力", "平和をもたらすﾈｺの御業", "愛と希望を与えるﾈｺ",
    "救いをもたらすﾈｺの御子", "救いを約束するﾈｺの御子", "永遠の命を約束するﾈｺ", "永遠の愛を示すﾈｺの存在",
    "癒しをもたらすﾈｺの恵み", "真理を教えるﾈｺの言葉", "真理を示すﾈｺの道", "ﾈｺと和解せよ",
    "ﾈｺのさばきは突然にくる", "ﾈｺの光があなたを導く", "ﾈｺの前にひれ伏せ", "ﾈｺの力は偉大",
    "ﾈｺの御前で罪を悔い改めよ", "ﾈｺの御前にひれ伏せ", "ﾈｺの御前に立て", "ﾈｺの御力を信じよ",
    "ﾈｺの御名を呼び求めよ", "ﾈｺの御名を崇めよ", "ﾈｺの御国を求めなさい", "ﾈｺの御国を求めよ",
    "ﾈｺの御声に耳を傾けよ", "ﾈｺの御声を聞け", "ﾈｺの御子を信じなさい", "ﾈｺの御子を愛せよ",
    "ﾈｺの御心に従いなさい", "ﾈｺの御心に従え", "ﾈｺの御心を求めよ", "ﾈｺの御心を知りなさい",
    "ﾈｺの御手があなたを守る", "ﾈｺの御手に委ねよ", "ﾈｺの御業を称えよ", "ﾈｺの御業を見よ",
    "ﾈｺの御言葉に従え", "ﾈｺの御言葉を信じなさい", "ﾈｺの御言葉を守れ", "ﾈｺの御計画に従え",
    "ﾈｺの御計画を信じよ", "ﾈｺの御霊が共にある", "ﾈｺの御霊が導く", "ﾈｺの御霊に満たされよ",
    "ﾈｺの怒りを恐れよ", "ﾈｺの恵みは無限大", "ﾈｺの愛は永遠に続く", "ﾈｺの愛は無限",
    "ﾈｺの愛を受け入れよ", "ﾈｺの裁きの日は近い", "ﾈｺはあなたを愛している", "ﾈｺは世を正しくさばく",
    "ﾈｺは光をもたらす", "ﾈｺは全てを見守る", "ﾈｺは全知全能", "ﾈｺは包容力がある",
    "ﾈｺは受け入れる", "ﾈｺは唯一の救い主", "ﾈｺは守護する", "ﾈｺは守護者",
    "ﾈｺは導き手", "ﾈｺは希望を与える", "ﾈｺは愛そのもの", "ﾈｺは愛の源",
    "ﾈｺは愛を示す", "ﾈｺは支えとなる", "ﾈｺは救いをもたらす", "ﾈｺは救済者",
    "ﾈｺは理解者", "ﾈｺは癒しをもたらす", "ﾈｺは真理を教える", "ﾈｺは祝福をもたらす",
    "ﾈｺは罪を罰する", "ﾈｺは罪を許す", "ﾈｺは見守る", "ﾈｺは赦しを与える",
    "ﾈｺは道を示す", "ﾈｺへの態度を悔い改めよ", "ﾈｺを信じる者は平和を得る", "ﾈｺを信じる者は救われる",
    "罪を赦すﾈｺの愛", "赦しを与えるﾈｺの御手"
];
const highlightKeywords = [
    "信じる者", "救い", "平和", "愛", "赦し", "罰", "恵み", "真理", "命", "光", "力","包容",
    "和解", "さばき", "導く", "偉大", "悔い改め", "見守る", "裁き", "救済", "怒り", "癒し","理解",
    "永遠", "存在", "御子", "御手", "御心", "御業", "御言葉", "御計画", "御霊", "恵み", "祝福","御声","者","守護","全て","守り","罪","道"
];

function createKanban(text) {
    const kanban = document.createElement('div');
    kanban.className = 'kanban flash';

    // 特定のキーワードを強調
    let highlightedText = text;
    highlightKeywords.forEach(keyword => {
        const regex = new RegExp(keyword, 'g');
        highlightedText = highlightedText.replace(regex, `<span class="highlight">${keyword}</span>`);
    });

    // 「ﾈｺ」を横向きにする
    highlightedText = highlightedText.replace(/ﾈｺ/g, '<span class="neko">ﾈｺ</span>');

    kanban.innerHTML = highlightedText;
    return kanban;
}

function displayRandomKanban() {
    kanbanContainer.innerHTML = '';
    const randomIndex = Math.floor(Math.random() * texts.length);
    const kanban = createKanban(texts[randomIndex]);

    // ランダムな位置を設定
    const randomTop = Math.random() * (window.innerHeight - kanban.offsetHeight);
    const randomLeft = Math.random() * (window.innerWidth - kanban.offsetWidth);
    kanban.style.top = `${randomTop}px`;
    kanban.style.left = `${randomLeft}px`;

    kanbanContainer.appendChild(kanban);
}

// 初回表示
displayRandomKanban();

// 1秒ごとにランダムに切り替え
setInterval(displayRandomKanban, 1000);
