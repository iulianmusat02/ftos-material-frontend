import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { OpenaiComponent } from './openai/openai.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { HomepageUserInterfaceComponent } from './homepage-user-interface/homepage-user-interface.component';
import { InsertUiComponentComponent } from './insert-ui-component/insert-ui-component.component';
import { EditUiComponentComponent } from './edit-ui-component/edit-ui-component.component';
const routes: Routes = [ 
{
  path: '',
  component: UserInterfaceComponent,
  canActivate: [AuthGuard]
}, 
{
  path: 'editComponent/:id',
  component: EditUiComponentComponent,
  canActivate: [AuthGuard]
},
{
  path: 'userInterface',
  component: UserInterfaceComponent,
  canActivate: [AuthGuard]
},
{
path: 'insertComponent',
component: InsertUiComponentComponent,
canActivate: [AuthGuard]
},
{
  path: 'homepage-userinterface',
  component: HomepageUserInterfaceComponent,
  canActivate: [AuthGuard]
},
{
  path: 'openai',
  component: OpenaiComponent,
  canActivate: [AuthGuard]
}, 
{
  path: 'login',
  component: LoginComponent
}, 
{
  path: 'logout',
  component: LogoutComponent
},
{
  path: 'register',
  component: RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
