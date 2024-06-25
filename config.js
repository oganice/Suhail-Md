const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347045664062";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_47_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1LFxuICAgICAgICA1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICA0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIxLFxuICAgICAgICA4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NixcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc1LFxuICAgICAgICA1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjdDl0dmRleWpWNmNacUxEUHRBQ0ZUNG83bGtjQnBpZURjR0tMWkFDeDJBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVbDFwVXNOdFF3V1VWNldOVVhQYnd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzNzY1Y2RiLWE4MmEtNDAwZS04YTI4LTY5OTZjYmI1Y2M2MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAyMDIsXG4gICAgICAxMzUsXG4gICAgICAzNixcbiAgICAgIDE3NCxcbiAgICAgIDcyLFxuICAgICAgMzIsXG4gICAgICAxNjIsXG4gICAgICAyMjcsXG4gICAgICAzLFxuICAgICAgMjQ1LFxuICAgICAgOTYsXG4gICAgICAxMDMsXG4gICAgICAyMzMsXG4gICAgICAxMzQsXG4gICAgICA2LFxuICAgICAgMjAwLFxuICAgICAgMTk3LFxuICAgICAgMTI0LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgNDgsXG4gICAgICAxNjUsXG4gICAgICAxOSxcbiAgICAgIDkzLFxuICAgICAgNyxcbiAgICAgIDI0OCxcbiAgICAgIDExNSxcbiAgICAgIDI0MSxcbiAgICAgIDI1LFxuICAgICAgMTMxLFxuICAgICAgMjcsXG4gICAgICAyMzcsXG4gICAgICAxNTgsXG4gICAgICAxMTIsXG4gICAgICA0NSxcbiAgICAgIDE5MSxcbiAgICAgIDk4LFxuICAgICAgOTMsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzNKN0JFTExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDU2NjQwNjI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdhYnNcIixcbiAgICBcImxpZFwiOiBcIjg3OTE0MDU0NzAxMTYzOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSktybFYwUStPanJzd1lZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlanh0RWo3cTU5VlpFajRmNHIzV1A3d0J3SzlCQkVCTlQvQWYralArNkVjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtlM0JVakhKY1VpSmtDL2owc1kvUlk3bDVra1R2UEpESS9iZXAzdm01UGNMNmpXdy9JMlZwOW8yb3Y0WUVvTzBydldxUDZhWkRwbjByZ1Q3TWk1aEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5xMU9NZGZ6c1ZzS2lrOGpmSHU2MjFUN3duNmt6TVpxb2tuTW9POG1zR1dNVi9ucUpRa1lqeHlvUGRDSjdUT2daYXdRNG9BOW5teGphQXRZYVJRdWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDU2NjQwNjI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzM0MDEyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
