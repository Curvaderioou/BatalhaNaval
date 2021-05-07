var naval = [[],[],[],[],[],[],[],[],[],[]];
var linha, coluna;

for (var i = 0 ; i < 10 ; i++){
  for (var j = 0 ; j < 10 ; j++){
    naval[i][j] = "Água";
  }
}

for (var pos = 1 ; pos < 11 ; pos++){
  linha = Math.floor (Math.random() * 10);
  coluna = Math.floor (Math.random() * 10);

  naval[linha][coluna] = "Navio";
}


do {

linha = prompt ("Qual Linha deseja atingir");
coluna = prompt ("Qual Coluna deseja atingir");

if (naval[linha][coluna] == "Navio"){
  console.log("Parabéns, você afundou um navio");
} else {
  console.log("Você caiu na água");
}

var resp = prompt ("Você deseja continuar s ou n");
console.clear();

} while 
 (resp == "s");

 console.log ("Obrigado por jogar");
