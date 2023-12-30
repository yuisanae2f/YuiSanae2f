function include(path, wh = document.head) {
    switch(path.split('.')[1]) {
        case 'js':
            scr = document.createElement("script");
            scr.src = path;
            break;
        case 'css':
            scr = document.createElement('link');
            scr.rel = 'stylesheet';
            scr.type = 'text/css';
            scr.href= path;
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
            text = `${navigator.language || navigator.userLanguage} 2 index`;
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

function main() {
    let c = document.getElementById('args');
    c.value = argt();
    locale();
    style();
    let board = new tent("board", "div", document.body);
    docs[args()[2]]();
    return 0;
}

function getURL(arg) {
    return `${window.location.href.split('?')[0]}?${btoa(arg)}`;
}

function run() {
    window.open(window.location.href.split('?')[0] + '?' + btoa(document.getElementById('args').value));
}