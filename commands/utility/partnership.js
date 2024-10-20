const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping-requirements')
        .setDefaultMemberPermissions(0)
        .setDescription('Displays the ping requirements for participation in roleplay sessions.'),
    async execute(interaction) {
        const pingEmbed = new EmbedBuilder()
            .setTitle('Server Partnership')
            .setDescription(`

**1. 100 - 300 ms: No Ping Required**  
Participants within this range can join sessions without any additional notifications. Your connection is optimal for gameplay, allowing you to engage fully without concerns.

**2. 300+ ms: @here Required**  
If your ping is 300 ms or higher, you must use the @here tag when participating. This helps notify other players of your connection status and allows for better management of the session.

**3. 500+ ms: @everyone Required**  
For participants with a ping of 500 ms or more, the @everyone tag must be used. This is crucial for maintaining session quality and ensuring all members are aware of potential connectivity issues.

**Conclusion**  
These requirements are in place to enhance the roleplay experience for everyone involved. If you have any questions about your ping or need assistance, please don’t hesitate to reach out to the staff team.
        `)
        .setColor('#aed191');

        await interaction.channel.send({ embeds: [pingEmbed] });
    },
};
