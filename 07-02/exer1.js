/*
  Use o método adequado para adicionar os 3 seguintes itens

  -Coxinha
  -Null
  -Brigadeiro
*/
let brazilianfoods = ["Coxinha", null, "Brigadeiro"];

// ["coxinha", null, "brigadeiro"];
brazilianfoods.push("Coximha", null, "brigadeiro");
//                      0        1         2

// No lugar do null, adicionar Pão de queijo
console.log(brazilianfoods[1]);


brazilianfoods[1] = "Pão de queijo";
console.log(brazilianfoods)