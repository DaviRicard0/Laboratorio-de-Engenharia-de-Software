class Carro {
    constructor(marca,modelo,ano,cor,kilometragem,valor_fipe){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.kilometragem = kilometragem;
        this.valor_fipe = valor_fipe;
    }

    get anosAtualizacao(){
        return new Date().getFullYear() - this.ano;
    }

    get valorMercado(){
        let valor;

        if (this.kilometragem < 30_000) {
            valor = this.valor_fipe + (this.valor_fipe * 0.1)
        }

        if (this.kilometragem >= 30_000 && this.kilometragem <= 50_000) {
            valor = this.valor_fipe;
        }

        if (this.kilometragem > 50_000) {
            valor = this.valor_fipe * 0.9;
        }

        return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
}

const getCampos = () => {
    const marca = document.querySelector("#marca");
    const modelo = document.querySelector("#modelo");
    const ano = document.querySelector("#ano");
    const cor = document.querySelector("#cor");
    const kilometragem = document.querySelector("#kilometragem");
    const valor_fipe = document.querySelector("#valor_fipe");

    return {
        marca,
        modelo,
        ano,
        cor,
        kilometragem,
        valor_fipe
    }
}

const getClass = () => {
    const { marca,modelo,ano,cor,kilometragem,valor_fipe } = getCampos();

    return new Carro(marca.value,modelo.value,ano.value,cor.value,parseFloat(kilometragem.value),parseFloat(valor_fipe.value));
}

(()=>{
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    });

    document.querySelector("#btnEnviar").onclick = function(){
        const form = document.querySelector(".needs-validation");

        form.classList.add('was-validated');

        if (!form.checkValidity()) {
            return;
        }
        
        const obj = getClass();

        resultado.innerHTML = `
            Utilização: ${obj.anosAtualizacao}; Valor de mercado: ${obj.valorMercado}
        `;
    }

    document.querySelector("#btnRedefinir").onclick = function(){
        const { marca,modelo,ano,cor,kilometragem,valor_fipe } = getCampos();
        marca.value = "";
        modelo.value = "";
        ano.value = "";
        kilometragem.value = "";
        cor.value = "";
        valor_fipe.value = "";
    }
})()