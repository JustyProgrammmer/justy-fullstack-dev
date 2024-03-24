const root = document.getElementById("root");

function createElement(type, props = undefined) {
    const newElement = document.createElement(type);
    if (props) {
        const keys = Object.keys(props);
        keys.forEach(key => {
            newElement.setAttribute(key, props[key]);
        });
    }
    return newElement;
}

function addNextChildToParent(parent, child) {
    parent.append(child);
    return parent;
}

function addContentToParent(parent, content) {
    parent.innerHTML = parent.innerHTML + content;
    return parent;
}

function appendNextChildToRoot(child) {
    root.append(child);
}

function removeAside() {
    let aside = document.getElementById("anime-detail");
    if (aside) aside.remove();
}

function prependChildToRoot(child) {
    root.prepend(child);
}