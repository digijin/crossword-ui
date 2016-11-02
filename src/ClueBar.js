import React from 'react';
import { connect } from 'react-redux';

class ClueBar extends React.Component{

  render(){
    return <div className='cluebar' >{JSON.stringify(this.props.selected)}</div>
  }

}

function mapStateToProps(state, props) {
  return {
    across: state.across,
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch, props) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ClueBar);
