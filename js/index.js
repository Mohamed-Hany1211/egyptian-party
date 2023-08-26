
$(document).ready(function () {
    // singers 
    $('.singer2').slideUp();
    $('.singer3').slideUp();
    $('.singer4').slideUp();
    $('.s1').click(function () {
        $('.singer1').slideToggle();
    })

    $('.s2').click(function () {
        $('.singer2').slideToggle();
    })
    $('.s3').click(function () {
        $('.singer3').slideToggle();
    })
    $('.s4').click(function () {
        $('.singer4').slideToggle();
    })


    // side bar

    let linkWidth = 0;

    $('.x').click(function () {
        linkWidth = $('.links').outerWidth();
        $('.links').animate({ left: `${-linkWidth}` }, 1000);
        $('.button').animate({ left: `${-linkWidth + 250}` }, 1000);
    })

    $('.open-span').click(function () {
        $('.links').animate({ left: '0px' }, 1000);
        $('.button').animate({ left: '250px' }, 1000);

    })

})

// date counter
let countDownDate = new Date('Dec 29, 2023 23:59:59').getTime();
let counter = setInterval(function () {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuts = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));
    document.querySelector('.day').innerHTML = days + ' D';
    document.querySelector('.hour').innerHTML = hours + ' H';
    document.querySelector('.minute').innerHTML = minuts + ' M';
    document.querySelector('.second').innerHTML = seconds + ' S';
}, 1000)



let message = document.getElementById('message');
$('.rest-p').html(' Character Remaining');
$('.word-num').html('100');
message.addEventListener('keyup', () => {
    $('.rest-p').html('');
    let length = message.value.length;
    $('.word-num').html(100 - length + " ");
    if (length > 100) {
        $('.rest-p').html('');
        $('.word-num').html('your available character have finished');
    } else if (length <= 100) {
        $('.word-num').html(100 - length + " ");
        $('.rest-p').html(' Character Remaining');
    }


})



