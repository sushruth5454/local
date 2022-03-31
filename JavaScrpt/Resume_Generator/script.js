function addNewWEField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.placeholder="Enter Here";
    newNode.classList.add("mt-2");


    let weAddButton=document.getElementById("weAddButton");
    let weField=document.getElementById('we');
    // console.log(weField);
    // console.log(newNode);
    // weField.append(newNode);
    // console.log(weField.parentElement);
    // console.log(weAddButton.parentElement);
    weField.insertBefore(newNode,weAddButton);

}
function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.placeholder="Enter Here";
    let aqAddButton=document.getElementById("aqAddButton");
    let aqField=document.getElementById("aq");
    aqField.insertBefore(newNode,aqAddButton);
}

function addNewSKField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.placeholder="Enter Here";
    let skAddButton=document.getElementById("skAddButton");
    let skField=document.getElementById("sk");
    skField.insertBefore(newNode,skAddButton);
}


// generating resume
function generateResume(){
    console.log("generating");
    let name=document.getElementById("nameField").value;
    document.getElementById("nameT1").innerHTML=name;
    document.getElementById("nameT2").innerHTML=name;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("linkedinT").setAttribute("href",document.getElementById("linkedinField").value);
    document.getElementById("githubT").setAttribute("href",document.getElementById("githubField").value);

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    // profile pic setting
    let file=document.getElementById("profileField").files[0];
    console.log(file);

    //read the image
    let reader=new FileReader();
    reader.readAsDataURL(file);
    //it takes time to load the image
    reader.onloadend=function(){
        document.getElementById("profileT").src=reader.result;
    }
     
    // work exp
    let wes=document.getElementsByClassName("weField");
    let str='';

    for(let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //Academic qual

    let aqs=document.getElementsByClassName("aqField");
    let str1="";
    for(let a of aqs){
        str1=str1+`<li> ${a.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;


    //skills

    let sks=document.getElementsByClassName("skField");
    let str2="";
    for(let s of sks){
        str2=str2+`<li> ${s.value} </li>`;
    }
    document.getElementById("skT").innerHTML=str2;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
    
}

function printResume(){
    console.log("printing");
    window.print();
}