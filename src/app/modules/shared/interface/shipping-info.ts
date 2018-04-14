import { ShippingOption } from './../enums/shipping-option';
import { IAddress } from './address';

export interface IShippingInfo {
  from: IAddress;
  to: IAddress;
  weight: number;
  shippingOption: ShippingOption;
}
