const lensBtn = document.querySelector('.lens');
const delBtn = document.querySelector('.delete');
const label = document.querySelector('.search-lbl');
const input = document.querySelector('.search-input');
const button = document.querySelector('.button-search')
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.submit-text');


function handleLabelEvent(e) {
    if(e.currentTarget !== e.target) {
        lensBtn.classList.toggle('none');
        delBtn.classList.toggle('none');
        input.classList.toggle('display')
        button.classList.toggle('display');
        modal.classList.remove('succesful');
        modal.classList.remove('wrong');

    }
}

function handleButtonEvent(e) {
    if(input.value === "" ) {
        modalText.textContent = `You can't submit an empty search`;
        modal.classList.add('wrong');
        setTimeout(() => modal.classList.remove('wrong'), 1800);
    } else {
        if(modal.classList.contains('wrong')) {
            modal.classList.remove('wrong');
        }
        modalText.textContent = `Looking for ${input.value}...`
        modal.classList.add('succesful')
        setTimeout(() => modal.classList.remove('succesful'), 2500)
        input.value = "";
    }
}

function handleKeyupEvent(e) {
    if(e.key === 'Enter') {
        return handleButtonEvent();
    }
}


label.addEventListener('click', handleLabelEvent);
button.addEventListener('click', handleButtonEvent);
input.addEventListener('keyup', handleKeyupEvent);
