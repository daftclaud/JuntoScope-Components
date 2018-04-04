import { Component, State } from '@stencil/core';


@Component({
  tag: 'vote-counter-container',
  styleUrl: 'vote-counter-container.css'
})
export class VoteCounterContainer {

  @State() votes: number = 0;
  @State() total: number = 7;

  incrementVotes() {
    if (this.votes < this.total) {
      this.votes = this.votes + 1;
    }
  }

  render() {
    return (
      <div class='vote-counter-container'>

        <input type="number"></input>
        <button onClick={() => this.incrementVotes()}>SUBMIT</button>
        <vote-counter votes={this.votes} total={this.total}></vote-counter>

      </div>
    );
  }
}
