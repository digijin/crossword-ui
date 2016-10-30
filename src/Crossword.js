import React from 'react';
import { connect } from 'react-redux';

import Grid from './Grid'
import Clues from './Clues'

class Crossword extends React.Component{

  render(){
    return <div>
    go
    <br />
    <Grid />
    <Clues />
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
