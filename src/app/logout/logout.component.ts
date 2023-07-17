import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Import AuthService instead of TokenInterceptor

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService) {
    
  }
  ngOnInit(): void {
    localStorage.setItem('token', '');
    this.authService.setAuthToken(''); // Use the AuthService to set the token
  }
}
