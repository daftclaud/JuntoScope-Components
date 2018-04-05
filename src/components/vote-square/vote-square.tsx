import { Component, Event, EventEmitter, Prop } from '@stencil/core';


@Component({
  tag: 'vote-square',
  styleUrl: 'vote-square.css'
})
export class VoteSquare {

  @Event() squareSelected: EventEmitter;
  @Prop({ mutable: true }) hours: string = "--";
  @Prop({ mutable: true }) isSelected: boolean = false;
  @Prop() label: string = "";
  @Prop() isEditable: boolean = false;

  // @Listen('body:click')
  // handleClick(ev) {
  //   if (!((ev.target.textContent).includes(this.hours))) {
  //     this.isSelected = false;
  //   }
  // }

  squareSelectedHandler() {
    if(this.isEditable) {
      if (this.hours == "--"){
        this.hours = prompt("Please enter amount of hours: ");
      }
      else if (this.isSelected) {
        this.hours = prompt("Please enter amount of hours: ");
      }
    }

    this.squareSelected.emit(this);
  }

  render() {

    return (
      <div class='vote-square'>
        <button onClick={ () => this.squareSelectedHandler() }>
          {this.hours}<br></br>{this.label}
        </button>
      </div>
    );
  }
}
