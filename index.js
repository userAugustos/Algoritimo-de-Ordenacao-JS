(async () => {
  const baseArray = [2, 123, 12, 5, 18, 20, 34, 1, 45, 9, 54];

  function swap(array, left, right){ //fazendo a troca de posição no array
    let temp = array[right]; //salvando o valor inicial da posição a esquerda
    array[right] = array[left]; //adicionando a posição da esquerda o valor que esta na direita
    array[left] = temp; //adicionando a direita o valor que estava na posição a esquerda
  }

  function quickSort(array, initialIndex, finalIndex) {
    let pivo = finalIndex;
    let index = initialIndex;

    while(index < pivo){
      if(array[index] > array[pivo]){
        //trocando o pivo com o item anterior a ele
        swap(array, pivo, pivo - 1);

        if (index + 1 < pivo) {
          swap(array, index, pivo) 
        }
        pivo--
      }else{
        index++
      }
    }
    var leftArrayFromIndex = 0;
    var leftArrayToPivo = pivo - 1; 

    if(leftArrayToPivo > 1){
      quickSort(array, leftArrayFromIndex, leftArrayToPivo)
    }

    var rightArrayFromIndex = pivo + 1;
    var rightArrayToPivo = array.length - 1;

    if (rightArrayFromIndex < finalIndex) {
      quickSort(array, rightArrayFromIndex, rightArrayToPivo)
    }
    return array
  }
  
  var result = quickSort(baseArray, 0, baseArray.length - 1);
  console.log(result);
})();
