import { Client, GatewayIntentBits } from "discord.js";
import { Configuration, OpenAIApi } from "openai";

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
    apiKey: "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",
  })
);

client.on('ready', () => {
    console.log('Der client ist bereit!');
    client.users.fetch('454717869620461592')
    .then(user => user.send('Ich bin jetzt online!'))
    .catch(console.error);
});

client.on("messageCreate", async function (message) {
    if (message.author.bot) return;
    console.log(`MSG - ${message.content}`)
    if (!message.content.startsWith("<@1091849328924037272>")) return;
    
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
          "As an AI robot, I errored out."
        );
    }
});

client.login("MTA5MTg0OTMyODkyNDAzNzI3Mg.GDptdA.uLYokQLbAlIOh7AtomqNUci6DiMtvk5E91IbUI");