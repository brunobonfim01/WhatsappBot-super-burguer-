var stages = {
    0:{
        descriçao:"Boas Vindas",
        obj: require("./stages/0"),
    },
    1:{
        descriçao:"Vendas",
        obj: require("./stages/1"),
    },
    2:{
        descriçao:"Resumo",
        obj: require("./stages/2"),
    }, 
    3:{
        descriçao:"Endereço",
        obj: require("./stages/3"),
    },
    4:{
        descriçao:"Encerramento",
        obj: require("./stages/4"),
    },
};

exports.step = stages;  