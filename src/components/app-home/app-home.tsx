import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <task-creator></task-creator>

        <vote-counter-container></vote-counter-container>
      </div>
    );
  }
}
