class Aluno {
    constructor(name, login, ra) {
      this.name = name;
      this.login = login;
      this.ra = ra;
    }
}

class Turma{
    constructor(codigo, nota) {
      this.codigo = codigo;
      this.nota = nota;
    }
    aprovado(){
        if(nota>=6){
            console.log("Aluno aprovado por nota :)")
        } else{
            console.log("Aluno reprovado por nota :(")
        }
    }
}

class TurmaPresencial extends Turma{
    constructor(frequencia) {
      this.frequencia = frequencia;
    }
    aprovado(){
        if(frequencia>=75){
            console.log("Aluno aprovado por frequencia :)")
        } else{
            console.log("Aluno reprovado por frequencia :(")
        }
    }
}

module.exports = {Aluno, Turma, TurmaPresencial};