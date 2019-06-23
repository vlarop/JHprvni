import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PrvniSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [PrvniSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [PrvniSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrvniSharedModule {
  static forRoot() {
    return {
      ngModule: PrvniSharedModule
    };
  }
}
