import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
    ],
});

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

client.on('ready', () => {
    console.log('Der client ist bereit!');
    client.users.fetch(process.env.DISCORD_ID)
    .then(user => user.send('Ich bin jetzt online!'))
    .catch(console.error);
});

client.on("messageCreate", async function (message) {
    if (message.author.bot) return;
    console.log(`MSG - ${message.content}`)
    if (!message.content.startsWith(`<@${process.env.BOT_ID}>`)) return;
    
    try {
        const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {role: "system", content: "You are a helpful assistant who responds succinctly"},
            {role: "user", content: message.content}
          ],
        });
        const content = response.data.choices[0].message;
        return message.reply(content);
  
    } catch (err) {
        return message.reply(
          "Error301"
        );
    }
});

client.login(process.env.BOT_TOKEN);