import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['51982110760', '🍇𝗔𝗡𝗚𝗘𝗟 𝗔𝐁 𝐎𝐖𝐍𝐄𝐑🍇', true],
  ['5491168758497', '💻𝐂𝐔𝐒𝐓𝐎𝐌𝐄𝐑 𝐒𝐔𝐏𝐏𝐎𝐑𝐓💻', true],
  ['18296835082', '☃️𝐒𝐓𝐀𝐅𝐅 𝐋𝐁☃️', true],
  ['50558124470', '☃️🍭𝐒𝐇𝐈𝐑𝐎𝐔 𝐋𝐁🍭', true],
  ['51929972576', '☃️𝐏𝐎𝐋𝐈𝐂𝐄 𝐋𝐁☃️', true],
  ['593939005387', '☃️𝐌𝐎𝐃𝐄𝐑𝐀𝐓𝐎𝐑 𝐋𝐁☃️', true],
  ['51928723029', '🖥️𝐆𝐋𝐎𝐁𝐀𝐋 𝐒𝐔𝐏𝐏𝐎𝐑𝐓🖥️', true],
  ['', '🧸𝐂𝐎𝐋𝐀𝐁𝐎𝐑𝐀𝐓𝐎𝐑 𝐋𝐁🧸', true],
  ['584129799955', '🧸𝐃𝐈𝐒𝐄𝐍̃𝐀𝐃𝐎𝐑 𝐋𝐁🧸', true],

];

global.suittag =['51982110760']
global.prems =['51982110760']

global.packname = '☯︎ 𝙱𝙾𝚃\n☯︎ 𝙾𝚆𝙽𝙴𝚁';
global.author = 'ʜᴀᴄʜɪᴋᴏ-ʙᴏᴛ-ᴍᴅ\nʜᴀᴄʜᴇᴊᴏᴛᴀ';
global.wm = '𝐿𝑂𝐵𝑂 - 𝐵𝑂𝑇';
global.titulowm = '🐺 𝗔𝗡𝗗𝗬𝗢-𝗕𝗢𝗧-𝗠𝗗 🐺';
global.titulowm2 =`✦𝗔 𝗡 𝗗 𝗬 𝗢- 𝗕 𝗢 𝗧 - 𝗠 𝗗✦`
global.igfg = '✪𝗔𝗻𝗱𝘆𝗼 - 𝗕𝗼𝘁✪'  ;
global.wait = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6= fs.readFileSync('./Menu3.png');
global.imagen7= fs.readFileSync('./src/hjbot.jpg');
global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

//****************************
global.gp1 = 'https://chat.whatsapp.com/BMGMxj6cU9o4S3huVByLFc'
global.gp2 = 'https://chat.whatsapp.com/BcCSqRpWctb0J4cNZb02Te'
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝙷𝚊𝚌𝚑𝚒𝚔𝚘-𝙱𝚘𝚝`;
global.gt = '★𝗔𝗡𝗗𝗬𝗢-𝗕𝗢𝗧★';
global.mysticbot = '★𝗔𝗡𝗗𝗬𝗢 - 𝗕𝗢𝗧★';
global.md = 'https://github.com/ANGEL9000/AndyoBot-MD';
global.mysticbot = 'https://github.com/ANGEL9000/AndyoBot-MD';
global.waitt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waittt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waitttt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.nomorown = '51992004112', '50576390682';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
