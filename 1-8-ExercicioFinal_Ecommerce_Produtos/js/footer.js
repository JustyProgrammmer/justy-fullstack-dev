function createFooter() {
    const contentFooter = `<span> Copyright &nbsp; ${new Date().getUTCFullYear()} </span>`;

    const footer = createElement("footer");

    const divFooter = createElement("div");

    addContentToParent(divFooter, contentFooter);

    addNextChildToParent(footer, divFooter);

    appendNextChildToRoot(footer);
}