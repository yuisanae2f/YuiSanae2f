tent.prototype.box = function(id) {
    let rtn = this.tent(id, "div");
    rtn.pos().style.backgroundColor = 'rgba(150, 150, 150, 0.1)';
    rtn.pos().style.marginBottom = '20px';
    rtn.pos().style.marginTop = '20px';
    rtn.pos().style.borderRadius = '15px';
    rtn.pos().style.padding = '15px';
    return rtn;
}

tent.prototype.tab = function(id, type = 'div', pad = '15px') {
    let rtn = this.tent(id, type);
    rtn.pos().style.paddingLeft = pad;
    return rtn;
}