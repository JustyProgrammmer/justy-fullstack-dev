function createMenuItems(listItems) {
    let nav = createElement("nav");

    // É apenas uma seta para baixo hehehe :)
    let iconeSetaDown = `<svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="10" viewBox="0 0 9 5" fill="none"> <path d="M1 0.5L3.74742 3.63991C4.14584 4.09524 4.85417 4.09524 5.25258 3.63991L8 0.5" stroke="white" stroke-linecap="round" /></svg>`;

    listItems.forEach(item => {
        let nextLinkMenuItem = createElement("a", {
            href: "#"
        });

        let nextMenuItem = createElement("span");

        addNextChildToParent(nextMenuItem, item.desc);

        addNextChildToParent(nextLinkMenuItem, nextMenuItem);

        addNextChildToParent(nextLinkMenuItem, addContentToParent(createElement("span"), iconeSetaDown));

        addNextChildToParent(nav, nextLinkMenuItem);
    });

    return nav;
}

const header = createElement("header");

const imgCapa = createElement("img", {
    src: "assets/capa.png",
    alt: "Capa",
    class: "capa"
});

let divMenu = createElement("div", {
    class: "header-menu"
});

let spanLogo = createElement("span", {
    class: "logo"
});

// É apenas um logo hehehe :)
let logo = 'To<span>P</span> Anim<span class="span-e">e</span><span>s</span>';

let nav = createMenuItems([
    {
        desc: "Categorias"
    },
    {
        desc: "Dublado"
    },
    {
        desc: "Legendado"
    },
    {
        desc: "Mais Vistos"
    },
    {
        desc: "Assistir Online"
    },
]);

addNextChildToParent(header, imgCapa);

addContentToParent(spanLogo, logo);

addNextChildToParent(divMenu, spanLogo);

addNextChildToParent(divMenu, nav);

addNextChildToParent(header, divMenu);

prependChildToRoot(header);