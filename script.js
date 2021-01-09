//selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');

//event listeners
document.addEventListener("DOMContentLoaded", getTodos)
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("click", filterTodo)

//functions
function addTodo(event) {
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ""){
        return null
    }
    saveLocalTodos(todoInput.value)
    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);
    //delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);
    //Append to Actual LIST
    todoList.appendChild(todoDiv);
    //Clear todo input VALUE
    todoInput.value = ""
}

//DELETE & CHECK
function deleteCheck(e) {
    const item = e.target;
    //DELETE ITEM
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}
//FILTERING THE TASKS ACCORDING THE OPTION
function filterTodo(e) {
    const todos = todoList.childNodes;
    for(let i = 1; i<todos.length; i++ ){
        switch (e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos.style.display = "none";
                }
                break;
        }
    }
} 

//SAVING THE TODO TASKS TO LOCALSTORAGE
function saveLocalTodos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos',JSON.stringify(todos));
}

function getTodos(){
  console.log("hello")
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);
    //delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);
    //Append to Actual LIST
    todoList.appendChild(todoDiv);
  });
    
}


/* Dark Mode - Light Mode */
var darkMode;

if (localStorage.getItem('dark-mode')) {  
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem('dark-mode');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  darkMode = 'light';  
}

// set new localStorage value
localStorage.setItem('dark-mode', darkMode);


if (localStorage.getItem('dark-mode') == 'dark') {
  $('body').addClass('dark');  
}

$('.dark-button').on('click', function() {  
  $('body').addClass('dark');  
  localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function() {  
  $('body').removeClass('dark');
  localStorage.setItem('dark-mode', 'light');   
});



/*Making the Home Button Functional */
function homepage() {
  $(".history").hide();
  $(".badges").hide();
  $(".settings").hide();
  $(".todolist").show();
  $("#home").addClass("active")
  $("#history").removeClass("active")
  $("#badges").removeClass("active")
  $("#setting").removeClass("active")
};

/*Making the History Button Functional */
function historys() {
  $(".todolist").hide();
  $(".badges").hide();
  $(".settings").hide();
  $(".history").show();
  $("#history").addClass("active")
  $("#home").removeClass("active")
  $("#badges").removeClass("active")
  $("#setting").removeClass("active")
};

/*Making the Badges Button Functional */
function badges() {
  $(".history").hide();
  $(".todolist").hide();
  $(".settings").hide();
  $(".badges").show();
  $("#badges").addClass("active")
  $("#history").removeClass("active")
  $("#home").removeClass("active")
  $("#setting").removeClass("active")
};

/*Making the Setting Button Functional */
function settings() {
  $(".history").hide();
  $(".badges").hide();
  $(".todolist").hide();
  $(".settings").show();
  $("#setting").addClass("active")
  $("#history").removeClass("active")
  $("#badges").removeClass("active")
  $("#home").removeClass("active")
};

