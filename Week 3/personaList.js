// derived partly from https://github.com/aqiu384/aqiu384.github.io/blob/master/p5-tool/js/full_compendium.js
var personaMap = {
    "Abaddon": {
        "inherits": "Curse",
        "item": "Makarakarn",
        "skillCard": true,
        "arcana": "Judgement",
        "level": 74,
        "stats": [51, 38, 58, 43, 39],
        "elems": ["ab", "ab", "-", "-", "-", "-", "wk", "wk", "-", "ab"],
        "skills": {
            "Absorb Phys": 79,
            "Deathbound": 0,
            "Gigantomachia": 80,
            "Makarakarn": 0,
            "Spirit Drain": 0,
            "Survival Trick": 77
        }
    },
    "Agathion": {
        "inherits": "Electric",
        "item": "Zio",
        "skillCard": true,
        "arcana": "Chariot",
        "level": 3,
        "stats": [3, 4, 5, 7, 3],
        "elems": ["-", "rs", "-", "-", "rs", "wk", "-", "-", "-", "-"],
        "skills": {"Baisudi": 0, "Dia": 0, "Dodge Elec": 8, "Lunge": 4, "Rakukaja": 6, "Zio": 0},
        "personality": "Timid",
        "area": "Aiyatsbus",
        "floor": "L1"
    },
    "Alice": {
        "inherits": "Curse",
        "item": "Mamudoon",
        "skillCard": true,
        "arcana": "Death",
        "level": 79,
        "stats": [43, 59, 40, 57, 45],
        "elems": ["-", "-", "-", "-", "-", "-", "rs", "rs", "wk", "rp"],
        "skills": {
            "Dekunda": 0,
            "Die For Me!": 81,
            "Mamudoon": 0,
            "Megidolaon": 82,
            "Concentrate": 83,
            "Mudo Boost": 0,
            "Survival Trick": 84
        },
        "special": true,
        "max": true
    },
    "Ame-no-Uzume": {
        "inherits": "Almighty",
        "item": "Senryou Yakusha",
        "arcana": "Lovers",
        "level": 29,
        "stats": [15, 22, 19, 20, 18],
        "elems": ["-", "-", "ab", "-", "-", "-", "wk", "-", "-", "-"],
        "skills": {"Bufula": 0, "Diarama": 0, "Divine Grace": 32, "Mazio": 0, "Shock Boost": 34, "Tentarafoo": 31},
        "area": "Chemdah",
        "floor": "L6 & 7"
    },
    "Ananta": {
        "inherits": "Nuclear",
        "item": "Hua Khon",
        "arcana": "Star",
        "level": 43,
        "stats": [24, 30, 31, 26, 25],
        "elems": ["-", "-", "-", "ab", "wk", "-", "-", "-", "-", "-"],
        "skills": {
            "Abysmal Surge": 45,
            "Defense Master": 0,
            "Elec Wall": 0,
            "Freidyne": 48,
            "Growth 2": 46,
            "Mafreila": 0,
            "Marakukaja": 47,
            "Nuke Boost": 49
        }
    },
    "Andras": {
        "inherits": "Ice",
        "item": "Ice Break",
        "skillCard": true,
        "arcana": "Devil",
        "level": 10,
        "stats": [5, 9, 7, 10, 6],
        "elems": ["-", "wk", "wk", "rs", "-", "-", "-", "-", "-", "-"],
        "skills": {"Apt Pupil": 13, "Bufu": 0, "Ice Break": 15, "Mabufu": 14, "Rakunda": 0, "Tarukaja": 11},
        "personality": "Timid",
        "area": "Aiyatsbus",
        "floor": "L5 & 6"
    },
    "Angel": {
        "inherits": "Bless",
        "item": "Baisudi",
        "skillCard": true,
        "arcana": "Justice",
        "level": 12,
        "stats": [7, 9, 9, 9, 9],
        "elems": ["-", "-", "-", "-", "rs", "-", "-", "-", "nu", "wk"],
        "skills": {"Baisudi": 14, "Dazzler": 0, "Dekunda": 17, "Dia": 0, "Dodge Curse": 15, "Hama": 0, "Kouha": 13},
        "personality": "Irritable",
        "area": "Aiyatsbus / Kaitul",
        "floor": "L5 & 6 / L1-4"
    },
    "Anubis": {
        "inherits": "Almighty",
        "item": "Makouha",
        "skillCard": true,
        "arcana": "Judgement",
        "level": 37,
        "stats": [23, 26, 24, 22, 23],
        "elems": ["-", "-", "-", "-", "-", "-", "-", "-", "nu", "nu"],
        "skills": {
            "Dekunda": 40,
            "Eiga": 43,
            "Hamaon": 0,
            "Makouha": 0,
            "Mudoon": 0,
            "Null Fear": 39,
            "Resist Bless": 41
        },
        "personality": "Gloomy",
        "area": "Akzeriyyuth",
        "floor": "L10 & 11"
    },
}

