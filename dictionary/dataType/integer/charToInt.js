/// 글자 하나 쳐넣으면 ASCII 코드 줄 거임
function _fromChar(_) {
    switch(_.length) {
        case 0: return 0;
        case 1: return _.charCodeAt(0);
        default: return -1;
    }
}

function fromChar() {
    a = document.getElementById(c.id(c.params[0])).value;
    b = document.getElementById(c.displayID());
    _fromChar(a)
    b.innerHTML = `<div class="box indent" id="display._name[0]"></div>`;
}


strArr = [
    {id: "title._name", ko: "", en: ""},
    {id: "exe._name", ko: "실행", en: "Run"},
    {
        id: "display._name[0]",
        ko: `입력된 값은 <a href="../integer.html#int" class="generic">0</a>이다.`,
        en: `The value did input is <a href="../integer.html#int" class="generic">0</a>.`
    }
];