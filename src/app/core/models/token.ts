export class Token{
    
    exp: Date
    iat: Date
    token: string
    user: {
            email:string
            rol: string
            id?:number
            name: string
            lastName: string
            phone: string
            description: string
            gender:string
            complete?: boolean
            password:string
        
        }
    constructor(exp: Date, iat: Date, token: string, user:any ){
        this.exp = exp
        this.iat =iat
        this.token = token
        this.user = user
    }
}