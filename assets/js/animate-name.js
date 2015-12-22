
var values =
    [
        "GytDau.com",
        "Gyt<span class='blinker'></span>Dau.com",
        "Gyti<span class='blinker'></span>Dau.com",
        "Gytis<span class='blinker'></span>Dau.com",
        "Gytis <span class='blinker'></span>Dau.com",
        "Gytis D<span class='blinker'></span>au.com",
        "Gytis Da<span class='blinker'></span>u.com",
        "Gytis Dau<span class='blinker'></span>.com",
        "Gytis Dauj<span class='blinker'></span>.com",
        "Gytis Daujo<span class='blinker'></span>.com",
        "Gytis Daujot<span class='blinker'></span>.com",
        "Gytis Daujota<span class='blinker'></span>.com",
        "Gytis Daujotas<span class='blinker'></span>.com",
        "Gytis Daujotas.<span class='blinker'></span>com",
        "Gytis Daujotas.c<span class='blinker'></span>om",
        "Gytis Daujotas.co<span class='blinker'></span>m",
        "Gytis Daujotas.com<span class='blinker'></span>",
        "Gytis Daujotas.com<span class='blinker'></span>",
        "Gytis Daujotas.co<span class='blinker'></span>",
        "Gytis Daujotas.c<span class='blinker'></span>",
        "Gytis Daujotas.<span class='blinker'></span>",
        "Gytis Daujotas<span class='blinker'></span>",
        "Gytis Daujotas<span class='blinker'></span>",
        "Gytis Daujotas<span class='blinker'></span>",
        "Gytis Daujotas<span class='blinker'></span>",
        "Gytis Daujotas<span class='blinker'></span>",
        "Gytis Daujotas<span class='blinker'></span>",
        "Gytis Daujotas<span class='blinker'></span>",
        "Gytis Daujotas"
    ];

var ticker = 0;

function nextText() {
    document.getElementById("title").innerHTML = values[ticker];
    ticker += 1;
    console.log(ticker);
}

window.onload = function() {

    for(i = 0; i < values.length; i++) {
        o = values[i];
        setTimeout(function() {
            nextText();
        }, (i * 250) + 1000)
    }
};