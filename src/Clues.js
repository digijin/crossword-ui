import React from 'react';
import { connect } from 'react-redux';
class Clues extends React.Component{
  render() {
    let clues = []
    for(let i = 0; i < this.props.clues.length; i++){

      let classes = ['clue']
      let selected = false;

      if(this.props.across === this.props.selected.across
        && this.props.selected.across
        && this.props.selected.y === i) selected = true;

      if(this.props.across === this.props.selected.across
        && !this.props.selected.across
        && this.props.selected.x === i) selected = true;

      if(selected) classes.push('selected')

      let clue = this.props.clues[i];
      clues.push(<div
        className={classes.join(' ')}
        onClick={() => {this.props.click(i, this.props.across)}}
        key={"clue"+i}>{clue}</div>) //TODO:fix key to number
    }

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
      dispatch({type:'CLICK_CLUE', num:num, across:across});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clues);
