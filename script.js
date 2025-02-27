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
];

document.addEventListener("keydown", function(event) {
    if (event.key.match(/[0-9+\-*/.=]/)) {
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
        let decimals = display.value.split("+").map(parseFloat);
        let sumDecimals = decimals.length === 2 ? decimals[0] + decimals[1] : 0;
        
        if (result < 100 && result >= 0 && sumDecimals <= 1) {
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
