import React from 'react';
import { connect } from 'react-redux';

export default class Cell extends React.Component{

  render(){
    let classes = ['cell']
    let letter = '';
    if(this.props.entry){
      letter = this.props.entry.letter
      if(this.props.entry.checked) classes.push('checked')
      if(this.props.entry.confirmed) classes.push('confirmed')
    }
    if(this.props.selected) classes.push('selected')
    if(this.props.highlighted) classes.push('highlighted')
    return <div className={classes.join(' ')} onClick={()=>this.props.click(this.props.x,this.props.y)} >
      <div className="debug">{this.props.x}, {this.props.y}</div>
      <div className="number">{this.props.number}</div>
      <div className="letter">{letter}</div>
    </div>;
  }

}
