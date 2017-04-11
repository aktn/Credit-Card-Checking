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
      <label tooltip="3 digits of your card" #myTooltip="tooltip">
        Enter Security Code
        <span
          (mouseover)="myTooltip.show()"
          (mouseout)="myTooltip.hide()">
          (?)
        </span>
        <input type="text">
      </label>
    </div>
  `
})
export class AppComponent {

}
