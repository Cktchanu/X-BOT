const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExOTWhiREZzNkZoMVBob0pFOExFaEh6R1NWdFFLZUhYVU9tb3hJd3lYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkxRVk9VSVEzSEd0RHBUeHIzbXA1YmRiaVl6RUZrd3FMTHc3UjJnY2xFUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRi9mQnFPWm91T0hFb0FPejFwSnJEdzJhanIxR3dOT2FMVlVDdE5IdTJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUS2R5SnBCTUJrTExna05yZllIdEk1N2NIQ1d3b0NBeXpiZGViZ01LVFQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktDT0lHZ2FncE9KalovRXc2RDQ5ZDBtYTZlYVQ1eGQ5OUVjdUxkV1REMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF4VStUWXpZMHpzSFRVQkxwMTdPRTlTVk4vVDRVNi9CeUtJVGNoL004Qm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURzVElQRHZ3QW1IU0ovRnc0OWN2U0N6UHU0bFZ4bjN1dnM4VlVmdENIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2xwWDRtc1lJb0ZmdTQ0OE0xUThXMFlCS2x2UWhSRTgxQTdWdURod3BBUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh6RTJndUIzQmF1emVEYWNWbTU0U2FHd1kxOGY4TlMwZWI5Z1RkRVdQeDdBT3RzM0dOYm52bk9qWkcrU2kyaXZGbnFHMUJnaXIremlvSll4MXR5QmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiI1a1AvRis0N1ZJRkhxcmQxc2dVWUNwRURiVjV2NlgwWmpFb0xkb2t6Vkg4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI5ODY1OTA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJFNzdEQUQ0MTdCQTI3RjBGMjZBMzk2RDM0MzZCM0JEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mzc5MTczNjV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRsUzhDSEViUV9xdG5BUWMzSk5rUmciLCJwaG9uZUlkIjoiOWZhNDc5NjItMzM4NC00ZDFjLThmZjEtZjM4YjEwYTJhMGIzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9LSTd1NVRmdXVlSXg4aEZHb0UvZWUvNGQzND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCcFZmMTk1QUlqNnBYSFFmUzRMK2sxQnlvOE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFozMU1GMUQiLCJtZSI6eyJpZCI6Ijk0NzI5ODY1OTA2OjMwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIpcbvCdmrBcbvCdmrRcbvCdkIZcbl9cbl9cbl9cblxu8J2atFxu8J2ar1xu8J2au1xu8J2QmFxuX1xuX1xuX1xuXG7wnZCCXG7wnZquXG7wnZqrXG7wnZq0XG7wnZCUXG5fXG5fXG5fXG5cbvCdmqlcbvCdmqtcbvCdmqlcbvCdmq4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01qWndyc0ZFS1dIMnJ3R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllYSjJUOTIzb3hmT2dyOXRMbzB4YzlLV1o1N2M1bi9WZXVDZHRMQVJrazQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikp6U0NJY3hadmpNMGJnSVBZS01MSUFPSGxNa1Z6ZEg2bHIwSXRvYkFQNEtiTy9FVU1OVnZxMnVuYXMreGN6VzhnRjY3TjNidUdab2h3WHo2d0laZ0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLUkl5Kzh3eEVmUGRMRWdGbUY4N0JOOVR0VlVPSEduSkpmRkZiSi93K3ZFUE8wWjVTczNqVFM0NUJYUE9oWk5yZnMyWW4rRHJ2SzlHZ1BIcWpZbUdodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI5ODY1OTA2OjMwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldGeWRrL2R0Nk1Yem9LL2JTNk5NWFBTbG1lZTNPWi8xWHJnbmJTd0VaSk8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzc5MTczNjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGZuIn0=',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/Bbeltah/Tech-Z',
    OWNER_NAME : process.env.OWNER_NAME || "𝐁𝐞𝐥𝐭𝐚𝐡 𝐤𝐞",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "94729865906",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || 'yes',
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F",
    WEBSITE :process.env.GURL || "https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F",
    CAPTION : process.env.CAPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ SCENE-MD-V2",
    BOT : process.env.BOT_NAME || 'SCENE_MD',
    URL : process.env.BOT_MENU_LINKS || '',
    MODE: process.env.PUBLIC_MODE || "no",
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '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',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    CHATBOT : process.env.PM_CHATBOT || 'no',  
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
