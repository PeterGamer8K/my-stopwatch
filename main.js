const HTMLElements = {};
const publicObjects = {
    deltaTime: 0, //time in seconds 

};

const $ = document.querySelector.bind(document);


HTMLElements.playButton = $("#playButton");
HTMLElements.pauseButton = $("#pauseButton");
HTMLElements.resetButton = $("#resetButton");
HTMLElements.display = $("#display");

HTMLElements.playButton.addEventListener("click", startStopwatch);
HTMLElements.pauseButton.addEventListener("click", pauseStopwatch);
HTMLElements.resetButton.addEventListener("click", resetStopwatch);


function startStopwatch() {



    publicObjects.interval = setInterval(function() {
        publicObjects.deltaTime += 1;
        printInDisplay(publicObjects.deltaTime);

        /* if (deltaTime >= 100) {
            clearInterval(interval);
        } */

    }, 1000);

    showButton("PAUSE");
}

function pauseStopwatch() {
    clearInterval(publicObjects.interval);
    showButton("PLAY");
}

function resetStopwatch() {
    printInDisplay("00");
    clearInterval(publicObjects.interval);
    publicObjects.deltaTime = 0;
    showButton("PLAY");
}

function printInDisplay(text) {
    HTMLElements.display.textContent = text;
}


function showButton(buttonKey) {
    const buttonToShow = buttonKey == "PLAY" ? HTMLElements.playButton : HTMLElements.pauseButton;
    const buttonToHide = buttonKey == "PLAY" ? HTMLElements.pauseButton : HTMLElements.playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}