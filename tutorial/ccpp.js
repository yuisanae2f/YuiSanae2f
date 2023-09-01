function operatorLogicNOT() {
    let cond = document.getElementById("operator.logic.!" + field.c + ".cond").value;
    let id = document.getElementById('operator.logic.!' + field.exe);

    id.innerHTML = "<a href='#operator.logic.!.cond' class='variable'>cond</a>는 '" + cond + "'입니다.<br>"
    + "여기에서 <a href='#operator.logic.!.cond' class='variable'>cond</a>는 0 혹은 <a href='#dataType.bool.false' class='reservedKey'>false</a>가 " + (cond == "false" || cond == "0" ? "맞으니 <a href='#dataType.bool.false' class='reservedKey'>false</a>값이 됩니다." : "아니니 <a href='#dataType.bool.true' class='reservedKey'>true</a>값이 됩니다.") + '<br>'
    + "따라서 <a href='#operator.logic.!'>!</a><a href='#operator.logic.!.cond' class='variable'>cond</a>의 값은 그 반대인 " 
    + (cond == "false" || cond == "0" ? "<a href='#dataType.bool.true' class='reservedKey'>true</a>" : "<a href='#dataType.bool.false' class='reservedKey'>false</a>") + '가 됩니다.';
}

function operatorLogicDreiVal() {
    let cond = document.getElementById("operator.logic.?:" + field.c + ".cond").value;
    let ifVal = document.getElementById("operator.logic.?:" + field.c + ".ifVal").value;
    let elseVal = document.getElementById("operator.logic.?:" + field.c + ".elseVal").value;

    let id = document.getElementById("operator.logic.?:" + field.exe);
    let _ = cond == "false" || cond == 0 ? false : true;

    id.innerHTML = 
    `<a href="#operator.logic.?:.cond" class="variable">cond</a>는 \'${cond}\'입니다.<br>`
    + `<a href="#operator.logic.?:.ifVal" class="variable">ifVal</a>는 \'${ifVal}\'입니다.<br>`
    + `<a href="#operator.logic.?:.elseVal" class="variable">elseVal</a>은 \'${elseVal}\'입니다.<br><br>`

    + `<a href="#operator.logic.?:.cond" class="variable">cond</a>의 값은 '<a href='#dataType.bool.false' class='reservedKey'>0</a>' 혹은 '<a href='#dataType.bool.false' class='reservedKey'>false</a>'이 ${_ ? "아니기에 \'<a href='#dataType.bool.true' class='reservedKey'>true</a>" : "맞기에 \'<a href='#dataType.bool.false' class='reservedKey'>false</a>"}\'이므로 <br>'<a href="#operator.logic.?:.cond" class="variable">cond</a> <a href="#operator.logic.?:">?</a> <a href="#operator.logic.?:.ifVal" class="variable">ifVal</a> <a href="#operator.logic.?:">:</a> <a href="#operator.logic.?:.elseVal" class="variable">elseVal</a>'의 값은 `

    + (_ 
        ? `<a href="#operator.logic.?:.ifVal" class="variable">ifVal</a>인 '${ifVal}'이 됩니다.`
        : `<a href="#operator.logic.?:.elseVal" class="variable">elseVal</a>인 '${elseVal}'이 됩니다.`
        );
}

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

