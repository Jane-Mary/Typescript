//There are a few ways to create custom types in typescript

//1)Using the type keyword
type Mike = {
    name: string,
    age: number,
    gender: string,
    scores: Array<string>,
    dob?: string,
    address?: string
}

let mikeCarlos: Mike = {
    name: 'mkc',
    age: 2,
    gender: 'male',
    scores: ['2','4'],
    
}

//2) Interfaces
interface Roy extends Mike{
    canStress(): boolean //function definition
}

let royK:Roy = {
    name:'royk',
    age: 3,
    gender:'male',
    scores: ['2','4','5'],
    canStress(){
        return false // function implementation
    }
}

//3) ENUMERATION = used to create CONSTANTS
enum GENDER {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}
enum CURRENCIES {
    XAF = 'XAF',
    USD = 'USD',
    GBP = 'GBP',
    EUR = 'EUR',
}
let money:CURRENCIES = CURRENCIES.USD
let gender:GENDER = GENDER.FEMALE

//4)Class =>Introduces us to Object Oriented Programming(OOP)
