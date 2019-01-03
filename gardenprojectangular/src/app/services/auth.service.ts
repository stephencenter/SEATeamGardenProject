import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from '@angular/common/http';

const Api_url = "https://efa-gardenapp-backend.herokuapp.com/api/auth/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  register(regUserData : RegisterUser){
return this._http.post(`${Api_url}/api/Account/Register`,regUserData);
  }
}
