function backToHome() {
    window.location.href = "index.html";
}

async function setProductDetails(id = "") {

    if (id === "") {
        id = window.location.href.split("?")[1].split("=")[1];
    }

    const product = await getProductDetail(id);

    const htmlProductDetail = `<div>
                                <img src="${product.image}" height="375px" />
                               </div>
                               <div class="details">
                                            <h1>${product.title}</h1>
                                            <h2>${product.price} $</h2>
                                            <h3><strong>Categoria</strong>: ${product.category}</h3>
                                            <div class="rate">
                                                <h3><strong>Classificação</strong>: ${product.rating.rate} / 5</h3>
                                                <span class="sep-classif">|</span>
                                                <span>${product.rating.count} feedbacks</span>
                                            </div>

                                            <hr>

                                            <div class="description">
                                                <h4>Descrição</h4>
                                                <p>
                                                ${product.description}
                                                </p>
                                            </div>
                                    </div>
                                </div>`;

    const productDetail = document.getElementById("product-detail-info");

    productDetail.innerHTML = "";

    addContentToParent(productDetail, htmlProductDetail);

    setRelatedProducts(product.category);
}

async function setRelatedProducts(category) {
    const resRelatedProducts = await getProductsByCategory(category);

    const relatedProducts = document.getElementById("related-products");

    relatedProducts.innerHTML = "";

    let i = 0;

    if (resRelatedProducts.length > 0) {

        resRelatedProducts.forEach(product => {

            i++;

            if (i <= 3) {
                const htmlRelatedProducts = `<div class="card-related-product" onclick="setProductDetails(${product.id})">
                                                <img src="${product.image}" alt="Capa">
                                                <h3>${product.title}</h3>
                                            </div>`;

                addContentToParent(relatedProducts, htmlRelatedProducts);
            }
        });
    }
}

(async () => {
    await setProductDetails();

    createFooter();
})();