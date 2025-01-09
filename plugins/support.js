const {cmd , commands} = require('../command')

cmd({
    pattern: "support",
    desc: "support bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
          

*🇿🇼Support Channels💗*

👨‍💻◦ *Youtube Channel Link:* https://www.youtube.com/@malvintech2 

👨‍💻◦ *Github Profile Link:* https://github.com/Payoeboi

👨‍💻◦ *https://whatsapp.com/channel/0029VadeBJp5kg7A50e0gx2y*

👨‍💻◦ *Whatsapp Channel Link:* https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/kkpy93.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
