(()=>{
    /**
     * @description Exercício 1
     */
    ex1.textContent = 
        new Date()
        .toLocaleDateString('pt-br', { weekday:"long", year:"numeric", month:"long", day:"numeric"});

    /**
     * @description Exercício 2
     */
    (function funcaoTempo() {setTimeout(() => {
        ex2.textContent = new Date()
            .toLocaleTimeString('pt-br');
        funcaoTempo();
        console.log('hi')
    }, 1000)})();
    /*setInterval(() => {
        ex2.textContent = new Date()
            .toLocaleTimeString('pt-br');
    }, 1000);*/

    /**
     * @description Exercício 3
     */

    btn3.onclick = () => {
        const palavra = inp3.value;
        const palavraReverse = inp3.value.split('').reverse().join('');

        alert(`A palavra ${palavra === palavraReverse ? "é" : "não é"} um palíndromo.`);
    }
    
})()