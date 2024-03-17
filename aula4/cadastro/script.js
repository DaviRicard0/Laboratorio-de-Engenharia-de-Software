class Pessoa {
    constructor(nome,email,dataNascimento,telFixo,telCelular,curso,matricula){
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telFixo = telFixo;
        this.telCelular = telCelular;
        this.curso = curso;
        this.matricula = matricula;
    }
}

class Professor extends Pessoa {
    constructor(nome,email,dataNascimento,telFixo,telCelular,curso,matricula){
        super(nome,email,dataNascimento,telFixo,telCelular,curso,matricula);
    }
}

class Aluno extends Pessoa {
    constructor(nome,email,dataNascimento,telFixo,telCelular,curso,matricula){
        super(nome,email,dataNascimento,telFixo,telCelular,curso,matricula);
    }
}

const getCampos = () => {
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const dataNascimento = document.querySelector("#dataNascimento");
    const telFixo = document.querySelector("#telFixo");
    const telCelular = document.querySelector("#telCelular");
    const curso = document.querySelector("#curso");
    const matricula = document.querySelector("#matricula");
    const professor = document.querySelector("#professor");
    const aluno = document.querySelector("#aluno");

    return {
        nome,
        email,
        dataNascimento,
        telFixo,
        telCelular,
        curso,
        matricula,
        professor,
        aluno
    }
}

const getClass = () => {
    const { nome,email,dataNascimento,telFixo,telCelular,curso,matricula,professor } = getCampos();

    if (professor.checked)
        return new Professor(nome.value,email.value,dataNascimento.value,telFixo.value,telCelular.value,curso.value,matricula.value);
    else
        return new Aluno(nome.value,email.value,dataNascimento.value,telFixo.value,telCelular.value,curso.value,matricula.value);
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

        document.write(
            `
                class ${obj instanceof Aluno ? "Aluno" : "Professor"} {<br>
                    &nbsp&nbspnome = "${obj.nome}";<br>
                    &nbsp&nbspemail = "${obj.email}";<br>
                    &nbsp&nbspdataNascimento = "${obj.dataNascimento}";<br>
                    &nbsp&nbsptelFixo = "${obj.telFixo}";<br>
                    &nbsp&nbsptelCelular = "${obj.telCelular}";<br>
                    &nbsp&nbspcurso = "${obj.curso}";<br>
                    &nbsp&nbspmatricula = "${obj.matricula}";<br>
                }
            `
            
        )
    }

    document.querySelector("#btnRedefinir").onclick = function(){
        const { nome,email,dataNascimento,telFixo,telCelular,curso,matricula,professor,aluno } = getCampos();
        nome.value = "";
        email.value = "";
        dataNascimento.value = "";
        telCelular.value = "";
        telFixo.value = "";
        curso.value = "";
        matricula.value = "";
        professor.checked = "";
        aluno.checked = "";
    }
})()