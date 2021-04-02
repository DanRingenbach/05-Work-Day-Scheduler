displayDate = $('#currentDay')
saveBtn = $('.saveBtn')
// currentHour in 24 hour format
currentHour = moment().format('H')
hour = Number(currentHour)
console.log(hour)


$(document).ready(function (event) {
    var todayDate = moment().format('dddd, MMM Do YYYY');
    displayDate.html(todayDate);
    
   // crazy amount of if statements to change color of the rows does work but seems crazy 
    if (hour === 9) {
        $('input[name="hour-9-text"]').addClass('present')
    } else if (hour > 9) {
        $('input[name="hour-9-text"]').addClass('past')
    } else {
        $('input[name="hour-9-text"]').addClass('future')
    }
    if (hour === 10) {
        $('input[name="hour-10-text"]').addClass('present')
    } else if (hour > 10) {
        $('input[name="hour-10-text"]').addClass('past')
    } else {
        $('input[name="hour-10-text"]').addClass('future')
    }
    if (hour === 11) {
        $('input[name="hour-11-text"]').addClass('present')
    } else if (hour > 11) {
        $('input[name="hour-11-text"]').addClass('past')
    } else {
        $('input[name="hour-11-text"]').addClass('future')
    }
    if (hour === 12) {
        $('input[name="hour-12-text"]').addClass('present')
    } else if (hour > 12) {
        $('input[name="hour-12-text"]').addClass('past')
    } else {
        $('input[name="hour-12-text"]').addClass('future')
    }
    if (hour === 13) {
        $('input[name="hour-13-text"]').addClass('present')
    } else if (hour > 13) {
        $('input[name="hour-13-text"]').addClass('past')
    } else {
        $('input[name="hour-13-text"]').addClass('future')
    }
    if (hour === 14) {
        $('input[name="hour-14-text"]').addClass('present')
    } else if (hour > 14) {
        $('input[name="hour-14-text"]').addClass('past')
    } else {
        $('input[name="hour-14-text"]').addClass('future')
    }
    if (hour === 15) {
        $('input[name="hour-15-text"]').addClass('present')
    } else if (hour > 15) {
        $('input[name="hour-15-text"]').addClass('past')
    } else {
        $('input[name="hour-15-text"]').addClass('future')
    }
    if (hour === 16) {
        $('input[name="hour-16-text"]').addClass('present')
    } else if (hour > 16) {
        $('input[name="hour-16-text"]').addClass('past')
    } else {
        $('input[name="hour-16-text"]').addClass('future')
    }
    if (hour === 17) {
        $('input[name="hour-17-text"]').addClass('present')
    } else if (hour > 17) {
        $('input[name="hour-17-text"]').addClass('past')
    } else {
        $('input[name="hour-17-text"]').addClass('future')
    }
    saveBtn.on('click', function (event) {
        userInput = $('input[name="hour-9-text"]')
        event.preventDefault();
        userText = userInput.val()
        console.log('working', userText)
        localStorage.setItem('hour-9',userText)

    })   
    saveBtn.on('click', function (event) {
        userInput = $('input[name="hour-10-text"]')
        event.preventDefault();
        userText = userInput.val()
        console.log('working', userText)
        localStorage.setItem('hour-10',userText)
    }) 
    saveBtn.on('click', function (event) {
        userInput = $('input[name="hour-11-text"]')
        event.preventDefault();
        userText = userInput.val()
        console.log('working', userText)
        localStorage.setItem('hour-11',userText)
    })
    saveBtn.on('click', function (event) {
        userInput = $('input[name="hour-12-text"]')
        event.preventDefault();
        userText = userInput.val()
        console.log('working', userText)
        localStorage.setItem('hour-12',userText)
    }) 
    saveBtn.on('click', function (event) {
        userInput = $('input[name="hour-13-text"]')
        event.preventDefault();
        userText = userInput.val()
        console.log('working', userText)
        localStorage.setItem('hour-13',userText)
    })
    saveBtn.on('click', function (event) {
        userInput = $('input[name="hour-14-text"]')
        event.preventDefault();
        userText = userInput.val()
        console.log('working', userText)
        localStorage.setItem('hour-14',userText)
    }) 
    saveBtn.on('click', function (event) {
        userInput = $('input[name="hour-15-text"]')
        event.preventDefault();
        userText = userInput.val()
        console.log('working', userText)
        localStorage.setItem('hour-15',userText)
    }) 
    saveBtn.on('click', function (event) {
        userInput = $('input[name="hour-16-text"]')
        event.preventDefault();
        userText = userInput.val()
        console.log('working', userText)
        localStorage.setItem('hour-16',userText)
    }) 
    saveBtn.on('click', function (event) {
        userInput = $('input[name="hour-17-text"]')
        event.preventDefault();
        userText = userInput.val()
        console.log('working', userText)
        localStorage.setItem('hour-17',userText)
    })
})
// time Block list for non-functional "for" loop
//     })
//     timeBlockList = [
//         {
//             hourText: $('input[name="hour-9-text"]')
//         },
//         {
//             hourText: $('input[name="hour-10-text"]')
//         },
//         {
//             hourText: $('input[name="hour-11-text"]')
//         },
//         {
//             hourText: $('input[name="hour-12-text"]'),
//         },
//         {
//             hourText: $('input[name="hour-13-text"]'),
//         },
//         {
//             hourText: $('input[name="hour-14-text"]'),
//         },
//         {
//             hourText: $('input[name="hour-15-text"]'),
//         },
//         {
//             hourText: $('input[name="hour-16-text"]'),
//         },
//         {
//             hourText: $('input[name="hour-17-text"]'),
//         }
//     ]
// possible for loop to change the color of the rows not working currently
//     for (counter = 0; counter <= 17; counter++) {

//         if (hour === counter) {
//             timeBlock = timeBlockList[counter].hourText[0]
//             console.log(timeBlock)
//             timeBlock.addClass('present')
//         }
//         else if (hour > counter) {
//             timeBlock = timeBlockList[counter].hourText[0]
//             timeBlock.addClass('past')
//         }
//         else {
//             timeBlock = timeBlockList[counter].hourText[0]
//             timeBlock.addClass('future')
//         }
//     }
// })
// crazy amount of if statements to change color of the rows does work but seems crazy 
    


