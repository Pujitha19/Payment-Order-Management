import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule correctly
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentListComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Import HttpClientModule here
    ReactiveFormsModule
  ],
  providers: [
    // Providers if needed (e.g., services)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
