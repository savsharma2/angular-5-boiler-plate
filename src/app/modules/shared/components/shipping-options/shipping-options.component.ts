import { IShippingInfo } from './../../interface/shipping-info';
import { ShippingOption } from './../../enums/shipping-option';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shipping-option',
  templateUrl: './shipping-option.component.html',
  styleUrls: ['./shipping-option.component.scss']
})
export class ShippingOptionsComponent {

  @Input()
  shippingInfo: IShippingInfo;

  // @Input()
  // option: ShippingOption;

  shippingOptions = ShippingOption;
}
