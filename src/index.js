// константы
const placesList = document.querySelector(".places__list");
const card = document.querySelector("#card-template").content;

// functions

function getCard(item, cardDelete) {
  const cardElement = card.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");

  cardImage.src = item.link;
  cardTitle.textContent = item.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    cardDelete(cardElement);
  });

  return cardElement;
}

// @todo: Функция удаления карточки

function cardDelete(item) {
  item.remove();
}

function addCard(item) {
  placesList.append(getCard(item, cardDelete));
}

initialCards.forEach((item) => addCard(item));
