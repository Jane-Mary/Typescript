interface  IAuth{
    login(username:string, password:string) : string;

    signup(username:string, password:string, email:string, firstName?: string, lastName?: string) : boolean;

    verifyAccount?(email:string):boolean;

    //method signature
    forgetPassword?(email:string):string;
    forgetPassword?(email:string, username:string):string;
    forgetPassword?(email:string, password:string, isActive: boolean):string;
}