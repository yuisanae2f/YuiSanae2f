function dataTypeCharFromChar() {
    let _ = document.getElementById("dataType.char.fromChar" + field.c + "._").value;
    let exe = document.getElementById("dataType.char.fromChar" + field.exe);

    let i = new String(_);
    exe.innerHTML = 
    `당신이 입력한 값의 길이는 <a href="#dataType.integer" class="generic">${i.length}</a>입니다. <br><br>`
    + (
        i.length == 0 ? `당신은 공백을 입력하셨습니다. 공백문자는 <a class="str", href="#\\0">'\\0'</a>로써, <a href="#dataType.integer" class="generic">0</a>의 값을 지닙니다.` : 
        i.length == 1 ? 
        (i.charCodeAt(0) >= 0 && i.charCodeAt(0) <= 127) ? `당신이 입력한 문자를 숫자로 바꾸면 <a href="#dataType.integer" class="generic">${i.charCodeAt(0)}</a>입니다.` :
        `해당 문자는 ASCII값으로 나타낼 수 없습니다.`
        : `<a href="#dataType.char" class="reservedKey">char</a>는 문자 하나를 뜻합니다.<br>문자를 하나만 넣고 다시 시도해 봅시다.<br><br>문자 여러 개는 <a href="#array.string" class="str">"문자열"</a>을 참고하세요.`
    );
}

/// 글자 하나 쳐넣으면 ASCII 코드 줄 거임
function fromChar(_) {
    switch(_.length) {
        case 0: return 0;
        case 1: return _.charCodeAt(0);
        default: return -1;
    }
}

strArr = [
    {id: "title._name", ko: "콘솔", en: "Console"},
    {id: "translate", ko: "언어", en: "Languages"},
    {id: "exe._name", ko: "실행", en: "Run"}
];