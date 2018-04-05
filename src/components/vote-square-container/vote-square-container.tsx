import { Component, State } from '@stencil/core';


@Component({
  tag: 'vote-square-container',
  styleUrl: 'vote-square-container.css'
})
export class VoteSquareContainer {

  @State() votes: string[] = ["6", "4", "8", "9"]; //'fetched' from db
  @State() selectedEl: any;

  setEl(h) {
    //Deep change detection work-around
    this.selectedEl = [];
    this.selectedEl = this.els.filter((el) => el === h.target)[0];
    this.selectedEl.isSelected = true;

    //deselect other vote-squares
    this.els.map((el) => {
      if (el != this.selectedEl) {
        el.isSelected = false;
      }
    })
  }

  //fetch all vote-squares
  els: any[];
  componentDidLoad() {
    this.els = [].slice.call(document.querySelectorAll("vote-square"));
  }

  render() {
    console.log("Rendering!");
    return (
      <div class='vote-square-container'>
        <p>Selected Value: {this.selectedEl ? this.selectedEl.hours:""}</p>

        <vote-square onSquareSelected={ h => this.setEl(h) } label="Custom"
          isEditable={true}>
        </vote-square>


        {this.votes.map((v) =>
          <vote-square onSquareSelected={ h => this.setEl(h) } hours={v}>
          </vote-square>
        )}
      </div>
    );
  }
}
