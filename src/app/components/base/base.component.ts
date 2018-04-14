import { OnDestroy} from '@angular/core';

export class BaseComponent implements  OnDestroy {

  protected alive:  boolean = true;

  ngOnDestroy(): void {
    // console.log("unsubscribing base component");
    this.alive = false;
  }
}
