async function addProductToCart(product) {
    const success = await addToCart(product);
    if (success) {
        const cartTotal = document.getElementById("cartTotal");
        const cartTotalNumber = cartTotal.innerHTML;
        const newTotal = Number.parseInt(cartTotalNumber) + 1;
        cartTotal.innerHTML = newTotal;
    } else {
        alert("Não foi possivel adicionar o producto ao carrinho, porfavor tente novamente!");
    }
}

async function goToProductPage(productId) {
    window.location.href = `product.html?id=${productId}`;
}

async function createGridContent() {
    let resProducts = await getProducts();

    const divContent = createElement("div", {
        class: "card-product-container"
    });

    resProducts.forEach(product => {
        let cardProduct = createElement("div", {
            class: "card-product"
        });

        let productImg = createElement("img", {
            src: product.image,
            alt: "Imagem - " + product.title
        });

        let addToCartButton = createElement("button", {
            class: "add-to-cart",
        });

        addToCartButton.addEventListener("click", function () {
            addProductToCart(product);
        }, false);

        addContentToParent(addToCartButton, "Add to cart");

        addNextChildToParent(cardProduct, productImg);

        const productTitle = createElement("h3");

        productTitle.addEventListener("click", function () {
            goToProductPage(product.id);
        }, false);

        addNextChildToParent(productTitle, product.title);

        addNextChildToParent(cardProduct, productTitle);

        addNextChildToParent(cardProduct, addToCartButton);

        addNextChildToParent(divContent, cardProduct);

        return divContent;
    });

    return divContent;
}

(async () => {
    const section = createElement("section");

    const gridContent = await createGridContent();

    addNextChildToParent(section, gridContent);

    appendNextChildToRoot(section);

    createFooter();
})();