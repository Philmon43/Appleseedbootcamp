let level = 14;
const memoryGame = {
    container: document.querySelector(".container"),
    cards: [],
    shufled: []
}

//creat cards
const cardTemplate = (num) => {
    for (let i = 0; i < num; i++) {
        let newCrad = document.createElement("div");
        newCrad.classList.add("card");
        newCrad.classList.add("card-num-" + i);
        newCrad.classList.add("folded");
        memoryGame.cards.push(newCrad)
    }
}

//duplicate cards arr
const duplicateCards = () => {
    let newCard = memoryGame.cards.concat([...memoryGame.cards]);
    memoryGame.shufled = newCard
}

//shufle cards arr
const shufl = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let x = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
    }
    return arr
}
cardTemplate(level);
duplicateCards();
shufl(memoryGame.shufled);
//render Cards to dom
const renderCards = () => {
    memoryGame.container.style = `grid-template-columns: repeat(${Math.ceil(4)}, 1fr)`
    for (let i = 0; i < memoryGame.shufled.length; i++) {
        memoryGame.container.appendChild(memoryGame.shufled[i])
    }
}
renderCards()
