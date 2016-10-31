import React from 'react';
import { connect } from 'react-redux';

export default class Cell extends React.Component{
  // constructor(){
  //   this.number = "N"
  //   this.letter = "_"
  //   this.selected = false;
  //
  // }
  render(){
    let classes = ['cell']
    if(this.props.selected) classes.push('selected')
    if(this.props.highlighted) classes.push('highlighted')
    return <div className={classes.join(' ')} onClick={()=>this.props.click(this.props.x,this.props.y)} >
      <div className="debug">{this.props.x}, {this.props.y}</div>
      <div className="number">{this.props.number}</div>
      <div className="letter">{this.props.letter}</div>
    </div>;
  }

}
