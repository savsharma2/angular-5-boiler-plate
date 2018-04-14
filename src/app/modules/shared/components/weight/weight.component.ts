import { IShippingInfo } from './../../interface/shipping-info';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.scss']
})
export class WeightComponent {
  @Input()
  shippingInfo: IShippingInfo;
}
