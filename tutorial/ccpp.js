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