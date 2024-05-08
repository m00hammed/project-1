let p = document.createElement('p')
//______knowns HTML Elements______
const body = document.querySelector('body')
const header = document.querySelector('header')
const playSection = document.querySelector('#playSection')
const addSection = document.querySelector('#addSection')
const addPtn = document.querySelector('#addPtn')
const gameIcone = document.querySelector('#gameIcone')
const closing = document.querySelector('#closing')
const check = document.querySelector('#check')
const checkw = document.querySelector('#checkw')
const checkm = document.querySelector('#checkm')
const game = document.querySelector('#game')
const wordSection = document.querySelector('#wordSection')
const meaningSection = document.querySelector('#meaningSection')
const dectionaryIcon = document.querySelector('#dectionaryIcon')
const dectionarySection = document.querySelector('.dectionary-section')
//......inputs tools......
const word = document.querySelector('#word')
const meaning = document.querySelector('#meaning')
const submit = document.querySelector('#submit')
const replay = document.querySelector('#replay')

//______open & close add window______
addPtn.addEventListener('click', () => {
  addSection.style.display = 'block'
  body.style.background = 'rgba(0, 0, 0, 0.9)'
  game.style.display = 'none'
  replay.style.display = 'none'
  dectionarySection.style.display = 'none'
})
closing.addEventListener('click', () => {
  addSection.style.display = 'none'
  body.style.background = '#f9f9f9'
  game.style.display = 'flex'
  body.style.backgroundImage = "url('blackBord.jpg')"
  body.style.backgroundSize = 'cover'
  replay.style.display = 'block'
})
//______game icone onclick______
gameIcone.addEventListener('click', () => {
  playSection.style.display = 'block'
  dectionarySection.style.display = 'none'
  replay.style.display = 'block'
})

//______genrate cards word onclick______
submit.addEventListener('click', () => {
  checkw.innerHTML = ''

  let cardw = document.createElement('div')
  cardw.setAttribute('class', word.value)
  cardw.style.background = '#c5c5c5'
  cardw.style.height = '60px'
  cardw.style.width = '120px'
  cardw.style.border = '1px solid black'
  cardw.style.borderRadius = '5px'
  cardw.style.margin = '20px'
  cardw.style.display = 'flex'
  cardw.style.justifyContent = 'center'
  cardw.style.alignItems = 'center'
  cardw.style.cursor = 'pointer'
  cardw.style.order = Math.floor(Math.random() * 9999)

  //______card word onclick______
  cardw.addEventListener('click', (e) => {
    checkw.appendChild(document.createTextNode(e.target.classList))

    if (checkw.innerHTML == checkm.innerHTML) {
      cardw.style.display = 'none'
      cardm.style.display = 'none'
      checkw.innerHTML = ''
      checkm.innerHTML = ''
    } else {
      checkm.innerHTML = ''
    }
  })

  //______genrate cards meaneg onclick______
  let cardm = document.createElement('div')
  cardm.setAttribute('class', word.value)
  cardm.style.background = '#e5e5e5'
  cardm.style.height = '60px'
  cardm.style.width = '120px'
  cardm.style.border = '1px solid black'
  cardm.style.borderRadius = '5px'
  cardm.style.margin = '20px'
  cardm.style.cursor = 'pointer'
  cardm.style.display = 'flex'
  cardm.style.justifyContent = 'center'
  cardm.style.alignItems = 'center'
  cardm.style.order = Math.floor(Math.random() * 33)

  //______card meaning onclick______
  cardm.addEventListener('click', (e) => {
    checkm.innerHTML = ''
    checkm.appendChild(document.createTextNode(e.target.classList))
    if (checkw.innerHTML == checkm.innerHTML) {
      cardw.style.display = 'none'
      cardm.style.display = 'none'
      checkw.innerHTML = ''
      checkm.innerHTML = ''
    } else {
      checkw.innerHTML = ''
    }
  })

  let wordClass = word.class
  let wordT = word.value
  let meaningT = meaning.value
  //____________________________
  cardw.appendChild(document.createTextNode(wordT))
  cardm.appendChild(document.createTextNode(meaningT))
  wordSection.appendChild(cardw)
  meaningSection.appendChild(cardm)

  //______style onclick add______________________
  addSection.style.display = 'none'
  body.style.backgroundImage = "url('blackBord.jpg')"
  body.style.backgroundSize = 'cover'
  game.style.display = 'flex'
  replay.style.display = 'block'
  word.value = ''
  meaning.value = ''
  //______random position function___

  replay.addEventListener('click', (e) => {
    cardw.style.display = 'flex'
    cardm.style.display = 'flex'
    cardm.style.order = Math.floor(Math.random() * 9999)
    cardw.style.order = Math.floor(Math.random() * 9999)
  })
  //______cards Hover______
  cardm.addEventListener('mouseover', () => {
    cardm.style.background = '#484848'
    cardm.style.fontSize = '1.1rem'
  })

  cardm.addEventListener('mouseout', () => {
    cardm.style.background = '#e5e5e5'
    cardm.style.fontSize = '1rem'
  })
  cardw.addEventListener('mouseover', () => {
    cardw.style.background = '#484848'
    cardw.style.fontSize = '1.1em'
  })

  cardw.addEventListener('mouseout', () => {
    cardw.style.background = '#c5c5c5'
    cardw.style.fontSize = '1rem'
  })
})

//______Dectionary Page______
/////////////////////////////////////////////////

dectionaryIcon.addEventListener('click', () => {
  playSection.style.display = 'none'
  replay.style.display = 'none'
  dectionarySection.style.display = 'flex'
})
