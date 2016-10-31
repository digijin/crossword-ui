import { combineReducers } from 'redux';
export default function reducer(state, action){
  //NEED TO RETURN A NEW object
  // OR ELSE IT WONT RERENDER
  // state = {
  //   across: state.across,
  //   selected: state.selected,
  //   entries: state.entries
  // }

  let across = state.across;
  let selected = state.selected;
  let entries = state.entries;

  if(!entries){
    entries = [];
    for(let i = 0; i<5; i++){
      entries.push(new Array(5));
    }
  }

  switch(action.type){
    case 'CLICK_CELL':
      selected = {x: action.x, y:action.y}
    break;
    case 'KEY_DOWN':
      if(selected){
        // if(!entries) entries = new Array(5);
        // if(!entries[selected.x]) entries[selected.x] = new Array(5)
        entries[selected.x][selected.y] = action.key
      }
    break;
  }

  state = {
    across, selected, entries
  }
  console.log("reducing", action, "to", state);
  return state;
}
