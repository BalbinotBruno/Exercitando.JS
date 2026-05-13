function verificar() {
    let idade = Number(document.getElementById('valorIdade').value)
    let divRes = document.getElementById('res')
    let msg = ''

    if (idade < 16) {
       msg = `Você tem ${idade}, você é menor de idade, não pdoe entrar!`
    } else if(idade > 15 && idade < 18){
        msg = `Você tem ${idade}, pode entrar apenas acompanhado!`
    } else {
        msg = `Você tem ${idade}, pode entrar.`
    }


    divRes.innerHTML = msg
} 