import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule
  ],
  declarations: [RegistrationComponent],
  exports: [
    RegistrationComponent
  ]
})
export class UserModule { }