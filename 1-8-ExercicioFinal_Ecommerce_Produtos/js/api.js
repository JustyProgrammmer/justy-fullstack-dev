const URL = "https://fakestoreapi.com";

async function getProductsApi() {
    try {
        var response = await fetch(`${URL}/products`);

        return await response.json();
    } catch (error) {//captura erros de rede (link indisponível, internet, ...)
        return false;
    }
}

async function getProductsByCategoryApi(category) {
    try {
        var response = await fetch(`${URL}/products/category/${category}`);
        return await response.json();
    } catch (error) {//captura erros de rede (link indisponível, internet, ...)
        return false;
    }
}

async function getProductDetailApi(id) {
    try {
        var response = await fetch(`${URL}/products/${id}`);
        return await response.json();
    } catch (error) {//captura erros de rede (link indisponível, internet, ...)
        return false;
    }
}

async function getProducts() {
    try {
        let res = await getProductsApi();
        if (res.length > 0) return res;
        else return false;
    } catch (error) {//captura erros de endpoints (rotas, endpoints, 404, ...)
        return false;
    }
}

async function getProductDetail(id) {
    try {
        let res = await getProductDetailApi(id);
        if (res) return res;
        else return false;
    } catch (error) {//captura erros de endpoints (rotas, endpoints, 404, ...)
        return false;
    }
}

async function getProductsByCategory(category) {
    try {
        let res = await getProductsByCategoryApi(category);
        if (res.length > 0) return res;
        else return false;
    } catch (error) {//captura erros de endpoints (rotas, endpoints, 404, ...)
        return false;
    }
}

async function addToCart(product) {
    try {
        let actualDate = new Date();
        actualDate = actualDate.getUTCFullYear() + '-' + (Number.parseInt(actualDate.getUTCMonth()) + 1) + '-' + actualDate.getUTCDate();
        var response = await fetch(`${URL}/carts/7`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 1,
                date: actualDate,
                products: [{
                    productId: product.id,
                    quantity: 1
                }]
            })
        });
        if (response.status == 200) return true;
    } catch (error) {//captura erros de rede (link indisponível, internet, ...)
        return false;
    }
}