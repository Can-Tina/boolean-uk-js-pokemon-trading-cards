// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

//AAAAAAAAAAAAAAA I DID IT!!

console.log(data);

const cardArea = document.querySelector(".cards")

appendToElement = (element, parentElement) => parentElement.append(element)

function createElementWClass(element = "", className = "", innerText = "") {
    const tempEl = document.createElement(element);
    tempEl.classList.add(className);
    tempEl.innerText = String(innerText);
    return tempEl;
}

function createElementWOClass(element = "", innerText = "") {
    const tempEl = document.createElement(element);
    tempEl.innerText = String(innerText);
    return tempEl;
}

data.forEach(element => {

    const cardSpace = createElementWClass("li", "card")
    appendToElement(cardSpace, cardArea)

    const cardTitle = createElementWClass("h2", "card--title", element.name)
    appendToElement(cardTitle, cardSpace)

    const cardImage = createElementWClass("img", "card--image")
    cardImage.setAttribute("src", element.sprites.front_default)
    cardImage.setAttribute("height", 256)
    appendToElement(cardImage, cardSpace)

    const cardText = createElementWClass("ul", "card--text")
    appendToElement(cardText, cardSpace)


    const cardTextHP = createElementWOClass("li");
    const cardTextATC = createElementWOClass("li");
    const cardTextDEF = createElementWOClass("li");
    const cardTextSPA = createElementWOClass("li");
    const cardTextSPD = createElementWOClass("li");
    const cardTextSP = createElementWOClass("li");

    cardTextHP.innerText = "HP: " + element.stats[0].base_stat;
    cardTextATC.innerText = "ATTACK: " + element.stats[0].base_stat;
    cardTextDEF.innerText = "DEFENSE: " + element.stats[0].base_stat;
    cardTextSPA.innerText = "SPECIAL-ATTACK: " + element.stats[0].base_stat;
    cardTextSPD.innerText = "SPECIAL-DEFENSE: " + element.stats[0].base_stat;
    cardTextSP.innerText = "SPEED: " + element.stats[0].base_stat;

    appendToElement(cardTextHP, cardText)
    appendToElement(cardTextATC, cardText)
    appendToElement(cardTextDEF, cardText)
    appendToElement(cardTextSPA, cardText)
    appendToElement(cardTextSPD, cardText)
    appendToElement(cardTextSP, cardText)

    console.log("card_created")

});


/*
const cardArea = document.querySelector(".cards")
const card = document.querySelector(".card");
const cardText = document.querySelector(".card--text")
const cardImage = document.querySelector(".card--imag")

const cardTitle = document.createElement("h2");
const cardImg = document.createElement("img");

const cardTextHP = document.createElement("li");
const cardTextATC = document.createElement("li");
const cardTextDEF = document.createElement("li");
const cardTextSPA = document.createElement("li");
const cardTextSPD = document.createElement("li");
const cardTextSP = document.createElement("li");




function createTextContent(cardValue) {
    cardTitle.innerText = data[cardValue].name;
    cardImg.src = data[cardValue].sprites.front_default;
    cardTextHP.innerText = "HP: " + data[cardValue].stats[0].base_stat;
    cardTextATC.innerText = "ATTACK: " + data[cardValue].stats[1].base_stat;
    cardTextDEF.innerText = "DEFENSE: " + data[cardValue].stats[2].base_stat;
    cardTextSPA.innerText = "SPECIAL-ATTACK: " + data[cardValue].stats[3].base_stat;
    cardTextSPD.innerText = "SPECIAL-DEFENSE: " + data[cardValue].stats[4].base_stat;
    cardTextSP.innerText = "SPEED: " + data[cardValue].stats[5].base_stat;
};



for (let i = 0; i < data.length; i++) {
    createTextContent(i)
    card.prepend(cardTitle, cardImg)
    cardText.prepend(cardTextHP, cardTextATC, cardTextDEF, cardTextSPA, cardTextSPD, cardTextSP)
};

//cardText.prepend(cardLabelHP, cardTextHP, cardLabelATC, cardTextATC, cardLabelDEF, cardTextDEF, cardLabelSPA, cardTextSPA, cardLabelSPD, cardTextSPD, cardLabelSP, cardTextSP)




function useTemplate() {

};
*/



