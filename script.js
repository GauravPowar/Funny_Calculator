/* script.js */
let display = document.getElementById("display");
let message = document.getElementById("message");
let funnyMessages = [
    "Seriously? Even my pet goldfish can solve this! 🐠",
    "Come on, you can do better! Use that big brain of yours! 🧠",
    "Did you really need a calculator for this? 😆",
    "Math teachers everywhere are crying. 😭",
    "Try harder! Even a potato can count this! 🥔",
    "Use your fingers if necessary! 🖐️",
    "This is a test... and you failed! 😂",
    "I refuse to show the answer. You figure it out! 😜",
    "Imagine needing a calculator for this... 🤦‍♂️",
    "Give your brain some exercise, don't be lazy! 🏋️"
    "Aura -10000" "For Real?"
    "Go Apologise To Trees For Wasting Resources"
];

document.addEventListener("keydown", function(event) {
    if (event.key.match(/[0-9+\-*/.=()]/)) {
        appendValue(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    message.innerText = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        let decimalSum = display.value.includes('.') ? display.value.split('+').map(Number).reduce((a, b) => a + b, 0) : 0;
        if (result < 100 && result >= 0 && decimalSum <= 1) {
            message.innerText = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
            display.value = "";
        } else {
            display.value = result;
            message.innerText = "";
        }
    } catch {
        message.innerText = "Invalid input!";
        display.value = "";
    }
}