function dataTypeCharFromInt() {
    let _ = document.getElementById("dataType.char.fromInt" + field.c + "._").value;
    let exe = document.getElementById("dataType.char.fromInt" + field.exe);

    i = parseInt(_);
    switch (document.getElementsByTagName("html")[0].lang) {
        case "ko":
            exe.innerHTML = `` +
            (
                isNaN(i) ? `숫자를 입력하지 않으셨으므로 <a href="#dataType.integer" class="generic">0</a>으로 간주하겠습니다. <br><br><a href="#dataType.integer" class="generic">0</a>에 대응하는 문자는 공백 문자로, <a class="str", href="#\\0">'\\0'</a>을 뜻합니다.<br>이 문자는 아무 것도 없는 공백을 뜻합니다.`

                : `당신이 입력한 숫자는 <a href="#dataType.integer" class="generic">${i}</a>입니다. <br><br>` + (
                    i == 0 
                    ? `<a href="#dataType.integer" class="generic">0</a>에 대응하는 문자는 공백 문자로, <a class="str", href="#\\0">'\\0'</a>을 뜻합니다.<br>이 문자는 아무 것도 없는 공백을 뜻합니다.` 
                    : ( i >= 0 && i <= 127 ? `당신이 입력한 문자는 <a href="#dataType.char" class="str">'${String.fromCharCode(i)}'</a>로써 치환될 수 있습니다.` 
                    : `당신이 입력한 문자는 <a href="#dataType.char" class="mark">아스키 코드</a>로써 치환될 수 없습니다. <a href="#dataType.char" class="mark">아스키 코드</a>는 <a href="#dataType.integer" class="generic">0</a>부터 <a href="#dataType.integer" class="generic">127</a> 사이의 숫자를 문자로써 치환하도록 만든 것입니다.`)
                    )
            );
            break;
        case "en":
            exe.innerHTML = `` +
            (
                isNaN(i) ? `Since you've not written the number I will assume the number as <a href="#dataType.integer" class="generic">0</a>. <br><br><a href="#dataType.integer" class="generic">0</a> stands for null character(<a class="str", href="#\\0">'\\0'</a>).<br>This character stands for void, which means it has no value.`

                : `The number inserted is <a href="#dataType.integer" class="generic">${i}</a>. <br><br>` + (
                    i == 0 
                    ? `stands for null character(<a class="str", href="#\\0">'\\0'</a>).<br>This character stands for void, which means it has no value.` 
                    : ( i >= 0 && i <= 127 ? `The number insterted could be replaced with <a href="#dataType.char" class="str">'${String.fromCharCode(i)}'</a>.` 
                    : `The character you've written could not be replaced with <a href="#dataType.char" class="mark">ASCII Code</a>. <a href="#dataType.char" class="mark">ASCII Code</a> is designed to replace the number <a href="#dataType.integer" class="generic">0</a> ~ <a href="#dataType.integer" class="generic">127</a> with character.`)
                )
            );
            break;
    }
}

function xhh() {
    let exe = document.getElementById("\\xhh.console.exe");
    let _ = document.getElementById("\\xhh.console.string").value;
    let uni = false;

    let str = `당신이 입력한 <a href="#array.string">문자열</a>을 치환한 값은 다음과 같습니다. <br> <a href="#array.string" class="str">"`;
    for(i = 0; i < _.length; i++) {
        uni = uni || _.charCodeAt(i) > 255 || _.charCodeAt(i) < 0;
        str += `\\x` +  _.charCodeAt(i).toString(16);
    } str += `"</a>`;

    if(uni) str += 
    `
    <br><br>당신이 작성한 <a href="#array.string">문자열</a>에는 ASCII 이외의 문자가 포함되어 있습니다. <br>
    이 경우 이 결과값은 온전히 사용될 수 없을 수도 있습니다.
    `

    exe.innerHTML = str;
}

function ooo() {
    let exe = document.getElementById("\\ooo.console.exe");
    let _ = document.getElementById("\\ooo.console.string").value;
    let uni = false;

    let str = `당신이 입력한 <a href="#array.string">문자열</a>을 치환한 값은 다음과 같습니다. <br> <a href="#array.string" class="str">"`;
    for(i = 0; i < _.length; i++) {
        uni = uni || _.charCodeAt(i) > 255 || _.charCodeAt(i) < 0;
        str += `\\o` +  _.charCodeAt(i).toString(8);
    } str += `"</a>`;

    if(uni) str += 
    `
    <br><br>당신이 작성한 <a href="#array.string">문자열</a>에는 ASCII 이외의 문자가 포함되어 있습니다. <br>
    이 경우 이 결과값은 온전히 사용될 수 없을 수도 있습니다.
    `

    exe.innerHTML = str;
}

