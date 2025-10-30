const nascondiSez = document.getElementsByClassName('nascondi-sez')
const cardTolte = document.getElementsByClassName('card-tolte')
const card = document.getElementsByClassName('card')
const numero = document.getElementsByClassName('numero-mete')

for (let i = 0; i < nascondiSez.length; i++) {
  nascondiSez[i].addEventListener('click', (e) => {
    console.log('cliccato')
    console.log(e.target)
    console.log(cardTolte)
    cardTolte[i].classList.toggle('d-none')
    if (nascondiSez[i].innerText === 'Nascondi sezione') {
      nascondiSez[i].innerText = 'Mostra sezione'
    } else {
      nascondiSez[i].innerText = 'Nascondi sezione'
    }
  })
}

const alertN = document.createElement('div')
alertN.classList.add('alert', 'alert-info', 'mt-3')
alertN.setAttribute('role', 'alert')
alertN.innerText = 'Ci sono ben ' + card.length + ' mete sul nostro sito!'

const numeroMete = function () {
  numero[0].appendChild(alertN)
}
