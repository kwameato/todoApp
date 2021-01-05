const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('#todo-list');
const filterOption = document.querySelector('.filter-todo');



// function

let addTodo = function(event){
    // prevent form from reloading
    event.preventDefault();

    //creating a div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //creating li

    const newLi = document.createElement('li');
    newLi.innerText = todoInput.value;
    newLi.classList.add('todo-item');
    todoDiv.appendChild(newLi);

    //saving to local todos
    // completed button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>'
    completedBtn.classList.add('completed-btn');
    todoDiv.appendChild(completedBtn);

    // completed button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);

    //append to todo list

    todoList.appendChild(todoDiv);
    saveLocalTodos(todoInput.value);
    todoInput.value = "";
}

let deleteCheck = function(event){
    const item = event.target;
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    if(item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// event listener

todoBtn.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);