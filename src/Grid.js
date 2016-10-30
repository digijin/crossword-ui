import Cell from './Cell';
export default class Grid{
  constructor(container, w, h){
    this.container = container;
    this.cells = [];
    for(let x=0; x<w; x++){
      let cellrow = [];
      for(let y=0; y<h; y++){
        let cell = new Cell();
        cellrow.push(cell)
      }
      this.cells.push(cellrow)
    }
  }
}