let personaArray = [
    {
        personaName: "Abbadon",
        "inherits": "Curse",
        "item": "Makarakarn",
        "skillCard": true,
        "arcana": "Judgement",
        "level": 74,
        "stats": [51, 38, 58, 43, 39],
        "elems": ["ab", "ab", "-", "-", "-", "-", "wk", "wk", "-", "ab"],
        "skills": {
            "Absorb Phys": 79,
            "Deathbound": 0,
            "Gigantomachia": 80,
            "Makarakarn": 0,
            "Spirit Drain": 0,
            "Survival Trick": 77
        }
    },
    {
        personaName: "Agathion",
        "inherits": "Electric",
        "item": "Zio",
        "skillCard": true,
        "arcana": "Chariot",
        "level": 3,
        "stats": [3, 4, 5, 7, 3],
        "elems": ["-", "rs", "-", "-", "rs", "wk", "-", "-", "-", "-"],
        "skills": {"Baisudi": 0, "Dia": 0, "Dodge Elec": 8, "Lunge": 4, "Rakukaja": 6, "Zio": 0},
        "personality": "Timid",
        "area": "Aiyatsbus",
        "floor": "L1"
    },
    {
        personaName: "Alice",
        "inherits": "Curse",
        "item": "Mamudoon",
        "skillCard": true,
        "arcana": "Death",
        "level": 79,
        "stats": [43, 59, 40, 57, 45],
        "elems": ["-", "-", "-", "-", "-", "-", "rs", "rs", "wk", "rp"],
        "skills": {
            "Dekunda": 0,
            "Die For Me!": 81,
            "Mamudoon": 0,
            "Megidolaon": 82,
            "Concentrate": 83,
            "Mudo Boost": 0,
            "Survival Trick": 84
        },
        "special": true,
        "max": true
    },
    {
        personaName: "Ame-no-Uzume",
        "inherits": "Almighty",
        "item": "Senryou Yakusha",
        "arcana": "Lovers",
        "level": 29,
        "stats": [15, 22, 19, 20, 18],
        "elems": ["-", "-", "ab", "-", "-", "-", "wk", "-", "-", "-"],
        "skills": {"Bufula": 0, "Diarama": 0, "Divine Grace": 32, "Mazio": 0, "Shock Boost": 34, "Tentarafoo": 31},
        "area": "Chemdah",
        "floor": "L6 & 7"
    },
    {
        personaName: "Ananta",
        "inherits": "Nuclear",
        "item": "Hua Khon",
        "arcana": "Star",
        "level": 43,
        "stats": [24, 30, 31, 26, 25],
        "elems": ["-", "-", "-", "ab", "wk", "-", "-", "-", "-", "-"],
        "skills": {
            "Abysmal Surge": 45,
            "Defense Master": 0,
            "Elec Wall": 0,
            "Freidyne": 48,
            "Growth 2": 46,
            "Mafreila": 0,
            "Marakukaja": 47,
            "Nuke Boost": 49
        }
    },
    {
        personaName: "Andras",
        "inherits": "Ice",
        "item": "Ice Break",
        "skillCard": true,
        "arcana": "Devil",
        "level": 10,
        "stats": [5, 9, 7, 10, 6],
        "elems": ["-", "wk", "wk", "rs", "-", "-", "-", "-", "-", "-"],
        "skills": {"Apt Pupil": 13, "Bufu": 0, "Ice Break": 15, "Mabufu": 14, "Rakunda": 0, "Tarukaja": 11},
        "personality": "Timid",
        "area": "Aiyatsbus",
        "floor": "L5 & 6"
    },
    {
        personaName: "Angel",
        "inherits": "Bless",
        "item": "Baisudi",
        "skillCard": true,
        "arcana": "Justice",
        "level": 12,
        "stats": [7, 9, 9, 9, 9],
        "elems": ["-", "-", "-", "-", "rs", "-", "-", "-", "nu", "wk"],
        "skills": {"Baisudi": 14, "Dazzler": 0, "Dekunda": 17, "Dia": 0, "Dodge Curse": 15, "Hama": 0, "Kouha": 13},
        "personality": "Irritable",
        "area": "Aiyatsbus / Kaitul",
        "floor": "L5 & 6 / L1-4"
    },
    {
        personaName: "Anubis",
        "inherits": "Almighty",
        "item": "Makouha",
        "skillCard": true,
        "arcana": "Judgement",
        "level": 37,
        "stats": [23, 26, 24, 22, 23],
        "elems": ["-", "-", "-", "-", "-", "-", "-", "-", "nu", "nu"],
        "skills": {
            "Dekunda": 40,
            "Eiga": 43,
            "Hamaon": 0,
            "Makouha": 0,
            "Mudoon": 0,
            "Null Fear": 39,
            "Resist Bless": 41
        },
        "personality": "Gloomy",
        "area": "Akzeriyyuth",
        "floor": "L10 & 11"
    },
]