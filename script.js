var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
    } else {
        window.alert('Valor inválido ou já adicionado na lista')
    }
}

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}