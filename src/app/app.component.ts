import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dat = true;
  rr(evento: boolean) {
    this.dat = evento;
  }
  title = 'CodiGod-FrontEnd';
}
