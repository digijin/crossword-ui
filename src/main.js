import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducer from './reducer';

import Crossword from './Crossword';

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

let store = createStore(reducer, {across:words})
function render(){
    ReactDOM.render(<Provider store={store}><Crossword /></Provider>, div);
}
store.subscribe(render);
render();
