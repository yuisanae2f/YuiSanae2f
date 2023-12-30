docs["index"] = function() {
    const board = document.getElementById("board");
    let idx = new tent("Index", "div", board);

    let a = idx.tent("title", "h2")
    a.set("Index");

    let b = idx.tent("desc", "div");
    let ba = b.tent("a", "div");
    let ba_a = {ko: "이 문서의 시작 부분입니다.", en: "is the start point of this website."};
    ba.set(ba_a[args()[0]]);

    let bb = b.tent("b", "div");
    let bb_a = {ko: "적혀 있는 내용은 존재하지 않습니다.", en: "nothing is written here."};
    bb.set(bb_a[args()[0]]);
}