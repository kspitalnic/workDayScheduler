var currentDate = moment();
$("#currentTime").text(currentDate.format("MMMM Do YYYY, h:mm:ss a"))

$(".saveBtn").click(function (event) {
    event.preventDefault();
    
    var content = $(this).siblings(".time-block").val();
    console.log(content);
    var time = $(this).siblings(".time").text();
    console.log(time);
    
    localStorage.setItem(time, content);
})