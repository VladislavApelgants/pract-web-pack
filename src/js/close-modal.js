import refs from '../js/refs.js';
const {modal, closeModalBtn } = refs;

export function closeModal() {
   closeModalBtn.addEventListener('click', closeModalClick);
    window.addEventListener('keydown', closeModalEsc);
    modal.addEventListener('click', closeModalPiu)
};

export function closeModalClick() {
    modal.classList.remove('is-open'); 
  refresh()
};

export function closeModalEsc(e) {
    if (e.code === 'Escape') {
        modal.classList.remove('is-open'); 
        console.log('huyak');
        refresh();
    };
  
};

export function closeModalPiu(e) {
    if (!e.target.classList.contains('lightbox__image')) {
        modal.classList.remove('is-open');
        refresh();
    };
    
};

export function refresh() {
    modal.removeEventListener('click', closeModalPiu);
    closeModalBtn.removeEventListener('click', closeModalClick);
    window.removeEventListener('keydown', closeModalEsc);
}