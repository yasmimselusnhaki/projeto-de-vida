const botoes = document.querySelectorAll(".botao");

for(let i=o;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=o;j<botoes.length;j++){
            botoes[j].classList.remove("ativo")
        }

        botoes[i].classList.add("ativo");
    }
    console.log();
}