import main from './main'

let div = document.createElement('div');
document.children[0].appendChild(div);

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

main(div, words, clues);
