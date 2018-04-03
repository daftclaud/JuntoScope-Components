import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'task-list',
  styleUrl: 'task-list.css'
})
export class TaskList {

  @Prop() tasks: string[] = [];

  render() {
    return (
      <div class='task-list'>

        <ul>
          {this.tasks.map((task) =>
            <li>{task}</li>
          )}
        </ul>

      </div>
    );
  }
}
