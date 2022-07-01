import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecoverComponent } from './componentes/recover/recover.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PrincipalpageComponent } from './componentes/principalpage/principalpage.component';
import { ConverterComponent } from './componentes/tools/converter/converter.component';
import { DistanceComponent } from './componentes/tools/distance/distance.component';
import { LocationComponent } from './componentes/tools/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoverComponent,
    RegisterComponent,
    PrincipalpageComponent,
    ConverterComponent,
    DistanceComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
