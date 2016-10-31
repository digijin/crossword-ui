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

let words = [
'least',
'earth',
'argue',
'stuff',
'theft'
]

//REACT REDUCKS
let store = createStore(reducer, {across:words})
function render(){
  ReactDOM.render(<Provider store={store}><Crossword /></Provider>, div);
}
store.subscribe(render);
render();

//KB INPUT
function isLetter(str){
  return /^[a-zA-Z()]+$/.test(str);
}

let engine = new Imagine();
engine.input.addListener((ev, key) => {
  // console.log("asd");
  if(ev === 'onKeyDown'){
    key = String.fromCharCode(key) //convert
    if(isLetter(key)){
      console.log(ev, key);
      store.dispatch({type:'KEY_DOWN', key: key})
    }else{
      console.log('not a valid letter', key);
    }

  }
})
