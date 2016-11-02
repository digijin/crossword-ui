import React from 'react';
import { connect } from 'react-redux';

import Grid from './Grid'
import Clues from './Clues'
import ClueBar from './ClueBar'

class Crossword extends React.Component{

  render(){
    return <div>
      <Grid />
      <ClueBar />
      <div className="clues">
        <h4>Across:</h4>
        <Clues across={true} clues={this.props.clues.across} />
        <h4>Down:</h4>
        <Clues across={false} clues={this.props.clues.down} />
      </div>
    </div>;
  }

}

function mapStateToProps(state, props) {
  return {
    across: state.across,
    clues: state.clues,
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
