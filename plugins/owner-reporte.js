const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚁𝙴𝙿𝙾𝚁𝚃𝙴*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`;
  if (text.length < 10) throw `[❗] 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐦𝐢𝐧𝐢𝐦𝐨 𝐝𝐞 10 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬`;
  if (text.length > 1000) throw `[❗] 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐦𝐚𝐱𝐢𝐦𝐨 𝐝𝐞 1000 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬`;
  const teks = `*❒═════[𝐑𝐄𝐏𝐎𝐑𝐓𝐄]═════❒*\n*┬*\n*├❧ 𝙽𝚄𝙼𝙴𝚁𝙾:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ 𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${text}\n*┴*`;
  conn.reply('51992004117@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('51992004117@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('50576390682@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedjid: [m.sender]}});
  conn.reply('50576390682@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedjid: [m.sender]}});
  conn.reply('593939005387@s.whatsapp.net',m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedjid: [m.sender]}});
  m.reply(`[ 💖 ] 𝐄𝐱𝐢𝐭𝐨, 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐚 𝐥𝐨𝐬 𝐨𝐰𝐧𝐞𝐫𝐬, 𝐫𝐞𝐯𝐢𝐬𝐚𝐫𝐞𝐦𝐨𝐬 𝐞𝐥 𝐫𝐞𝐩𝐨𝐫𝐭𝐞 𝐲 𝐭𝐞𝐧𝐝𝐫𝐚 𝐮𝐧𝐚 𝐫𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 𝐝𝐞 𝐬𝐞𝐫 𝐧𝐞𝐜𝐞𝐬𝐚𝐫𝐢𝐨`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;
