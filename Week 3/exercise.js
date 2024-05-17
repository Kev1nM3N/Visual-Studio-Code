//https://tarotapi.dev/api/v1/cards

async function renderCards (){
    let response = await fetch(`https://tarotapi.dev/api/v1/cards`);
    let data = await response.json();
    let allCards = data.cards;
    let majorCards = allCards.filter((element) => element.type === "major");

    let storeIn = majorCards.splice(-2, 1);
    storeIn[0].value = "0";
    majorCards.unshift(storeIn[0]);
    majorCards.find((element) => (element.name === "Fortitude" ? (element.name = "Strength") : null));
    majorCards.find((element) => (element.name === "The Last Judgment" ? (element.name = "Judgement") : null));
    let newMajorCards = majorCards;

    let mergedCards = [...newMajorCards, ...allCards.filter((card) => card.type !== "major")];
    let majorMergedCards = mergedCards.filter((element) => element.type === "major");
    let minorMergedCards = mergedCards.filter((element) => element.type === "minor");

    minorMergedCards.find((element) => {
       if (["page", "knight", "queen", "king"].includes(element.value)){
            element.category = "face";
       }
    });

    minorMergedCards.forEach((element) => {
        if (element.category === "face"){
            element.image = `./assets/faceCards/${element.name}.jpg`;
        }
    })
    

    console.log(minorMergedCards);

}

renderCards();