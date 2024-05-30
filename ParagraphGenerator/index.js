const text =["The sun dipped below the horizon, casting a warm glow across the tranquil lake.Reflecting the hues of twilight, the water shimmered with an ethereal beauty. A gentle breeze rustled through the reeds, carrying with it the sweet scent of wildflowers. It was a moment of serene perfection, a fleeting glimpse of nature's majesty.",

"Lost in thought, Sarah wandered through the bustling streets of the city. Neon lights flickered overhead, illuminating the path ahead. The cacophony of voices and traffic faded into the background as she marveled at the towering skyscrapers that reached towards the heavens. Each building seemed to tell a story, a testament to human ambition and ingenuity.",

"The old bookstore was a treasure trove of forgotten tales and ancient wisdom. Dusty tomes lined the shelves, their weathered spines bearing witness to the passage of time. As she ran her fingers along the rows of books, Emma felt a sense of wonder wash over her. Here, amidst the pages of history, she found solace and inspiration.",

"The laughter of children echoed through the park, mingling with the chirping of birds and the rustling of leaves. With a skip in her step, Lily made her way to the playground, eager to join in the fun. Swinging from the monkey bars and sliding down the slide, she reveled in the simple joy of childhood.",

"In the heart of the forest, a hidden waterfall cascaded into a crystal-clear pool below. Surrounded by lush foliage and towering trees, it was a sanctuary untouched by the outside world. As she dipped her toes into the cool water, Emily felt a sense of peace wash over her. Here, amidst the beauty of nature, she found refuge from the chaos of everyday life.",

"The aroma of freshly baked bread filled the air, drawing hungry customers into the quaint bakery on the corner. With a smile on her face, Marie greeted each person with warmth and hospitality. As they savored each bite of her delicious creations, they couldn't help but feel a sense of comfort and contentment.",

"High above the city skyline, the stars twinkled like diamonds scattered across a velvet canvas. With a telescope in hand, Alex gazed up at the heavens, marveling at the beauty of the cosmos. Each constellation told a story, a celestial tapestry woven together with threads of light and wonder.",

"As the rain pattered against the windowpane, Sarah curled up with a good book and a steaming cup of tea. Lost in the world of words, she journeyed to distant lands and far-off adventures. Outside, the storm raged on, but within the cozy confines of her home, she was safe and sound.",

"The sound of music filled the air as dancers twirled across the ballroom floor. With grace and elegance, they moved in perfect harmony, their movements a testament to the power of expression. As she watched from the sidelines, Claire felt a sense of awe wash over her. Here, amidst the beauty of the dance, she found inspiration and joy.",

"Beneath the light of the full moon, a lone wolf howled in the distance. With each haunting cry, it seemed to echo the longing in Sarah's heart. Standing on the edge of the forest, she felt a sense of connection to the wild and untamed world around her. In that moment, she was free"];

const item=document.querySelector('#items')
const dataContainer = document.querySelector("#data");
const Generate = ()=>{
    if(isNaN(item)|| item.value <0 || item.value>9){
        const randindex = Math.floor(Math.random()*text.length)
        dataContainer.innerHTML = `<p>${text[randindex]}</p>`
    }
    else{
        const data = text.slice(0,item.value)
         const paras = data.map(
            (d)=>{
                return `<p>${d}</p>`
            }
         )
         dataContainer.innerHTML = paras.join("")
    }
}