async function getAnimes() {
    try {
        var response = await fetch('https://api.jikan.moe/v4/top/anime');

        return await response.json();
    } catch (error) {//captura erros de rede (link indisponível, internet, ...)
        return false;
    }
}

async function filterTopAnimes() {
    try {
        let res = await getAnimes();

        if (res) {
            let topAnimes = [...res.data.filter(a => a.score > 9)];

            if (topAnimes.length > 0) return topAnimes;

            else return [];
        }
        else return false;
    } catch (error) {//captura erros de endpoints (rotas, endpoints, 404, ...)
        return false;
    }
}