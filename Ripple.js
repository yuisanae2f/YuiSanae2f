//CSS
function registerRipplesStyleSheets() {
    let style = document.createElement("style");
    style.innerHTML = `
        .ripples {
            position: relative;
            overflow: hidden;
            -ms-user-select: none;
            -moz-user-select: -moz-none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            user-select: none;
        }
        .ripples img {
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            pointer-events: none;
        }
        .ripples .ripple {
            background-color: #ffffff80;
        }
        .ripples:focus-visible {
            outline: solid 3px #ffffff;
            --focus-visible: true;
        }
    `;
    document.head.prepend(style);
}
registerRipplesStyleSheets();

//키보드 접근성
function focusAccessibility(e) {
    let target = e.target;
    
    let style = window.getComputedStyle(target);
    if (style.getPropertyValue("--focus-visible").trim() == 'true') {
        if (target.getAttribute("onmouseenter") != null) {
            target.onmouseenter();
        }
    }

    target.addEventListener("keydown", keydownAccessibility);
}
function keydownAccessibility(e) {
    if (e.keyCode == 13) {
        let style = getComputedStyle(e.target);
        if (style.pointerEvents != "none") {
            //포인터 다운 이벤트
            let rect = e.target.getBoundingClientRect();
            let x = rect.left + (rect.width / 2);
            let y = rect.top + (rect.height / 2);
            e.target.dispatchEvent(new PointerEvent('pointerdown', { clientX: x, clientY: y }));
            //클릭 이벤트
            e.target.click();
            //임시 이벤트
            function callback() {
                e.target.dispatchEvent(new PointerEvent('mouseup'));
            }
            window.requestAnimationFrame(callback);
        }
    }
}

function checkRipples() {
    let elements = document.getElementsByClassName("ripples");
    let length = elements.length;
    for (let i = 0; i < length; i++) {
        cancelRegisterRipplesElement(elements[i]);
        registerRipplesElement(elements[i]);
        
        //시각 장애인을 위한 속성이 있는지
        let tabIndex = elements[i].getAttribute("tabindex");
        if (tabIndex != 0 && tabIndex != "0") {
            elements[i].setAttribute("tabindex", 0);
            elements[i].setAttribute("onfocus", "focusAccessibility(event)");
        }
    }
}
checkRipples();

//리플 효과 이벤트 등록
function registerRipplesElement(el) {
    //시작
    el.addEventListener('pointerdown', onRippleStartEvent);
    el.addEventListener('focus', onRippleStartEvent);
    //터치인지
    el.addEventListener('touchstart', onRippleTouchStartEvent);
    //마우스나 터치를 땐
    el.addEventListener('mouseleave', onRippleEnd);
    el.addEventListener('mouseup', onRippleEnd);
    el.addEventListener('touchend', onRippleEnd);
    el.addEventListener('touchcancel', onRippleEnd);
    //움직임
    el.addEventListener('touchmove', onRippleMove);
}
//리플 효과 이벤트 삭제
function cancelRegisterRipplesElement(el) {
    //시작
    el.removeEventListener('pointerdown', onRippleStartEvent);
    el.removeEventListener('focus', onRippleStartEvent);
    //터치인지
    el.removeEventListener('touchstart', onRippleTouchStartEvent);
    //마우스나 터치를 땐
    el.removeEventListener('mouseleave', onRippleEnd);
    el.removeEventListener('mouseup', onRippleEnd);
    el.removeEventListener('touchend', onRippleEnd);
    el.removeEventListener('touchcancel', onRippleEnd);
    //움직임
    el.removeEventListener('touchmove', onRippleMove);
}

var isDocumentElementUpdated = false;
new MutationObserver(function(mutationsList) {
    if (isDocumentElementUpdated == false) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                isDocumentElementUpdated = true;
                function callback() {
                    checkRipples();
                    isDocumentElementUpdated = false;
                }
                window.requestAnimationFrame(callback);
                break;
            }
        }
    }
}).observe(document.documentElement, { childList: true, subtree: true, passive: true });

