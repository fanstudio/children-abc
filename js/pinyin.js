/* 
 * 音频采集自：hanyupinyin.cn/
 * curl -o b.mp3 http://du.hanyupinyin.cn/du/pinyin/b.mp3
 */

// 声母表
let arrSM = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w'];
// 韵母表
let arrYM = ['a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er', 'an', 'en', 'in', 'un', 'ün', 'ang', 'eng', 'ing', 'ong'];
let arrYM_mp3 = ['a', 'o', 'e', 'i', 'u', 'v', 'ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 've', 'er', 'an', 'en', 'in', 'un', 'vn', 'ang', 'eng', 'ing', 'ong'];
// 整体读音节,文件实际名称+1,如zhi->zhi1.mp3
let arrZT = ['zhi', 'chi', 'shi', 'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'yu', 'ye', 'yue', 'yuan', 'yin', 'yun', 'ying'];

// 播放音频
let audio = new Audio();

function playAudio(src) {
    if (!audio.paused) {
        audio.pause();
    }
    audio.src = src;
    audio.play();
}
/*
 * contentName:string - 需要插入数据的选择器
 * resourcePrefix:string - 资源的前缀
 * displayData:array - 显示的数据
 * audioNames:array - 资源的数据
 */
function loadData(contentName, resourcePrefix, displayData, audioNames) {
    // 渲染声母数据
    let sm = document.querySelector(contentName);
    for (let i = 0; i < displayData.length; i++) {
        let node = document.createElement('li');
        node.audioName = audioNames[i];
        node.innerHTML = displayData[i];
        node.addEventListener('mousedown', function() {
            let src = 'mp3/' + resourcePrefix + '/' + this.audioName + '.mp3';
            this.className = 'active';
            playAudio(src);
        });

        node.addEventListener('mouseup', function() {
            this.className = '';

        });

        sm.appendChild(node);
    }
}

function ztRsource() {
    let arr = [];
    for (let i = 0; i < arrZT.length; i++) {
        arr[i] = arrZT[i] + 1;
    }

    return arr;
}

loadData('.sm ul', 'sm', arrSM, arrSM);
loadData('.ym ul', 'ym', arrYM, arrYM_mp3);
loadData('.zt ul', 'zt', arrZT, ztRsource());