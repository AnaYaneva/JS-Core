/**
 * Created by PC on 11.7.2017 г..
 */
function makeCard(face, suit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(face)) {
        throw new Error('Invalid face');
    }
    if (!validSuits.includes(suit)) {
        throw new Errow('Invalid suit');
    }

    let card = {
        face: face,
        suit: suit,
        toString: () => {
            let suitToChar = {
                'S': "\u2660", // ♠
                'H': "\u2665", // ♥
                'D': "\u2666", // ♦
                'C': "\u2663", // ♣
            };
            return `${card.face}${suitToChar[card.suit]}`
        }
    }
    return card;
}

console.log('' + makeCard('A', 'S'));  // A♠
console.log('' + makeCard('10', 'H')); // 10♥
console.log('' + makeCard('2', 'D'));  // 2♦
//console.log('' + makeCard('1', 'C')); // Error
console.log('' + makeCard('4', 'W')); // Error
