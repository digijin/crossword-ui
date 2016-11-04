import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell';

class Grid extends React.Component{

  render(){
    let cells = [];
    for(let y = 0; y<5; y++){ //TODO: softcode
      for(let x = 0; x<5; x++){

        let highlighted = (!this.props.selected.across && this.props.selected.x === x)
          || (this.props.selected.across && this.props.selected.y === y)

        let selected = (x===this.props.selected.x&&y===this.props.selected.y)

        let entry = this.props.entries[x][y];
        // let letter =  entry?entry.letter:''
        cells.push(<Cell
          entry={entry}
          highlighted={highlighted}
          selected={selected}
          key={x+"-"+y}
          x={x} y={y}
          click={this.props.click} />);
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
