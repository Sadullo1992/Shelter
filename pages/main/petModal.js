// Popup
export function petModal(name, img, type, breed, description, age, inoculations, diseases, parasites) {
    let docFragment = document.createDocumentFragment();

    document.body.style.overflow = 'hidden';

    let petmodal = document.createElement('div');
    petmodal.setAttribute('id', 'pet-modal');
    petmodal.classList.add('pet-modal');
    petmodal.addEventListener('click', (e) => {
        if(e.composedPath()[0].id === 'pet-modal') {
            document.body.style.overflow = 'visible';
            petmodal.remove();
        }
    });

    let petmodalContent = document.createElement('div');
    petmodalContent.classList.add('pet-modal-content');

    let closeBtn = document.createElement('button');
    closeBtn.classList.add('btn', 'btn--nav', 'btn-close');
    closeBtn.addEventListener('click', ()=> {
        document.body.style.overflow = 'visible';
        petmodal.remove();
    });

    let closeBtnImg = document.createElement('img');
    closeBtnImg.setAttribute('src', '../../assets/icons/close.svg');
    closeBtnImg.setAttribute('alt', 'close');

    let petImg = document.createElement('img');
    petImg.setAttribute('src', img);
    petImg.setAttribute('alt', name);

    let petmodalTextfield = document.createElement('div');
    petmodalTextfield.classList.add('pet-modal-textfield');

    let h3Name = document.createElement('h3');
    h3Name.classList.add('modal-pet-name');
    h3Name.textContent = name;

    let h5type = document.createElement('h5');
    h5type.classList.add('modal-pet-type');
    h5type.textContent = `${type} - ${breed}`;

    let pDesc = document.createElement('p');
    pDesc.classList.add('modal-pet-desc');
    pDesc.textContent = description;

    let ul = document.createElement('ul');
    ul.classList.add('modal-pet-list');

    let li1 = document.createElement('li');
    li1.innerHTML = `<b>Age:</b> ${age}`;
    let li2 = document.createElement('li');
    li2.innerHTML = `<b>Inoculations:</b> ${inoculations}`;
    let li3 = document.createElement('li');
    li3.innerHTML = `<b>Diseases:</b> ${diseases}`;
    let li4 = document.createElement('li');
    li4.innerHTML = `<b>Parasites:</b> ${parasites}`;

    closeBtn.append(closeBtnImg);
    
    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
    ul.append(li4);

    petmodalTextfield.append(h3Name);
    petmodalTextfield.append(h5type);
    petmodalTextfield.append(pDesc);
    petmodalTextfield.append(ul);

    petmodalContent.append(closeBtn);
    petmodalContent.append(petImg);
    petmodalContent.append(petmodalTextfield);

    petmodal.append(petmodalContent);

    docFragment.append(petmodal);

    document.body.append(docFragment);
}