// Set local date and time with moment.js
var currentDate=$("#currentTime").text(moment(currentDate).format("LLLL"))

// When user clicks on save button, the text gets stored to local storage along with the time block the event is written in. 
$(".saveBtn").click(function (event) {
    event.preventDefault();
    
    var atime = $(this).siblings(".time").text();
    console.log(atime);
    var atime = JSON.stringify(atime);
    console.log(atime);
    var content = $(this).siblings(".description").val();
    console.log(content);
    
    localStorage.setItem(atime, content);
})

// text content loads in time block (with refresh)
$("#8").val(localStorage.getItem("8:00am"));
$("#9").val(localStorage.getItem("9:00am"));
$("#10").val(localStorage.getItem("10:00am"));
$("#11").val(localStorage.getItem("11:00am"));
$("#12").val(localStorage.getItem("12:00pm"));
$("#1").val(localStorage.getItem("1:00pm"));
$("#2").val(localStorage.getItem("2:00pm"));
$("#3").val(localStorage.getItem("3:00pm"));
$("#4").val(localStorage.getItem("4:00pm"));
$("#5").val(localStorage.getItem("5:00pm"));


// add color
let current = moment().format("HH");
// var listedTime = $(".time").text.split(":"[0]);
// console.log(listedTime);

if (current === 8) {
    $("#8").addClass("present");
}
else if (current < 8) {
    $("#8").addClass("future");
}
else{
    $("#8").addClass("past");

}

//if current time is equal to the time block time, present 

//if current time is less than the time block time, future

//if current time is past the time block time, past 



// $(".time").siblings(".description").addClass("present");

console.log(current);



// time =  ".time".split(":")[0];
// if (current = time[0]) {
