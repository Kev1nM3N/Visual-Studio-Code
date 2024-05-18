//https://tarotapi.dev/api/v1/cards

let cardList = document.querySelector(`.card__list`);

async function renderCards (filter){
    let response = await fetch(`https://tarotapi.dev/api/v1/cards`);
    let data = await response.json();
    let allCards = data.cards;
    let onlyMajorCards = allCards.filter((element) => element.type === "major");

    //editing the cards to my liking

    let storeIn = onlyMajorCards.splice(-2, 1);
    storeIn[0].value = "0";
    onlyMajorCards.unshift(storeIn[0]);
    onlyMajorCards.find((element) => (element.name === "Fortitude" ? (element.name = "Strength") : null));
    onlyMajorCards.find((element) => (element.name === "The Last Judgment" ? (element.name = "Judgement") : null));
    let newMajorCards = onlyMajorCards;

    let mergedCards = [...newMajorCards, ...allCards.filter((card) => card.type !== "major")];
    let majorMergedCards = mergedCards.filter((element) => element.type === "major");
    let minorMergedCards = mergedCards.filter((element) => element.type === "minor");

    minorMergedCards.find((element) => {
        if (["page", "knight", "queen", "king"].includes(element.value)){
             element.category = "face";
        }
    });

    let faceMergedCards = minorMergedCards.filter((element) => element.category);

    //now adding images to every card

    mergedCards.forEach((card) => {
        if (card.type === "major") {
            card.image = `./assets/tarotImages/majorArcana/${card.name}.jpg`;
        }
        if (card.type === "minor"){
            if (!card.category){
                card.image = `./assets/tarotImages/minorArcana/${card.name}.jpg`;
            }
            else if (card.category){
                card.image = `./assets/tarotImages/faceImages/${card.name}.jpg`
            }
        }
    })
    console.log(mergedCards);

    //Editing the DOM
    cardList.innerHTML = mergedCards.map((element) => renderCardsHTML(element)).join(``);

    if (filter === 'MAJOR'){
        cardList.innerHTML = majorMergedCards.map((element) => renderCardsHTML(element)).join(``);
    }
    else if (filter === 'MINOR'){
        cardList.innerHTML = minorMergedCards.map((element) => renderCardsHTML(element)).join(``);
    }
    else if (filter === 'FACE'){
        cardList.innerHTML = faceMergedCards.map((element) => renderCardsHTML(element)).join(``);
    }
}

renderCards();

function renderCardsHTML (element) {
    return `<div class="card">
                <figure class="card__img--wrapper">
                    <img src="./assets/Tarot back design.jpg" alt="" class="tarot__frontimg">
                    <img src="${element.image}" alt="" class="tarot__backimg">
                </figure>

                <p class="tarot__name">${element.name}</p>
                <p class="tarot__category">${element.type.toUpperCase()}</p>
                <p class="tarot__number">${element.value}</p>
            </div>`
}

function filterCards (event){
    renderCards(event.target.value)
}