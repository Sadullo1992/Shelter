import {petModal} from './petModal.js';

export function ourfriendsCard({name, img, type, breed, description, age, inoculations, diseases, parasites}) {
    let docFragment = document.createDocumentFragment();

    let card = document.createElement('div');
    card.classList.add('ourfriends-card');
    card.addEventListener('click', () => petModal(name, img, type, breed, description, age, inoculations, diseases, parasites));

    let imgCard = document.createElement('img');
    imgCard.setAttribute('src', img);
    imgCard.setAttribute('alt', name);

    let pName = document.createElement('p');
    pName.classList.add('ourfriends-pet-name');
    pName.textContent = name;

    let moreBtn = document.createElement('a');
    // moreBtn.setAttribute('href', '');
    moreBtn.classList.add('btn', 'btn--outline');
    moreBtn.textContent = 'Learn more';

    card.append(imgCard);
    card.append(pName);
    card.append(moreBtn);

    docFragment.append(card);

    return docFragment;
}