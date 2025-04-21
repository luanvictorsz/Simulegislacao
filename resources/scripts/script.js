const perguntas = [
    {
      pergunta: "1. O uso do cinto de segurança é:",
      opcoes: [
        "A) Obrigatório apenas nas rodovias",
        "B) Opcional para o condutor",
        "C) Obrigatório para todos os ocupantes",
        "D) Obrigatório apenas para crianças"
      ],
      correta: 2
    },
    // Adicione mais 29 perguntas aqui no mesmo formato
  ];

  const form = document.getElementById('quizForm');

  perguntas.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `<h3>${p.pergunta}</h3>`;

    p.opcoes.forEach((op, j) => {
      div.innerHTML += `
        <label><input type="radio" name="q${i}" value="${j}"> ${op}</label><br>`;
    });

    form.appendChild(div);
  });

  function verificarRespostas() {
    let acertos = 0;
    perguntas.forEach((p, i) => {
      const resposta = document.querySelector(`input[name='q${i}']:checked`);
      if (resposta && parseInt(resposta.value) === p.correta) {
        acertos++;
      }
    });
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Você acertou ${acertos} de ${perguntas.length} questões.`;
  }