import React from 'react';
import { connect } from 'react-redux';
class Clues extends React.Component{
  render() {
    let clues = []
    for(let i = 0; i < this.props.clues.length; i++){
      let clue = this.props.clues[i];
      clues.push(<div onClick={() => {this.props.click(i, this.props.across)}} key={"clue"+i} className="clue">{clue}</div>) //TODO:fix key to number
    }
    // this.props.clues.forEach((clue) => {
    //   clues.push(<div key={clue} className="clue">{clue}</div>) //TODO:fix key to number
    // })
    return <div className="cluelist">{clues}</div>;
  }
}


function mapStateToProps(state, props) {
  return {
    // clues: state.across,
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    click: (num, across) => {
      // console.log("I GOT A CLUE", num, across);
      dispatch({type:'CLICK_CLUE', num:num, across:across});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clues);
