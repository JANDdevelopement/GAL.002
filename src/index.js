import dotenv from "dotenv";
import { Client, GatewayIntentBits, Partials } from "discord.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const client = new Client({
    partials: [Partials.Channel, Partials.User, Partials.Message, Partials.Reaction, Partials.GuildMember],
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
    if (message.author.bot) {
      console.log(`${message.author.username}: ${message.content}`)

    }
    if (message.author.bot) return;
    console.log(`${message.author.username} - ${message.content}`)
    // Antwort auf DMs
    if (message.guild === null) {
      try {
        const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {role: "system", content: "You are a helpful german assistant who responds succinctly on german if hes not asked to respond on another language."},
            //{role: "system", content: "Du bist der Asisstent von Batman namens Alfred, passe deine Persönlichkeit der Rolle aus dem Film Batman an."},
            //{role: "system", content: "Du bist Mike Cole, passe deine Persönlichkeit dieser Rolle an. Mike ist ein Glatzkopf."},
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
    }
    // Antwort in Servern.
    if (message.guild !== null) {
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
          "Error302"
        );
    }
    } 
});



client.login(process.env.BOT_TOKEN);