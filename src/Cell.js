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
    return <div className={classes} onClick={()=>this.props.click(this.props.x,this.props.y)} >
      {this.props.x}, {this.props.y}
      <div className="number">{this.props.number}</div>
      <div className="letter">{this.props.letter}</div>
    </div>;
  }

}
