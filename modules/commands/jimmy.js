const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "jimmy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Dz",
  description: "Ảnh jimmy ",
  commandCategory: "Ảnh",
  usages: "imgjimmy",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
	var link = [
"https://i.imgur.com/2ejEMhd.jpg",
"https://i.imgur.com/DnGIYro.jpg",
"https://i.imgur.com/y3PE8t2.jpg",
"https://i.imgur.com/XISyjm7.jpg",
"https://i.imgur.com/6MR32D6.jpg",
"https://i.imgur.com/5WsZYYE.jpg",
"https://i.imgur.com/v0DyrYO.jpg",
"https://i.imgur.com/ErV8eyQ.jpg",
"https://i.imgur.com/YLx9cC7.jpg",
"https://i.imgur.com/PpiqGKV.jpg",
"https://i.imgur.com/wfk4Dee.jpg",
"https://i.imgur.com/QQ7Boin.jpg",
"https://i.imgur.com/c2LK2zq.jpg",
"https://i.imgur.com/M2Tuaec.jpg",
"https://i.imgur.com/xxucvXG.jpg",
"https://i.imgur.com/GTSydIo.jpg",
"https://i.imgur.com/akrJ3RQ.jpg",
"https://i.imgur.com/QRkJRzD.jpg",
"https://i.imgur.com/gK7xzas.jpg",
"https://i.imgur.com/YgHWzYK.jpg",
"https://i.imgur.com/Qz76E9g.jpg",
"https://i.imgur.com/q0bwZZR.jpg",
"https://i.imgur.com/NrWcur4.jpg",
"https://i.imgur.com/XV1MPB3.jpg",
"https://i.imgur.com/kPQxBz8.jpg",
"https://i.imgur.com/3dAxWfx.jpg",
"https://i.imgur.com/OCBn7yN.jpg",
"https://i.imgur.com/2J8GM7a.jpg",
"https://i.imgur.com/f333NGM.jpg",
"https://i.imgur.com/8EZu4EG.jpg",
"https://i.imgur.com/H69iWTz.jpg",
"https://i.imgur.com/dsR2LHF.jpg",
"https://i.imgur.com/qhJ2yuC.jpg",
"https://i.imgur.com/kpD6lho.jpg",
"https://i.imgur.com/bCJFTAD.jpg",
"https://i.imgur.com/EBJbVEv.jpg",
"https://i.imgur.com/Y9jUoXR.jpg",
"https://i.imgur.com/KL2fHSV.jpg",
"https://i.imgur.com/fr4TqT2.jpg",
"https://i.imgur.com/3d6Yq5D.jpg",
"https://i.imgur.com/qrVDCfk.jpg",
"https://i.imgur.com/k7GPGui.jpg",
"https://i.imgur.com/Z7G2wbo.jpg",
"https://i.imgur.com/ijAbbag.jpg",
"https://i.imgur.com/ttgVrTX.jpg",
"https://i.imgur.com/dnAVnmP.jpg",
"https://i.imgur.com/tcOgdtF.jpg",
"https://i.imgur.com/4ZjILYN.jpg",
"https://i.imgur.com/NhYwAGe.jpg",
"https://i.imgur.com/9VHJVOv.jpg",
"https://i.imgur.com/ihtLkR6.jpg",
"https://i.imgur.com/jMK0QkP.jpg",
"https://i.imgur.com/vlLUJHy.jpg",
"https://i.imgur.com/7wQpbkg.jpg",
"https://i.imgur.com/u3PTuuB.jpg",
"https://i.imgur.com/DeVIjWL.jpg",
"https://i.imgur.com/TSIa9xc.jpg",
"https://i.imgur.com/klXW8zs.jpg",
"https://i.imgur.com/e4E1UqS.jpg",
"https://i.imgur.com/joiMVay.jpg",
"https://i.imgur.com/QhFArOi.jpg",
"https://i.imgur.com/RaGHq96.jpg",
"https://i.imgur.com/hX2ShTR.jpg",
"https://i.imgur.com/3LMiji1.jpg",
"https://i.imgur.com/8QT9vmN.jpg",
"https://i.imgur.com/8hsmpF6.jpg",
"https://i.imgur.com/kO8wg8M.jpg",
  ];
   var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000) api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`Ảnh Jimmy nè\nSố Ảnh: ${link.length}\n-1000 đô !`,attachment: fs.createReadStream(__dirname + "/cache/70.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/70.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/70.jpg")).on("close",() => callback());
     }
   };
