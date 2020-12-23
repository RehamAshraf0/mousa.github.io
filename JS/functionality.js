///////////////////////////////////////////////
/// Dark Mode 


// variables

//get the darkmode previous settings if exists
let darkMode = localStorage.getItem('darkMode');

//define the toggle button
const darkModeButton = document.querySelector("#darkmodeToggle");

// Functions 

const enableDarkMode = () => {

    //enable dark mode
    document.body.classList.add('darkmode');

    //set settings of darkmode to enabled
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {

    //disable dark mode
    document.body.classList.remove('darkmode');

    //set settings of dark mode to disabled
    localStorage.setItem('darkMode', 'null');
};

// Update according to the user's previous settings 

if (darkMode === 'enabled') {
    enableDarkMode();
}

// Event Listener 

darkModeButton.addEventListener('click', () => {

    //get the settings
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})


//////////////////////////////////////////
///Mood switcher 

//variables 

let mood = localStorage.getItem('mood');

const blueButton = document.querySelector("#blueButton");
const yellowButton = document.querySelector("#yellowButton");
const orangeButton = document.querySelector("#orangeButton");
const greenButton = document.querySelector("#greenButton");
const pinkButton = document.querySelector("#pinkButton");

//Functions 

const removeColor = () => {
    document.body.classList.remove('pink-mood');
    document.body.classList.remove('yellow-mood');
    document.body.classList.remove('blue-mood');
    document.body.classList.remove('green-mood');
    document.body.classList.remove('orange-mood');
}


const blueMood = () => {
    document.body.classList.add('blue-mood');
    localStorage.setItem('mood', 'blueMood');
}
const pinkMood = () => {
    document.body.classList.add('pink-mood');
    localStorage.setItem('mood', 'pinkMood');
}
const orangeMood = () => {
    document.body.classList.add('orange-mood');
    localStorage.setItem('mood', 'orangeMood');
}
const yellowMood = () => {
    document.body.classList.add('yellow-mood');
    localStorage.setItem('mood', 'yellowMood');
}
const greenMood = () => {
    document.body.classList.add('green-mood');
    localStorage.setItem('mood', 'greenMood');
}

//check saved settings 

if (mood === 'blueMood') {
    removeColor();
    blueMood();
} else if (mood === 'pinkMood') {
    removeColor();
    pinkMood();
} else if (mood === 'orangeMood') {
    removeColor();
    orangeMood();
} else if (mood === 'greenMood') {
    removeColor();
    greenMood();
} else if (mood === 'yellowMood') {
    removeColor();
    yellowMood();
}


// Event Listner 

blueButton.addEventListener("click", () => {
    mood = localStorage.getItem('mood');
    removeColor();
    blueMood();

})
orangeButton.addEventListener("click", () => {

    removeColor();
    orangeMood();
    mood = localStorage.getItem('mood');


})
pinkButton.addEventListener("click", () => {
    mood = localStorage.getItem('mood');

    removeColor();
    pinkMood();

})
greenButton.addEventListener("click", () => {
    mood = localStorage.getItem('mood');

    removeColor();
    greenMood();

})
yellowButton.addEventListener("click", () => {
    mood = localStorage.getItem('mood');


    removeColor();
    yellowMood();

})

///////////////////////////////////////////////////
// Typing effect 

const texts = ["a Machine Learning Engineer", "a Bioinformatics Scientist", "a Business Analyst", "an Instructor", "an Entrepreneur"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);


    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    document.querySelector('.home__typing').textContent = letter;

    setTimeout(type, 200);

})();

////////////////////////////////////////////////////////
// Preloader 

const preloader = document.querySelector('.preloader__background')

window.addEventListener("load", function () {

    preloader.style.display = "none";

})