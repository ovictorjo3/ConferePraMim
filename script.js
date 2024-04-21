function salvarGabarito() {
  // Recupera os dados do formulário
  var nomeAluno = document.getElementById('nomeAluno').value;
  var turmaAluno = document.getElementById('turmaAluno').value;
  var respostas = {};

  // Loop para coletar as respostas de cada questão
  for (var i = 1; i <= 80; i++) {
    var questaoId = 'questao' + i;
    var resposta = document.getElementById(questaoId).value;
    respostas[questaoId] = resposta;
  }

  // Aqui você pode fazer o que quiser com os dados, como enviar para um servidor, armazenar localmente, etc.
  // Neste exemplo, apenas exibiremos os dados no console
  console.log('Nome do Aluno:', nomeAluno);
  console.log('Turma do Aluno:', turmaAluno);
  console.log('Respostas:', respostas);
  alert('Gabarito salvo com sucesso!');
}
