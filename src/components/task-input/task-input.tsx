import { Component, Event, EventEmitter, State } from '@stencil/core';


@Component({
  tag: 'task-input',
  styleUrl: 'task-input.css'
})
export class TaskInput {

  @Event() tasksSubmitted: EventEmitter;
  @State() tasks: string[];
  @State() value: string;

  tasksSubmittedHandler() {
    this.tasks = this.value.split('\n');
    this.tasksSubmitted.emit(this.tasks);
    this.value = "";
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <div class='task-input'>
        <p>
          Create Tasks. A new line creates a new task.
        </p>

        <form>
          <textarea id="txtarea" value={this.value}
            onInput={ (event) => this.handleChange(event) }
            rows={5} cols={40}></textarea>
        </form>
        <button onClick={ () => this.tasksSubmittedHandler() }>Submit</button>

      </div>
    );
  }
}
