export default function createItemToMyList(title, image, description, category, seria = '-', name, country, city) {
return `<li>
        <h3>${title}</h3>
        <img src="${image}" alt="${description}" />
        <p>${description}</p>
        <p><span>${category}</span>:<span>${seria}</span></p>
        <div>
          <h4>Автор:</h4>
          <p>${name}</p>
          <p><span>${country}</span><span>${city}</span></p>
        </div>
      </li>`;
    }