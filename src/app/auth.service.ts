import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private isLoggedIn = false;
    private authToken: string | null = null;
  
    constructor(private http: HttpClient) {
      this.isLoggedIn = localStorage.getItem('token') !== null;
      this.authToken = localStorage.getItem('token');
    }
    private isLoggedInHook(arg:boolean) {
        this.isLoggedIn = arg;
    }
    public returnIsLoggedIn() {
        return this.isLoggedIn;
    }
    public isAuthenticated(): Observable<boolean> {
        if (!this.authToken) {
          return of(false);
        }
    
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
        const url = 'http://localhost:3000/checkvalidtoken';
    
        return this.http.post<any>(url, null, { headers }).pipe(
          tap((response: any) => {
            console.log(response.authentication)
            this.isLoggedInHook(response.authentication);
            return response.authentication;
          }),
          // Since the server response type is 'any', we explicitly cast the 'authentication' property to boolean
          tap((response: any) => {
            response.authentication = Boolean(response.authentication);
          })
        );
      }
    // Method to log the user in (for demonstration purposes).
    public login(username: string, password: string): boolean {
      // Perform the actual login logic here, e.g., calling an API for authentication.
      // For this example, we'll just set a token in the local storage to simulate login.
      if (username === 'demo' && password === 'password') {
        localStorage.setItem('token', 'sample-token');
        this.isLoggedIn = true;
        return true;
      }
      return false;
    }
  
    // Method to log the user out (for demonstration purposes).
    public logout(): void {
      // Perform the actual logout logic here, e.g., clearing tokens, etc.
      // For this example, we'll just remove the token from the local storage to simulate logout.
      localStorage.removeItem('token');
      this.isLoggedIn = false;
    }
    public setAuthToken(token: string): void {
        this.authToken = token;
        localStorage.setItem('token', token);
      }
}