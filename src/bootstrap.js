import main from './main'

let words = [
'LEAST',
'EARTH',
'ARGUE',
'STUFF',
'THEFT'
]

let clues = {
  across:[
    'not the most',
    'our planet',
    'heated discussion',
    'things',
    'stolen'
  ],
  down:[
    'also not the most',
    'also our planet',
    'also heated discussion',
    'also things',
    'also stolen'
  ]
}
window.onload = () => {
  let div = document.getElementById('container');
  main(div, words, clues);
}
