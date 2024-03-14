import './pages/index.css';
import { initialCards } from './scripts/cards.js';
import { openPopup, closePopup, handleClick } from './scripts/modal.js';
import { getCard, cardDelete, likeCard } from './scripts/card.js';


// константы
const placesList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

//Константы для редактирования профиля
const profilePopup = document.querySelector('.popup_type_edit');
const profileButton = document.querySelector('.profile__edit-button');
const profileForm = document.forms['edit-profile'];

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const profileNameInput = profileForm.elements.name;
const profileJobInput = profileForm.elements.description;

//Константы для изображения 
const popupItem = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

//Константы для добавления карточек
const openCardButton = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector(".popup_type_new-card");
const addCardForm = document.forms['new-place'];
const addCardNameInput = document.querySelector(".popup__input_type_card-name"); 
const addCardLinkInput = document.querySelector(".popup__input_type_url"); 


// functions

function addCard(item) {
  placesList.append(getCard(item, cardDelete, likeCard, openImageCard));
}

initialCards.forEach((item) => addCard(item));

// Форма редактирофания профиля

profileButton.addEventListener('click', function(evt) {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  openPopup(profilePopup);
});

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(profilePopup);
};

profileForm.addEventListener('submit', handleProfileFormSubmit);

profilePopup.addEventListener('click', handleClick);

// Попап добавление карточки

openCardButton.addEventListener('click', function(evt) {
  openPopup(addCardPopup)
});

addCardPopup.addEventListener('click', handleClick);


//Расширенное изображение

function openImageCard(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
  openPopup(popupItem);
};

popupItem.addEventListener("click", handleClick);

//Форма для добавления новой карточки 

function createCard (event) {
  event.preventDefault();

  const cardData = {
    name: addCardNameInput.value,
    link: addCardLinkInput.value
  };
  const newCard = getCard(cardData, cardDelete, likeCard);
  placesList.prepend(newCard);
  addCardForm.reset();
  closePopup(addCardPopup);
};

addCardForm.addEventListener('submit', createCard);
