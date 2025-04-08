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
  