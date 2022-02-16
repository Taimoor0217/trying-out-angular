import { Component, VERSION, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input() name: string;
  constructor() {
    console.log(this);
    this.name = "123"
  }
  ngOnInit(): void {
    console.log(`HELLO FROM APP COMPONENT ${this.name}`);
  }
}
