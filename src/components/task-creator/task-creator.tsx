import { Component, State } from '@stencil/core';


@Component({
  tag: 'task-creator',
  styleUrl: 'task-creator.css'
})
export class TaskCreator {

  @State() tasks: string[] = [];

  submitTasks(t) {
    this.tasks = this.tasks.concat(t.detail);
  }

  render() {
    return (
      <div class='task-creator'>

        <task-input onTasksSubmitted={ tasks => this.submitTasks(tasks) }>
        </task-input>

        <task-list tasks={this.tasks}></task-list>

      </div>
    );
  }
}
