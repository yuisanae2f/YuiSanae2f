const C = 0;
const CPP = 1;

var legendArr = 
[
    ["언어", "프로그래밍 언어", "기초 예제", "헤더와 라이브러리"],
    ["Languages", "Programming Language", "Basic References", "Header & Library"]
];

var ulArr = [
    [
        `
        <li><a href="./C/helloWorld.html" id="C::helloWorld">Hello World!</a></li>
        <li><a href="./C/comment.html" id="C::comment">주석</a></li>
        <li><a href="./C/dataType.html" id="C::dataType">자료형</a></li>
        <li><a href="./C/function.html" id="C::function">함수</a></li>
        <li><a href="./C/pointer.html" id="C::pointer">포인터</a></li>
        `,
        `
        <li>#include</li>
        <li><a href="./hLib/stdio.html">stdio.h</a></li>
        `
    ],

    [
        `
        <li><a href="./C++/helloWorld.html">Hello World!</a></li>
        `,

        `
        <li>#include</li>
        <li><a href="./hLib/iostream.html">iostream</a></li>
        `
    ]
];

var cArr = [
    ["", "", "주석", "자료형", "함수", "포인터", "", ""],
    ["", "", "Comment", "Data Type", "Function", "Pointer", "", ""]
];

var cppArr = [
    ["", "", ""],
    ["", "", ""]
];

function flip(langEnum) {
    ubersetzung(legendArr, langEnum, 'legend');
    lever(langEnum, "lang");

    let proLang = getter("ccpp");

    if(proLang == 0) ubersetzung(cArr, langEnum, "a");
    else (cppArr, langEnum, "a");
    return;
}

function displayCCPP() {
    document.getElementById('ccpp').innerHTML = `
    <legend></legend>
    <div style="display: flex; align-items: center;">
        <div onclick="flipCCPP(0)" class="checkBox ccpp">
            <div class="checkOn" value="0"></div>
        </div> C
    </div>
    <div style="display: flex; align-items: center;">
        <div onclick="flipCCPP(1)" class="checkBox ccpp">
            <div value="1"></div>
        </div> C++
    </div>
    `;
}

function flipCCPP(langEnum) {
    ubersetzung(ulArr, langEnum, "ul");

    let lang = getter("ubersetzung");

    if(langEnum == 0) ubersetzung(cArr, lang, "a");
    else ubersetzung(cppArr, lang, "a");

    lever(langEnum, "ccpp");
    lever(langEnum, "cMark", "cpp");
}