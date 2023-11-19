let array = [29, 1, 15, 3, 7 ,2];

// swap

const swap = (array, x, y) => {
    [array[x], array[y]] = [array[y], array[x]]
}

//shuffle

const shuffle = (array) => {
    for (let x = array.length -1; i > 0; i++){
        const y = math.floor(math.random() * (i+1));
        [array[x], array[y]] = [array[y], array[x]]
    }
}


//bubbleSort: compara dois itens, trocando-os caso o segundo elemento seja menor que o primeiro. 

const bolha = (array) => {
    let swap;
    let ult = array.length - 1;
    
    do {
        swap = false;
        for (let i = 0; i < ult; i++){
            if(array[i] > array[i + 1]){
                [array[i], array[i+1]] = [array[i + 1], array[i]];
                swap = true;
            }
        }

        ult--

    } while (swap)

    return array;
}


console.log("bubblesort:", bolha(array));

//SelectionSort: Seleciona o primeiro menor item e coloca na primeira posição, o segundo menor na segunda posição e assim por diante.

const selecao = (array) => {

    let min = array.length;

    for(let i = 0; i< array.length - 1; i++){
        min = i;

        for(let j = i + 1; j <array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        if (i != min ){
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return array;
}

const arraySelec = selecao(array);
console.log("selectionSort:", arraySelec);


// quickSort: Divisão e conquista. Se arranja em menores, iguais e maiores em relação ao pivot, até que tudo esteja ordenado usando recursividade.

const quicksort = (array) => {
    if (array.length === 0) return [];
    if (array.length === 1) return array;
    
    var pivot = array[0];

    var menor = array.filter(n => n < pivot);
    var igual = array.filter( n => n === pivot);
    var maior = array.filter(n => n > pivot);

    return quicksort(menor).concat(igual).concat(quicksort(maior))

}

console.log("quickSort:", quicksort(array));


