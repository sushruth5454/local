function greet(user){
    return 'Hello ${user}!!';
}
let alien={
    name :'sushruth',
    company:'FOrd',
    tech:'Java',
    laptop:{
        name:"precision",
        ram:'32GB',
        brand:'Dell'
    }
}
console.log(alien.laptop?.name.brand);
let user="sushruth";
let add=function(num1,num2){
    return num1+num2;
}
console.log(add);
