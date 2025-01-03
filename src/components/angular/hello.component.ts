import { NgIf } from "@angular/common";
import { Component, input, Input, signal } from "@angular/core";

@Component({
  selector: "app-hello",
  standalone: true,
  imports: [NgIf],
  template: `
    <p>Hello from Angular!!</p>

    <p *ngIf="show()">{{ helpText() }}</p>

    <button (click)="toggle()">Toggle</button>
  `,
})
export class HelloComponent {
  helpText = input("Help text");

  show = signal(false);

  toggle() {
    this.show.set(!this.show());
    // console.log("show", this.show());
  }
}
