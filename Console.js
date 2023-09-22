ConsoleController = {
    Console(root, prms) { return {
        root: root,
        params: prms,

        set() {
            let _c = document.getElementById(root);
            _c.innerHTML = `<h2 id="title.${this.root}"></h2>`;
            for(prm of this.params) {
                _c.innerHTML += `<div class="box indent">${prm.name}: ${this.bindPrm(prm)}<br/></div>`;
            }

            _c.innerHTML += `<div class="box indent" id="${this.exeID()}"></div>`;
            _c.innerHTML += `<div id="${this.displayID()}"></div>`;
        },

        bindPrm(prm) { return `<input type="${prm.type}" id="${prm.root}.${prm.name}"></input>`; },

        id(prm) { return `${prm.root}.${prm.name}`; },
        displayID() { return `display.${this.root}`; },
        exeID() { return `exe.${this.root}`;}
    };},

    Param(root, name, type) { return { name: name, type: type, root: root }; }
};