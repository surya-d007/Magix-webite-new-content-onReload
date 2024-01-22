const OpenAI = require('openai');

async function generateChatCompletion() {
    const openai = new OpenAI({
        apiKey: process.env.API_KEY
    });
    try {
            var chatCompletion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "user", content: "Give a sample title which has nice content to explain.. title maximum length 20 letters" }
                ]
            });
        const title = chatCompletion.choices[0].message.content;
        console.log("title:", title);


        chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: `Give a description for my title in 2 lines on ${title}` }
            ]
        });
        const description_1 = chatCompletion.choices[0].message.content;


        chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: `Give a description for my title in 2 lines on ${title} and not same as ${description_1}` }
            ]
        });
        const description_2 = chatCompletion.choices[0].message.content;



        chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: `Give a description for my title in 2 lines on ${title} and not same as ${description_1} and ${description_2}` }
            ]
        });
        const description_3 = chatCompletion.choices[0].message.content;




        chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: `Give a description for my title in 2 lines on ${title} and not same as (${description_1} and ${description_2} and ${description_3})` }
            ]
        });
        const description_4 = chatCompletion.choices[0].message.content;



        chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: `Give one Important Discoveries for my Records on ${title} in 10 words` }
            ]
        });
        const discovery_1 = chatCompletion.choices[0].message.content;




        chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: `Give one Important Discoveries for my Records on ${title} in 20 words not same as ${discovery_1}` }
            ]
        });
        const discovery_2 = chatCompletion.choices[0].message.content;


        chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: `Give one Important Discoveries for my Records on ${title} in 15 words not same as ${discovery_1} and ${discovery_2}` }
            ]
        });
        const discovery_3 = chatCompletion.choices[0].message.content;



        chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: `Give one Important Discoveries for my Records on ${title} in 10 words not same as ${discovery_1} and ${discovery_2} and ${discovery_3}` }
            ]
        });
        const discovery_4 = chatCompletion.choices[0].message.content;


        const website_content = {
            title: title,
            description_1: description_1,
            description_2: description_2,
            description_3: description_3,
            description_4: description_4,
            discovery_1: discovery_1,
            discovery_2: discovery_2,
            discovery_3: discovery_3,
            discovery_4: discovery_4
        };
        console.log("------------------------------");
        console.log(website_content);


        return website_content;
    } catch (error) {
        console.error("Error generating chat completion:", error);
    }
}

exports.generateChatCompletion = generateChatCompletion;
