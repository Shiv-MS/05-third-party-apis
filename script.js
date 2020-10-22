

//$(element).action()
$(document).ready(() => {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // for(where I start; where I end; how to get there )
    let current_hour = new Date
    current_hour.getHours()
    for (let i = 8; i <= 17; i++) {
        $(".container").append(`<div class="row time-block" id="${i <= 12 ? `${i}AM` : `${i - 12}PM`}">
        <div class="col-lg-1 hour ${i < current_hour.getHours() ? "past" : "future"}">${i <= 12 ? `${i}AM` : `${i - 12}PM`}</div>
        <textarea class="col-lg-10 description ${i < current_hour.getHours() ? "past" : "future"}"></textarea>
        <button hour=${i} class="saveBtn col-lg-1"><i class="fas fa-save"></i></button>
      </div>`)
    }

    $(".saveBtn").on("click", function () {
        var aptInfo = $(this).siblings(".description").val();
        var aptHour = $(this).parent().attr("id");

        localStorage.setItem(aptHour, aptInfo);
    });

    $("#8AM .description").val(localStorage.getItem("8AM"));
    $("#9AM .description").val(localStorage.getItem("9AM"));
    $("#10AM .description").val(localStorage.getItem("10AM"));
    $("#11AM .description").val(localStorage.getItem("11AM"));
    $("#12AM .description").val(localStorage.getItem("12AM"));
    $("#1PM .description").val(localStorage.getItem("1PM"));
    $("#2PM .description").val(localStorage.getItem("2PM"));
    $("#3PM .description").val(localStorage.getItem("3PM"));
    $("#4PM .description").val(localStorage.getItem("4PM"));
    $("#5PM .description").val(localStorage.getItem("5PM"));


})