var isTempTouchRipple = false;
function onRippleTouchStartEvent() {
    isTempTouchRipple = true;
}

function onRippleStartEvent(event) {
    event["element"] = event.currentTarget;
    event["uniqueNumber"] = Math.floor(Math.random() * 999999999999);
    rippleStartEvent[event["uniqueNumber"]] = event;

    //터치인지 판단하기 위해 한 프레임 건너띈다.
    function callback() {
        onRippleStart(event);
    }
    window.requestAnimationFrame(callback);
}

var isTouchRipple = new Array();
var rippleTouchStartTime = new Array();
var rippleTouchTimeout = new Array();
var isStartRippleStatus = new Array();
var isEndRippleStatus = new Array();
var rippleStartEvent = new Array();
function onRippleStart(event) {
    let uniqueNumber = event["uniqueNumber"];
    let el = event["element"];

    let scale = 1;
    let isSupported = CSS.supports("zoom", 1);
    if (isSupported == true) {
        let target = el;
        while (target != document.documentElement && target != null) {
            let style = window.getComputedStyle(target);
            scale += (style.getPropertyValue("zoom") - 1);
            target = target.parentElement;
        }
    }

    let spread = 0.2;
    let hidden = (spread * 1.5);
    (hidden < 0.2) ? hidden = 0.2 : null;
    let option = {
        spread: spread,
        hidden: hidden,
        wait: 0.1
    }

    //값 초기화
    if (isStartRippleStatus[uniqueNumber] == null) {
        isStartRippleStatus[uniqueNumber] = false;
        isEndRippleStatus[uniqueNumber] = false;
        isTouchRipple[uniqueNumber] = false;
    }

    //터치인지
    if (isTempTouchRipple == true) {
        isTouchRipple[uniqueNumber] = true;
        rippleTouchStartTime[uniqueNumber] = new Date().getTime();
        isTempTouchRipple = false;
    }

    //포커스인지
    if (event.type == "focus") {
        let style = window.getComputedStyle(el);
        if (style.getPropertyValue("--focus-visible").trim() == 'true') {
            setTimeout(() => {
                isEndRippleStatus[uniqueNumber] = true;
            }, (spread * 1000));
        } else {
            return;
        }
    }

    //터치일 경우
    let touchStartDifference = (new Date().getTime() - rippleTouchStartTime[uniqueNumber]);
    if (isEndRippleStatus[uniqueNumber] == false && isTouchRipple[uniqueNumber] == true && (touchStartDifference < (option["wait"] * 1000))) {
        //특정 시간 동안 대기한 후 실행한다.
        rippleTouchTimeout[uniqueNumber] = setTimeout(() => {
            onRippleStart(event);
        }, (option["wait"] * 1000));
        return;
    }

    let rect = el.getBoundingClientRect();
    let clickX = null;
    let clickY = null;
    if (event.type == "pointerdown") {
        clickX = event.clientX;
        clickY = event.clientY;
    } else if (event.type == "touchstart") {
        clickX = event.touches[0].clientX;
        clickY = event.touches[0].clientY;
    }
    //스케일 보정
    (clickX != null) ? clickX /= scale : null;
    (clickY != null) ? clickY /= scale : null;
    //클릭 위치 정보가 없을 경우
    if (clickX == null || clickY == null) {
        let x = rect.left + (rect.width / 2);
        let y = rect.top + (rect.height / 2);
        clickX = x;
        clickY = y;
    }
    clickX -= rect.left;
    clickY -= rect.top;
    let percentX = (clickX / rect.width);
    let percentY = (clickY / rect.height);
    percentX -= 0.5;
    percentY -= 0.5;
    percentX *= 2;
    percentY *= 2;

    //정사각형일 경우
    if (rect.width == rect.height) {
        percentX = 0;
        percentY = 0;
    }

    //리플 효과 앨리먼트 생성
    let newEl = document.createElement("div");
    newEl.classList.add("ripples");
    newEl.style.all = "unset";
    newEl.style.position = "absolute";
    newEl.style.top = "0px";
    newEl.style.left = "0px";
    newEl.style.zIndex = "999";
    newEl.style.pointerEvents = "none";
    newEl.style.display = "flex";
    newEl.style.justifyContent = "center";
    newEl.style.alignItems = "center";
    newEl.style.overflow = "hidden";
    let effect = document.createElement("div");
    effect.classList.add("ripple");
    effect.style.borderRadius = "50%";
    effect.style.opacity = 1;
    effect.style.transform = "scale(0.3)";
    effect.style.transition = "transform " + option["spread"] + "s";
    effect.style.transitionTimingFunction = "cubic-bezier(0.215, 0.61, 0.355, 1.0)";
    newEl.appendChild(effect);
    el.appendChild(newEl);

    let previousWidth = null;
    let previousHeight = null;
    function callback() {
        if (isEndRippleStatus[uniqueNumber] == false || isStartRippleStatus[uniqueNumber] == false) {
            rect = el.getBoundingClientRect();

            if (rect.width != previousWidth || rect.height != previousHeight) {
                newEl.style.width = (rect.width + "px");
                newEl.style.height = (rect.height + "px");
                previousWidth = rect.width;
                previousHeight = rect.height;
    
                effect.style.marginTop = ((rect.height * percentY) + "px");
                effect.style.marginLeft = ((rect.width * percentX) + "px");
    
                //거리 차이 구하기
                function distanceTo(x1, y1, x2, y2) {
                    let xDistance = x2 - x1;
                    let yDistance = y2 - y1;
                    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
                }
                let centerToWidth = Math.abs(rect.width * percentX);
                let centerToHeight = Math.abs(rect.height * percentY);
                let size = distanceTo(0, 0, (rect.width + centerToWidth), (rect.height + centerToHeight));
                effect.style.minWidth = (size + "px");
                effect.style.minHeight = (size + "px");
    
                //리플 효과 퍼지기
                if (effect.getAttribute("start_time") == null) {
                    effect.style.transform = "scale(1)";
                    effect.setAttribute("start_time", new Date().getTime());
                    isStartRippleStatus[uniqueNumber] = true;
                }
            }

            window.requestAnimationFrame(callback);
        } else {
            let isEnd = effect.getAttribute("is_end");
            if (isEnd == null) {
                let startTime = Number.parseInt(effect.getAttribute("start_time"));
                let endTime = new Date().getTime();
                let difference = (endTime - startTime) / 1000;
                let delay = (option["spread"] - difference);
                (delay < 0) ? delay = 0 : null;

                setTimeout(() => {
                    effect.style.transition = "opacity " + option["hidden"] +  "s";
                    effect.style.transitionTimingFunction = null;
                    
                    function callback24899321() {
                        effect.style.opacity = 0;
                        setTimeout(() => {
                            newEl.remove();
                        }, (option["hidden"] * 1000));
                    }
                    window.requestAnimationFrame(callback24899321);

                }, (delay * 1000));

                effect.setAttribute("is_end", true);
                onRippleInit(uniqueNumber);
            }
        }
    }
    window.requestAnimationFrame(callback);
}
function onRippleEnd() {
    Object.keys(isEndRippleStatus).forEach(key => {
        isEndRippleStatus[key] = true;
        if (rippleTouchTimeout[key] != null) {
            clearTimeout(rippleTouchTimeout[key]);
            onRippleStart(rippleStartEvent[key]);
        }
    });
}
function onRippleMove() {
    Object.keys(isEndRippleStatus).forEach(key => {
        if (rippleTouchTimeout[key] != null) {
            clearTimeout(rippleTouchTimeout[key]);
            onRippleInit(key);
        }
    });
}
function onRippleInit(uniqueNumber) {
    let newArray = new Array(isEndRippleStatus);
    Object.keys(isEndRippleStatus).forEach(key => {
        if (key != uniqueNumber) {
            newArray[key] = isEndRippleStatus[key];
        }
    });
    isEndRippleStatus = newArray;
}

for(i of document.getElementsByTagName("a")) i.classList.add("ripples");
checkRipples();