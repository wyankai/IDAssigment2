// Create a new list item when clicking on the "Add" button
function newElement() {
  let tasks = getElementById("tasks").value;
  let tasksList = [];

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
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

