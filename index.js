//variavel com array com todas as perguntas e respostas.
const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação para criar páginas web.",
        "Um sistema operacional para dispositivos móveis.",
        "Uma linguagem de programação para desenvolvimento web.",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable myVar;",
        "var myVar;",
        "v myVar;",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é o operador de comparação que verifica igualdade de valor e tipo?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1,
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento HTML pelo seu ID.",
        "Seleciona um elemento HTML pela sua classe.",
        "Seleciona um elemento HTML pelo seletor CSS.",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "Concatenação de strings.",
        "Operador lógico AND.",
        "Operador de incremento.",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a estrutura de controle de fluxo utilizada para tomar decisões em JavaScript?",
      respostas: [
        "if-else",
        "for",
        "switch",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "add()",
      ],
      correta: 1,
    },
    {
      pergunta: "O que o método 'map()' faz em um array JavaScript?",
      respostas: [
        "Remove um elemento do array.",
        "Itera sobre os elementos do array e modifica-os.",
        "Cria um novo array com os resultados de uma função aplicada a cada elemento do array original.",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é o resultado da expressão '2 + '2' em JavaScript?",
      respostas: [
        "'4'",
        "4",
        "Erro de sintaxe.",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Remover um evento de um elemento HTML.",
        "Adicionar um evento a um elemento HTML.",
        "Modificar o estilo de um elemento HTML.",
      ],
      correta: 1,
    },
  ];
  
  //variavel para pegar o conteudo da div em questao
  const quiz = document.querySelector("#quiz")
  
  //variavel para pegar o conteudo do template
  const template = document.querySelector("template");
  
  const corretas = new Set();
  //length -> conta o total de item.
  const totalDePerguntas = perguntas.length;
  
  //pega o conteudo da div, e do span
  const mostrarTotal = document.querySelector('#acertos span');
  
  
  
  
  
  
  //loop ou laço de repetição
  for(let item of perguntas){
    //variavel para pegar o conteudo e clonar(cloneNode)
      const quizItem = template.content.cloneNode(true);
    //pegando o conteudo em especifico(h3), e modificando
      quizItem.querySelector('h3').textContent = item.pergunta;
  
    //outro laço de repetição para as respostas
      for(let resposta of item.respostas){
  
        //usado para copiar o item do html
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
  
        //usado para pegar o conteudo que esta na tag do html e substituir pelo conteudo da variavel.
        dt.querySelector('span').textContent = resposta;
  
        //tag para fazer com o que eu possa escolhar uma opção por pergunta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
  
        //faz a contagem e atribuição correta do value, para que cada resposta tenha um value.
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
  
        //função para saber a resposta certa com uma arrow function.
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta; //event.target é o input selecionado.
  
          //deleta um item que estaria possivelmente correto neste caso.
          corretas.delete(item);
  
          if(estaCorreta){
            corretas.add(item);
          }
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
        };
  
        //usado para mostrar o item na tela.
        quizItem.querySelector('dl').appendChild(dt);
      };
    
      //usado para remover o primeiro item.
      quizItem.querySelector('dl dt').remove();
  
  
  
      //coloca a pergunta na tela. Sempre no final.
      quiz.appendChild(quizItem);
    }