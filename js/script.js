const pages = [

{
    background: "assets/backgrounds/background_intro.png",
    character: "",
    title: "Memories — Casa Murciano",
    text:
    `A story about a little yellow house in Uggiano La Chiesa.

A story about family, love, and the woman who made ordinary moments unforgettable.

A story about Nonna Adriana.`
},


{
    background: "assets/backgrounds/background_house.png",
    character: "assets/characters/adriana_welcome.png",
    title: "The Yellow House",

    text:
    `In Uggiano La Chiesa, there was a small yellow house.

From the outside it looked simple.

But inside those walls lived something much bigger:

love, laughter, conversations, flowers, and memories.

It was the home of the Murciano family.`
},


{
    background: "assets/backgrounds/background_house.png",
    character: "assets/characters/adriana_sitting.png",
    title: "Nonna Adriana",

    text:
    `Nonna Adriana was the heart of that home.

She loved to talk about everything and nothing, sharing stories, memories, and pieces of her life.

She had a special gift:

making everyone feel welcomed, listened to, and loved.`
},


{
    background: "assets/backgrounds/background_garden.png",
    character: "assets/characters/adriana_gardening.png",
    title: "Her Garden",

    text:
    `Nonna loved flowers.

Her little garden was full of life, just like her heart.

She cared for every plant with patience and tenderness.

Maybe because she knew that everything beautiful needs love and attention.`
},


{
    background: "assets/backgrounds/background_kitchen.png",
    character: "assets/characters/adriana_cooking.png",
    title: "The Kitchen",

    text:
    `The kitchen was where magic happened.

With simple ingredients and loving hands, Nonna created memories.

Her le sagne, homemade pasta made with patience and care, carried the taste of home.

A taste that will never be forgotten.`
},


{
    background: "assets/backgrounds/background_dining.png",
    character: "assets/characters/vitale.png",
    title: "A Lifetime Together",

    text:
    `Beside Nonna was Nonno Vitale.

The love of her life.

Together they shared years of memories, challenges, happiness, and the quiet beauty of building a family together.`
},


{
    background: "assets/backgrounds/background_dining.png",
    character: "assets/characters/danilo.png",
    title: "Her Son Danilo",

    text:
    `For Danilo, Nonna was more than a mother.

She was the beginning of his story.

The person who loved him before he could even understand what love was.

A mother's love never disappears.`
},


{
    background: "assets/backgrounds/background_garden.png",
    character: "assets/characters/cristiana.png",
    title: "Her Nipoti",

    text:
    `Cristiana, Matteo and Thor were a precious part of Nonna's world.

She loved them deeply.

Every conversation, every visit, every moment together became a memory they will carry forever.`
},


{
    background: "assets/backgrounds/background_sewing.png",
    character: "assets/characters/adriana_sewing.png",
    title: "The Little Things",

    text:
    `Nonna loved sewing.

She loved creating things with her hands.

But the greatest thing she created was not something she could hold.

It was a family surrounded by love.`
},


{
    background: "assets/backgrounds/background_sunset.png",
    character: "assets/characters/adriana_sitting.png",
    title: "Forever Nonna",

    text:
    `There are people who pass through our lives...

And then there are people who become part of the place where our hearts live.

Nonna Adriana was never only a grandmother.

She was a home.

She was the warmth of the kitchen, the sound of a voice telling stories, the hands that created beauty from simple things, the flowers growing quietly in her garden.

She was the feeling of arriving somewhere and knowing:

"I am loved here."

Time moves forward.

Houses become quieter.

Chairs remain empty.

Voices become memories.

But love does not disappear.

It changes form.

It becomes a recipe we remember.

A story we tell.

A flower we stop to admire.

A piece of ourselves that came from someone we loved.

Nonna Adriana...

you are no longer sitting at the table with us.

But somehow...

you are still everywhere.`
},


{
    background: "assets/backgrounds/background_sunset.png",
    character: "",
    title: "Dear Nonna Adriana",

    text:
    `Dear Nonna Adriana,

I wish I could have one more conversation with you.

One more afternoon sitting beside you.

One more moment listening to you talk about everything and nothing, the way only you could.

I wish I could see your hands making pasta again.

I wish I could hear your voice filling the house again.

I wish I could walk into that little yellow house and find you there, waiting for us like always.

But life gives us something both beautiful and painful:

memories.

Memories are proof that something was real.

That someone existed.

That someone loved us.

That someone changed the world simply by being in it.

You are in the stories we tell.

You are in the laughter around the table.

You are in the love that keeps this family together.

You are in me.

I created this little book because I never want the world to forget the incredible woman you were.

You were a mother.

You were a wife.

You were a grandmother.

You were the heart of a family.

And for me...

you were my Nonna.

Forever my Nonna Adriana.`
},


{
    background: "assets/backgrounds/background_sunset.png",
    character: "",

    title: "Credits",

    text:
    `Memories — Casa Murciano


A story created by Cristiana.


Created with love, gratitude, and endless memories.


Inspired by the life of Nonna Adriana and by every person whose heart was touched by her kindness.


Dedicated to a woman who proved that love is the only thing we leave behind that never disappears.


Her hands may rest.

Her voice may be quiet.

But her love continues.


Through her family.

Through her stories.

Through every generation that carries her love forward.


Forever remembered.

Forever loved.


Nonna Adriana.


And somewhere, inside a little yellow house in Uggiano La Chiesa...

the light is still on.`
}

];



let currentPage = 0;


const background = document.getElementById("background");
const character = document.getElementById("character");
const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.getElementById("next-button");



function showPage(){


    const page = pages[currentPage];


    background.src = page.background;


    title.innerHTML = page.title;


    text.innerHTML = page.text.replace(/\n/g, "<br>");


    document.getElementById("story-page")
.classList.remove("page-turn");


setTimeout(()=>{

document.getElementById("story-page")
.classList.add("page-turn");

},50);



    if(page.character){

        character.src = page.character;

        document.getElementById("photo-frame").style.display="block";

    }
    else{

        document.getElementById("photo-frame").style.display="none";

    }



}



button.onclick = function(){


    currentPage++;


    if(currentPage >= pages.length){

        currentPage = pages.length - 1;

        button.innerHTML = "❤️";

    }


    showPage();

};



showPage();
