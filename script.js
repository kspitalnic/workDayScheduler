// Set local date and time with moment.js
var currentDate=$("#currentTime").text(moment(currentDate).format("LLLL"))

// When user clicks on save button, the text gets stored to local storage along with the time block the event is written in. 
$(".saveBtn").click(function (event) {
    event.preventDefault();
    
    var atime = $(this).siblings(".time").text();
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
let current = parseInt(moment().format("HH"));


if (current === 8) {
    $("#8").addClass("present");
}
else if (current < 8) {
    $("#8").addClass("future");
}
else{
    $("#8").addClass("past");
}
if (current === 9) {
    $("#9").addClass("present");
}
else if (current < 9) {
    $("#9").addClass("future");
}
else{
    $("#9").addClass("past");
}
if (current === 10) {
    $("#10").addClass("present");
}
else if (current < 10) {
    $("#10").addClass("future");
}
else{
    $("#10").addClass("past");
}
if (current === 11) {
    $("#11").addClass("present");
}
else if (current < 11) {
    $("#11").addClass("future");
}
else{
    $("#11").addClass("past");
}
if (current === 12) {
    $("#12").addClass("present");
}
else if (current < 12) {
    $("#12").addClass("future");
}
else{
    $("#12").addClass("past");
}
if (current === 13) {
    $("#1").addClass("present");
}
else if (current < 13) {
    $("#1").addClass("future");
}
else{
    $("#1").addClass("past");
}
if (current === 14) {
    $("#2").addClass("present");
}
else if (current < 14) {
    $("#2").addClass("future");
}
else{
    $("#2").addClass("past");
}
if (current === 15) {
    $("#3").addClass("present");
}
else if (current < 15) {
    $("#3").addClass("future");
}
else{
    $("#3").addClass("past");
}
if (current === 16) {
    $("#4").addClass("present");
}
else if (current < 16) {
    $("#4").addClass("future");
}
else{
    $("#4").addClass("past");
}
if (current === 17) {
    $("#5").addClass("present");
}
else if (current < 17) {
    $("#5").addClass("future");
}
else{
    $("#5").addClass("past");
}



console.log(current);








// if ($(".time").attr("id")===current){
//     console.log("true");}
    // $(this).addClass("present")

// var listedTime = ".time".text.split(":"[0]);
// console.log(listedTime);
// $(".time").each(function(){
//     console.log($(this).text.split(":")[0]);
//     if ($(".time").attr("id")===current){
//         console.log("true");}
//     else {console.log("false")}