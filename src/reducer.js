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

  if(!entries){//init
    entries = [];
    for(let i = 0; i<5; i++){
      entries.push(new Array(5));
    }
  }
  if(!selected){
    selected = {across:true}
  }

  switch(action.type){
    case 'CLICK_CELL':
      if(selected.x===action.x && selected.y === action.y){
        //altready selected, rotate
        selected.across = !selected.across
      }
      selected = {x: action.x, y:action.y, across:selected.across}
    break;
    case 'KEY_DOWN':
      if(selected){
        entries = entries.slice(0);//duplicate
        entries[selected.x][selected.y] = action.key
        //highlight next letter
        selected.x++;
        if(selected.x>=5){
          selected.x = 0
          selected.y++
        }
      }
    break;
  }

  state = {
    across, selected, entries
  }
  console.log("reducing", action, "to", state);
  return state;
}
