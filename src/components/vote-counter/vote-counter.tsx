import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'vote-counter',
  styleUrl: 'vote-counter.css'
})
export class VoteCounter {

  @Prop() votes: number;
  @Prop() total: number;

  render() {
    return (
      <div class='vote-counter'>

        {this.votes}/{this.total}
          <p>Votes counted</p>

      </div>
    );
  }
}
