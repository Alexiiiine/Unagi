eel.expose
function hello(text) {
    eel.phello(text)
    log('said hello python')
}

eel.expose
function StartUp() {
    document.getElementById('action-setup').style.display = 'none';
    document.getElementById('action-progress').style.display = 'block';
    eel.runIt()

}


async function getState() {
    let response = await eel.getState()();
    return response
}



eel.expose(log)
function log(text) {
       let l = document.createElement("div");
       l.innerText = text
       document.getElementById('logs').append(l)

}

eel.expose(setText)
function setText(id, text) {
    document.getElementById(id).innerText = text
}

function log(time, message) {
    // Create the outer div with the specified class
    let outerDiv = document.createElement("div");
    outerDiv.className = "div-block-110";

    // Create the time div and set its text
    let timeDiv = document.createElement("div");
    timeDiv.className = "text-block-44";
    timeDiv.innerText = time;

    // Create the message div and set its text
    let messageDiv = document.createElement("div");
    messageDiv.innerText = message;

    // Append the time and message divs to the outer div
    outerDiv.append(timeDiv, messageDiv);

    // Append the outer div to the logs element
    document.getElementById('logs').append(outerDiv);
}

document.getElementById('StartUp').addEventListener("click", (event) => {
    StartUp()

})








