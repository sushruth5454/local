let student={
    name:"sushruth",
    age:22,
    city:"sangareddy",
    display:function(){
        console.log("Dispalying Properties..");
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }
};
console.log(student);
console.log(student.name);
student.display();
for(key in student){
    console.log(`${key}==${student[key]}`);
}