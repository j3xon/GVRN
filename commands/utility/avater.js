const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get the avatar of a user.')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user whose avatar you want to fetch')
                .setRequired(false)),

    async execute(interaction) {
        try {
            await interaction.deferReply();

            const targetUser = interaction.options.getUser('user') || interaction.user;
            const avatarURL = targetUser.displayAvatarURL({ format: 'png', size: 512 });

            const avatarEmbed = new EmbedBuilder()
                .setTitle(`${targetUser.username}'s Avatar`)
                .setImage(avatarURL)
                .setColor('#9ef673')
                .setDescription(`[Click here to view full size](${avatarURL})`);

            await interaction.editReply({ embeds: [avatarEmbed] });

        } catch (error) {
            console.error('Error fetching avatar:', error);
            await interaction.editReply({ content: 'An error occurred while fetching the avatar. Please try again later.' });
        }
    },
};
