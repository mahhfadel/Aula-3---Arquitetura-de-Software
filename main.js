const { Aluno, Turma, TurmaPresencial, TurmaPresencial } = require('./classes');

// Criando instâncias das classes
const aluno1 = new Aluno('João', 'joao@email.com', 1234567);
const turma1 = new Turma('ES65D', 7);
const turmaPresencial1 = new TurmaPresencial(80);

turma1.aprovado();
turmaPresencial1.aprovado();
