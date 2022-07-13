import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RecoverComponent } from './componentes/recover/recover.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'recover',component:RecoverComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
