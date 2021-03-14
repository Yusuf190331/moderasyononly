const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	if (!message.guild) return message.author.sendMessage('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    let erkekRolü = "812209997449527316";
  let kızRolü = "812209996506988575";
  let ekipRolü = "812209995101634611"; 
 
  console.log(message.guild.roles.cache)
  let guild = message.guild; 
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let tag = "仒"
    const pinkcode = new Discord.MessageEmbed()
    .setDescription(`


**<a:807228958218125362:812272863603195905>** Toplam Üye: **${message.guild.memberCount}**

 **<:810852461358219304:812268314877231144>** Aktif Üye: **${message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}**

**仒** Tagda Bulunan Üyeler: **${message.guild.members.cache.filter(m => m.user.username.includes(tag)).size}**

 **<a:810852167958790176:812273038371586078> ** Seslide Bulunan Üye Sayısı: **${count}**

**<a:747388859310145548:812271799345610752>** Sunucunun Boost Sayısı: **${message.guild.premiumSubscriptionCount}**

 **<a:807228836961845249:812273332849999882> ** Sunucudaki Erkek Üye Sayısı: **${message.guild.roles.cache.get(erkekRolü).members.size}**

 **<a:807228884935245845:812273345994424341>** Sunucudaki Kız Üye Sayısı: **${message.guild.roles.cache.get(kızRolü).members.size}**

`)
    
        .setThumbnail(``)
    message.channel.send(pinkcode);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
}