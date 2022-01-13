

const sulla = require ("sulla");
const banco = require("./banco");
const stages = require("./stages");



sulla.create().then((client) => start(client));
function start(client) {
    client.onMessage((message) => {
       // console.log(message);
       // if (message.body === "Hi") {
       //     client.sendText(message.from," Hello fom sulla!");
      // }
    
    let resp = stages.step[getStage(message.from)].obj.execute(message.from,message.body);
    for (let index = 0 ; index < Array(resp).length; index++){
        const element = Array(resp)[index];
        client.sendText(message.from,element)
    }

   // client.sendText(message.from,stages.step[getStage(message.from)].obj.execute()); 

   });
}

function getStage(user){
    return banco.db[user].stage;

}
