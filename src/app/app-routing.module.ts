import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DonoComponent } from './components/dono/dono.component';
import { AuthGard } from './guards/auth.gard';
import { HomeComponent } from './components/dono/home/home.component';
import { EstacionamentoComponent } from './components/dono/estacionamento/estacionamento.component';
import { FuncionarioComponent } from './components/dono/funcionario/funcionario.component';
import { CadEstComponent } from './components/dono/estacionamento/cad-est/cad-est.component';
import { EditEstComponent } from './components/dono/estacionamento/edit-est/edit-est.component';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'dono', component:DonoComponent,
  canActivate : [AuthGard],
      children :[
        {path: '', redirectTo:'home', pathMatch:'full'},
        {path:'home', component: HomeComponent},
        {path: 'estacionamento', component: EstacionamentoComponent},
        {path: 'funcionario', component: FuncionarioComponent},
        {path: 'estacionamento/cadest', component: CadEstComponent},
        {path: 'estacionamento/editest', component: EditEstComponent},
        //{path: '**', component: HomeComponent}, //notfound
      ]
  },
  {path: '**', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
