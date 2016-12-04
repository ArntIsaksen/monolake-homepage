$(document).ready(function(){
    blink();
})

function blink(){
$(".animated-background")
    .animate({backgroundColor: '#FF0000'}, 150)
    .animate({backgroundColor: '#FF9500'}, 150)
    .animate({backgroundColor: '#FFD200'}, 150)
    .animate({backgroundColor: '#74E600'}, 150)
    .animate({backgroundColor: '#1049A9'}, 150)
    .animate({backgroundColor: '#4212AF'}, 150)
    .animate({backgroundColor: '#A600A6'}, 150, function(){blink()});
}

function showWhite(){
    var audio = $(".superhans")[0];
    $(".white").fadeIn("fast");
    audio.pause();
    $("#email").css({"color":"black"});
}

function hideWhite(){
    var audio = $(".superhans")[0];
    audio.addEventListener('ended', function(){this.currentTime = 0;}, false);
    $(".white").fadeOut("fast");
    audio.play();
    $("#email").css({"color":"white"});
}