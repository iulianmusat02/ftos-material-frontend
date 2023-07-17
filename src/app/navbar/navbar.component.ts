import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent{

  constructor(public authService: AuthService) {
    this.checkIsLoggedIn();
  };

  public isLoggedIn : boolean | undefined;

  public checkIsLoggedIn() {
    this.isLoggedIn = this.authService.returnIsLoggedIn();
  }

}
