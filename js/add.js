var sp = document.getElementsByClassName("video_input");
var video = document.getElementById("add-video");
var number = 0;//正在播放的图片位置
var videoArry = new Array("0.webm", "1.webm", "2.webm", "3.webm", "4.webm");
video.src = "video/" + videoArry[0];

console.log(sp[0].style)
$(sp[0]).css('background-color', 'white')
$(sp[1]).css('background-color', 'gray')
$(sp[2]).css('background-color', 'gray')
$(sp[3]).css('background-color', 'gray')
$(sp[4]).css('background-color', 'gray')

sp[0].addEventListener('click', function() {
    video.src = "video/" + videoArry[0];
    video.play();
    $(sp[0]).css('background-color', 'white')
    $(sp[1]).css('background-color', 'gray')
    $(sp[2]).css('background-color', 'gray')
    $(sp[3]).css('background-color', 'gray')
    $(sp[4]).css('background-color', 'gray')
    number = 0;
}, false);

sp[1].addEventListener('click', function() {
    video.src = "video/" + videoArry[1];
    $(sp[1]).css('background-color', 'white')
    $(sp[0]).css('background-color', 'gray')
    $(sp[2]).css('background-color', 'gray')
    $(sp[3]).css('background-color', 'gray')
    $(sp[4]).css('background-color', 'gray')
    video.play();
    number = 1;
}, false);

sp[2].addEventListener('click', function() {
    video.src = "video/" + videoArry[2];
    $(sp[2]).css('background-color', 'white')
    $(sp[0]).css('background-color', 'gray')
    $(sp[1]).css('background-color', 'gray')
    $(sp[3]).css('background-color', 'gray')
    $(sp[4]).css('background-color', 'gray')
    video.play();
    number = 2;
}, false);

sp[3].addEventListener('click', function() {
    video.src = "video/" + videoArry[3];
    $(sp[3]).css('background-color', 'white')
    $(sp[0]).css('background-color', 'gray')
    $(sp[1]).css('background-color', 'gray')
    $(sp[2]).css('background-color', 'gray')
    $(sp[4]).css('background-color', 'gray')
    video.play();
    number = 3;
}, false);

sp[4].addEventListener('click', function() {
    video.src = "video/" + videoArry[4];
    $(sp[4]).css('background-color', 'white')
    $(sp[0]).css('background-color', 'gray')
    $(sp[1]).css('background-color', 'gray')
    $(sp[2]).css('background-color', 'gray')
    $(sp[3]).css('background-color', 'gray')
    video.play();
    number = 4;
}, false);

video.addEventListener("ended", function() {
    if (number == (videoArry.length - 1)) {
        video.src = "video/" + videoArry[0];
        video.play();
        $(sp[0]).css('background-color', 'white')
        $(sp[1]).css('background-color', 'gray')
        $(sp[2]).css('background-color', 'gray')
        $(sp[3]).css('background-color', 'gray')
        $(sp[4]).css('background-color', 'gray')
        number = 0;
    } else {
        number += 1;
        video.src = "video/" + videoArry[number];
        video.play();
        $(sp[number]).css('background-color', 'white')
        $(sp[(number + 1) % 5]).css('background-color', 'gray')
        $(sp[(number + 2) % 5]).css('background-color', 'gray')
        $(sp[(number + 3) % 5]).css('background-color', 'gray')
        $(sp[(number + 4) % 5]).css('background-color', 'gray')
    }
}, false);
