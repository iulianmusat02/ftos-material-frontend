import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service'; // Import AuthService instead of TokenInterceptor
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authObj = {
    email: "",
    password: ""
  };

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { 
  }

  login() {
    this.callLogin(this.authObj).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token); 
        this.authService.setAuthToken(response.token); 
        this.router.navigate(['/userInterface']);
      })
    ).subscribe();
  }

  callLogin(body: {}): Observable<{ message: string, token: string }> {
    const url = 'http://localhost:3000/authentication';
    return this.http.post<{ message: string, token: string }>(url, body);
  }
}
