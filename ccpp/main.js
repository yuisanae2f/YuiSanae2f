field = ".console"; out = ".exe";

function operatorLogicNOT() {
    let cond = document.getElementById("operator.logic.!" + field + ".cond").value;
    let id = document.getElementById('operator.logic.!' + field + out);

    id.innerHTML = "<a href='#operator.logic.!.cond' class='variable'>cond</a>는 '" + cond + "'입니다.<br>"
    + "여기에서 <a href='#operator.logic.!.cond' class='variable'>cond</a>는 0 혹은 <a href='#dataType.bool.false' class='reservedKey'>false</a>가 " + (cond == "false" || cond == "0" ? "맞으니 <a href='#dataType.bool.false' class='reservedKey'>false</a>값이 됩니다." : "아니니 <a href='#dataType.bool.true' class='reservedKey'>true</a>값이 됩니다.") + '<br>'
    + "따라서 <a href='#operator.logic.!'>!</a><a href='#operator.logic.!.cond' class='variable'>cond</a>의 값은 그 반대인 " 
    + (cond == "false" || cond == "0" ? "<a href='#dataType.bool.true' class='reservedKey'>true</a>" : "<a href='#dataType.bool.false' class='reservedKey'>false</a>") + '가 됩니다.';
}

function operatorLogicDreiVal() {
    let cond = document.getElementById("operator.logic.?:" + field + ".cond").value;
    let ifVal = document.getElementById("operator.logic.?:" + field + ".ifVal").value;
    let elseVal = document.getElementById("operator.logic.?:" + field + ".elseVal").value;

    let id = document.getElementById("operator.logic.?:" + field + out);
    let _ = cond == "false" || cond == 0 ? false : true;

    id.innerHTML = 
    `<a href="#operator.logic.?:.cond" class="variable">cond</a>는 \'${cond}\'입니다.<br>`
    + `<a href="#operator.logic.?:.ifVal" class="variable">ifVal</a>는 \'${ifVal}\'입니다.<br>`
    + `<a href="#operator.logic.?:.elseVal" class="variable">elseVal</a>은 \'${elseVal}\'입니다.<br><br>`

    + `<a href="#operator.logic.?:.cond" class="variable">cond</a>의 값은 '0' 혹은 '<a href='#dataType.bool.false' class='reservedKey'>false</a>'이 ${_ ? "아니기에 \'<a href='#dataType.bool.true' class='reservedKey'>true</a>" : "맞기에 \'<a href='#dataType.bool.false' class='reservedKey'>false</a>"}\'이므로 <br>'<a href="#operator.logic.?:.cond" class="variable">cond</a> ? <a href="#operator.logic.?:.ifVal" class="variable">ifVal</a> : <a href="#operator.logic.?:.elseVal" class="variable">elseVal</a>'의 값은 `

    + (_ 
        ? `<a href="#operator.logic.?:.ifVal" class="variable">ifVal</a>인 '${ifVal}'이 됩니다.`
        : `<a href="#operator.logic.?:.elseVal" class="variable">elseVal</a>인 '${elseVal}'이 됩니다.`
        );
}