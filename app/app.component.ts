import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <label>
        Credit Card Checking
        <input type="text"
               name="creditCard"
               placeholder="16 Digits of your card"
               credit-card>
      </label>
    </div>
  `
})
export class AppComponent {

}
