import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ButtonComponent },
      {
        path: 'client-a', component: ButtonComponent
      }
    ], { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el: any = createCustomElement(ButtonComponent,
      { injector: this.injector });
    customElements.define('app-button', el);
  }
}
