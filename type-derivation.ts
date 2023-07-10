//Built-in types
//Built-in type derivators

// Defining a union type
let username: string | number;
username = 5;
username = '';
//username = true; // errors out
//Partial => makes all parameters optional
type User = {
    name: string;
    age: number;
    gender: string;
}
type Man = Partial<User>//it means it takes all the properties of User but all the parameters are optional
//Pick => Selects the specified parameters to create a new type
type Woman = Pick<User, 'gender' | 'age'>
let jane: Woman = {
    gender : 'female',
    age : 18
}
// Omits => Leaves out the specified parameters to create a new type
type Mammal = Omit<User,'age'>

