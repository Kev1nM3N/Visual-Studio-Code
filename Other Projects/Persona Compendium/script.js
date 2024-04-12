// //https://jsonplaceholder.typicode.com/users
let headingRef = document.querySelector(`h2`);

function mapOverList() {
  return `<div class="card">
            <figure class="card__img--wrapper">
                <img src="./assets/arsene figure.jpg" alt="" class="persona__img">
            </figure>

            <p class="persona__name">Arsene</p>
            <p class="persona__game">Persona 5</p>
        </div>`;
}

var personaList = {
  Abbadon: {
    inherits: "Curse",
    item: "Megaton Raid Belt",
    itemr: "God's Hand Belt",
    level: 75,
    arcana: "Judgement",
    elems: ["ab", "ab", "-", "-", "-", "-", "-", "-", "rs", "ab"],
    img: "https://static.wikia.nocookie.net/megamitensei/images/3/39/Abaddon_%28P_O.A.%29.png/revision/latest/scale-to-width-down/250?cb=20200906223219",
  },

  Agathion: {
    inherits: "Electric",
    item: "Zio",
    itemr: "Mazio",
    skillCard: true,
    level: 3,
    arcana: "Chariot",
    elems: ["-", "rs", "-", "-", "rs", "wk", "-", "-", "-", "-"],
  },

  Alice: {
    special: true,
    inherits: "Curse",
    item: "Spiral Hell Ring",
    itemr: "Cursed Ribbon",
    level: 83,
    arcana: "Death",
    elems: ["-", "-", "-", "-", "-", "-", "rs", "rs", "wk", "rp"],
  },
};

console.log(personaList);
