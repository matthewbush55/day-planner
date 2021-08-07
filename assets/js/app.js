// object array holding date/time information for each timeblock in an 8-hour day
var timeblockObjects = [
  {
    hour: 9,
    milTime: 9,
    aORp: "AM",
  },
  {
    hour: 10,
    milTime: 10,
    aORp: "AM",
  },
  {
    hour: 11,
    milTime: 11,
    aORp: "AM",
  },
  {
    hour: 12,
    milTime: 12,
    aORp: "PM",
  },
  {
    hour: 1,
    milTime: 13,
    aORp: "PM",
  },
  {
    hour: 2,
    milTime: 14,
    aORp: "PM",
  },
  {
    hour: 3,
    milTime: 15,
    aORp: "PM",
  },
  {
    hour: 4,
    milTime: 16,
    aORp: "PM",
  },
  {
    hour: 5,
    milTime: 17,
    aORp: "PM",
  },
];

// JQUERY HTML REFERENCE VARIABLES
var currentDay = $("#currentDay");

// MOMENT GLOBAL VARIABLE DECLARATIONS
var todaysDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("HH");

// put today's date in the DOM header element
currentDay.text(todaysDate);

// dynamically generate timeblock elements
$.each(timeblockObjects, function () {
  // timeblock container
  var timeblockContainer = $("<form>");
  timeblockContainer.addClass("row");
  $(".container").append(timeblockContainer);

  // time div elements
  var timeblockTime = $("<div>");
  timeblockTime.text(`${this.hour}${this.aORp}`);
  timeblockTime.addClass("hour col-md-1");
  timeblockContainer.append(timeblockTime);

  // timeblock input element
  var timeblockInput = $("<textarea>");
  timeblockInput.addClass("description col-md-10");
  timeblockContainer.append(timeblockInput);

  //compare current time to current index and style text area element based on if current time is past, present, or future
  if (this.milTime < currentHour) {
    timeblockInput.addClass("past");
  } else if (this.milTime === currentHour) {
    timeblockInput.addClass("present");
  } else if (this.milTime > currentHour) {
    timeblockInput.addClass("future");
  }
  console.log(this.hour);
  console.log(currentHour);
});
