export class Register{
    email:string
    password:string
    rol: string

    constructor(email:string, password:string, rol: string){
        this.email = email
        this.password = password
        this.rol = rol
        
    }
}