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

  //Was going to try to emulate an async call to fetch votes.
  
  // getRndInteger(min, max) {
  //   return Math.floor(Math.random() * (max - min) ) + min;
  // }
  //
  // getVotes() {
  //   this.incrementVotes();
  //   console.log(this.votes)
  //   while(this.votes < this.total) {
  //     console.log("this ran");
  //     setTimeout(this.incrementVotes, this.getRndInteger(1000, 9000));
  //   }
  //
  // }

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
