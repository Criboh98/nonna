const pages = [

{
background: "assets/backgrounds/background_intro.png",
photos: [],
title: "Memories — Casa Murciano",
text: `A story about a little yellow house in Uggiano La Chiesa.

A story about family, love, and memories.

A story about a wonderful woman who made ordinary moments unforgettable.

A story about Nonna Adriana.`
},


{
background: "assets/backgrounds/background_house.png",
photos:[
"assets/characters/adriana_welcome.png"
],
title:"The Yellow House",
text:`In Uggiano La Chiesa, there was a little yellow house.

From the outside it looked simple.

But inside those walls lived something much bigger.

It was a place filled with laughter, conversations, flowers, recipes, and memories.

A place where everyone knew they were loved.`
},


{
background:"assets/backgrounds/background_house.png",
photos:[
"assets/characters/adriana_sitting.png"
],
title:"Nonna Adriana",
text:`Nonna Adriana was the heart of that home.

She was the person who could make everyone feel welcome.

She loved conversations, stories, and the simple moments that make life beautiful.

Her greatest gift was making people feel loved.`
},


{
background:"assets/backgrounds/background_garden.png",
photos:[
"assets/characters/adriana_gardening.png"
],
title:"Her Garden",
text:`Nonna loved flowers.

Her garden was a small world full of life.

She cared for every plant with patience and tenderness.

Maybe because she understood something important:

everything beautiful needs love to grow.`
},


{
background:"assets/backgrounds/background_kitchen.png",
photos:[
"assets/characters/adriana_cooking.png"
],
title:"The Kitchen",
text:`The kitchen was where memories were created.

With flour on her hands and love in her heart, Nonna created something special.

Her le sagne were not only food.

They were a way of bringing everyone together.

They were the taste of home.`
},


{
background:"assets/backgrounds/background_dining.png",
photos:[
"assets/characters/vitale.png"
],
title:"The Love Of Her Life",
text:`Before she was Nonna, she was Adriana.

A woman who shared her life with Nonno Vitale.

Together they built a home, a family, and a lifetime of memories.

Their love lived in the quiet moments.

In everyday life.

In the story they created together.`
},


{
background:"assets/backgrounds/background_house.png",
photos:[
"assets/characters/danilo.png"
],
title:"Her Son Danilo",
text:`For Danilo, Nonna was the beginning of his story.

A mother's love becomes part of who we are.

It follows us through every chapter of life.

And it never truly disappears.`
},


{
background:"assets/backgrounds/background_garden.png",
photos:[
"assets/characters/cristiana.png",
"assets/characters/matteo.png",
"assets/characters/thor.png"
],
title:"Her Nipoti",
text:`Cristiana, Matteo and Thor were a precious part of Nonna's world.

She loved them deeply.

Every visit.

Every conversation.

Every small moment together.

These became the memories that would stay forever.`
},


{
background:"assets/backgrounds/background_sewing.png",
photos:[
"assets/characters/adriana_sewing.png"
],
title:"Her Hands",
text:`Some people leave behind objects.

Nonna left behind something much more precious.

Her hands.

Hands that cooked.

Hands that planted flowers.

Hands that sewed.

Hands that cared.

Hands that showed love without needing many words.`
},


  {
background:"assets/backgrounds/background_house.png",
photos:[
"assets/characters/adriana_idle.png"
],
title:"The Little Things",
text:`Sometimes we think we will miss the biggest moments.

But often, it is the smallest things that stay with us.

A voice.

A recipe.

A flower in the garden.

A chair at the table.

A conversation.

The things that seemed ordinary...

were actually the most precious.`
},


{
background:"assets/backgrounds/background_sunset.png",
photos:[
"assets/characters/adriana_sitting.png"
],
title:"Forever Nonna",
text:`There are people who pass through our lives...

And then there are people who become part of the place where our hearts live.

Nonna Adriana was never only a grandmother.

She was a home.

She was the warmth of the kitchen, the sound of a voice telling stories, the hands that created beauty from simple things, the flowers growing quietly in her garden.

She was the feeling of arriving somewhere and knowing:

I am loved here.

Time moves forward, and life changes in ways we cannot stop.

Houses become quieter.

Chairs remain empty.

Voices that once filled rooms become memories that we carry inside ourselves.

But love does not understand endings.

Love does not disappear when someone leaves.

It changes form.

It becomes a recipe we remember.

A story we tell.

A flower we stop to admire.

A gesture we repeat without even realizing it.

A piece of ourselves that came from someone we loved.

Nonna Adriana, you are no longer sitting at the table with us...

But somehow, you are still everywhere.`
},


{
background:"assets/backgrounds/background_sunset.png",
photos:[],
title:"Dear Nonna Adriana",
letter:true,
text:`Dear Nonna Adriana,

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

Nonna, you gave us a love so big that even your absence feels full of you.

You taught us that the smallest things can become the greatest treasures:

a homemade meal,

a flower in the garden,

a conversation,

a hug,

a moment together.

And now, every time we do those things, a little part of you comes back.

You are in the stories we tell.

You are in the laughter around the table.

You are in the love that keeps this family together.

You are in me.

I created this little book because I never want the world to forget the incredible woman you were.

Not because you were famous.

Not because you changed history books.

But because you changed the hearts of the people lucky enough to know you.

You were a mother.

You were a wife.

You were a grandmother.

You were the heart of a family.

And for me, you were my Nonna.

Even though I cannot hold your hand anymore, I will carry your love for the rest of my life.

Until we meet again...

Thank you for every memory.

Thank you for every smile.

Thank you for every piece of love you left behind.

Forever my Nonna Adriana.`
},


{
background:"assets/backgrounds/background_sunset.png",
photos:[],
title:"Credits",
text:`Memories — Casa Murciano

A story created by Cristiana.

Created with love, gratitude, and endless memories.

Inspired by the life of Nonna Adriana and by every person whose heart was touched by her kindness.

Dedicated to a woman who proved that love is the only thing we leave behind that never disappears.

Her hands may rest.

Her voice may be quiet.

But her love continues.

Through her family.

Through her stories.

Through every generation that carries her love.

Forever remembered.

Forever loved.

Nonna Adriana.

And somewhere, inside a little yellow house in Uggiano La Chiesa...

the light is still on.`
}

];


