function calcular() {
  let custoTotal = parseFloat(
    prompt("Digite o preço do produto que compraste (R$)")
  );
  let largura1 = parseFloat(
    prompt("Qual era a largura do produto original? (cm)")
  );
  let comprimento1 = parseFloat(
    prompt("Qual era o comprimento do produto original? (cm)")
  );

  let areaTotal1 = largura1 * comprimento1;
  let custoUnitario = custoTotal / areaTotal1;

  let largura2 = parseFloat(prompt("Qual é a largura do seu produto? (cm)"));
  let comprimento2 = parseFloat(
    prompt("Qual é o comprimento do seu produto? (cm)")
  );

  let areaTotal2 = largura2 * comprimento2;
  let custoProduto = custoUnitario * areaTotal2;

  // Mostrar resultado na tela
  document.getElementById(
    "resultado"
  ).innerHTML = `O custo do seu produto é: <strong>R$ ${custoProduto.toFixed(
    2
  )}</strong>`;
}
