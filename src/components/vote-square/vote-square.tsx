import { Component, Event, EventEmitter, Prop } from '@stencil/core';


@Component({
  tag: 'vote-square',
  styleUrl: 'vote-square.css'
})
export class VoteSquare {

  @Event() squareSelected: EventEmitter;
  @Prop() hours: number;

  squareSelectedHandler() {
    this.squareSelected.emit(this.hours);
  }

  render() {
    return (
      <div class='vote-square'>
        <button onClick={ () => this.squareSelectedHandler() }>{this.hours}</button>
      </div>
    );
  }
}
