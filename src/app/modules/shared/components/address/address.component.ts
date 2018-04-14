import { IAddress } from './../../interface/address';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
constructor() {

}

// ngOnInit() {

// }
  @Input()
  name: string;

  @Input()
  address: IAddress;
}
