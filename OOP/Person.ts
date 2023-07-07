//Class Definition
enum Gender{
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}

class Person{
    //properties
    name1: string = 'Kambang';
    age: number = 1;
    gender: Gender = Gender.MALE
    //methods
}

//Class Instantiation - Creating objects of the class
//To instantiate a class we use the 'new' keyword
let mrKambang = new Person()

//Class Usage
//To access the methods/properties of a class
//We use the dot notation(.)
console.log('The person is ', mrKambang.name1)

//Passing dependiecies to a class
//To pass dependecies to a class we use the class constructor
//Example
class GenerateReport{
    marks:Array<number>;
    student: string;
    gender:Gender = Gender.FEMALE
    //recieve the marks and student properties as dependencies
    constructor(score:Array<number>,name:string,studGender?:Gender){
        this.marks = score;
        this.student = name;
        this.gender = studGender !== undefined? studGender : this.gender;
    }
}
//Instantiation
let ruthReport = new GenerateReport([16,12,17],'Ruth',Gender.MALE)

//Usage
console.log('Reportbcar id =>',ruthReport.marks,ruthReport.student);



//Getters and Setters
 class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    setName(name: string):void {
        this.name = name;
    }
    getName():string {
        return this.name;
    }
    setAge(age: number):void {
        this.age = age;
    }
    getAge():number {
        return this.age;
    }
    //Synthetic sugar
    //get, set -> Talk about the get and set keywords in typescript
 }


class School{
    isOpen: boolean = true;
    hasClosed: boolean = false;

    schoolState(){
        return this.isOpen;
    }
}

//Access Modifiers
//Private, Public, Protected, Static, Abstract, Readonly