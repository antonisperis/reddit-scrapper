
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<info-fetcher-component></info-fetcher-component>`
})
export class AppComponent {
  title = 'reddit-scrapper';
}
