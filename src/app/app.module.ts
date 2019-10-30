import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
//import { NavbarComponent } from './components/dono/navbar/navbar.component';
//import { DonoComponent } from './components/dono/dono.component';
import { FuncionarioComponent } from './components/funcionario/funcionario.component';
import { AuthGard } from './guards/auth.gard';
import { DonoModule } from './components/dono/dono.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //DonoComponent,
    FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    FormsModule,
    DonoModule
  ],
  providers: [
    AuthGard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
