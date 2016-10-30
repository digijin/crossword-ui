import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell'

class Crossword extends React.Component{

  render(){
    console.log(this.props);
    let cells = [];
    for(let x = 0; x<5; x++){
      for(let y = 0; y<5; y++){
        cells.push(<Cell x={x} y={y} click={this.props.click} />);
      }
      cells.push(<br/>)
    }

    return <div>
    I am a crossword
    <br />
    {cells}
    <button onClick={()=>console.log("dsa")} />
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
    click: (id) => {
      console.log("cliquez");
      dispatch({type:'CLICK_CELL'});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Crossword);
