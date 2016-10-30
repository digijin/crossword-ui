import { combineReducers } from 'redux';
export default function reducer(state, action){
  //NEED TO RETURN A NEW object
  // OR ELSE IT WONT RERENDER
  state = {
    across: state.across,
    selected: state.selected
  }
  switch(action.type){
    case 'CLICK_CELL':
      state.selected = {x: action.x, y:action.y}
    break;
  }
  console.log("weducwing");
  return state;
}
