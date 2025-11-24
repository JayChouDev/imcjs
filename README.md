Calculadora de IMC

Uma aplicação simples em HTML, CSS e JavaScript para calcular o IMC (Índice de Massa Corporal) do usuário.
O sistema exibe o resultado, a classificação e ainda informa se o usuário pratica academia.

🚀 Funcionalidades

Inserção de nome, idade, peso e altura

Cálculo automático do IMC

Classificação do IMC (abaixo do peso, normal, sobrepeso ou obesidade)

Exibição personalizada do resultado

Campo adicional perguntando se o usuário faz academia

Interface simples e responsiva

🧠 Como funciona

O IMC é calculado com a fórmula:

IMC = peso / (altura²)


Com base no valor final, o usuário recebe sua classificação.

📁 Estrutura do projeto
/
├── index.html      # Estrutura da interface
├── style.css       # Estilização da página
└── CT.js           # Lógica de cálculo do IMC

💻 Como usar

Preencha todos os campos: nome, idade, peso e altura.

Escolha se faz academia ou não.

Clique em Calcular.

O resultado aparecerá abaixo do botão.

📸 Interface

A página utiliza uma imagem de fundo e um container central estilizado com cores escuras e efeitos de sombra.

📝 Código principal (JS)
function calcularIMC() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const fazAcademia = document.getElementById("academia").value === "sim";

  if (!nome || !idade || isNaN(peso) || isNaN(altura)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const imc = peso / (altura ** 2);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    Olá, <strong>${nome}</strong>!<br>
    Idade: ${idade} anos<br>
    Seu IMC é <strong>${imc.toFixed(2)}</strong><br>
    Classificação: <strong>${classificacao}</strong><br>
    Está treinando? ${fazAcademia ? "Sim 💪" : "Não 😴"}
  `;
}

📄 Licença

Projeto criado por JayChouDev.
Todos os direitos reservados.
