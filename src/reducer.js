import { combineReducers } from 'redux';
export default function reducer(state, action){
  //NEED TO RETURN A NEW object
  // OR ELSE IT WONT RERENDER

  let solution = state.solution;
  let selected = state.selected;
  let entries = state.entries;
  let clues = state.clues;
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
    case 'CLICK_CHECK_ALL':
      for(let x = 0; x < 5; x++){
        for(let y = 0; y < 5; y++){
          if(entries[x][y]){
            // console.log(entries[x][y], solution[x][y], entries[x][y] === solution[x][y]);
            if(entries[x][y].letter === solution[x][y]){
              entries[x][y].confirmed = true;
            }else{
              entries[x][y].checked = true;
            }
          }
        }
      }
    break;
    case 'CLICK_CHECK_WORD':
      for(let x = 0; x < 5; x++){
        for(let y = 0; y < 5; y++){
          //copypasta from Grid. Not cleanest but works.
          if(entries[x][y]){
            if(!selected.across && selected.x === x){
              if(entries[x][y].letter === solution[x][y]){
                entries[x][y].confirmed = true;
              }else{
                entries[x][y].checked = true;
              }
            }else if(selected.across && selected.y === y){
              if(entries[x][y].letter === solution[x][y]){
                entries[x][y].confirmed = true;
              }else{
                entries[x][y].checked = true;
              }
            }
          }
        }
      }
    break;
    case 'CLICK_CHECK_SQUARE':
      if(entries[selected.x][selected.y].letter === solution[selected.x][selected.y]){
        entries[selected.x][selected.y].confirmed = true;
      }else{
        entries[selected.x][selected.y].checked = true;
      }
    break;
    case 'CLICK_REVEAL_ALL':
      for(let x = 0; x < 5; x++){
        for(let y = 0; y < 5; y++){
          if(!entries[x][y])
            entries[x][y] = {letter: solution[x][y], revealed:true};
        }
      }
    break;
    case 'CLICK_REVEAL_WORD':
      for(let x = 0; x < 5; x++){
        for(let y = 0; y < 5; y++){
          //copypasta from Grid. Not cleanest but works.
          if(!selected.across && selected.x === x){
            entries[x][y] = {letter: solution[x][y], revealed:true};
          }else if(selected.across && selected.y === y){
            entries[x][y] = {letter: solution[x][y], revealed:true};
          }
        }
      }
    break;

    case 'CLICK_REVEAL_SQUARE':
      entries[selected.x][selected.y] = {letter: solution[selected.x][selected.y], revealed:true};
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


  state = {
    solution, selected, entries, clues, alerts
  }
  console.log("reducing", action, "to", state);
  return state;
}
