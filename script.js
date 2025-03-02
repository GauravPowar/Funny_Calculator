document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let message = document.getElementById("message");
    let buttons = document.querySelectorAll(".btn");

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
        "Give your brain some exercise, don’t be lazy! 🏋️"
    ];

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopImmediatePropagation(); // Prevents multiple event bindings
            let value = this.innerText;
            appendValue(value);
        });
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
            let result = eval(expression); // Consider using math.js if more safety is needed
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
        }
    }

    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
    window.calculate = calculate;
    window.appendValue = appendValue;
});
