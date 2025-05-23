document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let messageBox = document.createElement("div"); // For funny messages
    messageBox.id = "message";
    document.querySelector(".calculator").appendChild(messageBox);

    const funnyMessages = [
        "That's cute! 😆",
        "Try aiming higher! 🚀",
        "Even my pet goldfish can count higher! 🐠",
        "Is that your final answer? 😜",
        "Math is hard, isn't it? 🤓",
        "You call that a number? 😂",
        "You call that a problem? 😂",
        "Oof, too low! Try again! 😬",
        "I feel sorry for you! 🙄"
    ];

    function appendValue(value) {
        if (display) {
            display.value += value;
            messageBox.innerText = ""; // Clear previous messages
        }
    }

    function clearDisplay() {
        if (display) {
            display.value = "";
            messageBox.innerText = "";
        }
    }

    function calculate() {
        try {
            let result = new Function("return " + display.value.replace("%", "/100"))();
            if (result < 100) {
                messageBox.innerText = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
                display.value = ""; // Clear display for fun effect
            } else {
                display.value = result;
                messageBox.innerText = ""; // Clear any old message
            }
        } catch {
            display.value = "Error";
            messageBox.innerText = "Nice try, but nope! 😜";
        }
    }

    // Expose functions globally
    window.appendValue = appendValue;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;
});
