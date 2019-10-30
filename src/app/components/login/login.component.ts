import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { LoginModel } from 'src/app/model/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login : LoginModel = new LoginModel();

  constructor(private rota : Router, 
    private loginService: LoginService) { }

  ngOnInit() {
    if(this.loginService.isUsuarioLogado()){
      if(this.loginService.isDono){
          this.rota.navigate(['/dono']);
      }else{
          this.rota.navigate(['/funcionario']);
      }
    }
  }

  logar() : void{
    //let logado = this.loginService.getLogin();
    
    if(this.loginService.autenticar(this.login)){
      if(this.loginService.isDono){
        this.rota.navigate(['/dono']);
        }else{
            this.rota.navigate(['/funcionario']);
        }
    }else{
      alert("Usuário ou Senha Incorretos");
    }

    
  }

}
