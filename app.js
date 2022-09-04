// DO NOT DELETE ANY OF THE EXISTING CODE IN THIS FILE

//Change the text color of all nav links to red

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM has been fully loaded");
  console.table(animals);

  const navItemes = document.querySelectorAll(".nav__item");
  console.log(navItemes);

  navItemes.forEach((nav_item) => {
    nav_item.style.color = "red";
  });
  //Your code here
  //Select the cards container div by its class
  const cardsContainer = document.querySelector(".cards-container");

  //Iterate over the array of animal data and for each animal, use DOM manipulation to create a card that meets the following requirements:
  animals.forEach((animal) => {
    const newCard = document.createElement("div");
    //The card's contents are contained by a parent div element with a class attribute of card as well as a style attribute that sets the card's width to 18rem
    newCard.className = "card";
    newCard.style.width = "18rem";
    //Card has an image element with attributes, including a class of card-img-top, src of the animal's image url
    const topImage = document.createElement("img");
    topImage.src = animal.image;
    topImage.alt = "animal image";
    topImage.className = "card-img-top";
    newCard.appendChild(topImage);
    //Card has a child div with a class of card-body
    const newBody = document.createElement("div");
    newBody.className = "card-body";
    //In the card's body, there is a heading element with a class of card-title and the animal's name as text
    const newHeading = document.createElement('h3');
    newHeading.className = 'card-title';
    newHeading.textContent = animal.name;
    newCard.appendChild(newHeading);
    //Below the card title, there is a paragraph element that displays the animal's description
    newPar = document.createElement('p')
    newPar.textContent = animal.description;
    newCard.appendChild(newPar);
    cardsContainer.appendChild(newCard);
  });

});
