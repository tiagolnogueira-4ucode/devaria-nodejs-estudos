const { Console } = require('console');

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const programaInicial = 'Esse programa vai checar se você é maior de 18 anos e tem habilitação!';
console.log(programaInicial);

const primeiraValidacao = 'E verificar a lista de presença do horário.';
console.log(primeiraValidacao);

let leituraDeCampo;

readLine.question('Qual o ano do seu nascimento? ', ano => {
    if(ano > 2004) {
        console.log('Você não tem 18 anos.');
        return;
    }else {
        readLine.question('Você tem habilitação? (Sim/Não) ', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() == "SIM")) {
                console.log('Você não tem habilitação!');
            } else {
                readLine.question('Qual o seu nome? ', nome => {
                    switch(nome) {
                        case 'Tiago' :
                            console.log('Bem vindo Tiago!');
                            break;
                        default:
                            console.log('Seu nome não foi identificado!');
                            break;
                    }
                });
            }
        });
    }
    
});
