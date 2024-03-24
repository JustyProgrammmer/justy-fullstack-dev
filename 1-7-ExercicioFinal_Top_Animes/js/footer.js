function createFooter() {
    const contentFooter = `<span> ${new Date().getUTCFullYear()} </span>,&nbsp;<span>&copy</span>,&nbsp;<span>Justino Sachilombo</span>`;

    const footer = createElement("footer");

    const divFooter = createElement("div");

    addContentToParent(divFooter, contentFooter);

    addNextChildToParent(footer, divFooter);

    appendNextChildToRoot(footer);
}