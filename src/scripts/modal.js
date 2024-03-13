export {OpenPopup, ClosePopup, handleClick};


function OpenPopup(element) {
    element.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEsc);
  };

 
function ClosePopup(element) {
    element.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEsc);
  }; 


function handleClick(event) {
    if (event.target.classList.contains('popup_is-opened')) {
        return ClosePopup(event.target);
      }
    
      if (event.target.closest('.popup__close')) {
        return ClosePopup(event.target.closest('.popup'));
      }
    };


function handleEsc(event) {
    if (event.key === 'Escape') {
      ClosePopup(document.querySelector('.popup_is-opened'));
    }
  };  

function handleOverlay(event) {
    if (event.target === event.currentTarget) {
        ClosePopup(event.currentTarget);
      }
    };