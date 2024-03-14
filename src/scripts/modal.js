function openPopup(element) {
    element.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEsc);
  };

 
function closePopup(element) {
    element.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEsc);
  }; 


function handleClick(event) {
    if (event.target.classList.contains('popup_is-opened')) {
        return closePopup(event.target);
      }
    
      if (event.target.closest('.popup__close')) {
        return closePopup(event.target.closest('.popup'));
      }
    };


function handleEsc(event) {
    if (event.key === 'Escape') {
      closePopup(document.querySelector('.popup_is-opened'));
    }
  };  

  export {openPopup, closePopup, handleClick};