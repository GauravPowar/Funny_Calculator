document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let message = document.getElementById("message");
    let buttons = document.querySelectorAll(".btn");

    let funnyMessages = [
        "Please use your brain! 🧠",
        "Go back to primary school! 📚",
        "Really? That's embarrassing! 😆",
        "Try harder! Even a potato can do this! 🥔",
        "I refuse to show the answer. You figure it out! 😜"
    ];

    buttons.forEach(button => {
        button.onclick = function () { // Prevent multiple bindings
            let value = this.innerText;
            appendValue(value);
        };
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
            let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
            let result = eval(expression); // Consider using math.js for safety
            result = parseFloat(result.toFixed(10).replace(/\.0+$/, ""));

            if (result > 0 && result < 100) {
                message.innerText = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
                display.value = ""; // Hide the actual answer
            } else {
                message.innerText = "";
                display.value = result;
            }
        } catch (error) {
            message.innerText = "Invalid expression!";
            display.value = "";
        }
    }

    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
    window.calculate = calculate;
    window.appendValue = appendValue;
});
