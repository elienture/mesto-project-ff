export {getCard, cardDelete, likeCard};

const card = document.querySelector("#card-template").content;

function getCard(item, cardDelete, likeCard) {
    const cardElement = card.querySelector(".card").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
  
    cardImage.src = item.link;
    cardImage.alt = item.name
    cardTitle.textContent = item.name;
  
    const likeButton = cardElement.querySelector(".card__like-button");
    likeButton.addEventListener("click", likeCard);
  
    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", function () {
      cardDelete(cardElement);
    });
  
    cardImage.addEventListener("click", openImageCard);
  
    return cardElement;
  }

  // Функция удаления карточки
  
  function cardDelete(item) {
    item.remove();
  }
  
  // Функция лайка карточки
  function likeCard(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
  }