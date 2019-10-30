export class LoginModel{
    constructor(public id? : number,
                public login?: string,
                public senha?: string, 
                public permissao?: Permission
                ){}
}     
export enum Permission {
    Dono = 1,
    Funcionario = 2,
}