import main from './main'


let words = [
'AGATE',
'BARRA',
'BUSES',
'OZONE',
'TENDS'
]
//flip it cus its accessed thru [x][y] where x is horizontal not vertical
let solution = [
  'ABBOT',
  'GAUZE',
  'ARSON',
  'TREND',
  'EASES'
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
    'Gently pressures'
  ]
}
window.onload = () => {
  let div = document.getElementById('container');
  main(div, solution, clues);
}