let currentPage = 0;


const background = document.getElementById("background");
const photos = document.getElementById("photos-container");
const title = document.getElementById("title");
const text = document.getElementById("text");
const story = document.getElementById("story-page");
const button = document.getElementById("next-button");



function typeText(message){

    text.innerHTML="";

    let i=0;

    let timer=setInterval(()=>{

        text.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){

            clearInterval(timer);

        }

    },25);

}



function createPhotos(list){

    photos.innerHTML="";


    list.forEach((photo,index)=>{

        let frame=document.createElement("div");

        frame.className="photo-frame";


        let img=document.createElement("img");

        img.src=photo;


        frame.appendChild(img);



        if(index===0){

    frame.style.left="0px";
    frame.style.top="70px";

    frame.classList.add("photo-one");

}


if(index===1){

    frame.style.left="150px";
    frame.style.top="10px";

    frame.classList.add("photo-two");

}


if(index===2){

    frame.style.left="300px";
    frame.style.top="80px";

    frame.classList.add("photo-three");

}

        photos.appendChild(frame);


    });

}



function showPage(){


    let page = pages[currentPage];


    background.src = page.background;


    title.innerHTML = page.title;


    story.classList.remove("letter");


    if(page.letter){

        story.classList.add("letter");

    }


    story.classList.remove("page-turn");


    setTimeout(()=>{

        story.classList.add("page-turn");

    },50);



    createPhotos(page.photos);


    typeText(page.text);


}



button.onclick=function(){


    if(currentPage < pages.length-1){

        currentPage++;

        showPage();

    }

    else{

        button.style.display="none";

        story.classList.add("fade-out");

    }


};



showPage();
