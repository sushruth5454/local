//Enhanced Object literals
//global variables can be used in objects
// let college="Vasavi";
// let creature="human";
// let student={
//     name:"sushruth",
//     city:"Hyderabad",
//     [creature]:"true",
//     college,
//     display:function(){
//         return `${this.name} from ${this.city} studies in ${this.college}`;
//     }
// }
// console.log(student);
// console.log(student.display());

// function createObject(a,b,c){
//     return {a,b,c};
// }
// console.log(createObject(1,2,3));
// .
// .
// .
// .
// .
// .
//promise in JS

let prom=new Promise((resolve,reject) => {
    //server call asynchronous work
    let flag=true;
    if(flag){
        resolve();
    }
    else{
        reject();
    }
});
prom.then(()=>{
    console.log("Promise is Resolved..");
})
.catch(()=>{
    console.log("Promise is Rejected..");
});

console.log("first line after promise called");
console.log("second line after promise called");
console.log("third line after promise called");
console.log("fourth line after promise called");
prom.then(()=>{
    console.log("Promise is Resolved..");
})
.catch(()=>{
    console.log("Promise is Rejected..");
});


