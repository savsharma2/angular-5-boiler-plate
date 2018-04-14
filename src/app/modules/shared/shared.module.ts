import { LabelMakerComponent } from './components/label-maker/label-maker';
import { WeightComponent } from './components/weight/weight.component';
import { KeysPipe } from './pipe/keys.pipe';
import { WizardComponent } from './components/wizard/wizard.component';
import { ShippingOptionsComponent } from './components/shipping-options/shipping-options.component';
import { AddressComponent } from './components/address/address.component';
import { WizardStepComponent } from './components/wizard/wizard.step.component';

// import { FormWizardModule } from './form.wizard.module';

// import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WizardStepComponent,
    WizardComponent,
    AddressComponent,
    KeysPipe,
    ShippingOptionsComponent,
    WeightComponent,
    LabelMakerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    WizardStepComponent,
    WizardComponent,
    AddressComponent,
    KeysPipe,
    ShippingOptionsComponent,
    WeightComponent,
    LabelMakerComponent
  ],
  providers: []
})
export class SharedModule { }
