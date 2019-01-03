import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private _registerForm: FormGroup;


  constructor(private _form: FormBuilder, private _authService: AuthService) {
    this.createForm();
    
   }

  ngOnInit() {
  }
  createForm(){
    this._registerForm = this._form.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    })
  }

  onSubmit(){
    console.log(this._registerForm.value);
    this._authService
    .register(this._registerForm.value)
    .subscribe( () => console.log('you did it!'));
  }

}
