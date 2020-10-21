

//$(element).action()
$(document).ready(() => {
    // for(where I start; where I end; how to get there )
    for (let i = 1; i < 24; i++) {
        $(".container").append(`<div class="row time-block" id="${i < 12 ? i : i - 12}AM">
        <div class="col-lg-1 hour">${i < 12 ? `${i}AM` : `${i - 12}PM`}</div>
        <textarea class="col-lg-10 description"></textarea>
        <button hour=${i} class="saveBtn col-lg-1"><i class="fas fa-save"></i></button>
      </div>`)
    }








})

