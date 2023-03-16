//VARIABLES
let homeButton = document.querySelector('#home-button');

let navElements = document.querySelectorAll('.nav-element');

let home = document.querySelector('#home');

let paradeButton = document.querySelector('#parade-button');
let paradeSection = document.querySelector('#odd-parade');
let paradeSlider = document.querySelector('.slides-wrapper');
let paradeSlides = document.querySelectorAll('.slide');

let musicDiv = document.querySelector('#music');
let audioBackground = document.querySelector('#audio-background');
let audioElement = document.querySelector('#music audio');



//EVENT LISTENERS
homeButton.addEventListener('click', showHome)

for (i=0; i<navElements.length; i++) {
    navElements[i].addEventListener('mouseover' , hideHome);
};

paradeButton.addEventListener('click', showParade);

audioElement.addEventListener('pause', pauseParade);
audioElement.addEventListener('play', playParade);



//FUNCTIONS
//hides home page when hovering names in menu
function hideHome() {
    home.style.display = 'none';
    paradeSection.style.display = 'none';
};
//shows home page when clicking home icon and hiddes audio section if already visible
function showHome(){
    home.style.display = 'block';
    paradeSection.style.display = 'none';
    if(musicDiv.style.display === 'flex') {
        audioBackground.classList.add('hide-to-right'); 
        audioElement.classList.add('hide-to-right');    
    }
}

//shows parade section when clicking button 'Odd Parade" and moves audio section to full width
function showParade() {
    home.style.display = 'none';
    paradeSection.style.display = 'block';
    musicDiv.style.display = 'flex';
    audioElement.play(); 
    if(audioBackground.classList.contains('hide-to-right')) {
        audioBackground.classList.remove('hide-to-right');
        audioElement.classList.remove('hide-to-right');
    } ;
};

// pauses parade animation when pausing the music
function pauseParade(){
    if (paradeSection.style.display === 'block'){
        paradeSlider.style.animationPlayState = 'paused';
        paradeSlides.forEach(slide => { 
            slide.style.animationPlayState = 'paused';
        });
    }    
};
//replays parade animation when replaying music
function playParade(){
    if (paradeSection.style.display === 'block'){
        paradeSlider.style.animationPlayState = 'running';
        paradeSlides.forEach(slide => { 
            slide.style.animationPlayState = 'running';
        });
    }    
};
