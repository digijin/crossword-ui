import { combineReducers } from 'redux';
export default function reducer(state, action){
  switch(action.type){
    case 'CLICK_CELL':
      state.selected = {x: action.x, y:action.y}
    break;
  }
  console.log("reducing", state);

  return state;
}
