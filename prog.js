let resposta = document.getElementById('resposta')

function calcular(){
    let num1 = Number(document.getElementById('num').value)
    let num2 = Number(document.getElementById('num').value)

    let soma = num1 + num2

    resposta.innerHTML = 'resultado da soma foi: ' + soma
}