import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FuncionarioComponent } from './funcionario.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, FuncionarioComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FuncionarioModule { }
