export const funEmojis =[
"😃 :smiley:",
"😏 :smirk:",	
"😍 :heart_eyes:",	
"😘 :kissing_heart:",
"😚 :kissing_closed_eyes:",
"😳 :flushed:",
"😌 :relieved:",
"😆 :satisfied:",
"😁 :grin:",
"😉 :wink:",
"😜 :stuck_out_tongue_winking_eye:",
"😝 :stuck_out_tongue_closed_eyes:",	
"😀 :grinning:",
"😗 :kissing:",
"😙 :kissing_smiling_eyes:",	
"😛 :stuck_out_tongue:",
"😴 :sleeping:",	
"😟 :worried:",	
"😦 :frowning:",
"😧 :anguished:",	
"😮 :open_mouth:",	
"😬 :grimacing:",
"😕 :confused:",	
"😯 :hushed:"	
];

export const getRandomEmoji =() =>{
    return funEmojis[Math.floor(Math.random()*funEmojis.length)];
};
