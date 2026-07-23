const scenes = [

{
background:"assets/backgrounds/background_intro.png",
left:"",
right:"",
speaker:"Memories",
text:"Some houses are made of bricks. Some are made of memories."
},


{
background:"assets/backgrounds/background_house.png",
left:"assets/characters/adriana/adriana_welcome.png",
right:"",
speaker:"Nonna Adriana",
text:"Benvenuti... come sempre, questa casa è casa vostra."
},


{
background:"assets/backgrounds/background_garden.png",
left:"assets/characters/adriana/adriana_gardening.png",
right:"assets/characters/cristiana/cristiana.png",
speaker:"Nonna Adriana",
text:"The flowers need love every day. Just like family."
},


{
background:"assets/backgrounds/background_kitchen.png",
left:"assets/characters/adriana/adriana_cooking.png",
right:"assets/characters/matteo/matteo.png",
speaker:"Nonna Adriana",
text:"Today we make le sagne. Slowly, with patience and love."
},


{
background:"assets/backgrounds/background_dining.png",
left:"assets/characters/vitale/vitale.png",
right:"assets/characters/danilo/danilo.png",
speaker:"Family",
text:"Around this table, everyone has a story to tell."
},


{
background:"assets/backgrounds/background_dining.png",
left:"assets/characters/cristiana/cristiana.png",
right:"assets/characters/thor/thor.png",
speaker:"Cristiana",
text:"The best memories are the simple moments together."
},


{
background:"assets/backgrounds/background_sewing.png",
left:"assets/characters/adriana/adriana_sewing.png",
right:"",
speaker:"Nonna Adriana",
text:"Every stitch carries a story."
},


{
background:"assets/backgrounds/background_sunset.png",
left:"assets/characters/adriana/adriana_sitting.png",
right:"assets/characters/vitale/vitale.png",
speaker:"Memories",
text:"The love inside Casa Murciano stays forever."
}


];


let currentScene = 0;


const background = document.getElementById("background");

const leftCharacter = document.getElementById("character-left");

const rightCharacter = document.getElementById("character-right");

const speaker = document.getElementById("speaker");

const text = document.getElementById("story-text");



function loadScene(){

const scene = scenes[currentScene];


background.src = scene.background;


speaker.innerText = scene.speaker;

text.innerText = scene.text;



if(scene.left){

leftCharacter.src = scene.left;

leftCharacter.style.display="block";

}

else{

leftCharacter.style.display="none";

}



if(scene.right){

rightCharacter.src = scene.right;

rightCharacter.style.display="block";

}

else{

rightCharacter.style.display="none";

}


}



document
.getElementById("next-button")
.addEventListener("click",()=>{


currentScene++;


if(currentScene >= scenes.length){

currentScene=0;

}


loadScene();


});



loadScene();
