import React from 'react';
import { connect } from 'react-redux';


class ClueBar extends React.Component{

  render(){
      return <div className="toolbar">
        Toolbar.
        <br />
        <button onClick={() => this.props.revealAll() }>reveal all</button>
        <button onClick={() => this.props.revealWord() }>reveal word</button>
        <button onClick={() => this.props.revealSquare() }>reveal square</button>
        <br />
        <button onClick={() => this.props.checkAll() }>check all</button>
        <button onClick={() => this.props.checkWord() }>check word</button>
        <button onClick={() => this.props.checkSquare() }>check square</button>
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
    },
    checkAll: () => {
      dispatch({type:'CLICK_CHECK_ALL'});
    },
    checkWord: () => {
      dispatch({type:'CLICK_CHECK_WORD'});
    },
    checkSquare: () => {
      dispatch({type:'CLICK_CHECK_SQUARE'});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClueBar);
