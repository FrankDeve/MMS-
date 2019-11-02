const Discord = require('discord.js');  
const client = new Discord.Client();  
const moment = require('moment');
const zalgo = require('zalgolize'); 
const math = require('math-expression-evaluator'); 
const figlet = require('figlet');   
const fs = require('fs');  
const ms = require('ms');  
const prefix = '-'

client.on('message', msg => {  
    if (msg.content === 'باك') { 
      msg.reply('** :wink: وِلِـكُمِـ ﻧَوِرُتْ   :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === '#اسكت') { 
      msg.reply('** :wink: شكرا   :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'سلام عليكم') { 
      msg.reply('** :wink: وِعليكم يلحب منور   :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'شونك') { 
      msg.reply('** :wink: تمام ونته    :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'بخير') { 
      msg.reply('** :wink: دوم يلحب   :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'منور') { 
      msg.reply('** :wink: نورك الصاطع   :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'من هوه مصطفى الشمري') { 
      msg.reply('** :wink: مصطفى الشمري يوتيوبر على اليوتيوب يتميز بمقاطع مضحكه   :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'لوكي') { 
      msg.reply('** :wink: لا تجاوز   :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'بوت') { 
      msg.reply('** :wink: تفضل عزيزي   :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'F2') { 
      msg.reply('** :wink:   مرحــبــا بــكــم فــي ســيــرفـــر مصطفى الشمري 
               هذا السيرفر خاص بالفعاليات والتواصل وقضاء وقت ممتع معناً 
 نتمنى من الجميع عدم مخالفة القوانين يرجى من الجميع قراءة القوانين والتقيد بها شاكرين لكم تفهمكم  :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'F3') { 
      msg.reply('** :wink: عزيزي رجاء عدم ارسال الكلمات البذيئه   :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'F4') { 
      msg.reply('** :wink: عزيزي عدم اثارة المشاكل الخاصه بك في السيرفر   :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'F5') { 
      msg.reply('** :wink: ممنوع طلب لرتب داخل السيرفر الرتبه فقط تعطى الى الشخص المتفاعل   :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'مختصر السيرفر') { 
      msg.reply('** :wink: السيرفر فقط للضحك والونسه والعب    :sparkling_heart:**'); 
    }
  });
  
  client.on('message', msg => {  
    if (msg.content === 'F6') { 
      msg.reply('** :wink: وعزيزي رجاء عدم التكلم في امور السياسه   :sparkling_heart:**'); 
    }
  });




client.login(process.env.BOT_TOKEN);
