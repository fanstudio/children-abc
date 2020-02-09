// 播放音频
// 音频采集自百度
//eg：https://fanyi.baidu.com/gettts?lan=en&text=A&spd=3&source=web
let audio = new Audio();
// 忽略大小写
function playCharector(c) {
    if (!audio.paused) {
        audio.pause();
    }
    audio.src = 'mp3/zm/' + c.toUpperCase() + '.mp3';
    audio.play();
}

// 1.生成页面元素
let enContent = document.querySelector(".en-content");
let ens = '';
for (let i = 0; i < 26; i++) {
    let value = String.fromCharCode(65 + i);
    ens += '<li id="' + value + '">' + value + '</li>';
}
enContent.innerHTML = ens;

// 2.给每个页面元素添加点击事件
let elments = document.querySelectorAll('li');
for (let i = 0; i < elments.length; i++) {
    elments[i].addEventListener('mousedown', function() {
        this.className = "active";
        playCharector(this.innerHTML);
    });

    elments[i].addEventListener('mouseup', function() {
        this.className = "";
    });
}

// 3.添加按键事件
document.body.addEventListener('keydown', function(e) {
    if (e.key.length > 1 || !/[a-zA-Z]/.test(e.key)) return;
    let elment = document.querySelector('#' + e.key.toUpperCase());

    elment.className = "active";
});
document.body.addEventListener('keyup', function(e) {
    if (e.key.length > 1 || !/[a-zA-Z]/.test(e.key)) return;
    let elment = document.querySelector('#' + e.key.toUpperCase());
    elment.className = "";
    playCharector(e.key);
});