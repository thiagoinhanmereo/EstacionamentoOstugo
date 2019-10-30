import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DonoComponent } from './dono.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EstacionamentoComponent } from './estacionamento/estacionamento.component';
import { CadEstComponent } from './estacionamento/cad-est/cad-est.component';
import { EditEstComponent } from './estacionamento/edit-est/edit-est.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CadFuncComponent } from './funcionario/cad-func/cad-func.component';
import { EditFuncComponent } from './funcionario/edit-func/edit-func.component';



@NgModule({
  declarations: [DonoComponent, NavbarComponent, HomeComponent, EstacionamentoComponent, CadEstComponent, EditEstComponent, FuncionarioComponent, CadFuncComponent, EditFuncComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class DonoModule { }
