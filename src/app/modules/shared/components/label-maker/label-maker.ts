import { ShippingOption } from './../../enums/shipping-option';
import { IShippingInfo } from './../../interface/shipping-info';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-label-maker',
  templateUrl: './label-maker.html',
  styleUrls: ['./label-maker.scss']
})
export class LabelMakerComponent {

  completed = false;
  shippingInfo: IShippingInfo = {
    from: {
    name: 'John Smith',
    street: '131 Dartmouth St',
    city: 'Boston',
    state: 'MA',
    zip: '02116'
    },
    to: {
    name: 'Linda Jackson',
    street: '40 Fulton St',
    city: 'New York',
    state: 'NY',
    zip: '10038'
    },
    weight: 12,
    shippingOption: ShippingOption.Priority
  };

  onComplete() {
    this.completed = true;
  }
}
