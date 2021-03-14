const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLUE")

  .setTitle('仒 ` V Λ L E R İ N Λ  Modaration Botu Menüsü')

  .addField(" .ban",`Kişiyi Sunucudan Banlar`)
  
  .addField(" .jail",`Kişiyi Jail'e Atar`)
  
  .addField(" .mute",`Kişiyi Muted'e Atar`)
  
  .addField(" .vmute",`Seste İstediğiniz Kişiye Mute Atar`)

  .addField(" .unban",`Banladığınız Kişinin Banını Açar`)
  
  .addField(" .unjail",`Jail'e Attığınız Kişinin Jail'ini Açar`)
  
  .addField(" .unmute",`Muted'e Attığınız Kişinin Mute'sini Açar`)
  
  .addField(" .unvmute",`Sesteki Susturduğunuz Kişinin Mute'sini Açar`)

  .addField(" .ban-info",`Banlanan Kişinin İd Yazarak İnfosunucu Görürsünüz`)

  .addField(" .sil",`İstediğiniz 1-100 Arası Mesajları Siler`)
  
  .addField(" .snipe",`Kişinin Son Yazıp Sildiği Mesajı Atar`)
  
  .addField(" .kes",`İstediğiniz Kişinin Ses Bağlantısını Keser`)
  
  .addField(" .gel",`İstediğiniz Kişinin Sizin Ses Odanıza Gelmesini Sağlar`)
  
  .addField(" .git",`İstediğiniz Kişinin Ses Oadsına Gitmenizi Sağlar`)
    
  .addField(" .sicil",`İstediğiniz Kişinin Sicilini Görebilirsiniz`)
  
  .addField(" .sicil-sıfırla",`İstediğiniz Kişinin Sicilini Sıfırlarsınız`)
  
  .addField(" .kontrol",`İstediğiniz Kişinin Hangi Ses Kanalında Olduğunu Görürsünüz`)

  .addField(" .ssay",`Sesteki Yetkililerin Listesini Atar`)
  
  .addField(" .say",`Sunucu İnfo Komutudur(Yapılıyor)`)

  .addField(" .afk",`Afk Moduna Geçiş Yaparsınız`)
  
 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}