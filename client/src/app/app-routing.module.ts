import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent
  }, {
    path: "login", component: LoginComponent
  }, {
    path: "register", component: RegisterComponent
  },
  {
    path: 'home',
    component: ComponentsComponent,
    children: [
        {
      path: '',
      loadChildren: './components/components.module#ComponentsModule'
  }]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
