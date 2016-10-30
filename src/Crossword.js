import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell'

class Crossword extends React.Component{

  render(){
    console.log('rendering');
    let cells = [];
    for(let y = 0; y<5; y++){
      for(let x = 0; x<5; x++){
        let selected = this.props.selected;
        if(selected&& x===selected.x&&y===selected.y){
          selected = true;
        }else{
          selected = false;
        }

        cells.push(<Cell selected={selected} key={x+"-"+y} x={x} y={y} click={this.props.click} />);
      }
      cells.push(<br key={y} />)
    }

    return <div>
    gogogo
    <br />
    {cells}
    </div>;
  }

}

function mapStateToProps(state, props) {
  return {
    across: state.across,
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    click: (x, y) => {
      // console.log("cliquez", x, y);
      dispatch({type:'CLICK_CELL', x:x, y:y});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Crossword);
