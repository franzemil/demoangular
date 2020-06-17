import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.sass']
})
export class AppBarComponent implements OnInit {

  @Input()
  appTitle: string;

  @Output('appTitleChange')
  onAppChange: EventEmitter<string> = new EventEmitter<string>();

  abc: number;
  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    debugger;
    this.onAppChange.emit('Changed from app bar');
  }
}
