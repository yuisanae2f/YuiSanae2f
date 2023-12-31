docs["index"] = function(lng = args()[0]) {
    const board = document.getElementById("board");
    let idx = new tent("Index", "div", board);

    let a = idx.tent("title", "h2")
    a.set("Index");

    let b = idx.tab("desc", "div");
    let ba = b.tent("a", "div");
    let ba_a = {ko: "이 문서의 시작 부분입니다.", en: "is the start point of this website."};
    ba.set(ba_a[lng] ?? '');

    let bb = b.tent("b", "div");
    let bb_a = 
    {ko: "이곳에서 현재 당신이 접근하기 용이한 주소를 제공합니다."};
    bb_a["en"] = "provides the accessible contents of this website.";
    bb.set(bb_a[lng] ?? '');

    let rep = idx.tent("Repository", 'div');
    let rep_a = {};
    rep_a["ko"] = '리포지토리';
    rep_a['en'] = 'Repositories';
    let repp = rep.tent("title", 'h2').tent('a', 'a');
    repp.set(rep_a[lng] ?? '');
    repp.pos().href = getURL('repositories');

    let repa = rep.tab("desc", "div");
    let repaa = {ko: "활동 및 업데이트 중에 있는 리포지토리 모음입니다.", en: "is the available repositories that I've made."};
    repa.tent("a", 'div').set(repaa[lng] ?? '');
}