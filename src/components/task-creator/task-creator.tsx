import { Component, State } from '@stencil/core';


@Component({
  tag: 'task-creator',
  styleUrl: 'task-creator.css'
})
export class TaskCreator {

  @State() tasks: string[] = [];
  @State() value: string;

  addTasks() {
    let newTasks = this.value.split('\n');

    this.tasks = this.tasks.concat(newTasks);
    this.value = "";

  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <div class='task-creator'>
        <p>
          Create Tasks. A new line creates a new task.
        </p>

        <form>
          <textarea id="txtarea" value={this.value}
            onInput={ (event) => this.handleChange(event) }
            rows={5} cols={40}></textarea>
        </form>
        <button onClick={ () => this.addTasks() }>Submit</button>

        <ul>
          {this.tasks.map((task) =>
            <li>{task}</li>
          )}
        </ul>

      </div>
    );
  }
}
