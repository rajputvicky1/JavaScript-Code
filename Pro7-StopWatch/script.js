var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var startTime = 0;
var elapsedTime = 0;

var timer = false;

function start() {
    if (!timer) {
        startTime = Date.now() - elapsedTime;
        timer = true;
        stopwatch();
    }
}

function stop() {
    if (timer) {
        timer = false;
        elapsedTime = Date.now() - startTime;
    }
}

function reset() {
    timer = false;
    elapsedTime = 0;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
    if (timer == true) {
        count = Date.now() - startTime;

        // Convert milliseconds to hours, minutes, seconds, and hundredths of a second
        hr = Math.floor(count / (1000 * 60 * 60));
        min = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
        sec = Math.floor((count % (1000 * 60)) / 1000);
        count = Math.floor((count % 1000) / 10);

        var hrString = hr.toString().padStart(2, "0");
        var minString = min.toString().padStart(2, "0");
        var secString = sec.toString().padStart(2, "0");
        var countString = count.toString().padStart(2, "0");

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        requestAnimationFrame(stopwatch);
    }
}

// Event listeners for buttons
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
