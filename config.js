//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "rehmanrajpoot644@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Bootu-786/PRINCE";
global.gurl = process.env.GURL || "https://api.whatsapp.com/send?phone=+923145269482";
global.website = process.env.GURL || "https://api.whatsapp.com/send?phone=+923145269482";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "null";
global.devs = "923145269482";
global.sudo = process.env.SUDO || "923145269482";
global.owner = process.env.OWNER_NUMBER || "923145269482";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hta0o1VjlCYlQyRXZqenRlK0I5S2NLZyt4K1ZJa0gvaDJLVkNiUEtGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmFTSlVwZWdsYjhsenNnODk4M25MdEYxZTl6NlovUzFLQkN4SDErZzN3az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDUGM2cUF6TE84VDZNckpaTi9Ca2Q0cVhXdGFqUmlYMmRXSnhRaEo2ZFVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHOTFPcWI3TmR0Si82UHo5RDd5aTJpQkl2MDZKZE5Ra2g5SG5kSG9BVlU0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHdnEyVTdPbVhpemkwV0FzSldLaEVEcVZ2SzIvanhrSjF4Z1FRMFlSVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Va3VJSFNBa2ZybXU1UXN2RXh6L1pWZlZCK1F0ZlplR0l0c0diZGMvWGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ001c3pETmVzM1gvcVdZQWgzeHg4dERHRjJlMDZXQ0FOOEZSYU05Y0draz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUg2S1BqV016cHV1b0VJTTFrMkd5NVUwNCs0dDhxSk5xOS93SjJ3dGMyYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit2dFNLbjFtbkcxM21NN2VWMXhiSFVMM1c2WVNKNUNqY1o2WHVRNmpoLzh6R3p5L0ltSlJrQ083NGtHRmYyK0cvVUFoVjJINTdwbUovV09XeWpqUkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiI2b2VaVmRBMXg5RTZ0MXk4TTI4R1I5Z0ljYkRuT2k5NE11Mi9Pek54VkFBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQxNTI5NzQwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCRUIwQzkxOTAzMjgwM0M5ODUxOEQ5OEJCMkMyMDQ5MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNDUwNzk1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MTUyOTc0MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzY1Rjc2ODIxMkFDMTUzRjI3RjQ1MDU2RURBRTA5MjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDQ1MDc5Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicC0yTFFCdV9SU3VBdk1USlpxelF3QSIsInBob25lSWQiOiIwYzM1ODM0Ni01MTExLTRkNGQtYTRjYy0xNjhjNDA3OWRhZWYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlB5UzZVbnMzbHYvOUc4d29odHJIWnlRYTFJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNCU3krVHVsQ2ZORTVxcGpjcjR4MU1TL3BWOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOSkNTQ0ZHViIsIm1lIjp7ImlkIjoiOTIzNDE1Mjk3NDA0OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4piF5b2hW1BST0dSQU1NRVJd5b2h4piFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLbXh6L1lCRU52OXI3UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwYXEvalNJdlZzZFJrN2NBV1FEN29uUGdTUm95anB5QlYray8rR1JFb1djPSIsImFjY291bnRTaWduYXR1cmUiOiJmalAvSGZzT1dodW50dGFMZllodWEzaFQ0b1BuWTlaZ1pBUVh0M3NhbjFVTTZpVnhBV3JIUWd3MFRTVVk1RkdHNEJDeEFoMlp4dHAvMnA4cnIvVk9Cdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ1Y4SFp1MzJUY1oxRzFzSXFnajFSWWpQM0VpaHk5OSt5bWh4bmJFeE52aWk1amtXZ3duTWsxWCtLVHk5czJNbU1QQ0o1OTMyT3draTFWbmRvTGI2RFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MTUyOTc0MDQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkR3F2NDBpTDFiSFVaTzNBRmtBKzZKejRFa2FNbzZjZ1ZmcFAvaGtSS0ZuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNDUwNzkzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUU2WCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "$",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐹𝐼𝐿𝐸 𝒢𝐸𝒩𝐸𝑅𝒜𝒯𝐸𝒟 𝐵𝒴 𝒫𝑅𝐼𝒩𝒞𝐸",
  author: process.env.PACK_AUTHER || "PRINCE",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "PRINCE",
  ownername: process.env.OWNER_NAME || "PRINCE",
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
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
