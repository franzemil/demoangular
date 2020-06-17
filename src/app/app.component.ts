import { Component } from '@angular/core';
import { Empresa } from './commons/core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'App Banco';
  value: Empresa = { id:"1", name: "bic"}

  onTitleChange(value: string) {
    this.title = value;
  }
}
