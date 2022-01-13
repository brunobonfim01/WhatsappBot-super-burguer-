const cardapio = require("../cardapio");
const banco = require("../banco");


function execute(user,msg){
    return ["ola sou uma assistente virtual, irei apresentar o cardapio, para fazer o pedido basta enviar o codigo do produto",menu];


    let menu = "CARDAPIO  \n\n";
    Object.keys(cardapio.menu).forEach((value) => {
        let element = cardapio.menu[value];
        menu += `${value} - ${element.descricao}     R$ ${element.preco} \n`;
    });

    banco.db[user].stage = 1;
}

exports.execute = execute;