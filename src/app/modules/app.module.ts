// import { WeightComponent } from './../components/app/weight/weight.component';
// import { ShippingOptionsComponent } from './../components/app/shipping-options/shipping-options';
// import { KeysPipe } from './../pipe/keys.pipe';
// import { AddressComponent } from './../components/app/address/address.component';
// import { FormWizardModule } from './form.wizard.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './../components/app/app.component';
// import { WizardComponent } from './../components/wizard/wizard.component';
// import { WizardStepComponent } from './../components/wizard/wizard.step.component';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    // WizardStepComponent,
    // WizardComponent,
    // AddressComponent,
    // KeysPipe,
    // ShippingOptionsComponent,
    // WeightComponent
  ],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    SharedModule,
    // MaterialModule,
    HttpModule,
    FormsModule,
    // FormWizardModule
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
