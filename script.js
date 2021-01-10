//IMPLEMENTATION OF API FOR THE MOTIVATIONAL QUOTE
const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);

//CODE TO LOAD CODE AS SOON AS THE PAGE IS LOADED
document.addEventListener("DOMContentLoaded", getQuote)

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `- ${data.author}`;
    });
}

//TODOLIST CODE
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
    //When input bar is empty
    if(todoInput.value === ""){
        return null
    }
    //Saving to localStorage
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
                  todos[i].style.display = "none";
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

//REMOVING OF ITEMS FROM THE LOCALSTORAGE
function removeLocalTodos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1 );
  localStorage.setItem("todos", JSON.stringify(todos));
}

//DELETE & CHECK
function deleteCheck(e) {
    const item = e.target;
    //DELETE ITEM
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        todo.classList.add("fall")
        removeLocalTodos(todo);
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


//LIGHT MODE AND DARK MODE
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



//MAKING THE NAVIGATION MENU BUTTONS FUNCTION
function homepage() {
  $(".badges").hide();
  $(".settings").hide();
  $(".todolist").show();
  $("#home").addClass("active")
  $("#badges").removeClass("active")
  $("#setting").removeClass("active")
};

/*Making the Badges Button Functional */
function badges() {
  $(".todolist").hide();
  $(".settings").hide();
  $(".badges").show();
  $("#badges").addClass("active")
  $("#home").removeClass("active")
  $("#setting").removeClass("active")
};

/*Making the Setting Button Functional */
function settings() {
  $(".badges").hide();
  $(".todolist").hide();
  $(".settings").show();
  $("#setting").addClass("active")
  $("#badges").removeClass("active")
  $("#home").removeClass("active")
};

