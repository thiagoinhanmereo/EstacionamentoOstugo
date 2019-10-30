import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { LoginModel, Permission } from '../model/login.model';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage: SessionStorageService) { }


  getLogin(login: string) : LoginModel{
    let list: Array<LoginModel> = [
      <LoginModel>{ login: 'Augusto', senha:'123', id: 1, permissao: Permission.Dono},
      <LoginModel>{ login: 'Kelvin', senha: '123', id: 2, permissao: Permission.Funcionario}
    ];
    var retornoLogin = list.find(loginModel => loginModel.login == login);
    return  retornoLogin;
  }

  private setUsuarioLogado(loggedUser:LoginModel) : void{
    this.storage.store('loggedUser', loggedUser);
  }

  isUsuarioLogado() : String {
   return this.storage.retrieve('loggedUser');
  }
  isDono() : boolean { 
    var loggedUser = this.storage.retrieve('loggedUser');
    if(!loggedUser){
      return false;
    }
    return loggedUser.permissao == Permission.Dono; 
  }

  public logout(){
    this.storage.clear('loggedUser');
  }

  autenticar(login : LoginModel) : boolean{
    var loggedUser = this.getLogin(login.login);
    console.log('usuário: ', login)
    console.log('banco-> ', loggedUser)

    if(loggedUser && login.senha === loggedUser.senha){
        console.log('true ...')
        this.setUsuarioLogado(loggedUser);
        return true;
      }else{
        console.log('false ...')
        return false;
      }
      
    }

}
