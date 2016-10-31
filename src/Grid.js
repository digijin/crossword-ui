import React from 'react';
import { connect } from 'react-redux';


import Cell from './Cell';

class Grid extends React.Component{
  // constructor(container, w, h){
  //   this.container = container;
  //   this.cells = [];
  //   for(let x=0; x<w; x++){
  //     let cellrow = [];
  //     for(let y=0; y<h; y++){
  //       let cell = new Cell();
  //       cellrow.push(cell)
  //     }
  //     this.cells.push(cellrow)
  //   }
  // }
  render(){
    let cells = [];
    for(let y = 0; y<5; y++){ //TODO: softcode
      for(let x = 0; x<5; x++){
        let selected = this.props.selected;
        if(selected&& x===selected.x&&y===selected.y){
          selected = true;
        }else{
          selected = false;
        }
        let letter = ''
        if(this.props.entries && this.props.entries[x] && this.props.entries[x][y]) letter = this.props.entries[x][y];

        cells.push(<Cell letter={letter} selected={selected} key={x+"-"+y} x={x} y={y} click={this.props.click} />);
      }
      cells.push(<br key={y} />) //TODO: handle another way
    }

    return <div className="grid">
    {cells}
    </div>;
  }
}

function mapStateToProps(state, props) {
  return {
    // across: state.across,
    selected: state.selected,
    entries: state.entries
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    click: (x, y) => {
      dispatch({type:'CLICK_CELL', x:x, y:y});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
