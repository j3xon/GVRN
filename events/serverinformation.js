const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.isStringSelectMenu()) return;

        const { customId, values } = interaction;

        if (customId === 'server_information') {
            const selectedValue = values[0];
            let embed;

            // Ephemeral "Hi" messages for each option
            if (selectedValue === 'sf') {
                embed = new EmbedBuilder()
                    .setDescription(`

**§1. ➜ Age Requirement:**  
All members must be at least 13 years old to participate in GVRN. Any member found to be under this age will be banned and may appeal their ban upon reaching the age requirement. This is to ensure compliance with Discord’s Terms of Service.

**§2. ➜ NSFW Content:**  
Posting NSFW content is strictly prohibited in any channel within GVRP. A warning will be issued for initial offenses; repeated violations may result in an immediate ban.

**§3. ➜ Instigating Drama:**  
Creating or participating in drama is not tolerated in GVRP. Members found instigating conflicts will receive a warning and may face further consequences for continued behavior.

**§4. ➜ Offensive Comments/Slurs:**  
We have a zero-tolerance policy for any form of hate speech, including racial, gendered, or ethnic slurs. Violators will be banned immediately.

**§5. ➜ Member Respect:**  
Every member is expected to treat others with respect and kindness. Conflicts should be resolved privately. Harassment or bullying will result in disciplinary action.

**§6. ➜ Staff Orders:**  
Members must comply with the directives given by GVRP staff. Failure to follow instructions may result in disciplinary measures.

**§7. ➜ Alternative Accounts:**  
Using alternate accounts to bypass bans or for any other purpose is strictly forbidden. Members found using alternate accounts will be banned.

**§8. ➜ Advertising:**  
Advertising other servers or services is not allowed in GVRP. This includes promotion through direct messages or public channels.

**§9. ➜ Bloxlink Verification:**  
Members must maintain their verification status on Bloxlink. Failure to do so may result in removal from sessions and loss of civilian status. Any changes to your ROBLOX username must be updated on the server.

**§10. ➜ Direct Messages:**  
GVRP does not mediate conflicts or issues that arise in direct messages or outside the server. This includes past incidents from other communities.

**§11. ➜ Voice Chatting:**  
Members must keep a respectful and calm demeanor in voice channels. Disruptive behavior will result in consequences.

**§12. ➜ GVRP Assets:**  
Stealing or misusing GVRP resources is strictly prohibited. Offenders will receive an unappealable ban.

**§13. ➜ Foreign Language:**  
All communication within GVRP should be conducted in English to maintain clarity and inclusivity for all members.

**§14. ➜ Terms of Service:**  
All members are required to adhere to the ROBLOX and Discord Terms of Service. Violations may result in disciplinary action.

`)
.setColor('#ff7d52');
            } else if (selectedValue === 'rf') {
                embed = new EmbedBuilder()
                    .setDescription(`



**1. Stay in Character (IC)**
- Always remain in character during roleplay sessions. Avoid using out-of-character (OOC) comments unless in designated OOC channels.

**2. Realistic Actions**
- Actions and decisions should reflect real-world logic and consequences. Avoid unrealistic behaviors that break immersion.

**3. Consequences of Actions**
- Characters should face realistic consequences for their actions. For example, if a character commits a crime, they may be pursued by law enforcement and face arrest.

**4. Communication**
- Use clear and respectful language in all interactions. Avoid excessive slang or abbreviations that may confuse others.
- In-character discussions should be conducted in the appropriate channels, while OOC conversations belong in OOC channels.

**5. Roleplay Etiquette**
- Do not interrupt or talk over others during roleplay. Allow everyone a chance to contribute and develop their characters.
- Avoid god-modding (controlling another player’s character without permission) and metagaming (using knowledge obtained outside of roleplay).

**6. Character Development**
- Invest time in developing your character’s backstory, personality, and motivations. This adds depth and makes interactions more engaging.
- Avoid sudden character changes without explanation. Allow for gradual development that aligns with the character’s experiences.

**7. Respect Boundaries**
- Understand and respect other players’ boundaries regarding sensitive topics. Communicate openly about content that may be triggering or uncomfortable.

**8. Follow Server Lore**
- Adhere to the established lore and rules of the server. Avoid introducing characters or elements that conflict with existing narratives.

**9. Use of Vehicles**
- Operate vehicles realistically, adhering to traffic laws and regulations. Reckless driving, stunts, or dangerous maneuvers should be avoided unless part of a sanctioned event.

**10. Conflict Resolution**
- Handle conflicts and disputes between characters through roleplay, not through OOC arguments. If conflicts escalate, involve a staff member for mediation.

**11. Limitations of Roleplay**
- Be mindful of other players’ time and enjoyment. If a scenario becomes too drawn out or tedious, consider wrapping it up or moving on to a new scene.

**12. In-Game Consequences**
- Understand that characters may experience injury, loss, or other negative outcomes during roleplay. Accept these outcomes gracefully to maintain realism.

**13. Reporting Issues**
- If you witness rule violations or disruptive behavior, report it to a staff member rather than confronting the individual directly.

**14. Enjoy the Experience**
- Remember that the primary goal is to have fun. Support fellow players and contribute positively to the overall atmosphere of the roleplay environment.

`)
.setColor('#ff7d52');
            } else if (selectedValue === 'sl') {
                embed = new EmbedBuilder()
                    .setDescription(`**GVRN Banned Vehicles**: [Click here](https://discord.com/channels/1284787684644093992/1297568575481188453)
                    **GVRN Official Website**: Soon To Come
                    **GVRN Official Youtube**: Soon To Come`)
                    .setColor('#ff7d52');
            } else if (selectedValue === 'notused') {
                embed = new EmbedBuilder()
                    .setDescription(`notusedlil bro`)
                    .setColor('#aed191');
            }

            // Send the selected embed
            await interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
};
