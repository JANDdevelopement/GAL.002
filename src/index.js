import dotenv from "dotenv";
import { Client, GatewayIntentBits, Partials } from "discord.js";
import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
// .env abrufen
dotenv.config();

// Discord Client erstellen
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

// Zu ChatGPT verbinden
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

// Überprüft ob die Dateien zum speichern der arrays existieren 
const pathask = './src/data/donotask';
const pathstart = './src/data/startup';

if (!fs.existsSync(pathask)) {
  fs.writeFile(pathask, '', function (err) {
    if (err) throw err;
    console.log('Neue Datei zum speichern von Daten erstellt!');
  });
} else console.log("")

if (!fs.existsSync(pathstart)) {
  fs.writeFile(pathstart, '454717869620461592', function (err) {
    if (err) throw err;
    console.log('Neue Datei zum speichern von Daten erstellt!');
  });
}else console.log("")


// Wenn der Bot startet.
client.on('ready', () => {
    console.log('Der client ist bereit!');
    for (let id of startup) {
      const user = client.users.fetch(id)
      .then(user => user.send(`Der Bot ist nun hochgefahren.`))
      .catch(console.error)
    }
});

// arrays
const donotask = []
const startup = []
fs.readFile(pathask, function(err, data) {
    if(err) throw err;
    var donotask1 = data.toString().split("\n")
    for(let i in donotask1) {
      donotask.push(donotask1[i])
    }
})
fs.readFile(pathstart, function(err, data) {
  if(err) throw err;
  var startup1 = data.toString().split(",")
  for(let i in startup1) {
    startup.push(startup1[i])
  }
})

// Nachrichten managen
client.on("messageCreate", async function (message) {
    if (message.author.bot) {
      console.log(`${message.author.username}: ${message.content}`)
    }
    if (message.author.bot) return;
    console.log(`${message.author.username} - ${message.content}`)
    // Antwort auf DMs
    if (message.guild === null) {
      if (!donotask.includes(message.author.id)) {
        console.log(`Der Benutzer ${message.author.username} wurde vorher nicht gefragt. Ich werde fortfahren.`)
        message.reply(`Möchtest du beim Start der Bots benachrichtigt werden? Antworte mit "!ja", wenn du das möchtest.`)
        // Setzt eine neue Zeile in die TXT
        let content = `${message.author.id}`;
        content += "\n";
        fs.appendFile(pathask, content, (err) => {
         return console.log(err);
        });
        // Arrays aktualisieren
        fs.readFile(pathask, function(err, data) {
          if(err) throw err;
          var donotask1 = data.toString().split("\n")
          for(let i in donotask1) {
            donotask.push(donotask1[i])
          }
        })
        return;
      }
      if (message.content.startsWith("!ja")) {
        console.log(`Ein neuer Nutzer zur Startup Liste hinzugefügt. ${message.author.username}`)
        message.reply(`Du wirst nun beim Start benachrichtigt.`)
        // Setzt eine neue Zeile in die TXT
        let content1 = `,${message.author.id}`;

        fs.appendFile(pathstart, content1, (err) => {
         return console.log(err);
        });
        // Arrays aktualisieren
        fs.readFile(pathstart, function(err, data) {
          if(err) throw err;
          var startup1 = data.toString().split(",")
          for(let i in startup1) {
            startup.push(startup1[i])
          }
        })
        return;
      }
      try {
        const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {role: "system", content: "Du bist ein hilfreicher deutscher Assistent, der kurz und bündig auf Deutsch antwortet, wenn er nicht gebeten wird, in einer anderen Sprache zu antworten."},
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
            {role: "system", content: "Du bist ein hilfreicher deutscher Assistent, der kurz und bündig auf Deutsch antwortet, wenn er nicht gebeten wird, in einer anderen Sprache zu antworten."},
            {role: "user", content: message.content}
          ],
        });
        const content = response.data.choices[0].message;
        return message.reply(content);
  
    } catch (err) {
        console.log(err)
        return message.reply(
          "Error302"
        );
    }
    } 
});



client.login(process.env.BOT_TOKEN);