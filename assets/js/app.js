// object array holding date/time information for each timeblock in an 8-hour day
var timeblockObjects = [
  {
    hour: "9",
    aORp: "AM",
  },
  {
    hour: "10",
    aORp: "AM",
  },
  {
    hour: "11",
    aORp: "AM",
  },
  {
    hour: "12",
    aORp: "PM",
  },
  {
    hour: "1",
    aORp: "PM",
  },
  {
    hour: "2",
    aORp: "PM",
  },
  {
    hour: "3",
    aORp: "PM",
  },
  {
    hour: "4",
    aORp: "PM",
  },
  {
    hour: "5",
    aORp: "PM",
  },
];

// JQUERY HTML REFERENCE VARIABLES
var currentDay = $("#currentDay");

// MOMENT VARIABLE DECLARATIONS
var todaysDate = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment().format("hh:mm");

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
  timeblockTime.text(this.hour);
  timeblockTime.addClass("hour");
  timeblockTime.append(this.hour);
});
