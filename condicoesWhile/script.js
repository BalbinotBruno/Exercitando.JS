let iniciar = prompt('Deseja iniciar? (sim ou nao)')

while (iniciar === "sim") {

    let n = Number(prompt('Digite um numero'))

    if (n % 2 === 0) {
        alert(`O numero ${n} é PAR!`)
    } else {
        alert(`O numero ${n} é IMPAR!`)
    }

    iniciar = prompt('Deseja continuar? (sim ou nao)')
}

alert('Tenha um bom dia!')