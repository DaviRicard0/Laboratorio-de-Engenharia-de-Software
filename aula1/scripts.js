/*
 * Implemente um script JavaScript que solicite ao usuário a entrada de um
 * dado via teclado. Em seguida, pergunte se o usuário deseja verificar o tipo do
 * dado informado. Caso o usuário confirme escreva no corpo da página o tipo
 * do dado (Number, String, etc.) caso contrário escreva a mensagem: “Obrigado
 * por visitar esta página”.
*/

/*(()=>{
    const data = prompt("Informe algo:");

    if(confirm("Deseja verificar o tipo do dado informado?")){
        alert(`Tipo ${typeof data}`)
    }else{
        alert("Obrigado por visitar esta página")
    }
})()*/

/**
 * 
 * Implemente um script JavaScript que solicite ao usuário um número inteiro
 * positivo. Assim que o usuário digitar um valor válido informe em uma janela
 * de alerta se o número é ou não primo.
*/

/*(()=>{
    const number = parseInt(prompt("Informe um número inteiro positivo:"));
    
    const isPrimo = ((num) => {
        for (let i = 2; i < num; i++)
          if (num % i === 0) {
            return false;
          }
        return num > 1;
    })(number);

    alert(`O número ${number} ${isPrimo ? "" : "não"} é primo`);
})()*/

/**
 * Implemente um script JavaScript que solicite ao usuário um número inteiro
 * positivo. Assim que o usuário digitar um valor válido informe em uma janela
 * de alerta se o número é par ou ímpar.
*/

/*(()=>{
    const number = parseInt(prompt("Informe um número inteiro positivo:"));
    
    const par = ((num) => num % 2 === 0)(number);

    alert(`O número ${number} é ${par ? "par" : "ímpar"}`);
})()*/

/**
 * Implemente um script JavaScript que solicite ao usuário um número inteiro
 * positivo. Assim que o usuário digitar um valor válido calcule o fatorial do
 * mesmo e exiba o resultado em uma janela de alerta.
 */

(()=>{
    const number = parseInt(prompt("Informe um número inteiro positivo:"));
    
    const fatorial = ((num) =>{
        if (num === 0 || num === 1)
            return 1;

        for (var i = num - 1; i >= 1; i--) {
            num = num * i;
        }

        return num;
    })(number);

    alert(`O fatorial de ${number} é ${fatorial}`);
})()
