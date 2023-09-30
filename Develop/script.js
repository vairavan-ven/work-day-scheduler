$(document).ready(function () {
  // Function to generate time blocks from 9 AM to 5 PM
  function generateTimeBlocks() {
    const container = $(".time-block-container");

    for (let i = 9; i <= 17; i++) {
      const timeBlock = $("<div>").addClass("row time-block");
      const hour = i > 12 ? i - 12 + "PM" : i + "AM";
      const textArea = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", 3);
      const saveButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").html('<i class="fas fa-save" aria-hidden="true"></i>');

      // Color-code time blocks based on past, present, or future
      const currentHour = dayjs().hour();
      if (i < currentHour) {
        timeBlock.addClass("past");
      } else if (i === currentHour) {
        timeBlock.addClass("present");
      } else {
        timeBlock.addClass("future");
      }

      timeBlock.append($("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(hour));
      timeBlock.append(textArea);
      timeBlock.append(saveButton);
      container.append(timeBlock);
    }
  }

  // Display the current day at the top of the calendar
  function displayCurrentDay() {
    const currentDay = $("#currentDay");
    currentDay.text(dayjs().format("dddd, MMMM D YYYY"));
  }

  // Call the functions to generate time blocks and display the current day
  generateTimeBlocks();
  displayCurrentDay();
});
