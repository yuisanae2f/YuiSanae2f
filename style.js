function style() {
    let _style = new tent("style", "div", document.body);
    let title = _style.tent("title", "h2");
    switch(argv[1]) {
        case '0':
            let dark = _style.tab("dark", "div");
            d = {en: "Dark mode", ko: "다크 모드"};
            let dark_a = dark.tent("a", "a");

            let aa = args();
            aa[1] = '1';
            dark_a.pos().href = window.location.origin + '/index.html' + '?' + btoa(argt(aa));
            dark_a.append(d[argv[0]]);
            break;
        case "1":
            let light = _style.tab("light", "div");
            let light_a = light.tent("a", "a");
            l = {en: "Light mode", ko: "라이트 모드"};

            let ab = args();
            ab[1] = '0';
            light_a.pos().href = window.location.origin + '/dark.html' + '?' + btoa(argt(ab));
            light_a.append(l[argv[0]]);
            break;
        default:
            break;
    }

    t = {en: "Vision", ko: "비전"};

    title.append(t[argv[0]]);
}