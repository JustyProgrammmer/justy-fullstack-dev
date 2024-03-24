function closeDetail() {
    const animeDetail = document.getElementById("anime-detail");
    animeDetail.classList.remove("show-detail");
    animeDetail.classList.add("close-detail");
    const iframe = document.getElementById("iframe");
    iframe.setAttribute('src', "");
}

function openDetail(anime) {
    const animeDetail = document.getElementById("anime-detail");
    animeDetail.classList.remove("close-detail");
    animeDetail.classList.add("show-detail");
}

async function createGridContent() {
    let resTopAnimes = await filterTopAnimes();

    const divContent = createElement("div", {
        class: "card-anime-container"
    });

    resTopAnimes.forEach(anime => {
        let cardAnime = createElement("div", {
            class: "card-anime"
        });

        cardAnime.addEventListener("click", function () {
            createAsideContent(anime);
        }, false);

        let animeImg = createElement("img", {
            src: anime.images.jpg.image_url,
            alt: "Imagem - " + anime.title
        });

        addNextChildToParent(cardAnime, animeImg);

        const animeTitle = createElement("h3");

        addNextChildToParent(animeTitle, anime.title);

        addNextChildToParent(cardAnime, animeTitle);

        addNextChildToParent(divContent, cardAnime);

        return divContent;
    });

    return divContent;
}

function createDivGenre(genres) {
    const divGenre = createElement("div", {
        class: "genres"
    });

    genres.forEach((genre) => {
        let spanGenre = createElement("span");
        addNextChildToParent(spanGenre, genre.name);
        addNextChildToParent(divGenre, spanGenre);
    });

    return divGenre;
}

async function createAsideContent(anime) {
    removeAside();

    console.log(anime)

    const aside = createElement("aside", {
        class: "anime-detail",
        id: "anime-detail"
    });

    let divDetail = createElement("div");

    let spanFechar = createElement("span", {
        class: "close",
        onclick: "closeDetail()"
    });

    addNextChildToParent(spanFechar, "X");

    addNextChildToParent(divDetail, spanFechar);

    let divTrailer = createElement("div");

    const iframe = `<iframe id="iframe" src="${anime.trailer.embed_url || "-"}" style="border:none; width: 100%;" title="Iframe For video trailer" height="380px"></iframe>`;

    addContentToParent(divTrailer, iframe);

    addNextChildToParent(divDetail, divTrailer);

    const animeTitle = createElement("h1");

    addNextChildToParent(animeTitle, (anime && anime.title) || "---");

    addNextChildToParent(divDetail, animeTitle);

    const divDateRate = createElement("div", {
        class: "div-date-rate"
    });

    let spanDate = addNextChildToParent(createElement("span"), (anime && anime.aired.string.split("to")[0]) || "---");

    let spanSep = addNextChildToParent(createElement("span", {
        style: "margin-bottom: 15px;"
    }), "______");

    let spanRate = addNextChildToParent(createElement("span"), (anime && (anime.score + "/10 - " + (anime.score * 10).toFixed(1) + "%")) || "---");

    addNextChildToParent(divDateRate, spanDate);

    addNextChildToParent(divDateRate, spanSep);

    addNextChildToParent(divDateRate, spanRate);

    addNextChildToParent(divDetail, divDateRate);

    const hr1 = createElement("hr");

    addNextChildToParent(divDetail, hr1);

    const divGenres = createDivGenre(anime.genres);

    addNextChildToParent(divDetail, divGenres);

    const hr2 = createElement("hr");

    addNextChildToParent(divDetail, hr2);

    const divSinopse = createElement("div", {
        class: "section-sinopse"
    });

    const h5 = addNextChildToParent(createElement("h5"), "Sinopse");

    const p = addNextChildToParent(createElement("p", {
        title: anime.synopsis
    }), anime && anime.synopsis.substring(0, 500) + " ( ... ler mais)");

    addNextChildToParent(divSinopse, h5);

    addNextChildToParent(divSinopse, p);

    addNextChildToParent(divDetail, divSinopse);

    const hr3 = createElement("hr");

    addNextChildToParent(divDetail, hr3);

    const divSeasonEps = createElement("div", {
        class: "season-eps"
    });

    let spanSeasons = addNextChildToParent(createElement("span"), "Season  :  " + (anime && anime.season) || "---");

    let spanEps = addNextChildToParent(createElement("span"), "Episodes  :  " + (anime && anime.episodes) || "---");

    let spanDuration = addNextChildToParent(createElement("span"), "Duration  :  " + (anime && anime.duration) || "---");

    addNextChildToParent(divSeasonEps, spanSeasons);

    addNextChildToParent(divSeasonEps, spanEps);

    addNextChildToParent(divSeasonEps, spanDuration);

    addNextChildToParent(divDetail, divSeasonEps);

    addNextChildToParent(aside, divDetail);

    appendNextChildToRoot(aside);

    openDetail(anime);
}

(async () => {
    const section = createElement("section");

    const gridContent = await createGridContent();

    addNextChildToParent(section, gridContent);

    appendNextChildToRoot(section);

    createFooter();
})();