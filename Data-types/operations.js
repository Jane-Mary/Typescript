var num1 = '4';
var num2 = true;
console.log('the sum is', num1 + num2);
var marks = [2, 3, 5, 6];
var marksBy2 = marks.map(function (val) { return val * 2; });
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
var mulBy2 = function (array) {
    var val = array.map(function (item) { return item * 2; });
    return val;
};
console.log('Result is', mulBy2(marks));
//Type Casting
var a = 2;
var b = 'yes';
var c = true;
var z = parseInt(b) * a;
