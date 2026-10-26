const fs = require("fs")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const commands = []

const commandfiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))


commandfiles.forEach(commandfile => {
    const command = require(`./commands/${commandfile}`)
    commands.push(command.data.toJSON())
})


const restClient = new REST({version: "9"}).setToken("TOKEN_HIER_EINFÜGEN") // Discord Token hier einfügen



restClient.put(Routes.applicationGuildCommands("BOT_ID", "GUILD_ID"), // In das erste Feld trage die Bot ID ein; In das zweite, die Discord Server ID
{body: commands})
.then(() => console.log("Commands registriert! Die / Befehle sollten in den nächsten 2 Minuten verfügbar sein."))
.catch(console.error)