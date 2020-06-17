import { Component, OnInit, Input } from '@angular/core';
import { Empresa } from '../commons/core/models';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.sass']
})
export class ToolBarComponent implements OnInit {

  @Input()
  public empresa: Empresa;

  constructor() { 
    this.empresa = {id: '', name: 'No Value'};
  }

  ngOnInit() {
  }

}
