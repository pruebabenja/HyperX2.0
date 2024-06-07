const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 
const path = require("path") 
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
let usuario = global.db.data.users[m.sender]

const menu = (m, command, conn, prefix, pushname, sender, pickRandom, fkontak) => {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
let submenu = `𝐇𝐘𝐏𝐄𝐑𝐗 𝐓𝐄 𝐃𝐀 𝐋𝐀 𝐂𝐎𝐑𝐃𝐈𝐀𝐋 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐀 @${m.sender.split`@`[0]}
┏━━━━━━━━━━━┓
┣ \`✅𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ \`✅𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐇𝐘𝐏𝐄𝐑𝐗\`
┣ +51 936732723
┣ \`✅Para comprar el bot o para obtener informacion, porfavor comunicate con mi creador.\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ \`✅𝐃𝐈𝐒𝐅𝐑𝐔𝐓𝐀 𝐃𝐄𝐋 𝐁𝐎𝐓 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛`

${pickRandom([`\`¡𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐜𝐨𝐦𝐩𝐫𝐚𝐫 𝐚 𝐇𝐲𝐩𝐞𝐫𝐗?\`
wa.me/51936732723
let descargar = `
┏━━━━━━━━━━━┓
┣ \`✅𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}play
┣ ${prefix}play2
┣ ${prefix}play.1
┣ ${prefix}play.2
┣ ${prefix}play3
┣ ${prefix}play4
┣ ${prefix}musica
┣ ${prefix}video
┣ ${prefix}playdoc
┣ ${prefix}yts
┣ ${prefix}ytmp3
┣ ${prefix}ytmp4
┣ ${prefix}spotify
┣ ${prefix}music
┣ ${prefix}tiktok
┣ ${prefix}tiktokimg
┣ ${prefix}ttimg
┣ ${prefix}igstalk
┣ ${prefix}facebook
┣ ${prefix}fb
┣ ${prefix}instagram
┣ ${prefix}ig
┣ ${prefix}mediafire
┣ ${prefix}gdrive
┗━━━━━━━━━━━┛`
let grupos = `
┏━━━━━━━━━━━┓
┣ \`✅𝐆𝐑𝐔𝐏𝐀𝐋𝐄𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}welcome
┣ ${prefix}antilink
┣ ${prefix}antilink2
┣ ${prefix}antifake
┣ ${prefix}antiarabe
┣ ${prefix}antitoxic
┣ ${prefix}antienlace
┣ ${prefix}antiTwiter
┣ ${prefix}antitiktok
┣ ${prefix}antiTiktok
┣ ${prefix}antitelegram
┣ ${prefix}antiTelegram
┣ ${prefix}antifacebook
┣ ${prefix}antifb
┣ ${prefix}antiFacebook
┣ ${prefix}antInstagram
┣ ${prefix}antiIg
┣ ${prefix}antiyoutube
┣ ${prefix}antiYoutube
┣ ${prefix}autosticker
┣ ${prefix}detect
┣ ${prefix}autodetect
┣ ${prefix}antinsfw
┣ ${prefix}modocaliente
┣ ${prefix}autosticker
┣ ${prefix}modoadmin
┣ ${prefix}audios
┣ ${prefix}chatbot
┣ ${prefix}autolevelup
┣ ${prefix}autonivel
┣ ${prefix}kick
┣ ${prefix}add
┣ ${prefix}invita
┣ ${prefix}promote
┣ ${prefix}demote
┣ ${prefix}infogrupo
┣ ${prefix}groupinfo
┣ ${prefix}admins
┣ ${prefix}grupo
┣ ${prefix}warn
┣ ${prefix}advertencia
┣ ${prefix}unwarn
┣ ${prefix}quitaradvertencia
┣ ${prefix}setppname
┣ ${prefix}setdesc
┣ ${prefix}setppgroup
┣ ${prefix}anularlink
┣ ${prefix}resetlink
┣ ${prefix}hidetag
┣ ${prefix}tagall
┣ ${prefix}invocar
┣ ${prefix}listonline
┗━━━━━━━━━━━┛`

let buscadores = `
┏━━━━━━━━━━━┓
┣ \`✅𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}google
┣ ${prefix}chatgpt
┣ ${prefix}ia
┣ ${prefix}ia2
┣ ${prefix}imagen
┣ ${prefix}traducir
┣ ${prefix}wallpaper
┣ ${prefix}ss
┣ ${prefix}dall-e
┣ ${prefix}bard
┣ ${prefix}horario
┗━━━━━━━━━━━┛
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let juegos = `
┏━━━━━━━━━━━┓
┣ \`✅𝐉𝐔𝐄𝐆𝐎𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}simi
┣ ${prefix}ppt
┣ ${prefix}gay
┣ ${prefix}pareja
┣ ${prefix}love
┣ ${prefix}follar
┣ ${prefix}topgays
┣ ${prefix}topotakus
┣ ${prefix}top
┣ ${prefix}pregunta
┣ ${prefix}verdad
┣ ${prefix}reto
┣ ${prefix}doxear
┣ ${prefix}math
┣ ${prefix}matematicas
┣ ${prefix}ttt
┣ ${prefix}tictactoe
┣ ${prefix}ttc
┣ ${prefix}delttt
┣ ${prefix}personalidad
┣ ${prefix}racista
┣ ${prefix}slot
┣ ${prefix}dado
┣ ${prefix}piropo
┣ ${prefix}ship
┣ ${prefix}formartrio
┣ ${prefix}formapareja5
┣ ${prefix}txt
┣ ${prefix}fake
┗━━━━━━━━━━━┛`
let efecto = `
┏━━━━━━━━━━━┓
┣ \`✅𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}bass
┣ ${prefix}blown
┣ ${prefix}deep
┣ ${prefix}earrape
┣ ${prefix}fast
┣ ${prefix}fat
┣ ${prefix}nightcore
┣ ${prefix}reverse
┣ ${prefix}robot
┣ ${prefix}slow
┣ ${prefix}smooth
┣ ${prefix}squirrel
┗━━━━━━━━━━━┛`
let convertidores = `
┏━━━━━━━━━━━┓
┣ \`✅𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}tour1
┣ ${prefix}tts
┣ ${prefix}tomp3
┣ ${prefix}toimg
┣ ${prefix}toaudio
┣ ${prefix}toanime
┣ ${prefix}hd
┗━━━━━━━━━━━┛`
let menu18 = `
┏━━━━━━━━━━━┓
┣ \`✅𝐗𝐗𝐗𝐗 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}pussy
┣ ${prefix}nsfwloli
┣ ${prefix}hentai
┣ ${prefix}hentai2
┣ ${prefix}pack
┣ ${prefix}pack2
┣ ${prefix}pack3
┣ ${prefix}videoxxx
┣ ${prefix}videoxxxlesbi
┣ ${prefix}pornolesbianavid
┣ ${prefix}videolesbixxx
┣ ${prefix}porno
┣ ${prefix}lewd
┣ ${prefix}feed
┣ ${prefix}gasm
┣ ${prefix}anal
┣ ${prefix}holo
┣ ${prefix}tits
┣ ${prefix}kuni
┣ ${prefix}kiss
┣ ${prefix}erok
┣ ${prefix}smug
┣ ${prefix}solog
┣ ${prefix}feetg
┣ ${prefix}lewdk
┣ ${prefix}fendom
┣ ${prefix}cuddle
┣ ${prefix}eroyuri
┣ ${prefix}cum
┣ ${prefix}blowjob
┣ ${prefix}holoero
┣ ${prefix}erokemo
┣ ${prefix}fox_girl
┣ ${prefix}futanari
┣ ${prefix}wallpaper
┗━━━━━━━━━━━┛`
let menurandow = `
┏━━━━━━━━━━━┓
┣ \`✅𝐑𝐀𝐍𝐃𝐎𝐌 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}memes
┣ ${prefix}horny
┣ ${prefix}simp
┣ ${prefix}lolice
┣ ${prefix}comentar
┣ ${prefix}comment
┣ ${prefix}loli
┣ ${prefix}lolivid
┣ ${prefix}neko
┣ ${prefix}waifu
┣ ${prefix}blackpink
┣ ${prefix}navidad
┣ ${prefix}akira
┣ ${prefix}akiyama
┣ ${prefix}anna
┣ ${prefix}asuna
┣ ${prefix}ayuzawa
┣ ${prefix}boruto
┣ ${prefix}chino
┣ ${prefix}chitoge
┣ ${prefix}deidara
┣ ${prefix}erza
┣ ${prefix}elaina
┣ ${prefix}eba
┣ ${prefix}emilia
┣ ${prefix}hestia
┣ ${prefix}hinata
┣ ${prefix}inori
┣ ${prefix}isuzu
┣ ${prefix}itachi
┣ ${prefix}itori
┣ ${prefix}kaga
┣ ${prefix}kagura
┣ ${prefix}kaori
┣ ${prefix}keneki
┣ ${prefix}kotori
┣ ${prefix}kurumi
┣ ${prefix}madara
┣ ${prefix}mikasa
┣ ${prefix}miku
┣ ${prefix}minato
┣ ${prefix}naruto
┣ ${prefix}nezuko
┣ ${prefix}sagiri
┣ ${prefix}sasuke
┣ ${prefix}sakura
┣ ${prefix}cosplay
┗━━━━━━━━━━━┛`
let menuRPG = `
┏━━━━━━━━━━━┓
┣ \`✅𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}minar
┣ ${prefix}robar
┣ ${prefix}rob
┣ ${prefix}crime
┣ ${prefix}trabajar
┣ ${prefix}work
┣ ${prefix}buy
┣ ${prefix}bal
┣ ${prefix}balace
┣ ${prefix}claim
┣ ${prefix}lb
┣ ${prefix}leaderboard
┣ ${prefix}cofre
┣ ${prefix}perfil
┣ ${prefix}nivel
┣ ${prefix}levelup
┣ ${prefix}transferir
┣ ${prefix}transfer
┣ ${prefix}afk
┗━━━━━━━━━━━┛`
let menuSticker= `
┏━━━━━━━━━━━┓
┣ \`✅𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}s
┣ ${prefix}sticker
┣ ${prefix}wm
┣ ${prefix}attp
┣ ${prefix}qc
┣ ${prefix}emojimix
┗━━━━━━━━━━━┛`
let menuOwner = `
┏━━━━━━━━━━━┓
┣ \`✅𝐎𝐖𝐍𝐄𝐑 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}anticall
┣ ${prefix}antillamda
┣ ${prefix}antipv
┣ ${prefix}antiprivado
┣ ${prefix}autoread
┣ ${prefix}modojadibot
┣ ${prefix}añadirdiamantes
┣ ${prefix}addlimit
┣ ${prefix}dardiamantes
┣ ${prefix}añadirxp
┣ ${prefix}addxp
┣ ${prefix}banuser
┣ ${prefix}unbanuser
┣ ${prefix}autoadmin
┣ ${prefix}nuevonombre
┣ ${prefix}botname
┣ ${prefix}nuevafoto
┣ ${prefix}seppbot
┣ ${prefix}fotobot
┣ ${prefix}bc
┣ ${prefix}fetch
┣ ${prefix}bcgc
┣ ${prefix}setpp
┣ ${prefix}public
┣ ${prefix}privado
┣ ${prefix}getcase
┣ ${prefix}update
┣ ${prefix}restart
┣ ${prefix}reiniciar
┗━━━━━━━━━━━┛`

if (command == 'menu' || command == 'help') {
m.react('💫') 
let saludos = ``
let menu = `
┏━━━━━━━━━━━┓
┣ 🚀𝑴𝑬𝑵𝑼 𝑷𝑹𝑰𝑵𝑪𝑰𝑷𝑨𝑳 𝑫𝑬 𝑯𝒀𝑷𝑬𝑹𝑿:
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ✅𝑪𝒓𝒆𝒂𝒅𝒐𝒓 𝑯𝒚𝒑𝒆𝒓𝑿:
┣ +51 936732723
┣ ✅Para comprar el bot o para obtener informacion, porfavor comunicate con mi creador.
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ 🚀𝑫𝑰𝑺𝑭𝑹𝑼𝑻𝑨 𝑫𝑬𝑳 𝑴𝑬𝑵𝑼 𝑪𝑶𝑴𝑷𝑳𝑬𝑻𝑶 𝑫𝑬 𝑯𝒀𝑷𝑬𝑹𝑿:
┗━━━━━━━━━━━┛
${conn.user.id == global.numBot2 ? `┣ *𝑯𝒀𝑷𝑬𝑹𝑿*` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}`
let xd = `${pickRandom([`\`¿𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐭𝐮 𝐛𝐨𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨?\`https://www.facebook.com/`, `\`□ CÓMO INSTALAR EL BOT\`\n${yt}`, `\`¿Qué hay de nuevo?\`\n• Pon : ${prefix}nuevo`, `\`💫 INFÓMARTE SOBRE LAS NUEVAS ACTUALIZACIONES, NOVEDADES DEL BOT AQUI\`\n${nna}`, `\`🌟¿Te agrada el bot? califica nuestro repositorio con una estrellita ☺\`\n${md}\``])}`

let listSections = []    
listSections.push({
title: '',
rows: [{ header: "𝑴𝑬𝑵𝑼 𝑪𝑶𝑴𝑷𝑳𝑬𝑻𝑶 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.allmenu`, description: `Muestra el menu completo de 𝑯𝒀𝑷𝑬𝑹𝑿\n` }, 
{ header: "𝑴𝑬𝑵𝑼 𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.menu1`, description: `Muestra el menu de descarga 𝑯𝒀𝑷𝑬𝑹𝑿\n` },
{ header: "𝑴𝑬𝑵𝑼 𝑨𝑼𝑫𝑰𝑶𝑺 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.menu2`, description: `Muestra el menu de audios palabra clave para interactuar con el bot 𝑯𝒀𝑷𝑬𝑹𝑿\n` },
{ header: "𝑴𝑬𝑵𝑼 𝑮𝑹𝑼𝑷𝑨𝑳 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.menu3`, description: `Muestra el menu de gestión del Grupo 𝑯𝒀𝑷𝑬𝑹𝑿\n` },
{ header: "𝑴𝑬𝑵𝑼 𝑩𝑼𝑺𝑪𝑨𝑫𝑶𝑹𝑬𝑺 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.menu4`, description: `Muestra el menu para buscar información 𝑯𝒀𝑷𝑬𝑹𝑿\n` },
{ header: "𝑴𝑬𝑵𝑼 𝑱𝑼𝑬𝑮𝑶𝑺 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.menu5`, description: `Muestra el menu de juegos para divertir tu grupo con multi juegos 𝑯𝒀𝑷𝑬𝑹𝑿\n` }, 
{ header: "𝑴𝑬𝑵𝑼 𝑬𝑭𝑬𝑪𝑻𝑶𝑺 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.menu6`, description: `Muestra el menu de efecto 𝑯𝒀𝑷𝑬𝑹𝑿\n` }, 
{ header: "𝑴𝑬𝑵𝑼 𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑫𝑶𝑹𝑬𝑺 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.menu7`, description: `Muestra el menu de convertidores 𝑯𝒀𝑷𝑬𝑹𝑿\n` }, 
{ header: "𝑴𝑬𝑵𝑼 𝑺𝑻𝑰𝑪𝑲𝑬𝑹 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.menu10`, description: `Muestra el menu de creación de sticker 𝑯𝒀𝑷𝑬𝑹𝑿\n` }, 
{ header: "𝑴𝑬𝑵𝑼 𝑶𝑾𝑵𝑬𝑹 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.menu11`, description: `Muestra el menu solo para propietario del bot 𝑯𝒀𝑷𝑬𝑹𝑿\n` }, 
{ header: "𝑴𝑬𝑵𝑼 𝑿𝑿𝑿𝑿 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.menu18`, description: `Muestra el menu +18 𝑯𝒀𝑷𝑬𝑹𝑿\n` }, 
{ header: "𝑴𝑬𝑵𝑼 𝑳𝑶𝑮𝑶𝑺 𝑯𝒀𝑷𝑬𝑹𝑿𝐒", title: "", id: `.logos`, description: `Muestra la lista para crear logos 𝑯𝒀𝑷𝑬𝑹𝑿\n` }, 
{ header: "𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝑨𝑫 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.status`, description: `Comprueba la velocidad del bot 𝑯𝒀𝑷𝑬𝑹𝑿\n` }, 
{ header: "𝑹𝑬𝑮𝑳𝑨𝑺 𝑯𝒀𝑷𝑬𝑹𝑿", title: "", id: `.reglas`, description: `Conecer la reglas del bot 𝑯𝒀𝑷𝑬𝑹𝑿\n` }, 
]})

conn.sendList(m.chat, saludos, menu, `sᴇʟᴇᴄᴄɪᴏɴᴇs ᴀǫᴜɪ`, listSections, fkontak)

/*conn.sendMessage(m.chat, { text: menu,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender, numBot],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) */
}

if (command == 'menu1' || command == 'descarga') {
m.react('🚀') 
conn.sendButton(m.chat, submenu, descargar, pickRandom([img, img1, img2]), [['𝐀𝐔𝐃𝐈𝐎𝐒', `.menu2`], ['𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃', `.ping`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: submenu + descargar,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/
}

if (command == 'menu2' || command == 'audio') {

let menu2 = `${lenguaje.menu.text13}\n\na\nfeliz navidad\nMerry Christmas\nFeliz cumpleaños\nPasa pack\nUwu\nSiuuu\nhola\nhello\nVete a la verga\nPasen porno\nHora del sexito\nPongan cuties\nFiesta del admin\nAdmin party\nViernes\nGOOOOD\nAlto temazo\nTodo bien\nBuenos dias\nBot gay\nGracias\nFua\nFino señores\n🧐🍷\nCorte\nGaspi buenos dias\nGaspi me saludas\nGaspi y las minitas\nGaspi todo bien\nGaspi ya no aguanto\nContate algo bot\nSexo\nMomento epico\nEl bot del orto no funciona\nEpicardo\nInsta de la minita\nUna mierda de bot\nUltimo momento\nNefasto\nParaguayo\nBot de mierda\nVenezolano\na nadie le importa\nGaspi corte\nYa me voy a dormir\nCalefon\nApurate bot\nUn chino\nNo funciona\nBoliviano\nEnano\nQuien es tu sempai botsito\nMe gimes 7u7\nTe amo botsito uwu\nOnichan\nLa toca 7w7\nautodestruction\n\n${lenguaje.menu.text14}`
conn.sendMessage(m.chat, { text: menu2}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu3' || command == 'menugrupos') {
m.react('🔰') 
conn.sendButton(m.chat, submenu, grupos, pickRandom([img, img1, img2]), [['𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑', `.descarga`], ['𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃', `.ping`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: submenu + grupos,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/
}

if (command == 'menu4' || command == 'menubuscadores') {
m.react('🪄') 
conn.sendButton(m.chat, submenu, buscadores, pickRandom([img, img1, img2]), [['🎮 𝐉𝐔𝐄𝐆𝐎𝐒', `.menu5`], ['✅ 𝐒𝐓𝐀𝐓𝐔𝐒', `.status`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: submenu + buscadores,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/
}

if (command == 'menu5' || command == 'menujuegos') {
m.react('👾') 
conn.sendButton(m.chat, submenu, juegos, pickRandom([img, img1, img2]), [['𝐌𝐄𝐍𝐔 𝐄𝐅𝐄𝐂𝐓𝐎', `.menu6`], ['𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃', `.ping`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: submenu + juegos,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/
}

if (command == 'menu6' || command == 'menuefecto') {
m.react('🎤') 
conn.sendButton(m.chat, submenu, efecto, pickRandom([img, img1, img2]), [['𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒', `.menu7`], ['𝐑𝐄𝐆𝐋𝐀𝐒', `.reglas`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: submenu + efecto,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/
}

if (command == 'menu7' || command == 'menuconvertidores') {
m.react('🧧') 
conn.sendButton(m.chat, submenu, efecto, pickRandom([img, img1, img2]), [['𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒', `.menu7`], ['𝐑𝐄𝐆𝐋𝐀𝐒', `.reglas`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: submenu + convertidores,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/

}

if (command == 'menu18' || command == 'Menuhony') {
m.react('🥵') 
conn.sendButton(m.chat, submenu, menu18, pickRandom([img, img1, img2]), [['𝐌𝐄𝐍𝐔-𝐑𝐀𝐍𝐃𝐎𝐖', `.menu8`], ['𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃', `.ping`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: submenu + menu18,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/
}

if (command == 'menurandow' || command == 'menu8') {
m.react('⛩️') 
conn.sendButton(m.chat, submenu, menurandow, pickRandom([img, img1, img2]), [['𝐌𝐄𝐍𝐔-𝐑𝐏𝐆', `.menu9`], ['𝐋𝐎𝐆𝐎𝐒', `.logos`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: submenu + menurandow,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/
}

if (command == 'menuRPG' || command == 'menu9') {
m.react('⚒️') 
conn.sendButton(m.chat, submenu, menuRPG, pickRandom([img, img1, img2]), [['𝐌𝐄𝐍𝐔-𝐒𝐓𝐈𝐂𝐊𝐄𝐑', `.menu10`], ['𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃', `.ping`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: submenu + menuRPG,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/
}

if (command == 'menuSticker' || command == 'menu10') {
m.react('🎈') 
conn.sendButton(m.chat, submenu, menuSticker, pickRandom([img, img1, img2]), [['𝐌𝐄𝐍𝐔-𝐎𝐖𝐍𝐄𝐑', `.menu11`], ['𝐄𝐒𝐓𝐀𝐃𝐎', `.estado`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: submenu + menuSticker,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/
}

if (command == 'menuOwner' || command == 'menu11') {
m.react('👑') 
conn.sendButton(m.chat, submenu, menuOwner, pickRandom([img, img1, img2]), [['𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎', `.allmenu`], ['𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃', `.ping`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: submenu + menuOwner,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/
}

if (command == 'allmenu' || command == 'menucompleto') {
m.react('🙌') 
let menu = `𝐇𝐘𝐏𝐄𝐑𝐗 𝐓𝐄 𝐃𝐀 𝐋𝐀 𝐂𝐎𝐑𝐃𝐈𝐀𝐋 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐀 @${m.sender.split`@`[0]}
┏━━━━━━━━━━━┓
┣ \`✅𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ \`✅𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐇𝐘𝐏𝐄𝐑𝐗\`
┣ +51 936732723
┣ \`✅Para comprar el bot o para obtener informacion, porfavor comunicate con mi creador.\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ \`✅𝐃𝐈𝐒𝐅𝐑𝐔𝐓𝐀 𝐃𝐄𝐋 𝐁𝐎𝐓 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐈𝐍𝐅𝐎 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}reg
┣ ${prefix}unreg
┣ ${prefix}myns
┣ ${prefix}estado
┣ ${prefix}audios
┣ ${prefix}nuevo
┣ ${prefix}reglas
┣ ${prefix}ping
┣ ${prefix}velocidad
┣ ${prefix}grupos
┣ ${prefix}joins
┣ ${prefix}owner
┣ ${prefix}creador
┣ ${prefix}solicitud
┣ ${prefix}cuenta
┣ ${prefix}cuentasoficiales
┣ ${prefix}status
┣ ${prefix}infohost
┣ ${prefix}report
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐉𝐀𝐃𝐈 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ \`✅𝐄𝐒𝐂𝐀𝐍𝐄𝐀𝐑 𝐐𝐑\`
┣ ${prefix}serbot
┣ ${prefix}qr
┣ \`✅𝐂𝐎𝐃𝐈𝐆𝐎 𝐃𝐄 𝟖 𝐃𝐈𝐆𝐈𝐓𝐎𝐒\`
┣ ${prefix}serbot
┣ ${prefix}jadibot
┣ \`✅𝐒𝐔𝐁 𝐁𝐎𝐓𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┣ ${prefix}bots
┣ \`✅𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐏𝐀𝐑𝐀 𝐋𝐎𝐒 𝐒𝐔𝐁 𝐁𝐎𝐓𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┣ ${prefix}stop
┣ ${prefix}deljadibot
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}play
┣ ${prefix}play2
┣ ${prefix}play.1
┣ ${prefix}play.2
┣ ${prefix}play3
┣ ${prefix}play4
┣ ${prefix}musica
┣ ${prefix}video
┣ ${prefix}playdoc
┣ ${prefix}yts
┣ ${prefix}ytmp3
┣ ${prefix}ytmp4
┣ ${prefix}spotify
┣ ${prefix}music
┣ ${prefix}tiktok
┣ ${prefix}tiktokimg
┣ ${prefix}ttimg
┣ ${prefix}igstalk
┣ ${prefix}facebook
┣ ${prefix}fb
┣ ${prefix}instagram
┣ ${prefix}ig
┣ ${prefix}mediafire
┣ ${prefix}gdrive
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐆𝐑𝐔𝐏𝐀𝐋𝐄𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}welcome
┣ ${prefix}antilink
┣ ${prefix}antilink2
┣ ${prefix}antifake
┣ ${prefix}antiarabe
┣ ${prefix}antitoxic
┣ ${prefix}antienlace
┣ ${prefix}antiTwiter
┣ ${prefix}antitiktok
┣ ${prefix}antiTiktok
┣ ${prefix}antitelegram
┣ ${prefix}antiTelegram
┣ ${prefix}antifacebook
┣ ${prefix}antifb
┣ ${prefix}antiFacebook
┣ ${prefix}antInstagram
┣ ${prefix}antiIg
┣ ${prefix}antiyoutube
┣ ${prefix}antiYoutube
┣ ${prefix}autosticker
┣ ${prefix}detect
┣ ${prefix}autodetect
┣ ${prefix}antinsfw
┣ ${prefix}modocaliente
┣ ${prefix}autosticker
┣ ${prefix}modoadmin
┣ ${prefix}audios
┣ ${prefix}chatbot
┣ ${prefix}autolevelup
┣ ${prefix}autonivel
┣ ${prefix}kick
┣ ${prefix}add
┣ ${prefix}invita
┣ ${prefix}promote
┣ ${prefix}demote
┣ ${prefix}infogrupo
┣ ${prefix}groupinfo
┣ ${prefix}admins
┣ ${prefix}grupo
┣ ${prefix}warn
┣ ${prefix}advertencia
┣ ${prefix}unwarn
┣ ${prefix}quitaradvertencia
┣ ${prefix}setppname
┣ ${prefix}setdesc
┣ ${prefix}setppgroup
┣ ${prefix}anularlink
┣ ${prefix}resetlink
┣ ${prefix}hidetag
┣ ${prefix}tagall
┣ ${prefix}invocar
┣ ${prefix}listonline
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}google
┣ ${prefix}chatgpt
┣ ${prefix}ia
┣ ${prefix}ia2
┣ ${prefix}imagen
┣ ${prefix}traducir
┣ ${prefix}wallpaper
┣ ${prefix}ss
┣ ${prefix}dall-e
┣ ${prefix}bard
┣ ${prefix}horario
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐉𝐔𝐄𝐆𝐎𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}simi
┣ ${prefix}ppt
┣ ${prefix}gay
┣ ${prefix}pareja
┣ ${prefix}love
┣ ${prefix}follar
┣ ${prefix}topgays
┣ ${prefix}topotakus
┣ ${prefix}top
┣ ${prefix}pregunta
┣ ${prefix}verdad
┣ ${prefix}reto
┣ ${prefix}doxear
┣ ${prefix}math
┣ ${prefix}matematicas
┣ ${prefix}ttt
┣ ${prefix}tictactoe
┣ ${prefix}ttc
┣ ${prefix}delttt
┣ ${prefix}personalidad
┣ ${prefix}racista
┣ ${prefix}slot
┣ ${prefix}dado
┣ ${prefix}piropo
┣ ${prefix}ship
┣ ${prefix}formartrio
┣ ${prefix}formapareja5
┣ ${prefix}txt
┣ ${prefix}fake
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}bass
┣ ${prefix}blown
┣ ${prefix}deep
┣ ${prefix}earrape
┣ ${prefix}fast
┣ ${prefix}fat
┣ ${prefix}nightcore
┣ ${prefix}reverse
┣ ${prefix}robot
┣ ${prefix}slow
┣ ${prefix}smooth
┣ ${prefix}squirrel
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}tour1
┣ ${prefix}tts
┣ ${prefix}tomp3
┣ ${prefix}toimg
┣ ${prefix}toaudio
┣ ${prefix}toanime
┣ ${prefix}hd
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐗𝐗𝐗𝐗 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}pussy
┣ ${prefix}nsfwloli
┣ ${prefix}hentai
┣ ${prefix}hentai2
┣ ${prefix}pack
┣ ${prefix}pack2
┣ ${prefix}pack3
┣ ${prefix}videoxxx
┣ ${prefix}videoxxxlesbi
┣ ${prefix}pornolesbianavid
┣ ${prefix}videolesbixxx
┣ ${prefix}porno
┣ ${prefix}lewd
┣ ${prefix}feed
┣ ${prefix}gasm
┣ ${prefix}anal
┣ ${prefix}holo
┣ ${prefix}tits
┣ ${prefix}kuni
┣ ${prefix}kiss
┣ ${prefix}erok
┣ ${prefix}smug
┣ ${prefix}solog
┣ ${prefix}feetg
┣ ${prefix}lewdk
┣ ${prefix}fendom
┣ ${prefix}cuddle
┣ ${prefix}eroyuri
┣ ${prefix}cum
┣ ${prefix}blowjob
┣ ${prefix}holoero
┣ ${prefix}erokemo
┣ ${prefix}fox_girl
┣ ${prefix}futanari
┣ ${prefix}wallpaper
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐑𝐀𝐍𝐃𝐎𝐌 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}memes
┣ ${prefix}horny
┣ ${prefix}simp
┣ ${prefix}lolice
┣ ${prefix}comentar
┣ ${prefix}comment
┣ ${prefix}loli
┣ ${prefix}lolivid
┣ ${prefix}neko
┣ ${prefix}waifu
┣ ${prefix}blackpink
┣ ${prefix}navidad
┣ ${prefix}akira
┣ ${prefix}akiyama
┣ ${prefix}anna
┣ ${prefix}asuna
┣ ${prefix}ayuzawa
┣ ${prefix}boruto
┣ ${prefix}chino
┣ ${prefix}chitoge
┣ ${prefix}deidara
┣ ${prefix}erza
┣ ${prefix}elaina
┣ ${prefix}eba
┣ ${prefix}emilia
┣ ${prefix}hestia
┣ ${prefix}hinata
┣ ${prefix}inori
┣ ${prefix}isuzu
┣ ${prefix}itachi
┣ ${prefix}itori
┣ ${prefix}kaga
┣ ${prefix}kagura
┣ ${prefix}kaori
┣ ${prefix}keneki
┣ ${prefix}kotori
┣ ${prefix}kurumi
┣ ${prefix}madara
┣ ${prefix}mikasa
┣ ${prefix}miku
┣ ${prefix}minato
┣ ${prefix}naruto
┣ ${prefix}nezuko
┣ ${prefix}sagiri
┣ ${prefix}sasuke
┣ ${prefix}sakura
┣ ${prefix}cosplay
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}minar
┣ ${prefix}robar
┣ ${prefix}rob
┣ ${prefix}crime
┣ ${prefix}trabajar
┣ ${prefix}work
┣ ${prefix}buy
┣ ${prefix}bal
┣ ${prefix}balace
┣ ${prefix}claim
┣ ${prefix}lb
┣ ${prefix}leaderboard
┣ ${prefix}cofre
┣ ${prefix}perfil
┣ ${prefix}nivel
┣ ${prefix}levelup
┣ ${prefix}transferir
┣ ${prefix}transfer
┣ ${prefix}afk
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}s
┣ ${prefix}sticker
┣ ${prefix}wm
┣ ${prefix}attp
┣ ${prefix}qc
┣ ${prefix}emojimix
┗━━━━━━━━━━━┛

┏━━━━━━━━━━━┓
┣ \`✅𝐎𝐖𝐍𝐄𝐑 𝐇𝐘𝐏𝐄𝐑𝐗\`
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣ ${prefix}anticall
┣ ${prefix}antillamda
┣ ${prefix}antipv
┣ ${prefix}antiprivado
┣ ${prefix}autoread
┣ ${prefix}modojadibot
┣ ${prefix}añadirdiamantes
┣ ${prefix}addlimit
┣ ${prefix}dardiamantes
┣ ${prefix}añadirxp
┣ ${prefix}addxp
┣ ${prefix}banuser
┣ ${prefix}unbanuser
┣ ${prefix}autoadmin
┣ ${prefix}nuevonombre
┣ ${prefix}botname
┣ ${prefix}nuevafoto
┣ ${prefix}seppbot
┣ ${prefix}fotobot
┣ ${prefix}bc
┣ ${prefix}fetch
┣ ${prefix}bcgc
┣ ${prefix}setpp
┣ ${prefix}public
┣ ${prefix}privado
┣ ${prefix}getcase
┣ ${prefix}update
┣ ${prefix}restart
┣ ${prefix}reiniciar
┗━━━━━━━━━━━┛`

conn.sendButton(m.chat, menu, botname, img, [['𝐈𝐍𝐅𝐎', `.status`], ['𝐆𝐑𝐔𝐏𝐎𝐒', `.grupos`]], null, [['𝐇𝐲𝐩𝐞𝐫𝐗', `${pickRandom([nna, nn, md, yt])}`]], m)
/*conn.sendMessage(m.chat, { text: menu,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: '𝑯𝒀𝑷𝑬𝑹𝑿' },
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender, numBot],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": menu2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) */
}

if (command == 'nuevo' || command == 'extreno') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text15(vs), contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'INFINITY-WA 💫' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'reglas') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text16, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'INFINITY-WA 💫' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}

module.exports = { menu }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
