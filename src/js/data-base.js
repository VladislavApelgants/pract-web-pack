import photoAray from '../db/photos.js';
// import addItemFunc from '../js/create-item';
import createElemToJs from '../js/createElemToJs';

import refs from '../js/refs.js';
const { list, modal, overlay, boxContent, modalImage, closeModalBtn } = refs;

import {closeModal} from '../js/close-modal';




list.addEventListener('click', (e) => {
    if (e.target.nodeName === 'IMG') {
        modal.classList.add('is-open');
        modalImage.src = e.target.src;
        closeModal()
    }
    
})



// деструктуризация итерируемого объекта перед вызвом функции создания разметки
const result = photoAray.map((ar) => {
    const { title, image, description, category, seria, author: { name, country, city } } = ar;

    const item = createElemToJs(title, image, description, category, seria, name, country, city);

    return item;
});
// console.log(list);
// const addItem = result.join('');
// list.insertAdjacentHTML('beforeend', addItem)

list.append(...result)