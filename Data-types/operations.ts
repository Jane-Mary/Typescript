let num1: string = '4'
let num2:boolean = true
console.log('the sum is', num1 + num2);

let marks = [2,3,5,6]

let marksBy2 = marks.map(val => val*2)

console.log('marks by two', marksBy2);

//  // Functions
//  // return type
//  function addTwo(): number {
// return 3
//  }


//  function addTwo(a:number,b:number): number {
//     let res = a + b
//     return res ;
//      }

// //Function Invocation
// let value = addTwo(2,4)

// function purchase(user:string,amount:number,dob?:number){
//     alert(user + amount + dob)
//     return true
// }
// purchase('Mike',2400)

const mulBy2 = (array:number[]):number[] =>{
    let val = array.map(item => item * 2)
    return val
}
console.log('Result is', mulBy2(marks));

//Type Casting
let a = 2;
 let b = 'yes';
 let c = true;
 let z = parseInt(b) * a;

 