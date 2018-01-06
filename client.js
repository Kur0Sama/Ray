const Discord = require('discord.js');
const client = new Discord.Client();

function join(user, channel, role) {
    let str = `**${user.username}** à rejoins le role **\`${role.name}\`**`;
    let e = new Discord.RichEmbed()
        .setColor(0x4ef442)
        .setDescription(str);
    channel.send(e);
};

function left(user, channel, role) {
    let str = `**${user.username}** à quitté le role **\`${role.name}\`**`;
    let e = new Discord.RichEmbed()
        .setColor(0xf44141)
        .setDescription(str);
    channel.send(e);
};

client.on('message', message => {
    let prefix = '!!';
    let channel = message.channel;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (channel.type == 'dm') return;
    if (channel.id == '398568528288153610') {
        if (!message.content.startsWith(prefix)) {
            message.author.send(`**Vous pouvez uniquement utiliser des commandes dans le channel <#398568528288153610> !**`);
            return message.delete(300);
        } else {
            if (command == 'pc') {
                let role = message.guild.roles.find('name', '💻 Joueur PC 💻');
                if (!message.member.roles.array().includes(role)) {
                    join(message.author, message.channel, role);
                    message.member.addRole(role);
                } else {
                    left(message.author, message.channel, role);
                    message.member.removeRole(role);
                }
            } else if (command == 'xbox') {
                let role = message.guild.roles.find('name', '🎮 Joueur Xbox 🎮');
                if (!message.member.roles.array().includes(role)) {
                    join(message.author, message.channel, role);
                    message.member.addRole(role);
                } else {
                    left(message.author, message.channel, role);
                    message.member.removeRole(role);
                }
            } else if (command == 'ps4') {
                let role = message.guild.roles.find('name', '🎮 Joueur PS4 🎮');
                if (!message.member.roles.array().includes(role)) {
                    join(message.author, message.channel, role);
                    message.member.addRole(role);
                } else {
                    left(message.author, message.channel, role);
                    message.member.removeRole(role);
                }
            } else if (command == 'pve') {
                let role = message.guild.roles.find('name', '🗺️ Sauver le Monde 🗺️');
                if (!message.member.roles.array().includes(role)) {
                    join(message.author, message.channel, role);
                    message.member.addRole(role);
                } else {
                    left(message.author, message.channel, role);
                    message.member.removeRole(role);
                }
            } else {
                message.author.send(`Dans le channel <#398568528288153610>, vous ne pouvez executer que les commandes :

- **!!pc** : Rejoindre ou quitter le grade \`💻 Joueur PC 💻\`
- **!!xbox** : Rejoindre ou quitter le grade \`🎮 Joueur Xbox 🎮\`
- **!!ps4** : Rejoindre ou quitter le grade \`🎮 Joueur PS4 🎮\`
- **!!pve** : Rejoindre ou quitter le grade \`🗺️ Sauver le Monde 🗺️\``)
        return message.delete(300);
            }
        }
    } else {
        if (message.content.startsWith(prefix)) {
            message.author.send(`**L'usage des commandes est réservé au channel <#398568528288153610> !**`);
            return message.delete(300);
        }
    }
})
client.on('guildMemberAdd', member => {
    let role = member.guild.roles.find('name', '👑 Battle Royale 👑');
    member.addRole(role);
    member.guild.channels.get('398573574006505497').send(`\\🏹 Le commandant ${member.user} est arrivé sur le serveur ! Pense à lire les <#398568273282596866> ! \\🏹`);
});
client.on('guildMemberRemove', member => {
    member.guild.channels.get('398573574006505497').send(`\\🏹 Le commandant ${member.user} à quitté le serveur ! Bonne chance pour le reste de l'aventure ! \\🏹`);
});
client.on('ready', () => {
    console.log('Je suis Ray et je suis prète à fonctionner commandant !');
});

client.login(process.env.TOKEN);