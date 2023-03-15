let navElements = document.querySelectorAll('.nav-element');
let presentation = document.querySelector('#presentation');

for (i=0; i<navElements.length; i++) {
    navElements[i].addEventListener('mouseover' , hideSection);
};

function hideSection() {
    presentation.classList.add('hidden');
    paradeSection.classList.add('hidden');
}

//////////////////////////////////////////////////////////////

let paradeButton = document.querySelector('#parade-button');
let paradeSection = document.querySelector('#odd-parade');

paradeButton.addEventListener('click', showSection);

function showSection() {
    paradeSection.style.visibility = 'visible';
    if (paradeSection.classList.contains('hidden')){
        paradeSection.classList.remove('hidden');
    };
    if (!presentation.classList.contains('hidden')){
        presentation.classList.add('hidden');
    };
};