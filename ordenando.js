const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const pos1 = Math.floor(Math.random() * array.length);
        const pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};

const bubble_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};

const selection_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
    return array;
};

const quick_sort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        const pivotIndex = partition(array, left, right);
        quick_sort(array, left, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, right);
    }
    return array;
};

const partition = (array, left, right) => {
    const pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, right);
    return i + 1;
};

function add() {
    const valorInput = document.getElementById('valor');
    const lista = document.getElementById('valores');
    const node = document.createElement('li');
    const textNode = document.createTextNode(valorInput.value);
    node.appendChild(textNode);
    lista.appendChild(node);
};

function ordenar() {
    const listaValores = document.getElementById('valores');
    const valores = Array.from(listaValores.children).map(item => parseInt(item.innerHTML));
    const algoritmoSelecionado = document.getElementById('algoritmo').value;
    let valoresOrdenados = [];
    switch (algoritmoSelecionado) {
        case 'bubble':
            valoresOrdenados = bubble_sort(valores);
            break;
        case 'selection':
            valoresOrdenados = selection_sort(valores);
            break;
        case 'quick':
            valoresOrdenados = quick_sort(valores);
            break;
        default:
            break;
    }
    listaValores.innerHTML = valoresOrdenados.map(valor => `<li>${valor}</li>`).join('');
};

function misturar() {
    const listaValores = document.getElementById('valores');
    const valores = Array.from(listaValores.children).map(item => parseInt(item.innerHTML));
    shuffle(valores, valores.length * 2);
    listaValores.innerHTML = valores.map(valor => `<li>${valor}</li>`).join('');
};