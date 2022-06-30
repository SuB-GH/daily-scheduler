
//display current date in header
var rightNow = moment().format("dddd, DD MMMM YYYY");

let header = document.querySelector("#currentDay");
header.innerText = rightNow;

var numHours = 1

// add time to timeblocks
var rightNow = moment().format("hh:mm:ss a");

var future = moment().add(1, "hour").format("hh:mm:ss");

var pastHour = moment().subtract(1, "hour").format("hh:mm:ss");

var future = "",
  pastHour = "";

// add color coding to timeblocks
if (future.value > rightNow.value) {
  document.getElementsByClassName("description").style.backgroundColor = '#FF0000';
}

if (pastHour.value < rightNow.value) {
  document.getElementsByClassName("description").style.backgroundColor = '#FF0000';
}

//saveBtn.onClick = saveData;

function saveData() {
  var taskInput = document.getElementsByClassName("description");
  localStorage.setItem('description', JSON.stringify(taskInput.value));
  var savedValue = localStorage.getItem("server");
}

saveData();

// this saves the task to local storage
let entireData = []
const createItem = (ev) => {
  let testData = { //testData is the object
    textarea: document.getElementsByClassName('description').value
  }
  entireData.push(testData);

}

createItem();

//     console.log(ev.target, ev.target.value);
//     testFunction();

//  };

// function for savings tasks to local storage
// var saveTasks = function() {
//     tasks = JSON.parse(localStorage.getItem(demo.value));
// }
//lines 17-25, test button local storage



//var x = localStorage.getItem("mytask");


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


// var testFunction = function()
// {console.log();
// }


