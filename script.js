document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let message = document.getElementById("message");
    let buttons = document.querySelectorAll(".btn");
    let footerExists = document.querySelector(".footer");
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

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.innerText;
            if (value === "AC") {
                clearDisplay();
            } else if (value === "⌫") {
                deleteLast();
            } else if (value === "=") {
                calculate();
            } else {
                appendValue(value);
            }
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
            let result = math.evaluate(display.value);
            result = parseFloat(result.toFixed(10).replace(/\.0+$/, ""));
            
            if (result < 100 && Math.random() < 0.5) {  // 50% chance of showing a funny message
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

    // Dark mode toggle
    let darkMode = localStorage.getItem("darkMode") === "true";
    if (darkMode) {
        document.body.classList.add("dark-mode");
    }

    function toggleDarkMode() {
        darkMode = !darkMode;
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", darkMode);
    }

    // Add credit and GitHub link only if not already added
    if (!footerExists) {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="footer">
                <button onclick="toggleDarkMode()">Toggle Dark Mode</button>
                <a href="https://github.com/GauravPowar/Funny_Calculator" target="_blank">View Project</a>
            </div>
        `);
    }
});
