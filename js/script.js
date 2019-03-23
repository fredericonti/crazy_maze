//elements
var guy = document.querySelector("guy");
var empty = document.querySelector('.empty');
var container = document.querySelector('#container');
var ofim = document.querySelector('#ofim');
var button = document.querySelector('button');

//object guy
var positionGuy = {
    x: 0,
    y: 0
}

//matriz
var linha4 = ["empty", "candy2", "empty", "candy6", "candy3", "candy5", "candy4", "candy4", "candy", "empty", "empty", "candy2", "empty", "empty", "empty"]
var linha1 = ["guy", "pipe", "candy", "pipe", "empty", "candy4", "empty", "candy3", "empty", "candy2", "candy", "empty", "candy5", "candy", "candy3"];
var linha3 = ["pipe", "candy2", "empty", "pipe", "empty", "candy2", "pipe", "empty", "empty", "empty", "empty", "candy2", "candy5", "candy2", "candy5"]
var linha2 = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "candy6", "candy6", "candy5", "candy4", "pipe", "candy2", "empty"]
var linha3 = ["candy4", "pipe", "empty", "pipe", "empty", "candy2", "candy", "empty", "empty", "empty", "empty", "pipe", "pipe", "candy2", "empty"]
var linha4 = ["empty", "candy", "empty", "candy2", "candy6", "empty", "empty", "pipe", "candy4", "candy2", "empty", "candy3", "candy4", "candy4", "pipe"]
var linha3 = ["candy3", "pipe", "empty", "pipe", "empty", "candy3", "candy5", "empty", "empty", "empty", "empty", "pipe", "pipe", "candy", "candy3"]
var linha3 = ["pipe", "pipe", "empty", "pipe", "empty", "candy3", "pipe", "empty", "empty", "empty", "empty", "candy5", "empty", "empty", "pipe"]
var linha5 = ["empty", "empty", "empty", "empty", "empty", "pipe", "candy", "candy3", "empty", "empty", "empty", "candy5", "candy2", "empty", "empty"];
var linha6 = ["pipe", "empty", "candy5", "candy", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "pipe", "pipe", "candy3", "pipe"];
var linha7 = ["candy5", "pipe", "candy2", "candy6", "candy", "empty", "candy4", "candy2", "empty", "pipe", "empty", "pipe", "candy", "pipe", "pipe"];
var linha8 = ["pipe", "empty", "empty", "candy3", "empty", "empty", "empty", "empty", "candy5", "candy", "empty", "empty", "empty", "pipe", "empty"];
var linha9 = ["candy3", "pipe", "empty", "empty", "empty", "candy2", "candy5", "empty", "candy6", "empty", "candy4", "empty", "pipe", "candy4", "pipe"];
var linha10 = ["empty", "candy2", "candy", "pipe", "empty", "pipe", "pipe", "pipe", "pipe", "pipe", "empty", "candy2", "pipe", "pipe", "empty"];
var linha11 = ["pipe", "candy4", "candy2", "empty", "empty","candy3", "empty", "empty", "pipe", "empty", "empty", "empty", "candy5", "candy4", "pipe"];
var linha12 = ["candy3", "pipe", "candy6", "empty", "candy5", "candy", "empty", "pipe", "candy4", "empty", "candy2", "empty", "empty", "candy6", "empty"];
var linha13 = ["empty", "empty", "empty", "empty", "candy6", "candy5", "candy2", "empty", "empty", "empty", "pipe", "empty", "pipe", "candy3", "empty"];
var linha14 = ["pipe", "pipe", "empty", "empty", "candy5","candy4", "empty", "empty", "pipe", "pipe", "pipe", "empty", "pipe", "pipe", "pipe"];
var linha15 = ["candy4", "candy2", "empty", "empty", "empty","empty", "empty", "candy2", "pipe", "pipe", "empty", "empty", "empty", "empty", "end"];


//array de arrays
var matriz = [
    linha1,
    linha2,
    linha3,
    linha4,
    linha5,
    linha6,
    linha7,
    linha8,
    linha9,
    linha10,
    linha11,
    linha12,
    linha13,
    linha14,
    linha15,
];

