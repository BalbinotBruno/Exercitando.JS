function calculaMedia() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let resFinal = document.getElementById('res')

    if (isNaN(n1) || isNaN(n2)) {
        resFinal.innerHTML = 'Digite um numero valido'
        return
    }

    let media = (n1 + n2) / 2
    let msg

    if (media < 5) {
        msg = `Sua Media foi ${media}, Reprovado!!`

    } else if (media > 4 && media < 7) {
        msg = `Sua Media foi ${media}, Voce esta em recuperacao!`
    } else {
        msg = `Sua media foi ${media}, Aprovado!!`
    }

    resFinal.innerHTML = msg

}