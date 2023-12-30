function style() {
    let _style = new tent("style", "div", document.body);
    let title = _style.tent("title", "h2");
    switch(argv[1]) {
        case '1':
            include("light.css");
        case '2':
            let dark = _style.tent("dark", "div");
            d = {en: "Dark mode", ko: "다크 모드"};
            let dark_a = dark.tent("a", "a");

            let aa = args();
            aa[1] = '0';
            dark_a.pos().href = window.location.href.split('?')[0] + '?' + btoa(argt(aa));
            dark_a.append(d[argv[0]]);
            break;
        case "0":
            include('dark.css');
            let light = _style.tent("light", "div");
            let light_a = light.tent("a", "a");
            l = {en: "Light mode", ko: "라이트 모드"};

            let ab = args();
            ab[1] = '1';
            light_a.pos().href = window.location.href.split('?')[0] + '?' + btoa(argt(ab));
            light_a.append(l[argv[0]]);
            break;
        default:
            break;
    }

    t = {en: "Vision", ko: "비전"};

    title.append(t[argv[0]]);


}