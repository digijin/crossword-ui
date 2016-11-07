import main from './main'

let words = [
'AGATE',
'BARRA',
'BUSES',
'OZONE',
'TENDS'
]

let clues = {
  across:[
    'How to get through a fence (1,4)',
    'Slang for an australian type of fish',
    'A form of public transport',
    'A layer that surrounds the planet',
    'A shepherd _____ his flock'
  ],
  down:[
    'Religious man, with a name like an ex-PM',
    'Fabric used for wounds',
    'Criminal fire',
    'It\'s so hot right now',
    'Gently pressure'
  ]
}
window.onload = () => {
  let div = document.getElementById('container');
  main(div, words, clues);
}
