const express = require('express');
const  {generateChatCompletion}  = require('./generateChatCompletion');
require('dotenv').config();
const app = express();
const port = 2000;

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/css')) ;
app.use(express.static(__dirname + '/views/styles')) ;
app.use(express.static('public')); 


app.get('/',async (req, res) => {
  //const website_content =await generateChatCompletion();
    /*var website_content =
    {
      title: '"The Art of Happiness: Unlocking Joy"',
      description_1: '"The Art of Happiness: Unlocking Joy" is a transformative guide that offers insights and techniques to help individuals cultivate happiness and discover the key to unlocking lasting joy in their lives. This enlightening book combines the wisdom of renowned experts with practical exercises, allowing readers to explore the art of happiness and uncover the secrets to a fulfilling and joyful existence.',
      description_2: '"The Art of Happiness: Unlocking Joy" delves into the profound exploration of happiness, providing a roadmap to cultivate a blissful and fulfilling existence through expert wisdom and actionable exercises. Discover the transformative power of unlocking lasting joy and infuse your life with profound contentment.',
      description_3: '"The Art of Happiness: Unlocking Joy" is a profound and transformative guide that offers expert wisdom, practical exercises, and insightful techniques to help individuals cultivate happiness and discover the key to unlocking lasting joy, ultimately leading to a blissful and fulfilling existence.',
      description_4: '"The Art of Happiness: Unlocking Joy" embraces the profound journey of unlocking lasting joy, empowering individuals with expert wisdom and actionable exercises to cultivate a blissful and fulfilling existence.\n' +
        `Unveiling the secrets to a joy-filled life, "The Art of Happiness: Unlocking Joy" serves as a transformative guide, offering profound insights and practical techniques to cultivate happiness and infuse one's existence with profound contentment.`,
      discovery_1: 'Positive psychology, mindfulness, and compassionate action can lead to happiness.',
      discovery_2: 'One important discovery is that cultivating gratitude and finding meaning in life can greatly contribute to long-term happiness.',
      discovery_3: 'One important discovery is that fostering healthy relationships and social connections can lead to happiness.',      
      discovery_4: '- Understanding the impact of self-compassion on overall happiness.\n' +
        '- The significance of embracing vulnerability and authentic self-expression.\n' +
        '- Recognizing the power of forgiveness and letting go of resentment.\n' +
        '- Acknowledging the role of physical well-being in nurturing happiness.\n' +
        '- Discovering the transformative effects of practicing resilience and perseverance.\n' +
        '- The importance of engaging in activities that bring genuine joy.\n' +
        '- Realizing the value of pursuing personal growth and self-improvement.\n' +
        '- Uncovering the positive effects of helping others and acts of kindness.\n' +
        '- Highlighting the correlation between optimism and a happier outlook on life.\n' +
        '- Identifying the role of mindfulness in cultivating inner peace and happiness.'
    }*/

    res.render('home',{ website_content  : website_content});
});


app.listen(port, () => {
    console.log(`Started listening to the port ${port}`);
     // Call the async function to start the chat completion
});




