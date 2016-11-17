export default function entriesReducer(state, action, selected, solution){

  // console.log("state", action, selected, solution);

  switch(action.type){
    case 'CLICK_CHECK_ALL':
      for(let x = 0; x < 5; x++){
        for(let y = 0; y < 5; y++){
          if(state[x][y]){
            // console.log(state[x][y], solution[x][y], state[x][y] === solution[x][y]);
            if(state[x][y].letter === solution[x][y]){
              state[x][y].confirmed = true;
            }else{
              state[x][y].checked = true;
            }
          }
        }
      }
    break;
    case 'CLICK_CHECK_WORD':
      for(let x = 0; x < 5; x++){
        for(let y = 0; y < 5; y++){
          //copypasta from Grid. Not cleanest but works.
          if(state[x][y]){
            if(!selected.across && selected.x === x){
              if(state[x][y].letter === solution[x][y]){
                state[x][y].confirmed = true;
              }else{
                state[x][y].checked = true;
              }
            }else if(selected.across && selected.y === y){
              if(state[x][y].letter === solution[x][y]){
                state[x][y].confirmed = true;
              }else{
                state[x][y].checked = true;
              }
            }
          }
        }
      }
    break;
    case 'CLICK_CHECK_SQUARE':
      if(state[selected.x][selected.y].letter === solution[selected.x][selected.y]){
        state[selected.x][selected.y].confirmed = true;
      }else{
        state[selected.x][selected.y].checked = true;
      }
    break;
    case 'CLICK_REVEAL_ALL':
      for(let x = 0; x < 5; x++){
        for(let y = 0; y < 5; y++){
          if(!state[x][y])
            state[x][y] = {letter: solution[x][y], revealed:true};
        }
      }
    break;
    case 'CLICK_REVEAL_WORD':
      for(let x = 0; x < 5; x++){
        for(let y = 0; y < 5; y++){
          //copypasta from Grid. Not cleanest but works.
          if(!selected.across && selected.x === x){
            state[x][y] = {letter: solution[x][y], revealed:true};
          }else if(selected.across && selected.y === y){
            state[x][y] = {letter: solution[x][y], revealed:true};
          }
        }
      }
    break;

    case 'CLICK_REVEAL_SQUARE':
      state[selected.x][selected.y] = {letter: solution[selected.x][selected.y], revealed:true};
    break;
    case 'KEY_DOWN':
      if(selected){
        state = state.slice(0);//duplicate
        state[selected.x][selected.y] = {letter: action.key}
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
  }
  return state;

}
