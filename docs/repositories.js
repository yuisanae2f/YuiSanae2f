docs["repositories"] = function(lng = args()[0]) {
    const board = document.getElementById("board");
    let rep = new tent("Repository", 'div', board);
    let rep_a = {};

    let ba_a = {};
    rep_a["ko"] = '리포지토리';
    rep_a['en'] = 'Repositories';
    rep.tent("title", 'h2').pos().innerHTML = rep_a[lng] ?? '';

    let repa = rep.tab("desc", "div");
    let repaa = {ko: "활동 및 업데이트 중에 있는 리포지토리 모음입니다.", en: "is the available repositories that I've made."};
    repa.tent("a", 'div').set(repaa[lng] ?? '');

    let CPure = rep.tab("CPure", 'div');
    let CPurea = CPure.tent("title", "h2").tent("a", 'a').pos();
    CPurea.href = "https://github.com/yuisanae2f/CPure";
    CPurea.innerHTML = "CPure";
    let CPureDesc = CPure.tab("desc");
    ba_a["ko"] = "C/C++ 환경에서 사용 가능한 dll 모음입니다.";
    ba_a["en"] = "is the Dynamic Link Libraries available on C/C++.";
    CPureDesc.set(ba_a[lng] ?? '');

    let staticWeb = rep.tab("staticWeb", 'div');
    let staticWeba = staticWeb.tent("title", 'h2').tent('a', 'a').pos();
    staticWeba.href = "https://github.com/yuisanae2f/staticWeb";
    staticWeba.innerHTML = "staticWeb";

    ba_a["ko"] = "이 웹사이트를 돌리고 있는 js를 따로 모았습니다.";
    ba_a['en'] = "is the framework for the docs."
    staticWeb.tab('desc').tent('a').set(ba_a[lng]);
}