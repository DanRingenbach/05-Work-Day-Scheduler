displayDate = $('#currentDay')
saveBtn = $('.saveBtn')
currentHour = Number(moment().format('HH'))

$(document).ready(function () {
    var todayDate = moment().format('dddd, MMM Do YYYY');
    displayDate.html(todayDate);
    
    var loadLocalStorage = function () {
    $('input[name="hour-9-text"]').val(localStorage.getItem('9'));
    $('input[name="hour-10-text"]').val(localStorage.getItem('10'));
    $('input[name="hour-11-text"]').val(localStorage.getItem('11'));
    $('input[name="hour-12-text"]').val(localStorage.getItem('12'));
    $('input[name="hour-13-text"]').val(localStorage.getItem('13'));
    $('input[name="hour-14-text"]').val(localStorage.getItem('14'));
    $('input[name="hour-15-text"]').val(localStorage.getItem('15'));
    $('input[name="hour-16-text"]').val(localStorage.getItem('16'));
    $('input[name="hour-17-text"]').val(localStorage.getItem('17'));
    }
    
    loadLocalStorage();
    
    $('.row').each(function(){
        var timeBlock = Number($(this).children()[0].getAttribute('id')) 
        var timeSpan = $(this).children()[1]
        
        if (currentHour === timeBlock) {
            $(timeSpan).addClass('present')
        } else if (currentHour > timeBlock) {
            $(timeSpan).addClass('past')
        } else if (currentHour < timeBlock) {
            $(timeSpan).addClass('future')
        }
    
    })

    saveBtn.on('click', function (event) {
        userInput = ($(this).siblings('input').val())
        event.preventDefault();
        var keyTime = $(this).siblings('span').attr('id')
        localStorage.setItem(keyTime, userInput)

    })
   
})



