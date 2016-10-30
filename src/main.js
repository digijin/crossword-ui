
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Crossword from './Crossword';

let div = document.createElement('div');
document.children[0].appendChild(div);


ReactDOM.render(<Crossword />, div)
