//VARIABLES
let homeButton = document.querySelector('#home-button');

let navElements = document.querySelectorAll('.nav-element');
let dudeInfoGroup = document.querySelectorAll('.dude-info');

let home = document.querySelector('#home');

let paradeButton = document.querySelector('#parade-button');
let paradeSection = document.querySelector('#odd-parade');
let paradeSlider = document.querySelector('.slides-wrapper');
let paradeSlides = document.querySelectorAll('.slide');

let musicDiv = document.querySelector('#music');
let paradeAudio = document.querySelector('#music audio');

let root = document.documentElement; //needed for changing css variables
let navBar = document.querySelector('.nav-container');

let archiveImages = document.querySelectorAll('.nav-element img');
let mainNavButtons = document.querySelectorAll('.nav-element button');


//EVENT LISTENERS
homeButton.addEventListener('click', showHome);

navElements.forEach(navElement => {
    navElement.addEventListener('mouseover' , hideHome);
    navElement.addEventListener('mouseover' , hideParadeAudio);
    navElement.addEventListener('mouseover' , function(){ storeImageWidth(navElement);} );
    
});

paradeButton.addEventListener('click', showParade);

paradeAudio.addEventListener('pause', pauseParade);
paradeAudio.addEventListener('play', playParade);

window.addEventListener('resize' , storeMenuHeight)




//FUNCTIONS
//hides home page when hovering names in menu
function hideHome() {
    home.style.display = 'none';
    paradeSection.style.display = 'none';
};
//shows home page when clicking home icon and hiddes audio section if already visible
function showHome(){
    home.style.display = 'flex';
    paradeSection.style.display = 'none';
    if(musicDiv.style.display === 'flex') {
           hideParadeAudio();
    }
}

function hideParadeAudio() {
    paradeAudio.classList.add('hide-to-right'); 
}

//shows parade section when clicking button 'Odd Parade" and moves audio section to full width
function showParade() {
    home.style.display = 'none';
    paradeSection.style.display = 'block';
    musicDiv.style.display = 'flex';
    paradeAudio.play(); 
    if(paradeAudio.classList.contains('hide-to-right')) {
        paradeAudio.classList.remove('hide-to-right');
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
    };    
};

//creates css variable for height of nav bar (then used in stylesheet for setting height of main)
function storeMenuHeight(){
    let navBarHeight = navBar.offsetHeight;    
    root.style.setProperty('--menuHeight', navBarHeight + 'px');
}

//creates css variable for image width

function storeImageWidth(navElement) {
    let image = navElement.children[2];
    let archiveImageWidth = image.offsetWidth;
    root.style.setProperty('--archiveImageWidth' , archiveImageWidth + 'px');
    console.log(navElement)
    console.log(image);
    console.log(archiveImageWidth);
    return;
};

storeMenuHeight();       