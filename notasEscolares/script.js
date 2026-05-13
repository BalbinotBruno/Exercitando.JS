function calculaMedia() {
    let n1 = Number(document.getElementById('nota1').value)
    let n2 = Number(document.getElementById('nota2').value)
    5

    let resFinal = document.getElementById('res')
    let res = (n1 + n2) / 2


    if (res <= 5) {
        msg = `Sua Nota foi ${res}, esta reprovado!`
    } else if (res > 5 && res < 7) {
        msg = `Sua nota foi ${res}, esta em recuperacao!`

    } else {
        msg = `Sua nota foi ${res}, está Aprovado!`
    }

    resFinal.innerHTML = msg

    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}