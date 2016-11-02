import React from 'react';
import { connect } from 'react-redux';

class ClueBar extends React.Component{

  render(){
    let clue;
    if(this.props.selected.across){
      clue = this.props.clues.across[this.props.selected.y];
    }else{
      clue = this.props.clues.down[this.props.selected.x];
    }
    return <div className='cluebar' >{clue}</div>
  }

}

function mapStateToProps(state, props) {
  return {
    clues: state.clues,
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch, props) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ClueBar);
