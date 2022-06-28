
//display current date in header
var rightNow = new Date();
var numHours = 1

let header = document.querySelector("#currentDay");
header.innerText = rightNow;

function classes(i) {

    for(var i=0; i<numHours; i++) {
        console.log("hi"+i);
    }
}

classes();