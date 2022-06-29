
//display current date in header
var rightNow = moment().format("dddd, DD MMMM YYYY");
console.log(rightNow);

let header = document.querySelector("#currentDay");
header.innerText = rightNow;

var numHours = 1


//element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

var saveBtn = document.getElementsByClassName("description");
saveBtn.onClick = saveData;
function saveData()
 {  var taskInput = document.getElementsByClassName("description");
  localStorage.setItem("server", taskInput.value);
  var savedValue = localStorage.getItem("server");

}
document.getElementById('saveBtn').addEventListener('click', createItem());
{
  window.alert("button was clicked");

}

//     console.log(ev.target, ev.target.value);
//     testFunction();
   
//  };

// function for savings tasks to local storage
var saveTasks = function() {
    tasks = JSON.parse(localStorage.getItem(demo.value));
}
//lines 17-25, test button local storage
// this saves the task to local storage
function createItem() {
    localStorage.mytask = Date.now("tasks", JSON.stringify(tasks));
  }
  
  function myFunction() {
    var x = localStorage.getItem("mytask");
    document.getElementById("demo").innerHTML = x;
  }
  

//var x = localStorage.getItem("mytask");

// new object to track task status arrays
// if nothing in localStorage, create a new object to track all task status arrays
// if (!tasks) {
//     tasks = {
//       toDo: [],
//       inProgress: [],
//       inReview: [],
//       done: []
//     };
//   }


var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function() {

}

// update task in array and re-save to localstorage
//   tasks[status][index].text = text;
//   saveTasks();


//  // update task in array and re-save to localstorage
//   tasks[status][index].date = date;
//   saveTasks();



// const addTask = (ev)=>{
// let task = {
// 	input: document.getElementByClass('description').value
// }
// tasks.push(task);

// console.log(addTask);


//color code entry boxes based on time
const rows = document.getElementsByClassName("row");
let currentTime = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowTime;
  if (rowIdString) {
    rowTime = parseInt(rowIdString);
  }
  if (rowTime) {

    // Designates color according to past, future, present time
    if (currentTime === rowTime) {
      setColor(row, "orange");
    } else if ((currentTime < rowTime) && (currentTime > rowTime - 6)) {
      setColor(row, "grey");
    } else if ((currentTime > rowTime) && (currentTime < rowTime + 6)) {
      setColor(row, "blue");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}



function classes(i) {

    for(var i=0; i<numHours; i++) {
        console.log("hi"+i);
    }
}

classes();

// var testFunction = function()
// {console.log();
// }


