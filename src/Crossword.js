import React from 'react';
import { connect } from 'react-redux';

class Crossword extends React.Component{

  render(){
    console.log(this.props);
    return <div>I am a crossword</div>;
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
      dispatch({type:'CHANGE_MODE'});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Crossword);
