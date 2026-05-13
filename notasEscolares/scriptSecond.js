function calculaMedia() {
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value
    let resDiv = document.getElementById('res')

    if (numero1 === "" || numero2 === "") {
        resDiv.innerHTML = "Preencha todos os campos!"
        return
    }

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)

    let media = (valor1 + valor2) / 2

    let msg = ''

    if (media < 5) {
        msg = `Sua média foi ${media}, está reprovado!`
    } else if (media < 7) {
        msg = `Sua média foi ${media}, está em recuperação`
    } else {
        msg = `Sua média foi ${media}, está aprovado!`
    }

    resDiv.innerHTML = msg
}