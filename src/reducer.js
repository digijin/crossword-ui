import { combineReducers } from 'redux';
import entriesReducer from './reducer/entries';

export default function reducer(state, action){
  //NEED TO RETURN A NEW object
  // OR ELSE IT WONT RERENDER

//always static
  let clues = state.clues;
  let solution = state.solution;
  //dynamic
  let selected = state.selected;
  let entries = state.entries;
  let alerts = state.alerts;

  if(!entries){//init
    entries = [];
    for(let i = 0; i<5; i++){
      entries.push(new Array(5));
    }
  }
  if(!selected){
    selected = {x:0, y:0, across:true}
  }
  if(!alerts){
    alerts = {done:false, fail:false}
  }

  switch(action.type){
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

  //CHECK FOR WINNER;
  //ALSO CHECK FOR COMPLETE BUT WITH ERRORS
  let correct = 0;
  let wrong = 0;
  let empty = 0;
  for(let x = 0; x<5; x++){
    for(let y = 0; y<5; y++){
      let entry = entries[x][y];
      // console.log(entry?entry.letter:'', solution[x][y]);
      if(!entry){
        empty++;
      }else if(entry.letter === solution[x][y]){
        correct++;
      }else{
        wrong++;
      }

    }
  }
  // console.log(correct, wrong, empty);
  if(empty === 0){
    if(wrong > 0 && !alerts.fail){
      alerts.fail = true;
      alert('you have one wrong somewhere');
    }else if(!alerts.done){
      alerts.done = true;
      alert('correct!!');
    }
  }

  entries = entriesReducer(entries, action, selected, solution);


  state = {
    solution, selected, entries, clues, alerts
  }
  console.log("reducing", action, "to", state);
  return state;
}
