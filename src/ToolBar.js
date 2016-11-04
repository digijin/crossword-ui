import React from 'react';
import { connect } from 'react-redux';


class ClueBar extends React.Component{

  render(){
      return <div className="toolbar">
        Toolbar.
        <button onClick={() => this.props.revealAll() }>reveal all</button>
        <button onClick={() => this.props.revealWord() }>reveal word</button>
        <button onClick={() => this.props.revealSquare() }>reveal square</button>
      </div>
  }

}

function mapStateToProps(state, props) {
  return {
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    revealAll: () => {
      dispatch({type:'CLICK_REVEAL_ALL'});
    },
    revealWord: () => {
      dispatch({type:'CLICK_REVEAL_WORD'});
    },
    revealSquare: () => {
      dispatch({type:'CLICK_REVEAL_SQUARE'});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClueBar);
