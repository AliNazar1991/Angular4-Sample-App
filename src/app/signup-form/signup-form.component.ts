import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    username : new FormControl('',[
      Validators.required,
      UsernameValidators.cannotContainSpace,
    ],
    UsernameValidators.shouldBeUnique),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ])
  });

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }

  login(){
      this.form.setErrors({
        invalidLogin: true
      });
  }
  constructor() { }

  ngOnInit() {
  }

}
