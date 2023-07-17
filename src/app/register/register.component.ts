import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  verificationEmail : boolean = false;
  registrerObj : any = {
    firstName : '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  emailCode : string = ''
  constructor(private http: HttpClient) {

  }
  submitUser(){
    this.callRegisterUser(this.registrerObj).pipe(
      tap((response) => {
        if(!response.success) {
          alert(response.message);
        } else {
          this.verificationEmail = true;
        }
        console.log(response)
      })
    ).subscribe();
  }
  confirmEmail() {
    this.callConfirmEmail({code : this.emailCode, email : this.registrerObj.email}).pipe(
      tap((response) => {
        console.log(response);
        if(response.isSuccess) {
          window.location.href="/login";
        }
      })
    ).subscribe()
  }
  callConfirmEmail(body : {}) {
    const url = 'http://localhost:3000/confirmAccount';
    return this.http.post<any>(url, body);
  }
  callRegisterUser(body : {}){
    const url = 'http://localhost:3000/registerUser'; 
    return this.http.post<any>(url, body);
  }
}
