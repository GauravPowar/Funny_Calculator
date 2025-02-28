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
let darkMode = false;
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode");
}

// Add credit and GitHub link
document.addEventListener("DOMContentLoaded", function () {
    document.body.insertAdjacentHTML("beforeend", `
        <div class="footer">
            <button onclick="toggleDarkMode()">Toggle Dark Mode</button>
            <a href="https://github.com/GauravPowar/Funny_Calculator" target="_blank">View Project</a>
        </div>
    `);
});
