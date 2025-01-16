//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6xuv7u.jpg";
global.devs = "18299826619";
global.sudo = process.env.SUDO || "50948446579";
global.owner = process.env.OWNER_NUMBER || "18299826619";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kwe3i5.jpg,https://files.catbox.moe/cyvqxl.jpg,https://files.catbox.moe/ex03qs.jpg,https://files.catbox.moe/zrxmeu.jpg,https://files.catbox.moe/onkqum.jpg,https://files.catbox.moe/cgz610.jpg,https://files.catbox.moe/ig9w4q.jpg,https://files.catbox.moe/dd93hl.jpg,https://files.catbox.moe/nwvoq3.jpg,https://files.catbox.moe/omgszj.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtJcEd6anUwRVNTcElJZnpEazR3Vk9QcUpIZkFKMkRKWFdDeC9Ua3ZYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlYyUFVqMDhGTFgwb2p1ZzVIaVRXdzZxbU5hNWZxYUV2clBSSkhSM0dHRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SmxjTEJYNWk4N0dSN1FkUEJ1OFBIQ3dGbjlMYktCZCtMbTVQSXlBMFdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlcVovVVFFVzV2RktGNXNFNHNQdmZpamk1Si9qQnVPUnFFbk5OQ0czRENNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCODZFaEJabjdzYWxmaVdvbFhOdy84K2hLVXhzckJ2SUJTTDF0VXczMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inlxd3hFUFVqcXZMOS9hSFAvT291Vi9Ba0NHU3F5cGNVVy85SkhvTjNQaG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1PT2x3R0lUMkZ0NFVWdElYQzR3d1FEeWRNeEhGZWQyN2FGTjRXSVQzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkJJRUdCSzF2dlo1MHFQSTAwQ09qK0o2dndmMmg2NEVpbnBkeUJ2NGpSaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlppcERMZGVwMGJpT1YyUHQ5QzlhTEZPQTlzOEZrUmJSeWQzMDljdVdJd1d4ODZmWW55QW91TmxIblJtNTRIS0c4aE81Z0lJM2wza3ZwZUVJayswWmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJsY3c2d2R2MUtBR2phWjBTNHFUYUgvL2JhZE5oaGxzWUxtbHQ0QXdNL1UwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRUkZ4M1NzblJsbXpSaUJUcmx0S0pRIiwicGhvbmVJZCI6ImZiYWFmZjc5LTFjNWQtNDM4NC1iOGUxLTczNjNiNzViN2Q5MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxMktwREY1aFZDV25QL21MTVhtbTlRMXZnTmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9pS29qZHAwazBGVFlPeUJuK2J4OEV6RTRjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZBTlJLQlI4IiwibWUiOnsiaWQiOiIxODI5OTgyNjYxOTo0M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLln4PlsJTpob8g8JOGqeC8kvCdmrTwnZq18J2avvCdmrvwnZqr8J2QhvCdmrXwlqO0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOUHFzS2NERVB2YW9id0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYcWkxWGJVWGpCcDY0U1RPYXlSbThFbkhGdk9GenA2SEpHV05YS2V0bFVBPSIsImFjY291bnRTaWduYXR1cmUiOiJzYTJzUG1JZUJCYmdaMm9JN2xYeUVNTGNDcVV0ZkVsMTZMcXdtQ29pMGRYTlhzTGVJcjR5NDlZMWs3b3krWDVZLy91dDdzdHA1TnAvQ20zemM3b0RDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUFFDVk8razhEYmVlUFVGWkEreUFvNFl6VnBhUTloVm84MFhnUHlhZXhGSFZVelpFd1JoZWk3Qkd0Mk16bkhwN1Rhbnh3aDV1dlVFZ1YrSE1RNWxKaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxODI5OTgyNjYxOTo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWNm90VjIxRjR3YWV1RWt6bXNrWnZCSnh4YnpoYzZlaHlSbGpWeW5yWlZBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2OTk0MTgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtFeiJ9=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "🤫",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
