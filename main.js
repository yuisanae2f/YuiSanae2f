function include(path, wh = document.head) {
    switch(path.split('.')[1]) {
        case 'js':
            scr = document.createElement("script");
            scr.src = document.currentScript.dir + path;
            break;
        case 'css':
            scr = document.createElement('link');
            scr.rel = 'stylesheet';
            scr.type = 'text/css';
            scr.href= document.currentScript.dir + path;
            break;
    }

    wh.appendChild(scr);
}

function preMain() {
    const p = window.location.href.split('?');
    
    let text;    

    try {
        text = atob(p[1]); 
    } catch (error) {
        text = p[1] ?? '';
    } let argv = text.split(' ');

    switch (argv.length) {
        case 0: case 1: case 2:
            text = `${navigator.language || navigator.userLanguage} 1 index`;
        default:
            argv = text.split(' ');
            globalPrm = [argv[0], argv[1]];
            document.getElementsByTagName('html')[0].lang = argv[0];
            break;
    }

    return argv;
}

function args() {
    return document.getElementById('args').value.split(' ');
}

var argv = preMain();
function argt(v = argv) {
    let str = "";
    for(let i = 0; i < v.length; i++) {
        str += v[i] + (i + 1 == v.length ? '' : ' ');
    } return str;
}

include('tent.js');
include('global.js');
include('style.js');
include('docs.js');
include('locale.js')
include('Component.js');

function main() {
    let c = document.getElementById('args');
    c.value = argt();
    document.body.style.margin = "30px";
    locale();
    style();
    let board = new tent("board", "div", document.body);
    docs[args()[2]]();

    return 0;
}

function getURL(arg) {
    return `./?${btoa(`${globalPrm[0]} ${globalPrm[1]} ${arg}`)}`;
}

function run() {
    const t = document.getElementById('args').value;
    window.open(`./${t.split(' ')[1] == '0' ? 'dark' : 'index'}.html` + '?' + btoa(t));
}