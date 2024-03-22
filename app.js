
try {
  // Seu código aqui
  const { default: makeWASocket,
    makeCacheableSignalKeyStore, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');
  ///////////////////////////////////////////////
  //PEDEM DE MUDELE
  ///////////////////////////////////////////////
  const { google } = require("googleapis")
  const mimetype = require("mime-types")
  const { generateMessageTag, query, updateProfileStatus, sendPresenceUpdate } = require('./func.js')
  const fs = require('fs');
  const P = require('pino');
  //const { node-webpmux } = require("node-webpmux")
  const ytts = require("yt-search");
  const ytttts = require("yt-search");
  const yttts = require("yt-search");
  const chalk = require('chalk')
  const moment = require('moment-timezone')
  const clc = require('cli-color')
  const hx = require("hxz-api")
  const NodeCache = require('node-cache');
  const uber = require('uberduck-api')
  const cheerio = require("cheerio");
  const readline = require("readline");
  const axios = require('axios');
  const ffmpeg = require('fluent-ffmpeg');
  const thiccysapi = require('textmaker-thiccy');
  ///////////////////////////////////////////////
  let bancht = JSON.parse(fs.readFileSync('./functions/banchat.json'));
  const linkNeroV1 = JSON.parse(fs.readFileSync("./functions/fotos/logo.json"))
  const infoBot = JSON.parse(fs.readFileSync('./config.json'));
  ///////////////////////////////////////////////

  //  "https://telegra.ph/file/899eeb68fbedb64c2d926.jpg"
  const { palavras } = require('./functions/conselhos.js');
  const { ytv } = require('./functions/y2mate.js')
  const { fromBuffer } = require("file-type");
  //const { ia } = require('./datab/js/ia')
  //const welcome_group = JSON.parse(fs.readFileSync('./functions/welcomegp.json'));
  //const writeExifImg = require("./functions/exif")
  const bye_group2 = JSON.parse(fs.readFileSync('./functions/byegp.json'));
  const { insert, response } = require('./functions/simi.js');
  ///////////////////////////////////////////////
  const premium = JSON.parse(fs.readFileSync('./functions/premium.json'));
  const { Youtube } = require('ytdownloader.js')
  const antidoc = JSON.parse(fs.readFileSync('./functions/antidoc.json'))
  const antiimg = JSON.parse(fs.readFileSync('./functions/antiimg.json'))
  const lista = JSON.parse(fs.readFileSync('./functions/lista.json'))
  const sotoy = JSON.parse(fs.readFileSync('./functions/sotoy.json'))
  const antiaudio = JSON.parse(fs.readFileSync('./functions/antiaudio.json'))
  const antisticker = JSON.parse(fs.readFileSync('./functions/antisticker.json'))
  const antivid = JSON.parse(fs.readFileSync('./functions/antivideo.json'))
  const autoreact = JSON.parse(fs.readFileSync('./functions/autoreact.json'))

  ///////////////////////////////////////////////
  const { runtime } = require("./functions/myfunc")
  const { convertSticker } = require("./functions/swm.js");
  const { isUrl } = require("./functions/lib/myfunc.js")
  const { EmojiAPI } = require("emoji-api")
  const autofigu = JSON.parse(fs.readFileSync('./functions/autofigu.json'))
  const usedCommandRecently = new Set()
  let autosticker = JSON.parse(fs.readFileSync('./functions/autosticker.json'));
  const { menuprem } = require("./functions/menuprem.js")
  const { palavrasANA, quizanime, quizanimais } = require('./functions/jogos.js');
  const { exec, spawn, execSync } = require("child_process")
  const speed = require("performance-now");
  const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) }
  const { getBuffer, getRandom, getExtension } = require('./functions/lib/functions.js');
  const { fetchJson } = require("./functions/lib/fetcher")
  const { validmove, setGame } = require('./functions/tictactoe');
  const { TextoDoBemvindo } = require("./info/TextoDoBemvindo.js")
  const { TextoDoSaiu } = require("./info/TextoDoBemvindo.js")
  const { Aki } = require('aki-api')
  const { Error } = JSON.parse(fs.readFileSync('./functions/Erro.json'))



  ///////////////////////////////////////////////

  //====== defina ======\\

  var girastamp = speed()
  var latensi = speed() - girastamp;

  var prefix = infoBot.prefix //prefixo 

  var nomeBot = infoBot.nomeBot// nome do bot 

  var NomeBot = infoBot.nomeBot// nome do bot 

  var nomeDono = infoBot.nomeDono// nome do dono 

  var SoDono = infoBot.numeroDono

  var link = infoBot.link

  logo = linkNeroV1.logo

  var numeroDono = infoBot.numeroDono


  ///////////////////////////////////////////////
  const groupIdWelcomed = []
  const welcome_group = JSON.parse(fs.readFileSync('./functions/welcomegp.json'));
  const antipv = JSON.parse(fs.readFileSync('./functions/antipv.json'))
  const lerUser = JSON.parse(fs.readFileSync('./registros/db/users.json'))
  
        
  const welkom = JSON.parse(fs.readFileSync('./functions/welkom.json'));
  const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

  const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

  const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

  const welkom2 = JSON.parse(fs.readFileSync('./functions/welkom.json'));
  const welkomPv = JSON.parse(fs.readFileSync('./welkomPv.json'));
  const welcome_group2 = JSON.parse(fs.readFileSync('./functions/welcomegp.json'));
  const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
  }
  const cfonts = require('cfonts')

  const useStore = !process.argv.includes('--no-store')
  const doReplies = !process.argv.includes('--no-reply')
  const useMobile = process.argv.includes('--mobile')
  const usePairingCode = process.argv.includes('--use-pairing-code')
  const msgRetryCounterCache = new NodeCache();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  async function starts() {
    const { state, saveCreds } = await useMultiFileAuthState('./WhatsApp-Conexao')
    const { version } = await fetchLatestBaileysVersion();
    const question = (text) => new Promise((resolve) => rl.question(text, resolve));
    const store = makeInMemoryStore({
      logger: P().child({
        level: 'debug',
        stream: 'store'
      })
    })

    const client = makeWASocket({
      version,
      logger: P({ level: "silent" }),
      usePairingCode,
      mobile: false,
      browser: ["FireFox (linux)"],
      auth: state,
      msgRetryCounterCache,
      defaultQueryTimeoutMs: undefined,
      patchMessageBeforeSending: (message) => {
        const requiresPatch = !!(message.buttonsMessage || message.listMessage);
        if (requiresPatch) {
          message = {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadataVersion: 2,
                  deviceListMetadata: {},
                }, ...message
              }
            }
          }
        }
        return message;
      }
    });

    //console.log(banner.string)
    console.log('[Development by SixRly]')

    function limparNumero(entrada) {
      const numeros = entrada.replace(/\D/g, '');
      const numeroLimpo = numeros.replace(/^(\d{2})(9)?(\d{8,9})$/, '$1$3');
      return numeroLimpo;
    }

    if (!client.authState.creds.registered) {
      const phoneNumber = await question(`\nDigite seu número do WhatsApp:\nEx: ${clc.bold("+55 75 9865-6060")}\n `);
      const numeroLimpo = limparNumero(phoneNumber);
      const code = await client.requestPairingCode(numeroLimpo);
      console.log(`Seu código de conexão é: \n\n ${clc.bold(code)}\n~>`);
      console.log(`Abra seu WhatsApp, vá em ${clc.bold("Aparelhos Conectados > Conectar um novo Aparelho > Conectar usando Número.")}`)
    }



    store.bind(client.ev)


    client.ev.on("creds.update", saveCreds)
    store.bind(client.ev)
    client.ev.on("chats.set", () => {
      console.log("Tem conversas", store.chats.all())
    })
    client.ev.on("contacts.set", () => {
      console.log("Tem contatos", Object.values(store.contacts))
    })
    // CONEXÃO ATUALIZAÇÃO 
    client.ev.on("connection.update", (update) => {
      const { connection, lastDisconnect } = update
      if (connection === "close") {

        const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
        console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
        if (shouldReconnect) {
          starts()
        }

      }
      else if (update.connection == "open" || update.receivedPendingNotifications == "true") {
        client.updateProfileStatus(`Development by SixRly: (11) 99543-0079`)
      }
      else if (connection === "open") {

        console.log(chalk.keyword("red")("Conectado com sucesso!"));
      }
    })
    // Evento de mensagem



    function DLT_FL(file) {
      try {
        fs.unlinkSync(file);
      } catch (error) {
        return;
      }
    }


    // SCRIPT PLANILHA //
    


    ///////////////////////////////////////////////
    //FUNÇÃO DO BEM VINDO//
    //////////////////////////////////////////////


    const lerBv = JSON.parse(fs.readFileSync('./registros/db/grupos.json'))

    const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

    const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

    const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

    client.ev.on('group-participants.update', async (anu) => {
      ale = anu
      conn = client
      if(lerBv.grupos[ale.id].msgBv !== false) {

      const grpmdt = await client.groupMetadata(ale.id);

      const isGroup2 = grpmdt.id.endsWith('@g.us');

      const GroupMetadata_ = isGroup2 ? await client.groupMetadata(ale.id) : "";
      const mdata_ = isGroup2 ? await client.groupMetadata(ale.id) : "";

       
      if (lerBv.grupos.hasOwnProperty(ale.id)) {
        //if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
        try {
          let metadata = await client.groupMetadata(anu.id)
          let participants = anu.participants
          for (let num of participants) {

            try {
              ppimg = await client.profilePictureUrl(anu.participants[0])
            } catch {
              ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
            }

            memb = metadata.participants.length

            if (anu.action == 'add') {
              num = anu.participants[0]
              


             await client.sendMessage(anu.id, {
                text: lerBv.grupos[ale.id].msgBv

              })

            }
          }
        } catch (err) {
          console.log(err)
        }

      } else if (lerBv.grupos.hasOwnProperty(ale.id) && lerBv.grupos[ale.id].msgPv !== false) {

        if (anu.action == 'add') {
          delay(3000)
          num = anu.participants[0]
          await client.sendMessage(num, {
            text: lerBv.grupos[ale.id].msgPv })
        }
      }
    }

    })


    // MENSAGEM ATUALIZAÇÃO 
    client.ev.on('messages.upsert', async connection => {
      //console.log(connection)
      const info = connection.messages[0];
      //if (info.key.fromMe) return;
      if (connection.type != 'notify') return;
      if (info.key.remoteJid === 'status@broadcast') return;
      try {
        function getGroupAdmins(participants) {
          admins = []
          for (let i of participants) {
            if (i.admin == 'admin') admins.push(i.id)
            if (i.admin == 'superadmin') admins.push(i.id)
          }
          return admins
        }
        const getRandom = (ext) => {
          return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        const getExtension = async (type) => {
          return await mimetype.extension(type)
        }
        const getBuffer = (url, options) => new Promise(async (resolve, reject) => {
          options ? options : {}
          await axios({ method: "get", url, headers: { "DNT": 1, "Upgrade-Insecure-Request": 1 }, ...options, responseType: "arraybuffer" }).then((res) => {
            resolve(res.data)
          }).catch(reject)
        })

        ///////////////////////////////////////////////
        //**************[ functions ]**************//
        ///////////////////////////////////////////////

        //ANTIS
        const antilinkhard = JSON.parse(fs.readFileSync('./functions/antilink.json'))
        const antilinkgp = JSON.parse(fs.readFileSync('./functions/antilink.json'))




        ////////

        const donoOficial = [`@s.whatsapp.net`]
        //const info = msg.messages[0]
        if (!info.message) return
        if (info.key && info.key.remoteJid == 'status@broadcast') return
        const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
        const content = JSON.stringify(info.message);
        const altpdf = Object.keys(info.message)
        global.prefix
        const from = info.key.remoteJid
        var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""

        const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

        const reply = (text) => {
          client.sendMessage(from, { text: text }, { quoted: info })
        }




        const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant
        var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

        const quoted = info.quoted ? info.quoted : info
        ///////////////////////////////////////////////
        //********IS DO ANTIPV***********\\
        ///////////////////////////////////////////////
        const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false
        

        ///////////////////////////////////////////////
        //*****functions DO ANAGRAMA E LEVEL*******
        ///////////////////////////////////////////////

        const pushname = info.pushName ? info.pushName : ''
        const username = info.username ? info.username : ''
        const _level = JSON.parse(fs.readFileSync('./functions/level.json'))
        const addLevelingXp = (userId, amount) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            _level[position].xp += amount
            fs.writeFileSync('./functions/level.json', JSON.stringify(_level))
          }
        }
        const isGroup = info.key.remoteJid.endsWith('@g.us')
        const sender = isGroup ? info.key.participant : info.key.remoteJid
        const isUser = (lerUser.usuarios.hasOwnProperty(sender)) ? true : false
        const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false
        const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false
        if (isGroup && fs.existsSync(`./functions/anagrama-${from}.json`)) {
          let dataAnagrama = JSON.parse(fs.readFileSync(`./functions/anagrama-${from}.json`))
          if (budy.slice(0, 4).toUpperCase() == dataAnagrama.original.slice(0, 4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
          xp = Math.floor(Math.random() * 14) + 3000
          if (budy.toUpperCase() == dataAnagrama.original) {

            let ano = {
              image: { url: logo },
              caption: `
  parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos..
  `,
              lfooter: "",
              //buttons: buttons,
              headerType: 4
            }

            client.sendMessage(from, ano, { "mentionedJid": [sender] }), fs.unlinkSync(`./functions/anagrama-${from}.json`)
            addLevelingXp(sender, xp)
            recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
            reply(recompensa)
            setTimeout(async () => {
              fs.writeFileSync(`./functions/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
              let dataAnagrama2 = JSON.parse(fs.readFileSync(`./functions/anagrama-${from}.json`))

              let ani = {
                image: { url: logo },
                caption: `
  ╭─────≽「 👾 ANAGRAMA 👾 」
  │➽ DESCUBRA A PALAVRA
  │➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
  │➽ DICA: ${dataAnagrama2.dica}
  ╰────────────────────────
  `,
                lfooter: `${nomeBot}`,
                //buttons: buttons,
                headerType: 4
              }

              client.sendMessage(from, ani)
            }, 5000)
          }
        }
        ///////////////////////////////////////////////
        //DEFINIÇÕES DO LEVELING
        ///////////////////////////////////////////////

        const anuncio = (text) => {
          client.sendMessage(from, {
            text: text,
            contextInfo: {
              "externalAdReply": {
                title: `${NomeDoBot}`,
                mediaType: 1,
                renderLargerThumbnail: false,
                showAdAttribution: true,
                body: `𝑩𝒚 ${nomeDono}`,
                thumbnail: { url: `https://telegra.ph/file/899eeb68fbedb64c2d926.jpg` },
                mediaUrl: `${q}`,
                sourceUrl: `${q}`,
                headerType: 4
              }
            }
          })
        }

        const _leveling = JSON.parse(fs.readFileSync('./functions/lib/leveling.json'))
        const levelingOn = JSON.parse(fs.readFileSync('./functions/lib/leveling.json'))
        const isLevelingOn = isGroup ? _leveling.includes(from) : true
        const { getUserRank, addCooldown, leveltab } = require('./functions/lib/leveling.js')
        const getLevelingXp = (userId) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return _level[position].xp
          }
        }
        const getLevelingLevel = (userId) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return _level[position].level
          }
        }
        const getLevelingId = (userId) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return _level[position].jid
          }
        }


        const addLevelingLevel = (userId, amount) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            _level[position].level += amount
            fs.writeFileSync('./functions/level.json', JSON.stringify(_level))
          }
        }
        const addLevelingId = (userId) => {
          const obj = { jid: userId, xp: 1, level: 1 }
          _level.push(obj)
          fs.writeFileSync('./functions/level.json', JSON.stringify(_level))
        }
        /********** FUCTION LEVELING **********/
        var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
        const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        const perl = peri - getLevelingXp(sender)
        const resl = Math.round(100 - ((perl / getLevelingXp(sender)) * 100))
        if (resl <= 10) {
          per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 20) {
          per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 30) {
          per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 40) {
          per = `*[████▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 50) {
          per = `*[█████▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 60) {
          per = `*[██████▒▒▒▒] ${resl}%*`
        } else if (resl <= 70) {
          per = `*[███████▒▒▒] ${resl}%*`
        } else if (resl <= 80) {
          per = `*[████████▒▒] ${resl}%*`
        } else if (resl <= 90) {
          per = `*[█████████▒] ${resl}%*`
        } else if (resl <= 100) {
          per = `*[██████████] ${resl}%*`
        }
        const levelRole = getLevelingLevel(sender)
        var role = 'Bronze I🥉'
        if (levelRole <= 3) {
          role = 'Bronze I 🥉'
        } else if (levelRole <= 5) {
          role = 'Bronze II 🥉'
        } else if (levelRole <= 10) {
          role = 'Bronze III 🥉'
        } else if (levelRole <= 15) {
          role = 'Bronze IV 🥉'
        } else if (levelRole <= 20) {
          role = 'Bronze V 🥉'
        } else if (levelRole <= 25) {
          role = 'Prata I 🥈'
        } else if (levelRole <= 30) {
          role = 'Prata II 🥈'
        } else if (levelRole <= 35) {
          role = 'Prata III 🥈'
        } else if (levelRole <= 40) {
          role = 'Prata IV 🥈'
        } else if (levelRole <= 45) {
          role = 'Prata V 🥈'
        } else if (levelRole <= 50) {
          role = 'Ouro I 🥇'
        } else if (levelRole <= 55) {
          role = 'Ouro II 🥇'
        } else if (levelRole <= 60) {
          role = 'Ouro III 🥇'
        } else if (levelRole <= 65) {
          role = 'Ouro IV 🥇'
        } else if (levelRole <= 70) {
          role = 'Ouro V 🥇'
        } else if (levelRole <= 75) {
          role = 'Campeão I 🏆'
        } else if (levelRole <= 80) {
          role = 'Campeão II 🏆'
        } else if (levelRole <= 85) {
          role = 'Campeão III 🏆'
        } else if (levelRole <= 90) {
          role = 'Campeão IV 🏆'
        } else if (levelRole <= 95) {
          role = 'Campeão V 🏆'
        } else if (levelRole <= 100) {
          role = 'Diamante I 💎'
        } else if (levelRole <= 110) {
          role = 'Diamante II 💎'
        } else if (levelRole <= 120) {
          role = 'Diamante III 💎'
        } else if (levelRole <= 130) {
          role = 'Diamante IV 💎'
        } else if (levelRole <= 140) {
          role = 'Diamante V 💎'
        } else if (levelRole <= 150) {
          role = 'Mestre I 🔥'
        } else if (levelRole <= 170) {
          role = 'Mestre II 🔥'
        } else if (levelRole <= 180) {
          role = 'Mestre III 🔥'
        } else if (levelRole <= 190) {
          role = 'Mestre IV 🔥'
        } else if (levelRole <= 200) {
          role = 'Mestre V 🔥'
        } else if (levelRole <= 250) {
          role = 'Mítico I 🔮'
        } else if (levelRole <= 300) {
          role = 'Mítico II 🔮'
        } else if (levelRole <= 350) {
          role = 'Mítico III 🔮'
        } else if (levelRole <= 400) {
          role = 'Mítico IV 🔮'
        } else if (levelRole <= 450) {
          role = 'Mítico V 🔮'
        } else if (levelRole <= 500) {
          role = 'Lenda I ⚡'
        } else if (levelRole <= 550) {
          role = 'Lenda II ⚡'
        } else if (levelRole <= 600) {
          role = 'Lenda III ⚡'
        } else if (levelRole <= 650) {
          role = 'Lenda IV ⚡'
        } else if (levelRole <= 700) {
          role = 'Lenda V ⚡'
        } else if (levelRole <= 750) {
          role = 'Lendário I 🎑'
        } else if (levelRole <= 800) {
          role = 'Lendário II 🎑'
        } else if (levelRole <= 850) {
          role = 'Lendário III 🎑'
        } else if (levelRole <= 900) {
          role = 'Lendário IV 🎑'
        } else if (levelRole <= 910) {
          role = 'Lendário V 🎑'
        } else if (levelRole <= 920) {
          role = 'EL MESTRE I 🏅'
        } else if (levelRole <= 930) {
          role = 'EL MESTRE II 🏅'
        } else if (levelRole <= 940) {
          role = 'EL MESTRE III 🏅'
        } else if (levelRole <= 950) {
          role = 'EL MESTRE IV 🏅'
        } else if (levelRole <= 10000) {
          role = '⚡️ BRIGADEIRO ⚡️'
        }
        if (isGroup && isLevelingOn) {
          const currentLevel = getLevelingLevel(sender)
          const checkId = getLevelingId(sender)
          try {
            if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
            const amountXp = Math.floor(Math.random() * 10) + 500
            const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
            const getLevel = getLevelingLevel(sender)
            addLevelingXp(sender, amountXp)
            if (requiredXp <= getLevelingXp(sender)) {
              addLevelingLevel(sender, 1)
              await client.sendMessage(sender, { text: `*「 LEVEL UP 」*\n\n➸ *Nome*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎉🎉` })
            }
          } catch (err) {
            console.error(err)
          }
        }
        const getLevel = getLevelingLevel(sender)
        const tictactoe = JSON.parse(fs.readFileSync('./functions/database/tictactoe.json'));
        const registros = JSON.parse(fs.readFileSync("./functions/registros.json"))
        const isRegistro = registros.includes(sender)

        const addTTTId = (userId) => {
          const obj = { jid: userId, wins: 0, defeats: 0, ties: 0, points: 0 }
          tictactoe.push(obj)
          fs.writeFileSync('./functions/database/tictactoe.json', JSON.stringify(tictactoe))
        }

        const addTTTwin = (userId, amount) => {
          let position = false
          Object.keys(tictactoe).forEach((i) => {
            if (tictactoe[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            tictactoe[position].wins += amount
            fs.writeFileSync('./functions/database/tictactoe.json', JSON.stringify(tictactoe))
          }
        }

        const addTTTdefeat = (userId, amount) => {
          let position = false
          Object.keys(tictactoe).forEach((i) => {
            if (tictactoe[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            tictactoe[position].defeats += amount
            fs.writeFileSync('./functions/database/tictactoe.json', JSON.stringify(tictactoe))
          }
        }

        const addTTTtie = (userId, amount) => {
          let position = false
          Object.keys(tictactoe).forEach((i) => {
            if (tictactoe[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            tictactoe[position].ties += amount
            fs.writeFileSync('./functions/database/tictactoe.json', JSON.stringify(tictactoe))
          }
        }

        const addTTTpoints = (userId, amount) => {
          let position = false
          Object.keys(tictactoe).forEach((i) => {
            if (tictactoe[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            tictactoe[position].points += amount
            fs.writeFileSync('./functions/database/tictactoe.json', JSON.stringify(tictactoe))
          }
        }

        const getTTTId = (userId) => {
          let position = false
          Object.keys(tictactoe).forEach((i) => {
            if (tictactoe[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return tictactoe[position].jid
          }
        }

        const getTTTwins = (userId) => {
          let position = false
          Object.keys(tictactoe).forEach((i) => {
            if (tictactoe[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return tictactoe[position].wins
          }
        }

        const getTTTdefeats = (userId) => {
          let position = false
          Object.keys(tictactoe).forEach((i) => {
            if (tictactoe[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return tictactoe[position].defeats
          }
        }

        const getTTTties = (userId) => {
          let position = false
          Object.keys(tictactoe).forEach((i) => {
            if (tictactoe[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return tictactoe[position].ties
          }
        }

        const getTTTpoints = (userId) => {
          let position = false
          Object.keys(tictactoe).forEach((i) => {
            if (tictactoe[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return tictactoe[position].points
          }
        }

        ///////////////////////////////////////////////
        // IS DE functions PARA ADM
        ///////////////////////////////////////////////


        const Antidoc = isGroup ? antidoc.includes(from) : false
        const isAntiAudio = isGroup ? antiaudio.includes(from) : false
        const isAntiVid = isGroup ? antivid.includes(from) : false
        const isAntiImg = isGroup ? antiimg.includes(from) : false
        const isAntiSticker = isGroup ? antisticker.includes(from) : false
        const isAutoReact = isGroup ? autoreact.includes(from) : false
        const isAutoSticker = isGroup ? autosticker.includes(from) : false
        const isBanchat = isGroup ? bancht.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isWelkomPv = isGroup ? welkomPv.includes(from) : false
        const emoji = new EmojiAPI()
        const isPremium = premium.includes(sender)

        ///////////////////////////////////////////////
        //functions PARA COMANDO DE GRUPO
        ///////////////////////////////////////////////

        const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        selectedButton = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const participants = isGroup ? await groupMetadata.participants : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const argss = body.split(/ +/g)
        const botNumber = client.user.id.split(':')[0] + '@s.whatsapp.net'
        const args = body.trim().split(/ +/).slice(1);
        const text = args.join(" ")
        const menc_jid = args.join(" ").replace("@", "") + "@s.whatsapp.net"
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
        const mentions = (teks, memberr, id) => {
          (id == null || id == undefined || id == false) ? client.sendMessage(from, { text: teks.trim(), mentions: memberr }) : client.sendMessage(from, { text: teks.trim(), mentions: memberr })
        }



        const addFilter = (sender) => {
          usedCommandRecently.add(sender)
          setTimeout(() => usedCommandRecently.delete(sender), 4000)
        }


        const groupIdWelcomed = []
        for (let obj of welcome_group) groupIdWelcomed.push(obj.id)

        const groupIdBye = []
        for (let obj of bye_group2) groupIdBye.push(obj.id)

        const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

        const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false
        ///////////////////////////////////////////////
        //ISQUOTED
        ///////////////////////////////////////////////
        const isImage = type == 'imageMessage'
        const isVideo = type == 'videoMessage'
        const isAudio = type == 'audioMessage'
        const isSticker = type == 'stickerMessage'
        const isContact = type == 'contactMessage'
        const isLocation = type == 'locationMessage'
        const isProduct = type == 'productMessage'
        const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
        typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = "Image"
        else if (isVideo) typeMessage = "Video"
        else if (isAudio) typeMessage = "Audio"
        else if (isSticker) typeMessage = "Sticker"
        else if (isContact) typeMessage = "Contact"
        else if (isLocation) typeMessage = "Location"
        else if (isProduct) typeMessage = "Product"
        const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
        const getFileBuffer = async (mediakey, MediaType) => {
          const stream = await downloadContentFromMessage(mediakey, MediaType)
          let buffer = Buffer.from([])
          for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
          }
          return buffer
        }
        const isGroupAdmins = groupAdmins.includes(sender) || false
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

        ///////////////////////////////////////////////
        //FUNÇÃO DE DONO 
        ///////////////////////////////////////////////
        const isOwner = sender.includes(infoBot.numeroDono)
        /////////////////////////////////////////////////


        q = args.join(" ")

        const sendBtext = async (id, text1, desc1, but = [], vr) => {
          buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
          client.sendMessage(id, buttonMessage, { quoted: vr })
        }

        const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
          buttonMessage = { image: { url: img1 }, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
          client.sendMessage(id, buttonMessage, { quoted: vr })
        }

        const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
          templateMessage = { image: { url: img1 }, caption: text1, footer: desc1, templateButtons: but, }
          client.sendMessage(id, templateMessage, { quoted: vr })
        }

        const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => {
          buttonMessage = { video: { url: gif1 }, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
          client.sendMessage(id, buttonMessage, { quoted: vr })
        }
        //*******************************************//


        // VERIFICADOS ⭐️
        const live = info
        const imgm = info
        const vid = info
        const contato = info
        const doc = info


        const argsButton = selectedButton.trim().split(/ +/)
        const dbids = []
        for (i = 0; i < lista.length; ++i) {
          dbids.push(lista[i].groupId)
        }
        const islista = (isGroup && dbids.indexOf(from) >= 0) ? true : false



        const enviarfigu = async (figu, tag) => {
          bla = fs.readFileSync(figu)
          client.sendMessage(from, { sticker: bla }, { quoted: info })
        }

        const enviarfiguUrl = async (link) => {
          ranp = getRandom('.gif')
          rano = getRandom('.webp')
          ini_buffer = `${link}`
          exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
            fs.unlinkSync(ranp)
            buff = fs.readFileSync(rano)
            client.sendMessage(from, { sticker: buff }, { quoted: info }).catch(e => {
            })
            fs.unlinkSync(rano)
          })
        }

        if (isAutoSticker && isGroup) {
          async function autofiguf() {
            await setTimeout(async () => {
              if (budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return
              if (type === "videoMessage") {
                if ((isMedia && info.message.videoMessage.seconds < 40)) {
                  rane = getRandom('.' + await getExtension(info.message.videoMessage.mimetype))
                  buffimg = await getFileBuffer(info.message.videoMessage, 'video')
                  fs.writeFileSync(rane, buffimg)
                  const media = rane
                  rano = getRandom('.webp')
                  await ffmpeg(`./${media}`)
                    .inputFormat(media.split('.')[1])
                    .on('start', function (cmd) {
                      console.log(`Started : ${cmd}`)
                    })
                    .on('error', function (err) {
                      console.log(`Error : ${err}`)
                      exec(`webpmux -set exif ${addMetadata('bot', 'manu')} ${rano} -o ${rano}`, async (error) => {
                        fs.unlinkSync(media)
                        tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                        reply(`Falha na conversão de ${tipe} para sticker`)
                      })
                    })
                  exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                    fs.unlinkSync(media)
                    buffer = fs.readFileSync(rano)
                    client.sendMessage(from, { sticker: buffer }, { quoted: info })
                    fs.unlinkSync(rano)
                  })
                }
              }

              if (type === "imageMessage") {
                rane = getRandom('.' + await getExtension(info.message.imageMessage.mimetype))
                buffimg = await getFileBuffer(info.message.imageMessage, 'image')
                fs.writeFileSync(rane, buffimg)
                const media = rane
                rano = getRandom('.webp')
                exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                  fs.unlinkSync(media)
                  buffer = fs.readFileSync(rano)
                  client.sendMessage(from, { sticker: buffer }, { quoted: info })
                  fs.unlinkSync(rano)
                })
              }
            }, 1000)
          }
          autofiguf().catch(e => {
            console.log(e)
          })
        }

        var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        const isBot = info.key.fromMe ? true : false

        async function AntilinkHardF() {
          if (isUrl(budy2) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
            if (command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "ytmp3" && command == "ytmp4" && command == "play") return
            linkgpp = await client.groupInviteCode(from)
            if (budy2.match(`${linkgpp}`)) return
            if (!isUrl(budy2)) return
            if (isGroupAdmins) return
            client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
            if (type === "buttonsResponseMessage") return
            if (type === "listResponseMessage") return
            if (budy2.includes(`${linkgpp}`)) return
          }
          if (isUrl(budy2) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
            if (command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "ytmp3" && command == "ytmp4" && command == "play") return
            linkgpp = await client.groupInviteCode(from)
            if (budy2.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')
            if (isGroupAdmins) return
            client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
            if (!isUrl(budy2)) return
            if (type === "buttonsResponseMessage") return
            if (type === "listResponseMessage") return
            reply('*Link detectado, punindo usuário...*')
            if (!JSON.stringify(groupMembers).includes(sender)) return
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }
        }

        AntilinkHardF()

        if (isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
          if (!isAntilinkgp) return
          if (!isUrl(body)) return
          if (isGroupAdmins) return reply("Você é adm, não removerei você..")
          if (budy2.includes("chat.whatsapp.com/")) {
            if (!budy2.includes("chat.whatsapp.com/")) return
            if (isBot) return
            linkgpp = await client.groupInviteCode(from)
            if (budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')
            reply('*Link de grupo detectado, punindo usuário...*')
            client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
            if (!JSON.stringify(groupMembers).includes(sender)) return
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }
        }

        enviar = reply

        const cmde = budy.toLowerCase().split(" ")[0] || "";
        let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        if (isAutoReact && isGroup && isCmd) {
          if (!isAutoReact) return
          emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
          reassao = emojis[Math.floor(Math.random() * emojis.length)]
          sendMsg = await client.sendMessage(from, { react: { text: reassao, key: info.key } })
        }

        if (isAutoReact && isGroup && !isCmd) {
          if (!isAutoReact) return
          emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
          reassao = emojis[Math.floor(Math.random() * emojis.length)]
          sendMsg = await client.sendMessage(from, { react: { text: reassao, key: info.key } })
        }

        const samih2 = JSON.parse(fs.readFileSync('./functions/simi.json'));

        const isSimi2 = isGroup ? samih2.includes(from) : false


        if (!isCmd && isSimi2 && isGroup) {
          if (isCmd || isUrl(budy2)) return
          if (budy.length >= 500) return
          if (budy.includes("@55")) return
          if (info.key.fromMe) return
          if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
          insert(type, info)
          const sami = await response(budy)

          if (sami) client.sendMessage(from, { text: sami, thumbnail: imagemdomenu }, { quoted: info });
        }





        async function upload(Path) {
          return new Promise(async (resolve, reject) => {
            if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
            try {
              const form = new BodyForm();
              form.append("file", fs.createReadStream(Path))
              const data = await axios({
                url: "https://telegra.ph/upload",
                method: "POST",
                headers: {
                  ...form.getHeaders()
                },
                data: form
              })
              return resolve("https://telegra.ph" + data.data[0].src)
            } catch (err) {
              return reject(new Error(String(err)))
            }
          })
        }

        function writeExifImg(media, metadata) {
          let wMedia = imageToWebp(media)
          const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
          const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
          fs.writeFileSync(tmpFileIn, wMedia)

          if (metadata.packname || metadata.author) {
            const img = new webp.Image()
            const json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
            const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
            const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
            const exif = Buffer.concat([exifAttr, jsonBuff])
            exif.writeUIntLE(jsonBuff.length, 14, 4)
            img.load(tmpFileIn)
            fs.unlinkSync(tmpFileIn)
            img.exif = exif
            img.save(tmpFileOut)
            return tmpFileOut
          }
        }

        if (isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
          if (isGroupAdmins) return client.sendMessage(from, { text: 'MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI' }, { quoted: info })
          await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
          setTimeout(async function () {
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
        }

        if (isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
          if (isGroupAdmins) return client.sendMessage(from, { text: 'MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI' }, { quoted: info })
          await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
          setTimeout(async function () {
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
        }

        if (isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
          if (isGroupAdmins) return client.sendMessage(from, { text: 'MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI' }, { quoted: info })
          await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
          setTimeout(async function () {
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
        }

        if (Antidoc && isBotGroupAdmins && type == 'documentMessage') {
          if (isGroupAdmins) return client.sendMessage(from, { text: 'MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI' }, { quoted: info })
          await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
          setTimeout(async function () {
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
        }

        if (isAntiPv && !isGroup && !isOwner) {
          msgpvblock = `./func/call/msg_block-${sender}.json`
          fs.writeFileSync(msgpvblock, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR ENVIAR MENSAGEM PARA O BOT\n\n_- REALIZANDO AÇÃO _-", null, 2))
          msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock))
          reply(msgmsglbl)
          fs.unlinkSync(msgpvblock)
          setTimeout(async () => {
            client.updateBlockStatus(sender, 'block')
          }, 22)
          return
        }

        if (isBanchat && !isGroupAdmins && !isOwner) {
          if (!isGroupAdmins && !isOwner) return
          if (budy.toLowerCase().startsWith('unbangp')) {
            if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido!`)
            let lfd = bancht.indexOf(from)
            bancht.splice(lfd, 1)
            fs.writeFileSync('./functions/banchat.json', JSON.stringify(bancht))
            reply(`Grupo desbanido...`)
          }
        }



        // RESPOSTAS DOS COMANDOS \\
        resposta = {
          espere: "[⚙️️]Aguarde...enviando ",
          aguarde: "[⚙️️]Aguarde...enviando ",
          dono: "[⚙️️]Esse comando so pode ser usado pelo meu dono!!! ",
          grupo: "[⚙️️]Esse comando só pode ser usado em grupo ",
          premium: "[⚙️️]comando so pra usuários premium",
          privado: "[⚙️️]Esse comando só pode ser usado no privado ",
          adm: "[⚙️️]Esse comando só pode ser usado por administradores de grupo",
          botadm: "[⚙️️]Este comando só pode ser usado quando o bot se torna administrador ",
          registro: `[⚙️️] Você não se registrou utilize ${prefix}login para se registrar `,
          norg: "[⚙️️] Você ja está registrado ",
          erro: "[⚙️️] Error, tente novamente mais tarde ",
          menu: "aaaaa"
        }

        comando = command

        if (isGroup) {
          if (isCmd && !isBot) {
            console.log(
              color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘦𝘮 𝘨𝘳𝘶𝘱𝘰 ”`, 'blue'),
              color(`\n➱ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${comando}`, 'red'),
              color(`\n➱ 𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
              color(`\n➱ 𝙶𝚁𝚄𝙿𝙾: ${groupName}`, 'red'),
              color(`\n➱ 𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
              color(`\n➱ 𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
          } else if (!isBot) {
            console.log(
              color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘦𝘮 𝘨𝘳𝘶𝘱𝘰 ”`, 'blue'),
              color(`\n➱ 𝙽𝚄́𝙼𝙴𝚁𝙾: ${color('Não', 'red')}`, 'orange'),
              color(`\n➱ 𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
              color(`\n➱ 𝙶𝚁𝚄𝙿𝙾: ${groupName}`, 'red'),
              color(`\n➱ 𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
              color(`\n➱ 𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
          }
        } else {
          if (isCmd && !isBot) {
            console.log(
              color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘯𝘰 𝘱𝘳𝘪𝘷𝘢𝘥𝘰”`, 'blue'),
              color(`\n➱ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${comando}`, 'red'),
              color(`\n➱ 𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
              color(`\n➱ 𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
              color(`\n➱ 𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
          } else if (!isBot) {
            console.log(
              color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘯𝘰 𝘱𝘳𝘪𝘷𝘢𝘥𝘰”`, 'blue'),
              color(`\n➱ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${color('Não', 'red')}`, 'orange'),
              color(`\n➱ 𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
              color(`\n➱ 𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
              color(`\n➱ 𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
          }
        }

        /*
        if(!isGroup && !isOwner && !m.key.fromMe && !isPremium){ 
        reply(`[🚫] 𝗔𝗡𝗧𝗜𝗣𝗩 𝗤𝗨𝗘 𝗕𝗟𝗢𝗤𝗨𝗘𝗜𝗔! [🚫]\nUsuários que enviarem mensagem no privado, será bloqueado pois antipv está ativo, fale com meu dono para solicitar o desbloqueio: wa.me/${numerodn}`)
        setTimeout(async () => {
        //pl.updateBlockStatus(sender, 'block')
        }, 1000)
        return
        }
        */




        const { pix } = require('@klawdyo/pix.js');





        client.ev.on('groupAdd', async (chat) => {
          const groupId = chat.jid;
          const newMember = chat.who;

          // Mensagem de boas-vindas
          const mensagemBoasVindas = `Bem-vindo(a) ao grupo, ${newMember.mention}! 🎉\nEsperamos que você aproveite sua estadia.`;

          // Enviar a mensagem de boas-vindas
          await client.sendMessage(groupId, { text: mensagemBoasVindas });
        });

        if (isGroup && budy === "Bom dia" || isGroup && budy === "bom dia") return reply(`Mais um dia começando! Vamos firmes e fortes alcançar nossos objetivos!🌅`)
        if (isGroup && budy === "Boa tarde" || isGroup && budy === "boa tarde") return reply(`Linda tarde para você que, com alegria, espalha amor e carinho todos os dias!🌁`)
        if (isGroup && budy === "Boa noite" || isGroup && budy === "boa noite") return reply(`É hora de agradecer pelo hoje e sonhar com os planos de amanhã. Tenha uma linda noite!🌠`)

        const verifiRegistroo = JSON.parse(fs.readFileSync(`./registros/db/dbregistro.json`))
        const jidIgualSender = verifiRegistroo.some(usuario => usuario.jid === sender);
        const isDigno = verifiRegistroo.some(objeto => objeto.jid === sender);
        
        
        const grupoRegi = from


        function gerarKey() {
          const caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let key = '';

          for (let i = 0; i < 6; i++) {
            const indice = Math.floor(Math.random() * caracters.length);
            key += caracters.charAt(indice);
          }

          return key;
        }


        switch (command) {
          
          case "planilha":
          const auth = new google.auth.GoogleAuth({
        keyFile: './planilha/stabil.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })
    
    const sheets = google.sheets({version: 'v4', auth})
    
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1wmOzLMcYiTpH7mjepgy9qrhNh6-aw7jgdNi6RfGi97Q',
        range: 'stabil!A1:C1000'
    })
    const values = response.data.values
    let delay = 0
    for(const array of values) {
    if(array.length >= 3) {
    let numerozin = array[0]
    numerozin = numerozin.replace(/\D/g, "")
    numerozin = numerozin.replace(/^0+/, "")
    numerozin = numerozin.replace(/^\(?(\d{3})\)?/, "$1")
    const msgzin = array[2]
    
    setTimeout(async () => {
    await client.sendMessage(`55${numerozin}@s.whatsapp.net`, {text: msgzin})
    }, delay)
    delay += 5000
    } else {
    console.error('erro', array)
    }
    }
          break

          
          case "sorteio":
            if (!isGroup) return reply(`apenas em grupos`);
            if (!isGroupAdmins) return reply(`apenas admins`);
            const texto = q
            if (!texto.includes("/")) return reply(`use / para definir o tempo, sorteio e número de vencedores.\nPor exemplo:\n${prefix}sorteio 1m/sorteio/1 (para minutos).\n${prefix}sorteio 1h/sorteio/1 (para horas)`)
            const tempoString = texto.split('/')[0] || 'Indefinido'
            const mensagemSorteio = texto.split('/')[1] || 'Indefinido'
            const usuariosSorteioTexto = texto.split('/')[2] || 'Indefinido'
            const numeroVencedores = parseInt(usuariosSorteioTexto, 10);

            // Extrai a unidade de tempo e o valor
            const regexResult = tempoString.match(/^(\d+)([hm])$/);
            if (isNaN(numeroVencedores) || numeroVencedores <= 0) {
              return reply('Por favor, forneça uma quantidade válida de vencedores.');
            }
            if (!regexResult) {
              return reply('Formato de tempo inválido. Use o formato "1h" para horas ou "20m" para minutos.');
            }

            const valorTempo = parseInt(regexResult[1], 10);
            const unidadeTempo = regexResult[2];

            let tempoEmMilissegundos;

            if (unidadeTempo === 'h') {
              tempoEmMilissegundos = valorTempo * 60 * 60 * 1000; // Converte horas para milissegundos
            } else if (unidadeTempo === 'm') {
              tempoEmMilissegundos = valorTempo * 60 * 1000; // Converte minutos para milissegundos
            } else {
              return reply('Unidade de tempo inválida. Use "h" para horas ou "m" para minutos.');
            }

            const sorteiu = `🍀 *ATENÇÃO!!! VAMOS TER SORTEIO!!* 🍀

*SORTEIO CONFIGURADO*
*TOTAL DE GANHADORES: até ${numeroVencedores} ganhadores.*

🎁 *PREMIAÇÃO:* 🎁

_${mensagemSorteio}_

───※ ·❆· ※───

*CASO QUEIRA PARTICIPAR:*

*Apenas reaja a esta mensagem com qualquer emoji, antes do sorteio começar.*
          
*O sorteio será feito apenas entre os membros que reagiram a essa mensagem antes do tempo definido ( ${valorTempo}${unidadeTempo} )*


*NÃO PERCA ESSA CHANCE! REAJA A ESSA MENSAGEM IMEDIATAMENTE!*`


            const getKeyAuthor = (
              key,
              meId = 'me'
            ) => (
              (key?.fromMe ? meId : key?.participant || key?.remoteJid) || ''
            );

            const getReactionAuthors = (msg) => {
              return (msg.reactions || []).map(r => getKeyAuthor(r.key));
            };

            const mensagemEnviada = await client.sendMessage(from, { text: sorteiu });

            // Aguardar o tempo definido pelo usuário
            await new Promise(resolve => setTimeout(resolve, tempoEmMilissegundos));



            const autoresReacoes = getReactionAuthors(mensagemEnviada);

            // Sortear vencedores
            const numeroMaximoVencedores = Math.min(autoresReacoes.length, numeroVencedores);
            const vencedores = [];

            for (let i = 0; i < numeroMaximoVencedores; i++) {
              const indiceSorteado = Math.floor(Math.random() * autoresReacoes.length);
              const vencedor = autoresReacoes.splice(indiceSorteado, 1)[0];
              vencedores.push({ tag: '@' + vencedor.split('@')[0], id: vencedor });
            }

            const numeroDeReacoes = (mensagemEnviada.reactions || []).length;



            // Mencionar vencedores no grupo
            if (vencedores.length > 0) {
              const mensagemVencedor = ` 🥶 *SORTEIO ${mensagemSorteio} INICIADO!!!!* 😨

*Só podem haver no máximo ${numeroVencedores} vencedor(es)!* 🫣 
    
*Quem não reagiu a mensagem não pode mais participar deste sorteio!* 🫡
    
*${numeroDeReacoes} pessoa(s) reagiram a mensagem.* 👏 
    
*Então destes ${numeroDeReacoes} participantes, quem sera(m) o(s) ${numeroVencedores} vencedor(es)?* 😲
    
*EMBARALHANDO PARTICIPANTES* 🔁
🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲...`;
              await client.sendMessage(from, { text: mensagemVencedor })
              const mensagemVencedores = `
    🎉 *SORTEIO REALIZADO* 🎊

🥳 *O(s) ${numeroVencedores} GANHADOR(ES) SERÃO MENCIONADOS ABAIXO:* 📯
  
${vencedores.map(v => v.tag).join('\n')}

  
*───※ ·❆· ※───*
  
🫶 *PARABÉNS AOS GANHADOR(ES) DE:*
  
  _${mensagemSorteio}_
    `
              await client.sendMessage(from, { text: mensagemVencedores, mentions: vencedores, contextInfo: { mentionedJid: vencedores.map(v => v.id) } });
            } else {
              await client.sendMessage(from, { text: 'Nenhum vencedor desta vez.' });
            }

            break;




          case "sinaisgp":

            membros = (groupId, membros1) => {
              array = []
              for (let i = 0; i < membros1.length; i++) {
                array.push(membros1[i].id)
              }
              return array
            }
            var yd = membros(from, groupMembers)
            if (!isOwner) return reply(`Apenas dono`)
            if (!isGroup) return reply(`Apenas em grupos`)
            const mensagensgp = JSON.parse(fs.readFileSync('./sinais.json'))
            if (mensagensgp && mensagensgp.sinais) {
              const mensagemSinais = mensagensgp.sinais
              client.sendMessage(from, { text: mensagemSinais, mentions: yd }, { quoted: info })
            }
            break
          case "sinais":
            if (!isDigno) return reply(`use ${prefix}registrar no meu pv para se registrar.`)
            if (!isGroup) return reply(`Apenas em grupos`)
            const mensagens = lerBv.grupos[from].msgS
            if (mensagens !== false) {
              const mensagemSinais = mensagens 
              client.sendMessage(from, { text: `enviando os sinais atualizados no seu pv!!` })
              client.sendMessage(sender, { text: mensagemSinais }, { quoted: info })
            }
            break

         

         


          case "horariosgp":
            if (!isOwner) return reply(`Apenas dono`)
            membros = (groupId, membros1) => {
              array = []
              for (let i = 0; i < membros1.length; i++) {
                array.push(membros1[i].id)
              }
              return array
            }
            var yd = membros(from, groupMembers)

            const horariosgp = lerBv.grupos[from].msgH

            if (horariosgp !== false) {
              const mensagemHorarios = horariosgp
              client.sendMessage(from, { text: mensagemHorarios, mentions: yd }, { quoted: info })
            }
            break

          case "horarios":
            if (!isDigno) return reply(`use ${prefix}registrar no meu pv para de registrar!!`)
            if (!isGroup) return reply(`Apenas em grupos`)
            const horariosPv = lerBv.grupos[from].msgH
            if (horariosPv !== false) {
              const mensagemHorariosPv = horariosPv
              client.sendMessage(from, { text: `enviando os sinais atualizados no seu pv!!` })
              client.sendMessage(sender, { text: mensagemHorariosPv }, { quoted: info })
            }
            break

          case "cancelar":
          case "registrar":
            if (isGroup) return reply(`apenas no pv`)
            if (jidIgualSender) {
              await client.sendMessage(from, { text: `Você já se registrou!!` })
            } else {
              const arq = `./registros/registro_${sender}.json`
              const dados = {
                nome: "nome",
                email: "email",
                telefone: "telefone",
              }

              const dadosJSON = JSON.stringify(dados, null, 2)

              if (fs.existsSync(arq)) {
                fs.unlinkSync(arq)
                fs.writeFileSync(`./registros/registro_${sender}.json`, dadosJSON)
                console.log(`arquivo excluido e criado: ${arq}`)

              } else {
                fs.writeFileSync(`./registros/registro_${sender}.json`, dadosJSON)



                console.log(`arquivo criado: ${arq}`)


              }
              
              const dbr = lerBv.grupos[from].msgR


              const msgRegister = `${dbr}`

              await client.sendMessage(from, { text: msgRegister })

              await client.sendMessage(from, { text: `digite ${prefix}start para começar seu registro no bot` })
            }
            break

          case "start":
            if (isGroup) return reply(`apenas no pv`)
            if (jidIgualSender) {
              await client.sendMessage(from, { text: `Você já se registrou!!` })
            } else {

              const arq1 = `./registros/registro_${sender}.json`
              const dados1 = {
                nome: "nome",
                email: "email",
                telefone: "telefone",
              }

              const dadosJSON1 = JSON.stringify(dados1, null, 2)

              if (fs.existsSync(arq1)) {
                fs.unlinkSync(arq1)
                fs.writeFileSync(`./registros/registro_${sender}.json`, dadosJSON1)
                console.log(`arquivo excluido e criado: ${arq1}`)

              } else {
                fs.writeFileSync(`./registros/registro_${sender}.json`, dadosJSON1)



                console.log(`arquivo criado: ${arq1}`)


              }



              const msgStart = `🎰 *VAMOS COMEÇAR* 🎰

Obs: preencha as informações que você ultilizou no cadastro da plataforma!🎰`

              await client.sendMessage(from, { text: `*Preencha as seguintes informações👇🏻*` })

              await client.sendMessage(from, { text: `_NOME:_ *Utilize ${prefix}nome seguindo do seu nome usado na plataforma*` })
            }
            break

          case "nome":
            if (isGroup) return reply(`registro bloquedo, use ${prefix}registrar no pv do bot`)
            if (jidIgualSender) {
              await client.sendMessage(from, { text: `Você já se registrou!!` })
            } else {
              if (!q) return reply(`formato inválido! Use ${prefix}nome (seu nome) "sem os parênteses".\nLembre-se de utilizar o mesmo registrado na plataforma para não ocorrer erros.`)

              const lerNome = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))
              lerNome.nome = `${q}`
              fs.writeFileSync(`./registros/registro_${sender}.json`, JSON.stringify(lerNome))

              await client.sendMessage(from, { text: `O *nome* está correto?\n\n${lerNome.nome}\n\nCaso não esteja, basta usar *${prefix}nome* novamente para informar o *nome* correto.\n\nSe o *nome* estiver correto, vamos prosseguir para inserir o seu *e-mail.* Use *${prefix}email* seguindo com o seu *e-mail.*` })

            }
            break

          case "email":
            if (isGroup) return reply(`registro bloquedo, use ${prefix}register no pv do bot`)
            if (jidIgualSender) {
              await client.sendMessage(from, { text: `Você já se registrou!!` })
            } else {
              if (!q) return reply(`formato inválido! Use ${prefix}email seu email.\nLembre-se de utilizar o mesmo registrado na plataforma para não ocorrer erros.`)

              const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

              if (validarEmail.test(`${q}`)) {
                const lerEmail = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))

                lerEmail.email = `${q}`
                fs.writeFileSync(`./registros/registro_${sender}.json`, JSON.stringify(lerEmail))

                await client.sendMessage(from, { text: `O *e-mail* está correto?\n\n${lerEmail.email}\n\nCaso não esteja, basta usar *${prefix}email* novamente para informar o *e-mail* correto.\n\nSe o *e-mail* estiver correto, vamos prosseguir para inserir o seu *número de telefone.* Use *${prefix}telefone* seguindo com o seu número.\n\n_Obs:_ o formato não deve conter caracteres(+ ou -).\n*Exemplo:* ${prefix}telefone 11995430079\n_Não esqueça de informar o ddd junto do número._` })
              } else {
                await client.sendMessage(from, { text: `Formato de e-mail inválido. Use o mesmo utilizado na plataforma!!` })
              }
            }

            break

          case "telefone":
            if (isGroup) return reply(`registro bloquedo, use ${prefix}register no pv do bot`)
            if (jidIgualSender) {
              await client.sendMessage(from, { text: `Você já se registrou!!` })
            } else {
              if (!q) return reply(`formato inválido! Use ${prefix}telefone seu telefone.\nLembre-se de utilizar o mesmo registrado na plataforma para não ocorrer erros.`)

              const validarTelefone = /^[0-9]+$/

              if (validarTelefone.test(`${q}`)) {
                const lerTel = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))
                lerTel.telefone = `${q}`
                fs.writeFileSync(`./registros/registro_${sender}.json`, JSON.stringify(lerTel))


                await client.sendMessage(from, { text: `O *telefone* está correto?\n\n${lerTel.telefone}\n\nCaso não esteja, basta usar *${prefix}telefone* novamente para informar o *telefone* correto.\n\nSe o *telefone* estiver correto, vamos prosseguir para verificar se os dados estão corretos. Use *${prefix}verificar*` })
              } else {
                await client.sendMessage(from, { text: `número inválido!! Não pode conter espaçamentos e nem caracteres especiais como espaço e outros.\n\nUse *${prefix}telefone* seguindo com o seu número.\n\n_Obs:_ o formato não deve conter caracteres(+ ou -).\n*Exemplo:* ${prefix}telefone 11995430079\n_Não esqueça de informar o ddd junto do número._` })
              }



            }

            break

          case "verificar":
            if (jidIgualSender) {
              await client.sendMessage(from, { text: `Você já se registrou!!` })
            } else {
              const infoNome = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))
              const infoEmail = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))
              const infoTel = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))

              const confirmarRegistro = `*Antes de te registrar confirme as informações:*\n\n_NOME_: ${infoNome.nome}\n_E-MAIL:_ ${infoEmail.email}\n_TELEFONE:_ ${infoTel.telefone}\n\n*Se os dados estão corretos, use ${prefix}confirmar para realizar seu registro. Use ${prefix}cancelar para refazer o registro.\n\nCaso queira modificar alguma informação, basta usar o comando de acordo com a informação que deseja usar e digite ${prefix}verificar para poder ver se as suas informações estão corretas.`
              const verifNome = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))
              const verifEmail = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))
              const verifTel = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))

              if (verifNome.nome === "nome") {
                await client.sendMessage(from, { text: `Nome não fornecido, use ${prefix}nome para cadastrar seu nome.` })
              } else if (verifEmail.email === "email") {
                await client.sendMessage(from, { text: `e-mail não fornecido, use ${prefix}email para cadastrar seu email.` })
              } else if (verifTel.telefone === "telefone") {
                await client.sendMessage(from, { text: `Telefone não fornecido, use ${prefix}telefone para cadastrar seu telefone.` })
              } else {
                await client.sendMessage(from, { text: confirmarRegistro })
              }
            }

            break

          case "confirmar":
            if (jidIgualSender) {
              await client.sendMessage(from, { text: `Você já se registrou!!` })
            } else {
              try {
                const verifNome1 = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))
                const verifEmail1 = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))
                const verifTel1 = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))

                if (verifNome1.nome === "nome") {
                  await client.sendMessage(from, { text: `Nome não fornecido, use ${prefix}nome para cadastrar seu nome.` })
                } else if (verifEmail1.email === "email") {
                  await client.sendMessage(from, { text: `e-mail não fornecido, use ${prefix}email para cadastrar seu email.` })
                } else if (verifTel1.telefone === "telefone") {
                  await client.sendMessage(from, { text: `Telefone não fornecido, use ${prefix}telefone para cadastrar seu telefone.` })
                } else {
                  const lerArquivos = JSON.parse(fs.readFileSync(`./registros/registro_${sender}.json`))
                  const regis = JSON.parse(fs.readFileSync(`./registros/db/dbregistro.json`))
                  const dadosFinal = {
                    jid: sender,
                    nome: lerArquivos.nome,
                    email: lerArquivos.email,
                    telefone: lerArquivos.telefone
                  }

                  regis.push(dadosFinal)

                  fs.writeFileSync(`./registros/db/dbregistro.json`, JSON.stringify(regis))

                  const arq2 = `./registros/registro_${sender}.json`
                  if (fs.existsSync(arq2)) {
                    fs.unlinkSync(arq2)
                  }


                  await client.sendMessage(from, { text: `Registro realizado com sucesso!! bot liberado para uso.` })
                }
              } catch {
                await client.sendMessage(from, { text: `use ${prefix}registrar` })
              }
            }

            break


          case "dbregistro":
            if (!isOwner) return reply(`Apenas dono`)
            const verifiRegistroo2 = JSON.parse(fs.readFileSync(`./registros/db/dbregistro.json`))
            if (verifiRegistroo2) {
              let mensagem = ' '

              for (let i = 0; i < verifiRegistroo2.length; i++) {
                const dbRegister = verifiRegistroo2[i]

                mensagem += `DADOS ${i + 1}\n\n`
                mensagem += `User: wa.me/+${dbRegister.jid.split("@")[0]}\n`
                mensagem += `Nome: ${dbRegister.nome}\n`
                mensagem += `E-mail: ${dbRegister.email}\n`
                mensagem += `Telefone: ${dbRegister.telefone}

`
              }

              await client.sendMessage(from, { text: mensagem }, { quoted: info })
            } else {
              await client.sendMessage(from, { text: `Ainda não existem registros na database de registro.` }, { quoted: info })
            }
            break

          case "cleardb":
            if (!isOwner) return reply(`Apenas dono`)
            const verifiRegistroo = []
            fs.writeFileSync(`./registros/db/dbregistro.json`, JSON.stringify(verifiRegistroo))
            await client.sendMessage(from, { text: 'Database de registros apagado, pronto para novos registros!!' })

            break

         


          case "rgrupo":
            if (!q) return reply(`use *on* para criar o cadastro e *off* para excluir o cadastro`)
            if (q === "on") {
              if (grupoRegi in lerBv.grupos) {
                await client.sendMessage(from, { text: `ja ativado` })
              } else {
                const keyGp = gerarKey()
                let novoGp = from
                lerBv.grupos[novoGp] = {
                  key: keyGp,
                  msgBv: false,
                  msgS: false,
                  msgH: false,
                  msgPv: false,
                  msgR: false
                }

                fs.writeFileSync('./registros/db/grupos.json', JSON.stringify(lerBv, null, 2), 'utf-8')
                delay(2000)
                let keyy = lerBv.grupos[from].key

                await client.sendMessage(from, { text: `Grupo cadastrado, a sua key para gerenciar o grupo foi mandada no seu pv!!` }, { quoted: info })
                delay(3000)
                await client.sendMessage(sender, { text: `Aqui está a sua key. Use *${prefix}congp (sua key)*\n*Obs:* sem os parenteses` }, { quoted: info })
                delay(5000)
                await client.sendMessage(sender, {text:`${keyy}`})
                
              }
            }
            if (q === "off") {
              if (lerBv.grupos[from] && lerUser.usuarios[sender]) {
                delete lerBv.grupos[from]
                delete lerUser.usuarios[sender]
                delay(4000)
                fs.writeFileSync('./registros/db/users.json', JSON.stringify(lerUser, null, 2))
                fs.writeFileSync('./registros/db/grupos.json', JSON.stringify(lerBv, null, 2), 'utf-8')
                await client.sendMessage(from, { text: `Cadastro excluido com sucesso!!` })

              } else if(lerBv.grupos[from] && !lerUser.usuarios[sender]) {
                delete lerBv.grupos[from]
                delay(4000)
                fs.writeFileSync('./registros/db/grupos.json', JSON.stringify(lerBv, null, 2), 'utf-8')
                await client.sendMessage(from, { text: `Cadastro excluido com sucesso!!` })
              } else if(!lerBv.grupos[from] && lerUser.usuarios[sender]) {
                delete lerUser.usuarios[sender]
                delay(4000)
                fs.writeFileSync('./registros/db/users.json', JSON.stringify(lerUser, null, 2), 'utf-8')
                await client.sendMessage(from, { text: `Cadastro excluido com sucesso!!` })
              }
               else {
                client.sendMessage(from, { text: `Nenhum grupo cadastrado com essa key.` })
              }
            }
            break

          case "congp":
            if (isGroup) return reply(`Use o meu pv para gerenciar o seu grupo!!`)
            if (!q) return reply(`*Cadê a key do grupo?*\nUse ${prefix}congp (sua key)\n\n*Obs:* Sem os parênteses.\n\nUse ${prefix}configp após cadastrar sua key`)
            

            const keyyy = q
            const search = Object.keys(lerBv.grupos).find(chave => lerBv.grupos[chave].key === keyyy)

            

            if (search) {
              if(isUser) {
              reply(`Você já registrou a key do seu grupo. Use ${prefix}configp para ver o menu de comandos para gerênciar o seu grupo.`)  
              } else {
              lerUser.usuarios[sender] = {
                key: q,
                grupoId: search
              }
  
              fs.writeFileSync('./registros/db/users.json', JSON.stringify(lerUser, null, 2))

              let grupo = search
              const grupoAluguel = await client.groupMetadata(grupo)
              if (grupoAluguel) {
                let dados = `*DETALHES DO GRUPO COM A KEY: _${q}_*
_Nome:_ *${grupoAluguel.subject}*
_Desc:_ *${grupoAluguel.desc}*
_Membros:_ *${grupoAluguel.participants.length}*`

                reply(dados)

                var menuKey = `GERÊNCIE SEU GRUPO COM ESSE MENU EXCLUSIVO!!

| => ${prefix}msgbv [altera mensagem de boas vindas]
| => ${prefix}msgh [altera a mensagem de sinais]
| => ${prefix}msgh [altera a mensagem de horários]
| => ${prefix}msgpv [altera a mensagem de bem-vindo no pv]
| => ${prefix}msgr [altera a mensagem de registro]`

                await client.sendMessage(from, { text:menuKey}, {quoted:info})
              }
            }
            } else {
              reply(`A key ${q} não existe ou expirou. Contate meu dono para gerar uma key para o seu grupo.`)
            }
          
            break

           case "configp":
            if(!isUser) return reply(`Você precisa registrar a key do seu grupo primeiro`)

            const menuK = `GERÊNCIE SEU GRUPO COM ESSE MENU EXCLUSIVO!!

| => *${prefix}msgbv* [altera mensagem de boas vindas]
| => *${prefix}msgh* [altera a mensagem de sinais]
| => *${prefix}msgh* [altera a mensagem de horários]
| => *${prefix}msgpv* [altera a mensagem de bem-vindo no pv]
| => *${prefix}msgr* [altera a mensagem de registro]`

            await client.sendMessage(from,{text:menuK},{quoted:info})

            
            break

          case "msgbv":
            if(!isUser) return reply(`Key não registrada.`)
            if(!q) return reply(`Cadê a nova mensagem?`)
            const false1 = false
            const true1 = `${q}`
            const verific = q !== "false" ? true1 : false1
            
            const keyUser = lerUser.usuarios[sender].grupoId
            if(lerBv.grupos.hasOwnProperty(keyUser)) {
              lerBv.grupos[keyUser].msgBv = verific
              fs.writeFileSync('./registros/db/grupos.json', JSON.stringify(lerBv, null, 2))
              await client.sendMessage(from,{text:`Mensagem de boas vindas alterada com sucesso!!`})
            }
            
            break

          case "msgs": 
          if(!isUser) return reply(`Key não registrada.`)
            if(!q) return reply(`Cadê a nova mensagem?`)
            const false5 = false
            const true5 = `${q}`
            const verificS = q !== "false" ? true5 : false5
            const keyUserS = lerUser.usuarios[sender].grupoId
            if(lerBv.grupos.hasOwnProperty(keyUserS)) {
              lerBv.grupos[keyUserS].msgS = verificS
              fs.writeFileSync('./registros/db/grupos.json', JSON.stringify(lerBv, null, 2))
              await client.sendMessage(from,{text:`Mensagem dos sianis alterada com sucesso!!`})
            }
            break

          case "msgh":
            if(!isUser) return reply(`Key não registrada.`)
            if(!q) return reply(`Cadê a nova mensagem?`)
            const false4 = false
            const true4 = `${q}`
            const verificH = q !== "false" ? true4 : false4
            const keyUserH = lerUser.usuarios[sender].grupoId
            if(lerBv.grupos.hasOwnProperty(keyUserH)) {
              lerBv.grupos[keyUserH].msgH = verificH
              fs.writeFileSync('./registros/db/grupos.json', JSON.stringify(lerBv, null, 2))
              await client.sendMessage(from,{text:`Mensagem dos horários alterada com sucesso!!`})
            }
            break

          case "msgpv":
            if(!isUser) return reply(`Key não registrada.`)
            if(!q) return reply(`Cadê a nova mensagem?`)
            const false2 = false
            const true2 = `${q}`
            const verificPv = q !== "false" ? true2 : false2
            const keyUserPv = lerUser.usuarios[sender].grupoId
            if(lerBv.grupos.hasOwnProperty(keyUserPv)) {
              lerBv.grupos[keyUserPv].msgPv = verificPv
              fs.writeFileSync('./registros/db/grupos.json', JSON.stringify(lerBv, null, 2))
              await client.sendMessage(from,{text:`Mensagem de bem-vindo no pv alterada com sucesso!!`})
            }
            break

          case "msgr":
            if(!isUser) return reply(`Key não registrada.`)
            if(!q) return reply(`Cadê a nova mensagem?`)
            const false3 = false
            const true3 = `${q}`
            const verificR = q !== "false" ? true3 : false3
            const keyUserR = lerUser.usuarios[sender].grupoId
            if(lerBv.grupos.hasOwnProperty(keyUserR)) {
              lerBv.grupos[keyUserR].msgR = verificR
              fs.writeFileSync('./registros/db/grupos.json', JSON.stringify(lerBv, null, 2))
              await client.sendMessage(from,{text:`Mensagem de registro alterada com sucesso!!`})
            }
            break

          case 'totag':
          case 'cita':
          case 'hidetag':
            if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
            if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
            if (q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
            if (q.includes("=>") || q.includes(">")) return
            membros = (groupId, membros1) => {
              array = []
              for (let i = 0; i < membros1.length; i++) {
                array.push(membros1[i].id)
              }
              return array
            }
            var yd = membros(from, groupMembers)
            if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
              media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
              rane = getRandom('.' + await getExtension(media.mimetype))
              img = await getFileBuffer(media, 'sticker')
              fs.writeFileSync(rane, img)
              fig = fs.readFileSync(rane)
              var options = {
                sticker: fig,
                mentions: yd
              }
              client.sendMessage(from, options)
            } else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
              media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
              rane = getRandom('.' + await getExtension(media.mimetype))
              img = await getFileBuffer(media, 'image')
              fs.writeFileSync(rane, img)
              buff = fs.readFileSync(rane)
              client.sendMessage(from, { image: buff, mentions: yd }, { quoted: info })
            } else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
              media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
              rane = getRandom('.' + await getExtension(media.mimetype))
              vid = await getFileBuffer(media, 'video')
              fs.writeFileSync(rane, vid)
              buff = fs.readFileSync(rane)
              client.sendMessage(from, { video: buff, mimetype: 'video/mp4', mentions: yd }, { quoted: info })
            } else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
              media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
              rane = getRandom('.' + await getExtension(media.mimetype))
              aud = await getFileBuffer(media, 'audio')
              fs.writeFileSync(rane, aud)
              buff = fs.readFileSync(rane)
              client.sendMessage(from, { audio: buff, mimetype: 'audio/mp4', ptt: true, mentions: yd }, { quoted: info })
            } else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
              media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
              rane = getRandom('.' + await getExtension(media.mimetype))
              doc = await getFileBuffer(media, 'document')
              fs.writeFileSync(rane, doc)
              buff = fs.readFileSync(rane)
              client.sendMessage(from, { document: buff, mimetype: 'text/plain', mentions: yd }, { quoted: info })
            } else if (budy) {
              if (q.length < 1) return reply('Citar oq?')
              client.sendMessage(from, { text: body.slice(command.length + 2), mentions: yd })
            } else {
              reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
            }
            break


          case "infodono":
          case "dono":

            const doninhu = `╭╶᚜ ⛾ 𝐒𝟒𝐤𝐢-𝐛𝐨𝐭 ⛾ ᚛
║❮ 👑 𝘿 𝙊 𝙉 𝙊 👑 ❯
╰───々 

╭━━ ☾ 📱𝑪𝑶𝑵𝑻𝑨𝑻𝑶📱 ☽
║‣ Wa.me/${infoBot.numeroDono} 
║‣ 𝐒𝐢𝐱𝐑𝐥𝐲
╰───々 

╭───々 
║❮ 👑 𝘿 𝙊 𝙉 𝙊 👑 ❯
╰╶᚜ ${nomeBot} ᚛`

            client.sendMessage(from, { text: doninhu })
            break






          case 'bemvindo':
            if (!isGroup) return reply("so em grupo")
            if (!isGroupAdmins) return reply("so pros admin")
            if (!isBotGroupAdmins) return reply("bot nao e adm para usar")
            if (Number(args[0]) === 1) {
              if (isWelkom) return reply('Ja esta ativo')
              welkom.push(from)
              fs.writeFileSync('./functions/welkom.json', JSON.stringify(welkom))
              reply(' Ativou com sucesso o recurso de bem vindo neste grupo 📝')
            } else if (Number(args[0]) === 0) {
              if (!isWelkom) return reply('Ja esta Desativado')
              pesquisar = from
              processo = welkom.indexOf(pesquisar)
              while (processo >= 0) {
                welkom.splice(processo, 1)
                processo = welkom.indexOf(pesquisar)
              }
              fs.writeFileSync('./functions/welkom.json', JSON.stringify(welkom))
              reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
            } else {
              reply("1 para ativar, 0 para desativar")
            }
            break

          case "pvzin":
            if (!isGroup) return reply("so em grupo")
            if (!isGroupAdmins) return reply("so pros admin")
            if (!isBotGroupAdmins) return reply("bot nao e adm para usar")
            if (Number(args[0]) === 1) {
              if (isWelkomPv) return reply('Ja esta ativo')
              welkomPv.push(from)
              fs.writeFileSync('./welkomPv.json', JSON.stringify(welkomPv))
              reply(' Ativou com sucesso o recurso de bem vindo no pv 📝')
            } else if (Number(args[0]) === 0) {
              if (!isWelkomPv) return reply('Ja esta Desativado')
              pesquisar = from
              processo = welkomPv.indexOf(pesquisar)
              while (processo >= 0) {
                welkomPv.splice(processo, 1)
                processo = welkomPv.indexOf(pesquisar)
              }
              fs.writeFileSync('./welkomPv.json', JSON.stringify(welkomPv))
              reply('‼️ Desativou com sucesso o recurso de bemvindo no pv✔️')
            } else {
              reply("1 para ativar, 0 para desativar")
            }
            break


          case 'addlistanegra':
          case 'addlista':
            if (!isGroupAdmins) return reply(resposta.adm)
            if (args.length < 1) return reply('Cade o número?')
            var ind = dbids.indexOf(from)
            if (islista) {
              listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
              var numind = lista[ind].number.indexOf(listng)
              if (numind >= 0) return reply('este Número ja esta incluso')
              lista[ind].number.push(listng)
            } else {
              listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
              lista.push({
                groupId: from,
                actived: false,
                number: [listng]
              })
            }
            fs.writeFileSync('./functions/lista.json', JSON.stringify(lista, null, 2) + '\n')
            reply(`Número adicionado a lista de autoban com sucesso `)
            break

          case 'dellistanegra':
          case 'dellista':
            if (!isGroup) return reply(resposta.grupo)
            if (!isGroupAdmins) return reply(resposta.adm)
            if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
            if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
            var ind = dbids.indexOf(from)
            if (!islista) return reply('Nenhum Número não foi adicionado')
            var numind = lista[ind].number.indexOf(args[0])
            if (numind < 0) return reply('Esse número não está incluso na lista de autoban😑')
            lista[ind].number.splice(numind, 1)
            fs.writeFileSync('./functions/lista.json', JSON.stringify(lista, null, 2) + '\n')
            reply(`Número removido a lista de autoban com sucesso `)
            break



          case 'promover':
          case 'promote':
            if (!isGroupAdmins) return reply('Só ADM pode utilizar este comando')
            if (!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar esse comando.')

            if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer promover')
            mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
            if (botNumber.includes(mentioned)) return reply("😑")

            let responsedm = await client.groupParticipantsUpdate(from, [mentioned], 'promote')
            if (responsedm[0].status === "200") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} 😂agora é um fiscal do bar😂.️`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
            else if (responsedm[0].status === "404") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} não está no grupo️`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
            else client.sendMessage(from, { text: `😥Parece que deu erro😥️`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
            break

          case "rebaixar":
            if (!isGroupAdmins) return reply(resposta.adm);
            if (!isBotGroupAdmins) return reply(resposta.botadm);
            if (
              info.message.extendedTextMessage === undefined ||
              info.message.extendedTextMessage === null
            )
              return reply(
                "Marque ou responda a mensagem de quem você quer tirar o admin"
              );
            mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
              ? info.message.extendedTextMessage.contextInfo.mentionedJid[0]
              : info.message.extendedTextMessage.contextInfo.participant;
            if (botNumber.includes(mentioned))
              return reply("😑 marque outra pessoa");
            let responsepm = await client.groupParticipantsUpdate(
              from,
              [mentioned],
              "demote"
            );
            if (responsepm[0].status === "406")
              client.sendMessage(from, {
                text: `@${mentioned.split("@")[0]
                  } criou esse grupo e não pode ser removido(a) da lista de admins.️`,
                mentions: [mentioned, sender],
                contextInfo: { forwardingScore: 999, isForwarded: true },
              });
            else if (responsepm[0].status === "200")
              client.sendMessage(from, {
                text: `@${mentioned.split("@")[0]} 😥não e mais adm do grupo😥`,
                mentions: [mentioned, sender],
                contextInfo: { forwardingScore: 999, isForwarded: true },
              });
            else if (responsepm[0].status === "404")
              client.sendMessage(from, {
                text: `@${mentioned.split("@")[0]} não está no grupo😑️`,
                mentions: [mentioned, sender],
                contextInfo: { forwardingScore: 999, isForwarded: true },
              });
            else
              client.sendMessage(from, {
                text: `Parece que deu erro️`,
                mentions: [sender],
                contextInfo: { forwardingScore: 999, isForwarded: true },
              });
            break;




          case 'grupo':
            if (!isGroup) return reply(`SÓ EM GRUPO`)
            if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
            if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
            if (args[0] === 'a') {
              reply(`*GRUPO ABERTO COM SUCESSO*`)
              await client.groupSettingUpdate(from, 'not_announcement')
            } else if (args[0] === 'f') {
              reply(`*GRUPO FECHADO COM SUCESSO*`)
              await client.groupSettingUpdate(from, 'announcement')
            }
            break



          case 'mute':
            if (!isGroup) return reply(resposta.grupo)
            if (!isGroupAdmins) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            const muteMessage = {
              text: `O bot silenciou o grupo: ${groupName}`,
              footer: `${nomeBot}`,
              headerType: 1
            }

            client.sendMessage(from, muteMessage)
            client.groupSettingChange(groupId, GroupSettingChange.messageSend, false)
            break

          case 'unmute':
            if (!isGroup) return reply(resposta.grupo)
            if (!isGroupAdmins) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            const unmuteMessage = {
              text: `O bot destilenciou o grupo: ${groupName}`,
              footer: `${nomeBot}`,
              headerType: 1
            }

            client.sendMessage(from, unmuteMessage)
            client.groupSettingChange(groupId, GroupSettingChange.messageSend, true)
            break


          case 'tagall':
          case 'marcar': {
            if (!isGroup) return reply(resposta.group)
            if (!isGroupAdmins) return reply(resposta.adm)
            let metadata = await client.groupMetadata(from)
            let teks = `
  \n ${metadata.participants.length ? metadata.participants.length : "undefined"} participantes do grupo
  \n ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
            for (let mem of participants) {
              teks += `┃❖┃@${mem.id.split('@')[0]}\n`
            }
            client.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: live })
          }
            break



          case 'fstiker':
          case 'fsticker':
          case 'f':
          case 's':
          case 'stickergif':
          case "sticker":
          case 'sgif':
          case 'figu':
          case 'st':
          case 'stk':
            {
              (async function () {
                var legenda = q ? q?.split("/")[0] : ` `
                var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `  `
                if (isMedia && !info.message.videoMessage || isQuotedImage) {
                  var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
                  rane = getRandom('.' + await getExtension(encmedia.mimetype))
                  buffimg = await getFileBuffer(encmedia, 'image')
                  fs.writeFileSync(rane, buffimg)
                  rano = getRandom('.webp')
                  exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                    fs.unlinkSync(rane)
                    // "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
                    var json = {
                      "sticker-pack-name": legenda,
                      "sticker-pack-publisher": autor
                    }
                    var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                    var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                    var exif = Buffer.concat([exifAttr, jsonBuff])
                    exif.writeUIntLE(jsonBuff.length, 14, 4)
                    let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111) + ".temp.exif"
                    fs.writeFileSync(`./${nomemeta}`, exif)
                    exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                      client.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                      fs.unlinkSync(nomemeta)
                      fs.unlinkSync(rano)
                    })
                  })
                } else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
                  var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
                  rane = getRandom('.' + await getExtension(encmedia.mimetype))
                  buffimg = await getFileBuffer(encmedia, 'video')
                  fs.writeFileSync(rane, buffimg)
                  rano = getRandom('.webp')
                  await ffmpeg(`./${rane}`)
                    .inputFormat(rane.split('.')[1])
                  exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                    fs.unlinkSync(rane)
                    let json = {
                      "sticker-pack-name": legenda,
                      "sticker-pack-publisher": autor
                    }
                    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                    let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                    let exif = Buffer.concat([exifAttr, jsonBuff])
                    exif.writeUIntLE(jsonBuff.length, 14, 4)
                    let nomemeta = "temp.exif"
                    fs.writeFileSync(`./${nomemeta}`, exif)
                    exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                      client.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                      fs.unlinkSync(nomemeta)
                      fs.unlinkSync(rano)
                    })
                  })
                } else {
                  reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
                }
              })().catch(e => {
                console.log(e)
                reply("Hmm deu erro")
                try {
                  if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
                  if (fs.existsSync(rano)) fs.unlinkSync(rano);
                  if (fs.existsSync(media)) fs.unlinkSync(media);
                } catch { }
              })
            }
            break

          case "menuadm": {
            // client.sendMessage(from, { react: { text: ``, key: info.key }})
            /*
            const buttons = [
            //  {buttonId: 'id', buttonText: {displayText: '[👑]  [👑]'}, type: 1},
              {buttonId: `${prefix}ping`, buttonText: {displayText: '[🏓] 𝙋𝙄𝙉𝙂 [🏓]'}, type: 1},
              {buttonId: `${prefix}infodono`, buttonText: {displayText: '[🍷] 𝘿𝙊𝙉𝙊 [🍷]'}, type: 1}
            ]
            */
            if (!isGroup) return reply(`apenas em grupos`)
            if (!isGroupAdmins) return reply(`suba para o cargo *admin* para ter acesso nesse menu`)
            const admin = `
╭╶᚜ ${nomeBot} ᚛──
║❮ 𝙈 𝙀 𝙉 𝙐  𝘼 𝘿 𝙈 𝙄 𝙉 ❯
╰───々 

╭━━ ☾ 🚫𝑨𝑵𝑻𝑰𝑺🚫 ☽
║➢ ${prefix}antilink 1/0
╰───々 

╭━━ ☾ ⚖️𝑪𝑶𝑵𝑻𝑹𝑶𝑳𝑬 𝑫𝑬 𝑪𝑯𝑨𝑻⚖️ ☽
║➣ ${prefix}sorteio 1/10/sorteio
║➣ ${prefix}dbregistro (puxa todos os registros)
║➣ ${prefix}cleardb (limpa os registros)
║➣ ${prefix}textdb (muda o texto de registro)
║➣ ${prefix}ban @numero
║➣ ${prefix}kick @numero
║➣ ${prefix}promover @numero
║➣ ${prefix}rebaixar @numero
║➣ ${prefix}addlista [adiciona na lista de autoban]
║➣ ${prefix}addlistanegra
║➣ ${prefix}dellistanegra
║➣ ${prefix}dellista [deleta da lista de autoban]
║➣ ${prefix}listban
║➣ ${prefix}clear
║➣ ${prefix}limpar
╰───々 

╭━━ ☾ 🗣️𝑰𝑵𝑻𝑬𝑹𝑨𝑮𝑰𝑹/𝑪𝑯𝑨𝑻🗣️ ☽
║➢ ${prefix}tagall (marcar todos)
║➣ ${prefix}marcar (marcar todos)
║➣ ${prefix}hidetag [marcar todos] 
╰───々

╭───々 
║❮ 𝙈 𝙀 𝙉 𝙐  𝘼 𝘿 𝙈 𝙄 𝙉 ❯
╰╶᚜ ${nomeBot} ᚛──
  `
            //client.sendMessage(from, { react: { text: `🛠️`, key: info.key }})

            client.sendMessage(from, { text: admin })
          }
            break



          case 'ddd':
            if (!isPremium) return reply(resposta.premium)
            if (args.length < 1) return reply(`Use ${prefix + command} 21`)
            ddd = body.slice(5)
            ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
            dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
            for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
            client.sendMessage(from, { text: dddlist }, { quoted: info })
            break


          case 'antilink':
            if (!isGroup) return reply(enviar.msg.grupo)
            if (!isGroupAdmins) return reply(enviar.msg.adm)
            if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
            if (Number(args[0]) === 1) {
              if (isAntiLinkHard) return reply('Ja esta ativo')
              antilinkhard.push(from)
              fs.writeFileSync('./functions/antilink.json', JSON.stringify(antilinkhard))
              reply('[⚡️] Ativou com sucesso o recurso de antilink hardcore neste grupo.')
            } else if (Number(args[0]) === 0) {
              if (!isAntiLinkHard) return reply('Ja esta Desativado')
              pesquisar = from
              processo = antilinkhard.indexOf(pesquisar)
              while (processo >= 0) {
                antilinkhard.splice(processo, 1)
                processo = antilinkhard.indexOf(pesquisar)
              }
              fs.writeFileSync('./functions/antilink.json', JSON.stringify(antilinkhard))
              reply('『❗』Desativou com sucesso o recurso de antilink harcore neste grupo.')
            } else {
              if (isAntiLinkHard) {
                buttons02 = [{ buttonId: `${prefix + command} 0`, buttonText: { displayText: 'Desativar ✘' }, type: 1 }]
              } else {
                buttons02 = [{ buttonId: `${prefix + command} 1`, buttonText: { displayText: 'Ativar ✓' }, type: 1 }]
              }
            }
            break

          case 'menu': {
            if (isGroup && isPremium && isGroupAdmins) {
              var tagMenu = "𝑷𝑹𝑬𝑴𝑰𝑼𝑴"
              var cargoMenu = "𝑨𝑫𝑴𝑰𝑵"
            } else if (isGroup && isPremium && !isGroupAdmins) {
              var tagMenu = "𝑷𝑹𝑬𝑴𝑰𝑼𝑴"
              var cargoMenu = "𝑼𝑺𝑼𝑨𝑹𝑰𝑶"
            } else if (isGroup && !isPremium && isGroupAdmins) {
              var tagMenu = "𝑼𝑺𝑼𝑨𝑹𝑰𝑶"
              var cargoMenu = "𝑨𝑫𝑴𝑰𝑵"
            } else if (isGroup) {
              var tagMenu = "𝑼𝑺𝑼𝑨𝑹𝑰𝑶"
              var cargoMenu = "𝑼𝑺𝑼𝑨𝑹𝑰𝑶"
            } else if (!isGroup && isPremium) {
              var tagMenu = "𝑷𝑹𝑬𝑴𝑰𝑼𝑴"
            } else if (!isGroup) {
              var tagMenu = "𝑼𝑺𝑼𝑨𝑹𝑰𝑶"
            }



            if (isGroup) {
              client.sendMessage(from, { react: { text: `🏮`, key: info.key } })
              await client.sendMessage(from, {
                video: fs.readFileSync('./sukuna.mp4'),
                caption: `
╭╶᚜ ${nomeBot} ᚛
║❮ 𝔻𝔸𝔻𝕆𝕊 𝔻𝔼 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 ❯
║
║ ➯𝙐𝙎𝙀𝙍: ${pushname}
║ ➯𝙄𝘿: ${sender}
║ ➯𝙏𝘼𝙂: ${tagMenu}
║ ➯𝘾𝘼𝙍𝙂𝙊: ${cargoMenu}
╰───々 
ི⋮ ྀ🏮⏝ ི⋮ ྀ ⛩️ ི⋮ ྀ⏝🏮ི⋮ ྀ

╭╶᚜ ${nomeBot} ᚛
║❮ 𝕀ℕ𝔽𝕆. 𝔹𝕆𝕋 ❯
║
║➯𝘿𝙊𝙉𝙊: *${nomeDono}*
║➯𝙑𝙀𝙍𝙎𝙄𝙊𝙉: *1.0*
║➯𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿𝙀/𝙋𝙄𝙉𝙂: *${latensi.toFixed(4)}*
║➯𝙋𝙍𝙀𝙁𝙄𝙓𝙊: ☾ ${prefix} ☽
╰───々 
ི⋮ ྀ🏮⏝ ི⋮ ྀ ⛩️ ི⋮ ྀ⏝🏮ི⋮ ྀ

╭╶᚜ ${nomeBot} ᚛
║❮ 𝕋𝕀ℙ𝕆𝕊 𝔻𝔼 𝕄𝔼ℕ𝕌 ❯
╰───々 
ི⋮ ྀ🏮⏝ ི⋮ ྀ ⛩️ ི⋮ ྀ⏝🏮ི⋮ ྀ

╭━━ ☾ ⚙️𝑨𝑫𝑴𝑰𝑵𝑺⚙️ ☽
║‣ ${prefix}Menuadm
╰───々 
`,
                gifPlayback: true
              })
            }
          }
            break







          case 'ban':
          case 'kick':
            if (!isGroup) return reply(resposta.grupo)
            if (!isGroupAdmins) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)

            const frases = JSON.parse(fs.readFileSync('./functions/frases.json'))
            const clover = frases[Math.floor(Math.random() * frases.length)]

            if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('𝙢𝙖𝙧𝙦𝙪𝙚 𝙖 𝙢𝙚𝙣𝙨𝙖𝙜𝙚𝙢 𝙤𝙪 𝙖 𝙥𝙚𝙨𝙨𝙤𝙖 𝙦𝙪𝙚 𝙫𝙘 𝙙𝙚𝙨𝙚𝙟𝙖 𝙧𝙚𝙢𝙤𝙫𝙚𝙧 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤')
            if (info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
              mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
              if (sender.includes(mentioned)) return reply("😑")
              if (botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né, mas estou decepcionado com você')
              let responseb = await client.groupParticipantsUpdate(from, [mentioned], 'remove')
              if (responseb[0].status === "200") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} ${clover}`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
              else if (responseb[0].status === "406") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
              else if (responseb[0].status === "404") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
              else client.ontextInfoe(from, { text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
            } else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
              mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
              if (mentioned.includes(sender)) return reply("😑")
              if (mentioned.length > 1) {
                if (mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai banir todo mundo mesmo?`)
                sexocomrato = 0
                for (let banned of mentioned) {
                  await sleep(100)
                  let responseb2 = await client.groupParticipantsUpdate(from, [banned], 'remove')
                  if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
                }
                client.sendMessage(from, { text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
              } else {
                let responseb3 = await client.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
                if (responseb3[0].status === "200") client.sendMessage(from, { text: `@${mentioned[0].split("@")[0]} ${clover}`, mentions: [mentioned[0], sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                else if (responseb3[0].status === "406") client.sendMessage(from, { text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                else if (responseb3[0].status === "404") client.sendMessage(from, { text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                else client.sendMessage(from, { text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
              }
            }
            break




          case 'bangp':
            if (!isGroup) return reply(resposta.grupo)
            if (!isOwner && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(resposta.Dono)
            if (isBanchat) return reply(`Este grupo ja está banido`)
            bancht.push(from)
            fs.writeFileSync('./functions/banchat.json', JSON.stringify(bancht))
            reply(`Grupo banido com sucesso`)
            break

          case 'unbangp':
            if (!isGroup) return reply(resposta.grupo)
            if (!isOwner) return reply(resposta.Dono)
            let cur = bancht.indexOf(from)
            bancht.splice(cur, 1)
            fs.writeFileSync('./functions/banchat.json', JSON.stringify(bancht))
            reply(`Grupo desbanido com sucesso...`)
            break

          case "limpar":
          case "clear":
            if (!isGroup) return reply(resposta.grupo)
            if (!isGroupAdmins) return reply('comando apenas para admins')
            reply(`L I M P A N D U 😎🤙\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ${nomeBot}`)
            break

          case 'walpaperanime':
            if (!isPremium) return reply(resposta.premium)
            {
              json = JSON.parse(fs.readFileSync('./functions/fotos/wall.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: 'PROXIMO'}, type: 1},
                ]
                */
              templateMassage = {
                image: {
                  url: random,
                  quoted: live
                },
                caption: `${command}`,
                footer: `${nomeBot}`,
              }
              client.sendMessage(from, templateMassage)
            }
            break

          case 'deletar': case 'apagar': case 'delete': case 'del': case 'd':
            if (!isGroup) return reply(resposta.grupo)
            if (!SoDono && !isGroupAdmins && !isPremium) return reply(resposta.adm)
            client.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender } })
              .catch((err) => {
                console.log(err)
                reply('A mensagem não foi enviado pelo bot...')
              })
            break

          case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
            if (!isOwner) return reply(resposta.dono)
            if (!q) return reply(`Texto onde?\n\nExemplo : ${prefix + command} BOM DIA `)
            let getGroups = await client.groupFetchAllParticipating()
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let anu = groups.map(v => v.id)
            for (let i of anu) {
              await sleep(150)
              let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
              client.sendMessage(i, { text: txt })
            }
            reply(`Enviando com sucesso `)
          }
            break















          //====================//


          default:
            if (isCmd && command) {
              const buttonMessage = { text: `comando inexistente...` }
              client.sendMessage(from, buttonMessage)
            }

        }

      } catch (e) {
        console.log(e)
      }
    });

  }
  // Conectar à rede do WhatsApp
  starts();

} catch (error) {
  console.error("Ocorreu um erro:", error);
}