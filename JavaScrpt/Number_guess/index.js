let a;
function generate(){
    let node =document.getElementById("section-3");
    node.style.display="block";
    let node1=document.getElementById("section-1");
    node1.style.display="none";
    let node2=document.getElementById("section-2");
    node2.style.display="none";
    setTimeout(function(){
        node.style.display="none";
        node2.style.display="block";
        document.querySelector("#guess").value="";
    },3000);
    let b=Math.random()*10;
    a=Math.round(b);
    console.log(a);
    // node2.style.display="none";
}
function check(){
    let g=document.getElementById("guess").value;
    if(a==g){
        alert("your guess is correct :)");
    }
    else{
        alert("Your Guess is Wrong");
        generate();
    }
}
