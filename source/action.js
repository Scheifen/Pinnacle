function whisperMove() {
    var list = $(".whisper")
    var randWhisp = Math.random() * (list.length - 1)
    $(".whisper:eq(" + Math.round(randWhisp) + ")").addClass("whisperAct")
    $(".whisper:eq(" + Math.round(randWhisp) + ")").show()
    console.log(Math.round(randWhisp) + 1)

    var randTime = Math.random() * (60000 - 1) + 1
    window.setTimeout(function() { whisperMove() }, randTime)
}

$(document).ready(setTimeout(function() { whisperMove() }, 1000))
$(document).ready(console.log("sum"), 1000)

function randMove() {
    var list = $(".whisper")
    var randInt = Math.random() * (80 - 20) + 1
    console.log(randInt)
    var randWhisp = Math.random() * (list.length - 1)
    $(".whisper:eq(" + Math.round(randWhisp) + ")").css("margin-left:" + randInt + "%", "margin-top:" + randInt + "%")

    if (randInt > 50) {
        $(".whisper:eq(" + Math.round(randWhisp) + ")").css("text-align:right")
    }
    if (randInt <= 50) {
        $(".whisper:eq(" + Math.round(randWhisp) + ")").css("text-align:left")
    }
}

window.setInterval(
    function() {
        $(".whisper").css("color", "#710000")
    }, 5000
)
window.setInterval(
    function() {
    	$(".whisper").css("color", "#0a0000")
    }, 70000
)

function whisperSt(){

}