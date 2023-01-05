import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm :FormGroup;
  constructor(private fb: FormBuilder) { 
    this.registerForm=this.fb.group({
      email:[null, [
        Validators.required,
        Validators.maxLength(150),
      ]],
      password :[null,[
        Validators.required,
        Validators.maxLength(150),
      ]],
      userName: [null,[
        Validators.required,
        Validators.maxLength(150)
      ]]
    })
  }

  create(event){
    this.registerForm.value
    console.log("form value :" + JSON.stringify( this.registerForm.value));
  }

  ngOnInit() {
  }

}