var strArr = {
    span: [
        {
            ko: "언어",
            en: "Languages"
        },

        {
            ko: "변수",
            en: "Variable"
        },

        {
            ko: '선언', 
            en: 'Declaring'
        },
        
        {
            ko: '<a href="#variable.declare.<>.T" class="generic" title="여러 형태의 자료를 저장할 수 있고, 이를 위해서는 자료형을 알아야 한다.">T</a>의 형태로 된 변수 <a href="#variable.declare.varName" class="variable" title="사실 메모리를 할당해서 varName이라는 이름을 붙여 주는 것이다.">varName</a>을 새로 만듭니다.',
            en: 'Create a variable which is called <a href="#variable.declare.varName" class="variable" title="사실 메모리를 할당해서 varName이라는 이름을 붙여 주는 것이다.">varName</a> which type is <a href="#variable.declare.<>.T" class="generic" title="여러 형태의 자료를 저장할 수 있고, 이를 위해서는 자료형을 알아야 한다.">T</a>.'
        },
        
        {
            ko: '초기화',
            en: 'Initialising'
        },

        {
            ko: '<a href="#variable.init.<>.T" class="generic">T</a>의 형태를 가진 임의의 자료를 <a href="#variable.init.<>.T" class="generic">T</a>.<a href="#variable.init.<>.T.value">value</a> 명시했습니다.',
            en: 'A value which form is <a href="#variable.init.<>.T" class="generic">T</a>.'
        },

        {
            ko: `예를 들어 정수인 <a href="#dataType.int" class="reservedKey">int</a>의 경우에는 그 <a href="#variable.init.<>.T.value">value</a>를 <a href="#dataType.integer" class="generic">5</a>라 생각할 것입니다.`,
            en: `For example, let us assume that <a href="#variable.init.<>.T" class="generic">T</a> would be <a href="#dataType.int" class="reservedKey">int</a>, <a href="#variable.init.<>.T.value" class="generic">value</a> would be <a href="#dataType.integer" class="generic">5</a>.`
        },

        {
            ko: `이 경우 <a href="#dataType.integer" class="mark">정수 형태</a>인 <a href="#variable.init.<>.T.value.varName" class="variable">varName</a>을 <a href="#dataType.integer" class="generic">5</a>로 초기화시키는 방법은 아래와 같을 것입니다.`,
            en: `In that case, initialising <a href="#variable.init.<>.T.value.varName" class="variable">varName</a> which is <a href="#dataType.int" class="mark">integer form</a> as <a href="#dataType.integer" class="generic">5</a> would work this way.`
        },

        {
            ko: "자료형",
            en: "Data Type"
        },

        {
            ko: "자료의 형태를 미리 정의하는 방식입니다.",
            en: "It pre-defines the type of the data"
        },

        {
            ko: "1bit의 크기를 가진 이진 정수를 뜻합니다.",
            en: "It is a 1-bit sized binary integer."
        },

        {
            ko: `다른 정수값을 <a href="#dataType.bool" class="reservedKey">bool</a>로 바꿀 경우, <a href="#dataType.bool.false" class="generic">0</a>일 때 <a href="#dataType.bool.false" class="reservedKey">false</a>가 되며, 나머지 경우 전부 <a href="#dataType.bool.true" class="reservedKey">true</a>로 간주됩니다.`,
            en: `On parsing other integers into <a href="#dataType.bool" class="reservedKey">bool</a>, if value is <a href="#dataType.bool.false" class="generic">0</a> it goes <a href="#dataType.bool.false" class="reservedKey">false</a>, else it goes <a href="#dataType.bool.true" class="reservedKey">true</a>`
        },

        {
            ko: `참값을 뜻하며, <a href="#dataType.bool.true" class="generic">1</a>의 값을 가집니다.`,
            en: `Stands for <a href="#dataType.bool.true" class="reservedKey">true</a> value, with a value of <a href="#dataType.bool.true" class="generic">1</a>.`
        },

        {
            ko: `거짓값을 뜻하며, <a href="#dataType.bool.false" class="generic">0</a>의 값을 가집니다.`,
            en: `Stands for <a href="#dataType.bool.false" class="reservedKey">false</a> value, with a value of <a href="#dataType.bool.false" class="generic">0</a>.`
        },

        {
            ko: `<d title="1비트가 0과 1이고 그게 8개 있으면 byte이므로 2의 8제곱인 256이라 할 수 있다. 그리고 아스키 코드는 그 길이의 절반인 0부터 127까지밖에 표현하지 못한다.">1byte</d>의 크기를 가진 <a href="#dataType.integer" class="mark">정수</a>를 아스키 형태의 문자로 표현한 것을 뜻합니다.`,
            en: `<d title="1비트가 0과 1이고 그게 8개 있으면 byte이므로 2의 8제곱인 256이라 할 수 있다. 그리고 아스키 코드는 그 길이의 절반인 0부터 127까지밖에 표현하지 못한다.">1-byte</d> <a href="#dataType.integer" class="mark">integer</a> to display the character with ASCII.`
        },

        {
            ko: `한 글자를 작은 따옴표로 감싸 아래와 같은 형태로 표현할 수 있습니다.`,
            en: `You could describe a single character as ASCII with <a href="#dataType.char">Single Quote</a> wrapped.`
        },

        {
            ko: `한 글자는 하나의 <a href="#dataType.integer" class="mark">숫자</a>에 치환되므로 <a href="#array.string" class="mark">여러 개의 문자</a>를 표현하기 위해서는 <a href="#array" class="mark">배열</a>을 사용할 필요가 있습니다.`,
            en: ``
        },

        {
            ko: `문자는 정수가 됩니다.`,
            en: `Each single character represents its own number value.`
        },

        {
            ko: `문자`,
            en: `Character`
        },

        {
            ko: `실행`,
            en: `execute`
        },

        {
            ko: `정수는 문자가 됩니다.`,
            en: `So every number could be described as a single character.`
        },

        {
            ko: `숫자`,
            en: `Number`
        },

        {
            ko: `실행`,
            en: `execute`
        },

        {
            ko: `이스케이프 시퀀스`,
            en: `Escape Sequence`
        },

        {
            ko: `문자열 내에서 특정한 의미를 가진 특수한 문자 조합을 나타내는 <a href="#dataType.char" class="str">'\\'</a>와 다른 문자로 이뤄진 문자열이나 컴파일러 내에서는 문자로 받아들입니다.`,
            en: `Specific command design with <a href="#dataType.char" class="str">'\\'</a> placed at first will be treated as a single character in compiler.`
        },

        {
            ko: `<d class="str" title="기본적으로 \\는 명령을 할 것이다라는 의미라 이것 하나로는 문자열이 아니라 명령으로 인식되는 문제를 피하기 위함이다.">'\\'</d> 그 자체를 뜻합니다.`,
            en: `It represents <d class="str" title="기본적으로 \\는 명령을 할 것이다라는 의미라 이것 하나로는 문자열이 아니라 명령으로 인식되는 문제를 피하기 위함이다.">'\\'</d> itself.`
        },

        {
            ko: `문자 <d class="str">'\\'</d> 자체는 명령으로 쓰이므로 명령 이외에 <d class="str">'\\'</d>를 출력하기 위하여 만들어졌습니다.`,
            en: `Since the character <d class="str">'\\'</d> is usually used as a prefix of the command, to display it we use it.`
        },

        {
            ko: `문자 <d class="str">'"'</d>를 뜻합니다.`,
            en: `It represents <d class="str">'"' itself</d>`
        },

        {
            ko: `컴파일러가 <d class="str">'"'</d>를 <a href="#array.string" class="mark">문자열</a>의 시작이라는 명령으로 읽지 않고 <a href="#dataType.char">문자(<d class="reservedKey">char</d>)</a>로써 받아들이게 하기 위함입니다.`,
            en: ``
        },

        {
            ko: `문자 <d class="str">'''</d>를 뜻합니다.`,
            en: ``
        },

        {
            ko: `컴파일러가 <d class="str">'"'</d>를 <a href="#dataType.char" class="mark">문자</a>의 시작이라는 명령으로 읽지 않고 <a href="#dataType.char">문자(<d class="reservedKey">char</d>)</a>로써 받아들이게 하기 위함입니다. `,

            en: ``
        },

        {
            ko: `줄넘김을 뜻합니다.`,
            en: ``
        },

        {
            ko: `탭(tab)을 뜻합니다.`,
            en: ``
        },

        {
           ko: `문자열 내에서 커서를 처음으로 돌려보냅니다.`,
           en: ``
        },

        {
            ko: `예를 들어 <a href="#array.string" class="str">"a\\rb"</a>는 a후에 앞으로 돌아가 b를 출력하므로 b가 a를 덮어쓰는 효과가 있습니다.`,
            en: ``
        },

        {
            ko: `백스페이스(backspace)를 뜻합니다.`,
            en: ``
        },

        {
            ko: `Form Feed`,
            en: `Form Feed`
        },

        {
            ko: `주로 프린터나 출력 장치에서 페이지를 나누거나 다음 페이지로 이동하기 위해 쓰입니다.`,
            en: ``
        },

        {
            ko: `종종 문서를 여러 부분으로 나누는 데 사용되며, 출력 장치가 이를 감지할 때 페이지를 넘긴다 가정합니다.`,
            en: ``
        },

        {
            ko: `하지만 현대 대부분의 텍스트 처리 시스템에서는 출력 장치에서 <a href="#\f.formFeed">Form Feed</a>를 무시하는 경우가 많으므로 특별한 동작을 유발하지 않을 수 있습니다.`,
            en: ``
        },

        {
            ko: `수직 탭을 의미하나 잘 사용되지 않습니다.`,
            en: ``
        },

        {
            ko: `본래 텍스트 출력에서 수직 방향으로 일정한 간격을 띄우기 위해 사용되는 제어 문자입니다.`,
            en: ``
        },

        {
            ko: `경고음`,
            en: `bell`
        },

        {
            ko: `문자열 안에 <a href="#\\a" class="str">'\\a'</a>를 넣을 경우 소리나 알림을 생성합니다.`,
            en: ``
        },

        {
            ko: `그러나 현대의 대부분의 시스템에서는 <a href="#\\a" class="str">'\\a'</a>가 비활성화되어 있을 가능성이 높습니다.`,
            en: ``
        },

        {
            ko: `널 문자`,
            en: ``
        },

        {
            ko: `문자열의 끝을 구분합니다.`,
            en: ``
        },

        {
            ko: `예를 들어, <a href="#array.string" class="str">"Hello World!"</a>는 <a href="#array">{</a> <a href="#dataType.char" class="str">'H'</a>, <a href="#dataType.char" class="str">'e'</a>, <a href="#dataType.char" class="str">'l'</a>, <a href="#dataType.char" class="str">'l'</a>, <a href="#dataType.char" class="str">'o'</a>, <a href="#dataType.char" class="str">' '</a>, <a href="#dataType.char" class="str">'W'</a>, <a href="#dataType.char" class="str">'o'</a>, <a href="#dataType.char" class="str">'r'</a>, <a href="#dataType.char" class="str">'l'</a>, <a href="#dataType.char" class="str">'d'</a>, <a href="#dataType.char" class="str">'!'</a>, <a href="#\\0" class="str">'\\0'</a> <a href="#array">}</a>의 구조를 가지고 있으며, <br> 여기에서 문장이 끝났다는 것을 명시하기 위하여 <a href="#\\0.null">널 문자</a>가 쓰입니다.`,

            en: ``
        },

        {
            ko: `특정한 16진수값을 직접 표현할 수 있는 문자입니다.`,
            en: ``
        },

        {
            ko: `예제`,
            en: ``
        },

        {
            ko: `문자열`,
            en: ``
        },

        {
            ko: `실행`,
            en: ``
        },

        {
            ko: `특정한 8진수값을 직접 표현할 수 있는 문자입니다.`,
            en: ``
        },

        {
            ko: `예제`,
            en: ``
        },

        {
            ko: `문자열`,
            en: `string`
        },

        {
            ko: `실행`,
            en: `execute`
        },

        {
            ko: `4byte의 크기를 가진 정수를 뜻합니다.`,
            en: ``
        },

        {
            ko: `부동 소수형`,
            en: ``
        },

        {
            ko: `4byte의 크기를 가진 부동 소수점을 뜻합니다.`,
            en: ``
        },

        {
            ko: `8byte의 크기를 가진 부동 소수점을 뜻합니다.`,
            en: ``
        },

        {
            ko: `연산자`,
            en: ``
        },

        {
            ko: `사칙연산`,
            en: ``
        },

        {
            ko: `<a href="#dataType.int" class="reservedKey" title="정수 형태라고 한다.">int</a>일 경우`,
            en: ``
        },

        {
            ko: `<a href="#dataType.integer" class="mark" title="정수 자료형일 경우 int가 아니라도 무방하다는 말이다.">정수 자료형</a>으로 사칙연산자를 시도할 경우, 이들은 정수로 취급합니다.`,
            en: ``
        },

        {
            ko: `쉽게 말해, <a href="#dataType.integer" class="mark">여기</a>에 속해 있을 경우 어떤 형태든 간에 숫자로 간주된다는 것입니다.`,
            en: ``
        },

        {
            ko: `이를테면, <a href="#dataType.bool" class="reservedKey" title="true가 1, false가 0이라는 말은 자주 들어 봐서 알 것이다.">bool</a>일 경우 <a href="#dataType.bool.false" class="generic">0</a> 혹은 <a href="#dataType.bool.true" class="generic">1</a>로 치환되거나 <br>
            <a href="#dataType.char" title="아스키 코드를 참고하자." class="reservedKey">char</a>일 경우, 아스키 코드로 반환되거나 하는 방식입니다.`,
            en: ``
        },

        {
            ko: `뺄셈 연산을 수행합니다.`,
            en: ``
        },

        {
            ko: `곱셈 연산을 수행합니다.`,
            en: ``
        },

        {
            ko: `비트 연산`,
            en: ``
        },

        {
            ko: `단위 비트 조작이 가능한 <a href="#dataType.integer" style="text-decoration:underline;" title="내가 다 적어 놓았는지 의문이 들어 여기에\n추가로 적어 놓겠다.\nbool, char, short, int, long, long long...\n물론 앞에 unsigned를 붙인다고 해도 달라지는 것 없이 정상작동한다.">정수형 자료형</a>에서 사용할 수 있는 연산자입니다.`,
            en: ``
        },

        {
            ko: `AND연산을 수행합니다.`,
            en: ``
        },

        {
            ko: `시프트 연산자`,
            en: ``
        },

        {
            ko: `대입 연산`,
            en: ``
        },

        {
            ko: `논리연산`,
            en: ``
        },

        {
            ko: `<a href="#operator.logic.!" class="mark" title="그러니까 cond가 true였으면 false가 된다는 소리다.">구문의 값</a>은 본래 가지고 있던 값과 반대되는 값이 됩니다.`,
            en: ``
        },

        {
            ko: `시연`,
            en: ``
        },

        {
            ko: `실행`,
            en: ``
        },

        {
            ko: `삼항연산자`,
            en: `<a href="#operator.logic.?:" class="mark" title="그러니까 cond ? ifVal : elseVal을 말하는 것이다.">구문 전체</a>의 값을 결정할 조건문입니다.`
        },

        {
            ko: `만일 <a href="#operator.logic.?:.cond" class="variable">cond</a>가 참일 경우 <a href="#operator.logic.?:" class="mark" title="cond ? ifVal : elseVal">구문 전체</a>는 <a href="#operator.logic.?:.ifVal" class="variable">ifVal</a>이 됩니다.`,
            en: ``
        },

        {
            ko: `그 이외의 경우 <a href="#operator.logic.?:" class="mark" title="...이해가 안 된다면 그냥 클릭해서 다시 보고 오는 것도 방법이다.">구문 전체</a>는 <a href="#operator.logic.?:.elseVal" class="variable">elseVal</a>이 됩니다.`,
            en: ``
        },

        {
            ko: `시연`,
            en: ``
        },

        {
            ko: `실행`,
            en: `execute`
        },

        {
            ko: `참조 연산`,
            en: ``
        },

        {
            ko: `<a href="#variable" title="사실상 이걸 만들지 못한다면, 당신은 이걸 읽고 있어도 의미가 없다." class="mark">변수</a>와 <a href="#pointer" class="mark" title="변수라는 상자가 있으면 그 상자가 놓인 장소라고 하면 되겠다.">포인터</a>에 관련된 연산자입니다.`,
            en: ``
        },

        {
            ko: `대부분의 경우 <a href="#variable" title="진짜 이걸 모르겠다고?" class="mark">변수 이름</a> 혹은 <a href="#pointer" class="mark" title="대부분 포인터 관련 연산이기 때문에">포인터</a>와 관련된 연산을 수행하기 때문에 <a href="#variable" title="진심으로?" class="mark">변수</a>를 미리 정의해 놓은 것을 전제로 진행됩니다.`,
            en: ``
        },
        
        {
            ko: `정의되어 있는 변수인 <a href="#operator.ref.&.var" class="variable">var</a>의 위치(<a href="#pointer" class="mark" title="만능">포인터</a>)를 나타냅니다.`,
            en: ``
        },

        {
            ko: `위치를 구할 변수의 이름입니다.`,
            en: ``
        },

        {
            ko: `정의된 포인터 point의 값을 참조합니다.`,
            en: ``
        },

        {
            ko: `포인터`,
            en: ``
        },

        {
            ko: `모든 <a href="#variable" class="mark">변수</a>는 정의된 순간 각자의 메모리를 할당받습니다.`,
            en: ``
        },

        {
            ko: `그 메모리의 위치 또한 자료형으로 쓰일 수 있으며, 이를 포인터라 부릅니다.`,
            en: ``
        },

        {
            ko: `<a href="#pointer">포인터</a> <a href="#variable.init">초기화</a>`,
            en: ``
        },

        {
            ko: `<a href="#dataType" class="mark">특정 자료형</a>(여기에서는 <a href="#pointer.init.<>.T" class="generic">T</a>로 표기) 옆에 *를 붙이면 <a href="#pointer.init.<>.T" class="generic">T</a>형식의 자료를 저장할 수 있는 메모리 주소(<a href="#pointer" class="mark">포인터</a>)로써의 자료형을 뜻합니다.`,
            en: ``
        },

        {
            ko: `미리 <a href="#variable.declare" class="mark" title="변수가 미리 정의되어 있지 않으면 메모리도 할당되어 있지 않기 때문에 아예 넣을 수 없다.">정의</a>된 <a href="#pointer.init.<>.T" class="generic">T</a> 형식의 <a href="#pointer.init.varName" class="variable">varName</a>입니다.`,
            en: ``
        },

        {
            ko: `<a href="#variable" class="mark">변수</a>를 새로 <a href="#variable.declare" class="mark">정의</a>할 때에 <a href="#variable.declare" class="mark">정의된 변수</a>에 새로 메모리를 할당하는데, 그 메모리 주소를 <a href="#pointer" class="mark">포인터</a>라 부릅니다.`,
            en: ``
        },

        {
            ko: `배열`,
            en: ``
        },

        {
            ko: `문자열`,
            en: `string`
        }
    ]
};