const banco = require("../banco");


function execute(user,msg){

    banco.db[user].stage = 0;
    return ["Obrigado pela preferencia.", "Aguarde seu pedido chegará em breve", "Para mais informações ligue para (XX) XXXXX-XXXX",];
}

exports.execute = execute; 