function updateMatriz(matriz) {
    //ele apaga o html do container com essa string vazia
    container.innerHTML = '';
    matriz.forEach(function (elementoAtual) {
        escreveLinha(elementoAtual);
    });

}
//função final!
function endGame() {
    container.innerHTML = '<h1>You Win!</h1><img src="https://media.giphy.com/media/cO0dlKKyFGc5q/giphy.gif" alt="Cupcake dancing">';
    ofim.innerHTML = "<button class='button' type='button' onClick='reload()'> Repita a dose unica </button>";
};

function reload(){
    location.reload();
};

//Primeira função:escreve uma div por coluna
function escreveLinha(itens) {
    //map cria uma nova array
    var linha = itens.map(function (item) {
        var div = criaUmaDiv(item);
        return div;
    });

    var containerLinha = escreveContainerLinha(linha);
    // console.log(containerLinha);
    //append chama a função
    container.append(containerLinha);

};

function criaUmaDiv(classname) {
    //sintaxe para criar uma div
    var linhaDiv = document.createElement('div');
    //class name vem do argumento da função
    linhaDiv.className = classname;
    return linhaDiv;
}

function escreveContainerLinha(items) {
    var linhaDiv = criaUmaDiv("linha");

    items.forEach(function (elemento) {
        linhaDiv.append(elemento);
    })
    return linhaDiv;
};

//movimento
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 38) {

        andar("cima")
    }

    if (event.keyCode === 39) {
        andar("direita");
    }

    if (event.keyCode === 40) {
        andar("baixo")
    }

    if (event.keyCode === 37) {
        andar("esquerda")
    }

});

function andar(direcao) {
    // if (!direcao) {
    //     return false;
    // }

    if (direcao == "direita") {
        troca("direita");
    } else if (direcao == "esquerda") {
        troca('esquerda');
    } else if (direcao == "cima") {
        troca("cima");
    } else if (direcao == "baixo") {
        troca("baixo");
    }

};

function troca(destino) {
    var x = positionGuy.x;
    var y = positionGuy.y;


    if (destino === 'direita') {
        // verifica se a posicao da direita esta vazia
        var posicaoDestino = matriz[x][y + 1];
        if (posicaoDestino === 'empty') {
            var posicaoAux = matriz[x][y];
            matriz[x][y] = matriz[x][y + 1];
            matriz[x][y + 1] = posicaoAux;
            positionGuy.y = y + 1;

        }

        if(posicaoDestino === 'end'){
            matriz[x][y] = "empty";
            matriz[x][y + 1] = "win";
        }

    } else if (destino === 'esquerda') {
        // verifica se a posicao da esquerda esta vazia
        var yDestino = 0;
        if (y > 0) {
            yDestino = y - 1;
        }
        var posicaoDestino = matriz[x][yDestino];

        if (posicaoDestino === 'empty') {
            var posicaoAux = matriz[x][y];
            matriz[x][y] = matriz[x][yDestino];
            matriz[x][yDestino] = posicaoAux;
            positionGuy.y = yDestino;

        }

        if(posicaoDestino === 'end'){
            matriz[x][yDestino] = "empty";
            matriz[x][yDestino - 1] = "win";
            console.log("chegou")
        }


    } else if (destino === 'cima') {
        var xDestino = 0;
        if (x > 0) {
            xDestino = x - 1;
        }

        // verifica se a posicao da cima esta vazia
        var posicaoDestino = matriz[xDestino][y];
        if (posicaoDestino === 'empty') {
            var posicaoAux = matriz[x][y];
            matriz[x][y] = matriz[xDestino][y];
            matriz[xDestino][y] = posicaoAux;
            positionGuy.x = xDestino;

        }

    } else if (destino === 'baixo') {
        var posicaoDestino = matriz[x + 1][y];
        if (posicaoDestino === 'empty') {
            var posicaoAux = matriz[x][y];
            matriz[x][y] = matriz[x + 1][y];
            matriz[x + 1][y] = posicaoAux;
            positionGuy.x = x + 1;
        }

    } else {
        return false;
    }
    if(posicaoDestino === "end"){
        endGame()
    } else {
        updateMatriz(matriz);
    }
};

// inicia jogo
updateMatriz(matriz);
