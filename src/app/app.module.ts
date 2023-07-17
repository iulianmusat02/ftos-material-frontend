import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { FormsModule } from '@angular/forms';
import { OpenaiComponent } from './openai/openai.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { TokenInterceptor } from './token.interceptor';
import { HomepageUserInterfaceComponent } from './homepage-user-interface/homepage-user-interface.component';
import { MatMenuModule } from '@angular/material/menu';
import { InsertUiComponentComponent } from './insert-ui-component/insert-ui-component.component';
import { EditUiComponentComponent } from './edit-ui-component/edit-ui-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UserInterfaceComponent,
    OpenaiComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    HomepageUserInterfaceComponent,
    InsertUiComponentComponent,
    EditUiComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    RouterModule.forRoot([])
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
