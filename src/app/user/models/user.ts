export class User {
    id?:number
    name: string
    lastName: string
    phone: string
    gender:string
    ci:string
    birthdate: Date
    email:string
    rol: string
    complete?: boolean 

    constructor(name:string, lastName: string, phone: string, gender:string, email:string, rol: string,  ci:string, birthdate: Date){
        this.name = name
        this.lastName = lastName
        this.phone = phone
        this.gender = gender
        this.email = email
        this.rol = rol
        this.ci = ci
        this.birthdate = birthdate
    }
}
