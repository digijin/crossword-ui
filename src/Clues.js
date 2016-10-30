import React from 'react';
import { connect } from 'react-redux';
class Clues extends React.Component{
  render() {
    let clues = []
    this.props.clues.forEach((clue) => {
      clues.push(<div key={clue} className="clue">{clue}</div>) //TODO:fix key to number
    })
    return <div className="clues">{clues}</div>;
  }
}


function mapStateToProps(state, props) {
  return {
    clues: state.across,
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    click: (x, y) => {
      dispatch({type:'CLICK_CLUE', x:x, y:y});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clues);
