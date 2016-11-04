import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducer from './reducer';

import Crossword from './Crossword';

import Imagine from 'imagine-engine'

require('./style.css')

let div = document.createElement('div');
document.children[0].appendChild(div);
// ABRAM
// ALAMO
// RADIO
// GRAND
// HEROS

let words = [
'least',
'earth',
'argue',
'stuff',
'theft'
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

//REACT REDUCKS
let store = createStore(reducer, {solution:words, clues: clues})
function render(){
  ReactDOM.render(<Provider store={store}><Crossword /></Provider>, div);
}
store.subscribe(render);
render();

//KB INPUT
function isLetter(str){
  return /^[a-zA-Z]+$/.test(str);
}

//STOP TABS DOING WIERD SHIT
document.addEventListener('keydown', (e) => {e.preventDefault();}, false)

let engine = new Imagine();
engine.input.addListener((ev, key) => {
  // console.log("asd");
  if(ev === 'onKeyDown'){
    let letter = String.fromCharCode(key) //convert
    if(isLetter(letter)){
      store.dispatch({type:'KEY_DOWN', key: letter})
    }else{
      console.log('not a valid letter', key);

      switch(key){
        case 9:
          store.dispatch({type:'TAB_PRESSED', key: key})
        break;
        case 37:
          store.dispatch({type:'LEFT_PRESSED', key: key})
        break;
        case 38:
          store.dispatch({type:'UP_PRESSED', key: key})
        break;
        case 39:
          store.dispatch({type:'RIGHT_PRESSED', key: key})
        break;
        case 40:
          store.dispatch({type:'DOWN_PRESSED', key: key})
        break;
      }
    }

  }
})
