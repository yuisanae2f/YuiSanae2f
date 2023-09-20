const field = {
    c : ".console",
    exe : ".console.exe"
};

function _translate(code) {
    langCode = code;

    const aEl = document.getElementsByTagName('a');
    const srcEl = document.getElementsByTagName('iframe');

    document.getElementsByTagName("html")[0].lang = code;
    for (let i = 0; i < strArr.length; i++) {
        let el = document.getElementById(strArr[i].id);
        if (el === null) continue;
        el.innerHTML = strArr[i][code];
    }

    for (let i = 0; i < aEl.length; i++) {
        const currentURL = aEl[i].href;
        const arr = currentURL.split('#');

        const pro0 = arr[0];

        let params = getURLParams(pro0);
        prmString = "?";

        let hasLang = false
        for(let i = 0; i < params.length; i++) {
            hasLang = params[i].name == "lang";
            if(hasLang) params[i].value = code;
            prmString += `${params[i].name}=${params[i].value}${params.length - 1 != i ? "&" : ""}`;
        }

        if(!hasLang) prmString += `&lang=${code}`;

        // url = pro0.split('?')[0] + `?lang=${code}${arr[1] === undefined ? '' : '#' + arr[1]}`;
        url = pro0.split('?')[0] + prmString + (arr[1] === undefined ? '' : '#' + arr[1]);
        aEl[i].href = url;
    }

    for (let i = 0; i < srcEl.length; i++) {
        const currentURL = srcEl[i].src;
        const arr = currentURL.split('#');

        const pro0 = arr[0];

        let params = getURLParams(pro0);
        prmString = "?";

        let hasLang = false
        for(let i = 0; i < params.length; i++) {
            hasLang = params[i].name == "lang";
            if(hasLang) params[i].value = code;
            prmString += `${params[i].name}=${params[i].value}${params.length - 1 != i ? "&" : ""}`;
        }

        if(!hasLang) prmString += `&lang=${code}`;

        // url = pro0.split('?')[0] + `?lang=${code}${arr[1] === undefined ? '' : '#' + arr[1]}`;
        url = pro0.split('?')[0] + prmString + (arr[1] === undefined ? '' : '#' + arr[1]);
        srcEl[i].src = url;
    }
}

function endl(count = 1) {
    return '\n'.repeat(count);
}

function getURLParams(urlString) {
    if(urlString === null || urlString === undefined) 
    urlString = window.location.href.toString();

    // "q" 매개변수의 값을 가져오기
    let langCode0 = urlString.split('?')[1];
    let langCode1 = langCode0 === undefined ? undefined : langCode0.split('#')[0];
    let langCode = langCode1 === undefined ? undefined : langCode1.split("&");

    if(langCode === undefined) return [];
    let param = [];

    for(let str of langCode) {
        param.push(str.split('=').length == 2 ? {name: str.split('=')[0], value: str.split('=')[1]} : {name: str, value: str});
    }

    return param;
}

function _init() {
    const browserLang = (navigator.language || navigator.userLanguage).split("-")[0];

    params = getURLParams();


    langCode = null;
    for(let i of params) {
        if(i.name == "lang") langCode = i.value;
    }

    langCode = langCode === null ? browserLang : langCode;

    document.write('<p class="indent" style="color:rgb(95, 95, 95); font-size: 10px;">© 2023. YuiSanae2f</p>');
    document.getElementById("_t").innerHTML = `<h2 id="translate"></h2><div class="box indent"><d onclick="_translate('ko')">한국어</d><br><d onclick="_translate('en')">English</d><br></div>`;

    _translate(langCode);
}

function _tent(word, count) {
    hasWord = false;
    for(let i of getURLParams()) {
        if(i.name == word) {
            hasTentRoot = true;
            document.getElementById(word).innerHTML +=
            `<h2 id="${word}.title">${i.value}</h2>`;

            for(let j = 0; j < count; j++) {
                document.getElementById(word).innerHTML +=
                `<div class="indent box" id="${word}[${j}]"></div>`;
            }
        }
    }
    return hasWord;
}
// © 2023. YuiSanae2f