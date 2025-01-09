const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
          
📍𝖱𝖾𝗉𝗈 𝖫𝗂𝗇𝗄 ❤️‍🔥👇

👨‍💻◦ *Github Link:* https://github.com/Payoeboi/PAYOEBOI-XMD

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
