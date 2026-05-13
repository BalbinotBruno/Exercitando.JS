
function verificar() {

    let validaIdade = Number(document.getElementById('idade').value)
    let divResultado = document.getElementById('res')
    let msg

    if (validaIdade < 16) {

        msg = `Sua idade é de ${validaIdade}, você não pode entrar por é de Menor!`
    } else if (validaIdade > 16 && validaIdade < 18) {


        msg = `Sua idade é de ${validaIdade}, você pode entrar acompanhado!`
    } else {


        msg = `Sua idade é de ${validaIdade}, entrada liberada.`

    }
    divResultado.innerHTML = msg
}
