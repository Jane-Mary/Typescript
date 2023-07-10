class Authentication implements IAuth{
 login(username:string, password:string): string{
    if(username.length>2 && password.length>8){
        return 'SSYY223747eueuwiwei'
    }
    return ' '
 }
 signup(username: string, password: string, email: string, firstName?: string | undefined, lastName?: string | undefined): boolean {
     if (username && password && email) {
        return true
     }
     return false
 }

 verifyAccount(email: string): boolean {
     return true;
 }  
 forgetPassword(email: string): string{

    return ''
 }
}

