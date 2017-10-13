/**
 * Created by PC on 11.7.2017 г..
 */
function printDeckOfCards(arr) {

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

    let deck=[];


        for (let card of arr) {
            let face = card.slice(-1);
            let suit = card.slice(0, card.length - 1);
            try {
                deck.push(makeCard(face, suit));
            } catch (err) {
                console.log(`Invalid card: ${card}`);
                return;
            }
        }
    return deck.join(' ');
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
// A♠ 10♦ K♥ 2♣
console.log(printDeckOfCards(['5S', '3D', 'QD', '1C']));
// Invalid card: 1C
console.log(printDeckOfCards(['3D', 'JC', '2S', '10H', '5X']));
// Invalid card: 5X
