var displayDate = $("currentDay");
var hour = moment().format('h')
var saveBtn = $('.saveBtn')
var userInput = $('.col-1')
row = $('.row')

$(document).ready(function () {
    event.preventDefault(); 
        $("#9AMText").append(localStorage.getItem("am9"));
        $("#10AMText").append(localStorage.getItem("am10"));
        $("#11AMText").append(localStorage.getItem("am11"));
        $("#12PMText").append(localStorage.getItem("pm12"));
        $("#1PMText").append(localStorage.getItem("pm1"));
        $("#2PMText").append(localStorage.getItem("pm2"));
        $("#3PMText").append(localStorage.getItem("pm3"));
        $("#4PMText").append(localStorage.getItem("pm4"));
        $("#5PMText").append(localStorage.getItem("pm5"));
    
        var todayDate = moment().format('dddd, MMM Do YYYY');
    displayDate.html(todayDate);

    saveBtn.on('click', function () {
        
        var am9 = ($('#9AM').text())
        var am10 = ($('#10AM').text())
        var am11 = ($('#10AM').text())
        var pm12 = ($('#10AM').text())
        var pm1 = ($('#10AM').text())
        var pm2 = ($('#10AM').text())
        var pm3 = ($('#10AM').text())
        var pm4 = ($('#10AM').text())
        var pm5 = ($('#10AM').text())
        localStorage.setItem(am9, ($('#9AMText').val()))
        localStorage.setItem(am10, ($('#10AMText').val()))
        localStorage.setItem(am11, ($('#11AMText').val()))
        localStorage.setItem(pm12, ($('#12PMText').val()))
        localStorage.setItem(pm1, ($('#1PMText').val()))
        localStorage.setItem(pm2, ($('#2PMText').val()))
        localStorage.setItem(pm3, ($('#3PMText').val()))
        localStorage.setItem(pm4, ($('#4PMText').val()))
        localStorage.setItem(pm5, ($('#5PMText').val()))
        






        // var value = userInput.val()
        // localStorage.setItem(keyHour,value);
        // console.log(value)
    })

    for (hour = 9; hour <= 17; hour++) {
        // index for array use offset from hour
        index = hour - 9;
        console.log(hour)




    }
})









