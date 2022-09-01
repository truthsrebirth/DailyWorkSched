$(document).ready(function () {
    //Moment.js code for current date and time
    // Be sure to list created variables at the top of the file as a reference point
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");
  
    // Here we use jQuery to clear local storage and the contents of it?
    $("#clearFieldsBtn").click(function (event) {
      event.preventDefault;
      $("textarea").val("");
      localStorage.clear();
    });
  
    // This function uses jQuery to grab hour from each time slot and compare it to real time
    $(".time-div").each(function () {
      var timeDiv = $(this).attr("id").split("-")[1];
      
      if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
      } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  
    // This block of code grabs values from time and value divs & saves them to local storage
    $(".saveBtn").click(function (event) { 
      event.preventDefault();
      var value = $(this).siblings(".time-block").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });
  
    // Use jQuery to retrieve the  items from local storage and then puts them in proper places
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));
  });