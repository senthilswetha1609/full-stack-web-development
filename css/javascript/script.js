// var a = 10;  //reinitinalize & redeclare 
// let b = 20;   
// const c = 30; 

// console.log(a);
// console.log(b);
// console.log(c);

// var num = 10;
// var str = "swetha";
// var undefine;
// var Null = null;
// var boolean = true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof underfine);
// console.log(typeof Null);
//console.log(typeof boolean);

// var hight = 123n;
// var symbol = symbol('li');
 
// console.log(typeof BigInt)
// console.log(typeof Symbol)
 
// var arr = [10,20,30,40];
// console.log(typeof arr,arr);
// var obj = {
//    name: 'swetha' ,
//    dept: ["AI&DS","CT"]
// }
// console.log(typeof obj,obj)



// var a = 10;
// var b = "abi";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a % b);
// console.log(a / b);


// //               &&    ||  
// // true true     true   true
// // true false    false  true
// // false true    false  true
// // false false   false  false

// var a = true;
// var b = false; 
// console.log(a && b);
// console.log(a || b);
// console.log(!a);

// a = 10;
// b = "10";
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a!=b);
//console.log(a==b);
// console.log(a!==b);

// a = 10;
// b = 20;

// a += b; //a=a+b;

// console.log(a);
// a -= b; //a=a-b;
// console.log(b);
// a*=b; //a=a*b;
// console.log(a)
// a%=b; //a=a%b;
// console.log(a);
// a/=b; //a=a/b;

// var a = 10;
// console.log(a++);
// console.log(++a);

// var a=20;
// console.log(--a);
// console.log(a--);
// console.log(--a);


// a =1;
// b =2;
// c =0;
// 
// var result = a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
// console.log(result);
//
// var a = 10;
// var b = 20;
// if condition 
// if(true){
//     //template litearals
//    console.log('$(a) + 4(b) = $(a+b)')
//
//   }
//
// if(true){
//    a = 10;
//    console.log(a);
//  }
//
// var a;
// console.log(a);
//
//
// var mark = 30;
// if(mark=90){
//    console.log("0 grade");
//  }
// else if(mark>=70){
//    console.log("A grade");
//  }
// else if(mark>=35){
//    console.log("pass");
// }
// else{
//    console.log("fail");
// }
//
//
// var a = 10;
// condition ? true statement false statement 
// var result = a%2==0? "even" : "odd"
// console.log(result)
//
// mark = 30;
// var result = (mark>=90) ? "0 grade" :
//             (mark>=70) ? "A grade" : 
//             (mark>=35) ? "pass" :
//             "fail";
// console.log(result) 

// var day = 2;
// switch(day){
//    case 1:{
//        console.log("SUNDAY");
//        break;
//
//    }
//    case 2:{
//        console.log("MONDAY");
//        break;

//    }
//case 3:{
//    console.log("TUESDAY");
//    break;

//    }
// case 4:{
//    console.log("WEDNESDAY");
//        break;

//    }
//    case 5:{
//        console.log("THURSDAY");
//        break;

//    }
//    case 6:{
//        console.log("FRIDAY");
//        break;

//    }
//    case 7:{
//       console.log("SATURDAY");
//        break;

//    }
// default:{
//    console.log("INVALID INPUT ");
// }
// }
  
// looping statements
// 1 time 11times 10 times 
// for (var i=1; i<=10; i++){
// console.log(i);
// }

// var val = 10246;
// var count = 0;
// while(val > 0){
//    count++;
//    val = Math.floor(val/10);
// }
// console.log(count,val);
// for(let i=1;i<=10;i++){
//     if(i%==0){
//        continue;
//    }
//     console.log(i);
//   }
// add();  //hoisting
//
//    function add(a=5,b=6){
//        console.log(a+b);
//    }

// add(10,20); // hoisting

//arrow function 
// var demo = (a = 5,b = 6) => {
//     console.log(a+b);
// }
// demo(10,20);
// demo();
// demo(10);
// // spread operators(...)

// var arr = [10,20,30];
// var arr2 = [...arr,40,50];
// console.log(arr);
// console.log(arr2);

// //destructuring operator

// var [m1,m2,m3,m4,m5] = [90,99,98,97,100];
// console.log(m1,m2,m3,m4,m5);

var  {name,mobile,dept,email,isactive} = {
    name:"swetha",
    mobile:9942686996,
    dept:["AI&DS"],
    email:"senthilswetha@gmail.com",
    isactive:true
} 

console.log(name,mobile,dept,email,isactive);

var arr = [10,20,30,40,50];
//for..in
for(let index in arr){
    console.log(index)
}
//for.of
for(let value of arr){
    console.log(value)
}

var obj = { 
    name:"swetha",
    dept:["AI&DS","CT"],
    mobile:9942686996
}
for(let key in obj){
    console.log(key,obj[key])
}

var arr = [1,2,3,4,5,];

var result = arr.map((val) => (val*2));
console.log(result);
console.log(arr);

var even = arr.filter((val) => val%2===0);
console.log(even);

var sum = arr.reduce((add,val)=>(add+val),0);
console.log(sum);

var username = {
    name:"swetha",
    dept:["ai&ds","CT"],
    skills:{
        programming:["python","c"]
}
}

