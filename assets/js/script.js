
//display current date in header
var rightNow = moment().format("dddd, DD MMMM YYYY");
console.log(rightNow);

let header = document.querySelector("#currentDay");
header.innerText = rightNow;

var numHours = 1

// var rightNow = new Date();




// dateDay.textContent = currentDate.format("MMM DD, YYYY - hh:mm:ss a");

// console.log(currentDate);

function classes(i) {

    for(var i=0; i<numHours; i++) {
        console.log("hi"+i);
    }
}

classes();