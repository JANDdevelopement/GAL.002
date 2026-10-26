const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("serverliste")
    .setDescription("Owner Command: Auf welchen Servern befindet sich der Bot derzeit?"),
    run: async ({ interaction }) => {
        const guilds = interaction.client.guilds.cache;
        const guildList = guilds.map(guild => `- ${guild.name} (ID: ${guild.id})`);
        if(interaction.user.id !== process.env.BOT_OWNER){ return interaction.editReply("Du kannst diesen Befehl nicht ausführen.")}
        return interaction.editReply({embeds: [
            new EmbedBuilder()
                .setTitle(`Serverlist:`)
                .setDescription(`Der Bot ist derzeit Mitglied auf folgenden Servern:\n${guildList.join("\n")}`)
                .setColor("DarkBlue")
        ], ephemeral: true })
    }
}