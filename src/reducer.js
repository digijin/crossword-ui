import { combineReducers } from 'redux';
export default function reducer(state, action){
  //NEED TO RETURN A NEW object
  // OR ELSE IT WONT RERENDER

  let solution = state.solution;
  let selected = state.selected;
  let entries = state.entries;
  let clues = state.clues;

  if(!entries){//init
    entries = [];
    for(let i = 0; i<5; i++){
      entries.push(new Array(5));
    }
  }
  if(!selected){
    selected = {x:0, y:0, across:true}
  }

  switch(action.type){
    case 'CLICK_REVEAL_ALL':
      for(let x = 0; x < 5; x++){
        for(let y = 0; y < 5; y++){
          entries[x][y] = {letter: solution[x][y]};
        }
      }
    break;
    case 'CLICK_REVEAL_WORD':
      for(let x = 0; x < 5; x++){
        for(let y = 0; y < 5; y++){
          //copypasta from Grid. Not cleanest but works.
          if(!selected.across && selected.x === x){
            entries[x][y] = {letter: solution[x][y]};
          }else if(selected.across && selected.y === y){
            entries[x][y] = {letter: solution[x][y]};
          }
        }
      }
    break;

    case 'CLICK_REVEAL_SQUARE':
      entries[selected.x][selected.y] = {letter: solution[selected.x][selected.y]};
    break;
    case 'CLICK_CELL':
      if(selected.x===action.x && selected.y === action.y){
        //altready selected, rotate
        selected.across = !selected.across
      }
      selected = {x: action.x, y:action.y, across:selected.across}
    break;
    case 'CLICK_CLUE':
      selected.across = action.across;
      if(action.across){
        selected.x = 0;
        selected.y = action.num;
      }else{
        selected.x = action.num;
        selected.y = 0;
      }
    break;
    case 'KEY_DOWN':
      if(selected){
        entries = entries.slice(0);//duplicate
        entries[selected.x][selected.y] = {letter: action.key}
        //highlight next letter
        if(selected.across){
          selected.x++;
          if(selected.x>=5){
            selected.x = 0
            selected.y++
          }
        }else{//TODO:copypasta
          selected.y++;
          if(selected.y>=5){
            selected.y = 0
            selected.x++
          }
        }
      }
    break;
    case 'LEFT_PRESSED':
      selected.x--;
    break;
    case 'UP_PRESSED':
      selected.y--;
    break;
    case 'RIGHT_PRESSED':
      selected.x++;
    break;
    case 'DOWN_PRESSED':
      selected.y++;
    break;
    case 'TAB_PRESSED':
      if(selected.across){
        selected.y++
      }else{
        selected.x++
      }
    break;
  }

  selected.x = Math.max(selected.x, 0)
  selected.y = Math.max(selected.y, 0)
  selected.x = Math.min(selected.x, 4)
  selected.y = Math.min(selected.y, 4)

  state = {
    solution, selected, entries, clues
  }
  console.log("reducing", action, "to", state);
  return state;
}
