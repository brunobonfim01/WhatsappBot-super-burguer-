

const sulla = require ('sulla');

sulla.create().then((client) => start(client));

function start(client) {
    client.onMessage((message) =>{
        if (message.body === 'Hi') {
            client.sendText(message.from,' Hello fom sulla:');
       }
   });
}




var banco = {
    user1:{
        stage: 0,
    },
    user2:{
        stage: 1,
    },
};

var stages = {
    0:{
        descriçao:"Boas Vindas",
        obj: require('./0'),
    },
    1:{
        descriçao:"Vendas",
        obj: require('./1'),
    },
    2:{
        descriçao:"Resumo",
        obj:"arquivo0.js,"
    }, 
    3:{
        descriçao:"Endereço",
        obj:"arquivo0.js,"
    },
    4:{
        descriçao:"Encerramento",
        obj:"arquivo0.js,"
    },
};


functiongetStage(users){
    return banco[user].stage;

}

console.log(stages[getStage("user2")].obj.execute());
console.log(stages[getStage("user1")].obj.execute());