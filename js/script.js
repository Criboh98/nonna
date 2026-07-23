const scenes = [

    {
        background: "assets/backgrounds/background_intro.png",
        left: "",
        right: "",
        speaker: "Memories",
        text: "Some houses are made of bricks. Some are made of memories."
    },


    {
        background: "assets/backgrounds/background_house.png",
        left: "assets/characters/adriana_welcome.png",
        right: "",
        speaker: "Nonna Adriana",
        text: "Benvenuti... questa casa è casa vostra."
    },


    {
        background: "assets/backgrounds/background_garden.png",
        left: "assets/characters/adriana_gardening.png",
        right: "assets/characters/cristiana.png",
        speaker: "Nonna Adriana",
        text: "The flowers need love every day, just like family."
    },


    {
        background: "assets/backgrounds/background_kitchen.png",
        left: "assets/characters/adriana_cooking.png",
        right: "assets/characters/matteo.png",
        speaker: "Nonna Adriana",
        text: "Today we make le sagne, homemade pasta made with love."
    },


    {
        background: "assets/backgrounds/background_dining.png",
        left: "assets/characters/vitale.png",
        right: "assets/characters/danilo.png",
        speaker: "Family",
        text: "Around this table, everyone shares stories and memories."
    },


    {
        background: "assets/backgrounds/background_dining.png",
        left: "assets/characters/cristiana.png",
        right: "assets/characters/thor.png",
        speaker: "Cristiana",
        text: "The most beautiful moments are the ones we share together."
    },


    {
        background: "assets/backgrounds/background_sewing.png",
        left: "assets/characters/adriana_sewing.png",
        right: "",
        speaker: "Nonna Adriana",
        text: "Every stitch carries a story and every thread holds a memory."
    },


    {
        background: "assets/backgrounds/background_sunset.png",
        left: "assets/characters/adriana_sitting.png",
        right: "assets/characters/vitale.png",
        speaker: "Memories",
        text: "The love inside Casa Murciano stays forever."
    }

];



let currentScene = 0;



const background = document.getElementById("background");

const leftCharacter = document.getElementById("character-left");

const rightCharacter = document.getElementById("character-right");

const speaker = document.getElementById("speaker");

const storyText = document.getElementById("story-text");

const nextButton = document.getElementById("next-button");



function loadScene() {

    const scene = scenes[currentScene];


    background.src = scene.background;


    speaker.innerText = scene.speaker;

    storyText.innerText = scene.text;



    if (scene.left !== "") {

        leftCharacter.src = scene.left;
        leftCharacter.style.display = "block";

    } else {

        leftCharacter.style.display = "none";

    }



    if (scene.right !== "") {

        rightCharacter.src = scene.right;
        rightCharacter.style.display = "block";

    } else {

        rightCharacter.style.display = "none";

    }

}



nextButton.addEventListener("click", function() {


    currentScene++;


    if (currentScene >= scenes.length) {

        currentScene = 0;

    }


    loadScene();

});



loadScene();
