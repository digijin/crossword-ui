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
    return <div className="cell" onClick={()=>console.log("asd")} >I am a cell</div>;
  }

}
