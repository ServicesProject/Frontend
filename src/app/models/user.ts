export class User {
    id?:number
    name: string
    lastName: string
    phone: string
    description: string
    gender:string
    email:string
    rol: string
    complete?: boolean 

    constructor(name:string, lastName: string, phone: string, description: string, gender:string, email:string, rol: string){
        this.name = name
        this.lastName = lastName
        this.phone = phone
        this.description = description
        this.gender = gender
        this.email = email
        this.rol = rol
    }
}
