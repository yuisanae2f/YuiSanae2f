var legendArr = 
[
    ["언어", "프로그래밍 언어"],
    ["Languages", "Programming Language"]
];

var h3Arr = [
    ["애기도 이해하는 프로그래밍 뭐시기"],
    ["Planned to be understood even for a baby"]
];

function flip(langEnum) {
    ubersetzung(legendArr, langEnum, 'legend');
    ubersetzung(h3Arr, langEnum, 'h3');
    lever(langEnum, "lang");
    return;
}