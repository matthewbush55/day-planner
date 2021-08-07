// object array holding date/time information for each timeblock in an 8-hour day
var timeblockObjects = [
  {
    index: 0,
    hour: 9,
    milTime: 9,
    aORp: "AM",
    agenda: "",
  },
  {
    index: 1,
    hour: 10,
    milTime: 10,
    aORp: "AM",
    agenda: "",
  },
  {
    index: 2,
    hour: 11,
    milTime: 11,
    aORp: "AM",
    agenda: "",
  },
  {
    index: 3,
    hour: 12,
    milTime: 12,
    aORp: "PM",
    agenda: "",
  },
  {
    index: 4,
    hour: 1,
    milTime: 13,
    aORp: "PM",
    agenda: "",
  },
  {
    index: 5,
    hour: 2,
    milTime: 14,
    aORp: "PM",
    agenda: "",
  },
  {
    index: 6,
    hour: 3,
    milTime: 15,
    aORp: "PM",
    agenda: "",
  },
  {
    index: 7,
    hour: 4,
    milTime: 16,
    aORp: "PM",
    agenda: "",
  },
  {
    index: 8,
    hour: 5,
    milTime: 17,
    aORp: "PM",
    agenda: "",
  },
];

// JQUERY HTML REFERENCE VARIABLES
var currentDay = $("#currentDay");

// MOMENT GLOBAL VARIABLE DECLARATIONS
var todaysDate = moment().format("dddd, MMMM Do, YYYY");
var currentHour = moment().format("HH");

// GLOBAL VARIABLE DECLARATIONS
var previousInput = JSON.parse(localStorage.getItem("timeblockObjects"));

// put today's date in the DOM header element
currentDay.text(todaysDate);

//get content previously stored in local storage
function init() {
  var previousInput = JSON.parse(localStorage.getItem("timeblockObjects"));
  if (previousInput) {
    timeblockObjects = previousInput;
  }
}

// store data to local storage
function storeUserInput() {
  localStorage.setItem("timeblockObjects", JSON.stringify(timeblockObjects));
}

// fetch data from local storage
function getUserInput() {
  JSON.parse(localStorage.getItem("timeblockObjects"));
}

// dynamically generate timeblock elements
$.each(timeblockObjects, function () {
  // timeblock container
  var timeblockContainer = $("<form>");
  timeblockContainer.addClass("row");
  $(".container").append(timeblockContainer);

  // timediv elements
  var timeblockTime = $("<div>");
  timeblockTime.text(`${this.hour}${this.aORp}`);
  timeblockTime.addClass("hour col-md-1");
  timeblockContainer.append(timeblockTime);

  // timeblock input element
  var timeblockInput = $("<textarea>");
  timeblockInput.addClass("description col-md-10");
  timeblockContainer.append(timeblockInput);
  timeblockInput.attr("data-index", this.index);

  // compare current time to current index and style text area element based on if current time is past, present, or future
  if (this.milTime < currentHour) {
    timeblockInput.addClass("past");
  } else if (this.milTime === currentHour) {
    timeblockInput.addClass("present");
  } else if (this.milTime > currentHour) {
    timeblockInput.addClass("future");
  }

  // save button elements
  var timeblockSave = $("<button>");
  var saveBtn = $("<i>");
  timeblockSave.addClass("saveBtn col-md-1");
  timeblockSave.append(saveBtn);
  timeblockContainer.append(timeblockSave);
  saveBtn.addClass("far fa-save fa-lg");
});

// initialize previously stored content and display it in the planner
init();

// event listener for save button click
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  // get index of clicked save icon
  var saveIndex = $(this).siblings(".description").attr("data-index");
  // get value of the index textarea
  timeblockObjects[saveIndex].agenda = $(this).siblings(".description").val();
  storeUserInput();
});
