import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell'

class Crossword extends React.Component{

  render(){
    console.log(this.props);
    let cells = [];
    for(let y = 0; y<5; y++){
      for(let x = 0; x<5; x++){
        
        cells.push(<Cell key={x+"-"+y} x={x} y={y} click={this.props.click} />);
      }
      cells.push(<br key={y} />)
    }

    return <div>
    I am a crossword
    <br />
    {cells}
    </div>;
  }

}

function mapStateToProps(state, props) {
  return {
    across: state.across
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    click: (x, y) => {
      console.log("cliquez", x, y);
      dispatch({type:'CLICK_CELL'});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Crossword);
