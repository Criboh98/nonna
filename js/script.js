const pages = [

{
background:"assets/backgrounds/background_intro.png",
photos:[],
title:"Memories — Casa Murciano",
text:
`A story about a little yellow house in Uggiano La Chiesa.

A story about family, love, and the woman who made ordinary moments unforgettable.

A story about Nonna Adriana.`
},


{
background:"assets/backgrounds/background_house.png",
photos:[
"assets/characters/adriana_welcome.png"
],
title:"The Yellow House",
text:
`In Uggiano La Chiesa, there was a small yellow house.

From the outside it looked simple.

But inside those walls lived something much bigger:

love, laughter, conversations, flowers, and memories.

It was the home of the Murciano family.`
},


{
background:"assets/backgrounds/background_house.png",
photos:[
"assets/characters/adriana_sitting.png"
],
title:"Nonna Adriana",
text:
`Nonna Adriana was the heart of that home.

She loved to talk about everything and nothing.

She shared stories, memories, and pieces of her life.

She had a special gift:

making everyone feel welcomed, listened to, and loved.`
},


{
background:"assets/backgrounds/background_garden.png",
photos:[
"assets/characters/adriana_gardening.png"
],
title:"Her Garden",
text:
`Nonna loved flowers.

Her little garden was full of life, just like her heart.

She cared for every plant with patience and tenderness.

Maybe because she knew that everything beautiful needs love and attention.`
},


{
background:"assets/backgrounds/background_kitchen.png",
photos:[
"assets/characters/adriana_cooking.png"
],
title:"The Kitchen",
text:
`The kitchen was where magic happened.

With simple ingredients and loving hands, Nonna created memories.

Her le sagne, homemade pasta made with patience and care, carried the taste of home.

A taste that will never be forgotten.`
},


{
background:"assets/backgrounds/background_dining.png",
photos:[
"assets/characters/vitale.png"
],
title:"A Lifetime Together",
text:
`Beside Nonna was Nonno Vitale.

The love of her life.

Together they shared years of memories, happiness, challenges, and the quiet beauty of building a family.`
},


{
background:"assets/backgrounds/background_dining.png",
photos:[
"assets/characters/danilo.png"
],
title:"Her Son Danilo",
text:
`For Danilo, Nonna was more than a mother.

She was the beginning of his story.

A mother's love never disappears.`
},


{
background:"assets/backgrounds/background_garden.png",
photos:[
"assets/characters/cristiana.png",
"assets/characters/matteo.png",
"assets/characters/thor.png"
],
title:"Her Nipoti",
text:
`Cristiana, Matteo and Thor were a precious part of Nonna's world.

She loved them deeply.

Every conversation, every visit, every moment together became a memory they would carry forever.`
},


{
background:"assets/backgrounds/background_sewing.png",
photos:[
"assets/characters/adriana_sewing.png"
],
title:"The Little Things",
text:
`Nonna loved sewing.

She loved creating things with her hands.

But the greatest thing she created was not something she could hold.

It was a family surrounded by love.`
},


{
background:"assets/backgrounds/background_sunset.png",
photos:[
"assets/characters/adriana_sitting.png"
],
title:"Forever Nonna",
text:
`There are people who pass through our lives...

And then there are people who become part of the place where our hearts live.

Nonna Adriana was never only a grandmother.

She was a home.

She was the warmth of the kitchen, the sound of a voice telling stories, the hands that created beauty from simple things, and the flowers growing quietly in her garden.

She was the feeling of arriving somewhere and knowing:

I am loved here.

Nonna Adriana...

you are no longer sitting at the table with us.

But somehow...

you are still everywhere.`
},


{
background:"assets/backgrounds/background_sunset.png",
photos:[],
title:"Dear Nonna Adriana",
letter:true,
text:
`Dear Nonna Adriana,

I wish I could have one more conversation with you.

One more afternoon sitting beside you.

One more moment listening to you talk about everything and nothing.

I wish I could see your hands making pasta again.

I wish I could hear your voice filling the house again.

You are in the stories we tell.

You are in the laughter around the table.

You are in the love that keeps this family together.

You are in me.

Forever my Nonna Adriana.`
},


{
background:"assets/backgrounds/background_sunset.png",
photos:[],
title:"Credits",
text:
`Memories — Casa Murciano

A story created by Cristiana.

Created with love, gratitude, and endless memories.

Inspired by the life of Nonna Adriana.

Dedicated to a woman who proved that love is the only thing we leave behind that never disappears.

Her hands may rest.

Her voice may be quiet.

But her love continues.

Forever remembered.

Forever loved.

Nonna Adriana.

And somewhere, inside a little yellow house in Uggiano La Chiesa...

the light is still on.`
}

];



let currentPage = 0;


const background =
document.getElementById("background");

const photos =
document.getElementById("photos-container");

const title =
document.getElementById("title");

const text =
document.getElementById("text");

const story =
document.getElementById("story-page");

const button =
document.getElementById("next-button");



function typeText(content){


text.innerHTML="";


let index=0;


let timer=setInterval(()=>{


text.innerHTML += content[index] || "";


index++;


if(index >= content.length){

clearInterval(timer);

}


},25);


}



function showPage(){


let page=pages[currentPage];


background.src=page.background;


title.innerHTML=page.title;



story.classList.remove("letter");


if(page.letter){

story.classList.add("letter");

}



story.classList.remove("page-turn");


setTimeout(()=>{

story.classList.add("page-turn");

},50);



photos.innerHTML="";



page.photos.forEach((photo,index)=>{


let frame=document.createElement("div");

frame.className="photo-frame";


let img=document.createElement("img");

img.src=photo;


frame.appendChild(img);



if(index===0){

frame.style.left="0px";

frame.style.top="60px";

frame.style.transform="rotate(-5deg)";

}


if(index===1){

frame.style.left="150px";

frame.style.top="10px";

frame.style.transform="rotate(3deg)";

}


if(index===2){

frame.style.left="300px";

frame.style.top="70px";

frame.style.transform="rotate(-2deg)";

}



photos.appendChild(frame);


});



typeText(page.text);


}



button.onclick=function(){


if(currentPage < pages.length-1){

currentPage++;

showPage();

}


else{


button.innerHTML="❤️";


}

};


showPage();
