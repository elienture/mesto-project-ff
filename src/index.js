import './pages/index.css';
import { initialCards } from './scripts/cards.js';
import {OpenPopup, ClosePopup, handleClick} from './scripts/modal.js';
import { getCard, cardDelete, likeCard } from './scripts/card';


// константы
const placesList = document.querySelector(".places__list");
const card = document.querySelector("#card-template").content;

//Константы для редактирования профиля
const ProfilePopup = document.querySelector('.popup_type_edit');
const ProfilePopupOpened = document.querySelector('.profile__edit-button');
const profileForm = document.forms['edit-profile'];

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const profileNameInput = profileForm.elements.name;
const profileJobInput = profileForm.elements.description;

//Константы для изображения 
const PopupItem = document.querySelector('.popup_type_image');
const PopupImage = document.querySelector('.popup__image');
const PopupCaption = document.querySelector('.popup__caption');

//Константы для добавления карточек
const OpenCardButton = document.querySelector('.profile__add-button');
const AddCardPopup = document.querySelector(".popup_type_new-card");
const AddCardForm = document.forms['new-place'];
const AddCardNameInput = document.querySelector(".popup__input_type_card-name"); 
const AddCardLinkInput = document.querySelector(".popup__input_type_url"); 


// functions

function addCard(item) {
  placesList.append(getCard(item, cardDelete, likeCard));
}

initialCards.forEach((item) => addCard(item));

// Форма редактирофания профиля

ProfilePopupOpened.addEventListener('click', function(evt) {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  OpenPopup(ProfilePopup);
});

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  ClosePopup(ProfilePopup);
};

profileForm.addEventListener('submit', handleFormSubmit);

ProfilePopup.addEventListener('click', handleClick);

// Попап добавление карточки

OpenCardButton.addEventListener('click', function(evt) {
  OpenPopup(AddCardPopup)
});

AddCardPopup.addEventListener('click', handleClick);


//Расширенное изображение

function openImageCard(evt) {
  PopupImage.src = evt.target.src;
  PopupImage.alt = evt.target.alt;
  PopupCaption.textContent = evt.target.alt;
  OpenPopup(PopupItem);
};

PopupItem.addEventListener("click", handleClick);

//Форма для добавления новой карточки 

function CreateCard (event) {
  event.preventDefault();

  const CardData = {
    name: AddCardNameInput.value,
    link: AddCardLinkInput.value
  };
  const NewCard = getCard(CardData, cardDelete, likeCard);
  placesList.prepend(NewCard);
  AddCardForm.reset();
  ClosePopup(AddCardPopup);
};

AddCardForm.addEventListener('submit', CreateCard);
