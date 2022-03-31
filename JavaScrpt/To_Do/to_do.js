function add_todo(){
    // let to_do_title_ob=document.getElementById("todo_title");
    // let to_do_desc_ob=document.getElementById("description");
    // localStorage.setItem(to_do_title_ob,to_do_desc_ob);
    // console.log(localStorage);
    // let card_ele=document.createElement("div");
    // card_ele.classList.add(card-body);
    // let button_ob=document.getElementById("btn");
    // let main_card=document.getElementById("main");
    // main_card.insertAfter(card_ele,button_ob);

    let title=document.getElementById("title").value;
    let desc=document.getElementById("desc").value;

    let todos=[];
    let localTodos=localStorage.getItem("todos");
    if(localTodos!=null){
        todos=JSON.parse(localTodos);
    }
    let todoObject={
        title:title,
        desc:desc,
        id:Math.trunc(Math.random()*1000),
    };
    todos.push(todoObject);
    localStorage.setItem("todos",JSON.stringify(todos));
    show_to_do();
}
function show_to_do(){
    let todoString=localStorage.getItem("todos");
    let content="";
    // let todoString=JSON.parse(todos);
    if(todoString==null){
        content+="<h3 class='text-white'>NO ToDo To Show";
    }
    else{
        let todos=JSON.parse(todoString);
        for(let todo of todos.reverse()){
            content+=`

            <div class="card mt-2">
                <div class="card-body">
                    <h3>${todo.title}</h3>
                    <p>${todo.desc}</p>

                </div>
            </div>
            
            `
        }
        
    }
    document.getElementById("main-content").innerHTML=content;
}
show_to_do();