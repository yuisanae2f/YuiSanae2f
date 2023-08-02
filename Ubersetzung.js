const Korean = 0;
const English = 1;

function ubersetzung(matrix, langEnum, name) {
    let elements = document.getElementsByTagName(name);

    if( matrix[langEnum] == undefined
     || elements.length != matrix[langEnum].length) 
    {
        return 1;
    }

    for(let i = 0; i < matrix[langEnum].length; i++) 
    {
        elements[i].innerHTML = matrix[langEnum][i] != "" ? matrix[langEnum][i] : elements[i].innerHTML;
    }
    
    return 0;
}

function lever(langEnum, className, tagName = "div") {
    let _class = document.getElementsByClassName(className);
    
    let i = 0;
    for(; i < _class.length; i++) {
        _class[i].getElementsByTagName(tagName)[0].classList = i == langEnum ? ['checkOn'] : null;
    } return i;
}

function display(){
    document.getElementById('ubersetzung').innerHTML += `
    <legend></legend>
    <div style="display: flex; align-items: center;">
        <div onclick="flip(0)" class="checkBox lang">
            <div value="0" class="checkOn"></div>
        </div> 한국어
    </div>
    <div style="display: flex; align-items: center;">
        <div onclick="flip(1)" class="checkBox lang">
            <div value="1"></div>
        </div> English
    </div>
    `;
}

function getter(id){
    return document.getElementById(id).getElementsByClassName("checkOn")[0].getAttribute("value");
}