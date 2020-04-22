import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-elements';
  constructor(private _router: Router) { }
  handleClientClick() {
    this._router.navigate(['client-a']);
  }
}
