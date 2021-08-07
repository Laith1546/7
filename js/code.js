const perImg = document.querySelector(".card img");
const perName = document.querySelector(".card h3");
const perPro = document.querySelector(".card h4");
const perDes = document.querySelector(".card p");

const nextBtn = document.querySelector(".card span button:last-child");
const previousBtn = document.querySelector(".card span button:first-child");
const randomBtn = document.querySelector(".random");

let currentPer = 0;
let nextPer = 0;

const People = [
    per1 = {
        name : "Gabby",
        profession : "Nurse anesthetist",
        description : `There's more than meets the eye in the case of Jennifer Ball, but the biggest two things to 
        know are that she's upright and charming. Of course she's also resourceful, helpful and captivating, but those 
        are often overshadowed by tendencies of being obnoxious as well.`,
        image : "../img/per1.jpg"
    },

    per2 = {
        name : "Lennie",
        profession : "Dentist",
        description : `Many things can be said of Leon Gardner, but two things you'll never forget are that he's 
        rational and dynamic. Of course he's also balanced, idealistic and resourceful, but they're less prominent and 
        often intertwined with being arrogant as well.`,
        image : "../img/per2.jpg"
    },

    per3 = {
        name : "Hilary",
        profession : "copilot",
        description : `Few know the true Max Davies, but at the very least you'll find out he's fun-loving and daring. 
        Of course he's also faithful, upright and decisive, but they're often slightly tainted by a mindset of being sly 
        as well.`,
        image : "../img/per3.jpg"
    },

    per4 = {
        name : "Sydney",
        profession : "flight engineer",
        description : `Many things can be said of Bella Miller, but at the very least you'll find out she's balanced 
        and exciting. Of course she's also farsighted, understanding and enthusiastic, but in smaller doses and they're 
        often spoiled by habits of being greedy as well.`,
        image : "../img/per4.jpg"
    },

    per5 = {
        name : "Joss",
        profession : "engineer",
        description : `There's more than meets the eye in the case of Lola Houghton, but at the very least she's 
        charismatic and capable. Of course she's also forgiving, cheerful and appreciative, but those are often 
        overshadowed by tendencies of being sly as well.`,
        image : "../img/per5.jpg"
    }
]

nextBtn.addEventListener('click', () => {
    if(currentPer >= People.length-1){
        currentPer = 0;
        displayPerson(currentPer);
    }
    else {
        currentPer++;
        displayPerson(currentPer);
    }
})

previousBtn.addEventListener('click', () => {
    if(currentPer <= 0){
        currentPer = People.length - 1;
        displayPerson(currentPer);
    }
    else {
        currentPer--;
        displayPerson(currentPer);
    }
})

randomBtn.addEventListener('click', () => {
    displayPerson(randomNum());
})

displayPerson(randomNum());

function displayPerson(id) {
    perImg.src = People[id].image;
    perName.textContent = People[id].name;
    perPro.textContent = People[id].profession;
    perDes.textContent = People[id].description;
}

function randomNum() {
    do{
        nextPer = Math.floor(Math.random() * 5);
    } while(currentPer === nextPer);

    currentPer = nextPer;
    return nextPer;
}