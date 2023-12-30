function locale() {
    let l = new tent("locale", "div", document.body);
    let lh = l.tent("title", "h2");
    lh.set({ko: "언어", en: "Languages"}[args()[0]]);

    let aa = args();

    if(args()[0] != 'ko') {
        aa[0] = 'ko';
        let ko = l.tent("ko", "div").tent("a", "a");
        ko.set("한국어");
        ko.pos().href = getURL(argt(aa));
    }

    if(args()[0] != 'en') {
        aa[0] = 'en';
        let en = l.tent("en", "div").tent("a", "a");
        en.set("English");
        en.pos().href = getURL(argt(aa));
    }
}