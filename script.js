function addTodo(){
    let todo= document.getElementById('msg').value
    console.log(todo);
    let li=document.createElement("li")
    li.innerHTML=`
    <div>
         <img>
         <span><i class="fa-solid fa-square-check"></i>${todo}</span>
         <button onclick="EditTodo(this)"><i class="fa-solid fa-pen-to-square"></i></button>
         <button onclick="deleteTodo(this)"><i class="fa-solid fa-trash"></i></button>
    </div>
    `
    result.appendChild(li)
    
}
function EditTodo(data){
    console.log(data);
    let li = data.parentNode
    console.log(li.childNodes);
    // let oldtext=li.childNodes[0].textContent.trim()
    let oldtext = li.querySelector("span").textContent
    console.log(li.childNodes[0].textContent.trim());
    
    let newtext= prompt("Enter task",oldtext)
    console.log(newtext);
    // li.childNodes[0].textContent = newtext;
    li.querySelector("span").textContent = newtext;
    
}
function deleteTodo(data){
    data.parentNode.remove()
}