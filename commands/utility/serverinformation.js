const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`serverinformation`)
        .setDefaultMemberPermissions(0)
        .setDescription('serverinformation'),
    async execute(interaction) {
        const image = "https://cdn.discordapp.com/attachments/1284822686467493898/1297568168134443008/Session_Startup_12.png?ex=67166606&is=67151486&hm=b32b2226ac98d12ce1311ac53b0d48d4b4a468576480eb7c86221a58776ac284&";
        const targetChannelId = '1288800097563578368';
        const targetChannel = interaction.client.channels.cache.get(targetChannelId);

        if (!targetChannel) {
            return interaction.reply({ content: 'Channel not found!', ephemeral: true });
        }

        const rulesEmbed = new EmbedBuilder()
            .setThumbnail("https://cdn.discordapp.com/icons/1284787684644093992/1822cd06a9b79d9b2881b8193f4a81b3.png?size=4096")
            .setDescription(`
Since our establishment in September 2024, Greenville Roleplay Native has blossomed into a dynamic and vibrant community...
**Before you dive into the excitement, we kindly ask you to take a moment to familiarize yourself with the guidelines outlined below. These rules are designed to ensure a positive and enjoyable experience for everyone involved.**
We are excited to have you join us and look forward to the adventures that await!`)
            .setTitle('Server Information')
            .setColor('#ff7d52');

        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId('server_information')
            .setPlaceholder('Select an option')
            .addOptions([
                { label: 'Server Information', description: 'Server Information',emoji: '<:Modern_Rules:1297570876559982633>', value: 'sf' },
                { label: 'Roleplay Information',description: 'Roleplay Information',emoji: '<:car:1284846257621176331><:Appeals:1284845960098218087>', value: 'rf' },
                { label: 'Server Links',description: 'Server Links',emoji: '<:Appeals:1284845960098218087>', value: 'sl' }
            ]);

        const row = new ActionRowBuilder().addComponents(selectMenu);

        // Acknowledge the interaction early
        await interaction.deferReply({ ephemeral: true });

        // Send the embed and the select menu to the specific channel
        await targetChannel.send({ embeds: [rulesEmbed], components: [row], files: [image] });

        // Confirm the action in the interaction reply
        await interaction.followUp({ content: 'Session rules sent to the channel.', ephemeral: true });
    },
};
