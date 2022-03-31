let type="human";
class student{
    constructor(name,college){
        this.name=name;
        this.college=college;
        console.log("Object Created...");
        type;
    }
    showDetails(){
        return `${this.name} belongs to ${this.college},${type}`;
    }
    getName(){
        return this.name.toUpperCase();
    }
}
let s1=new student("sushruth","vasavi");
console.log(s1.showDetails());
console.log(s1.getName());