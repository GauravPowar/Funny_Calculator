let display = document.getElementById("display");
let message = document.getElementById("message");
let emojiContainer = document.getElementById("emoji-container");
let funnyMessages = ["Please use your brain", "Go back to primary school", "Really?", "That's embarrassing!", "Try harder!"];
let emojis = ["😂", "👎"];

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
        if (result < 100) {
            message.innerText = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
            display.value = "";
            rainEmojis();
        } else {
            display.value = result;
            message.innerText = "";
        }
    } catch {
        message.innerText = "Invalid input!";
        display.value = "";
    }
}

function rainEmojis() {
    for (let i = 0; i < 20; i++) {
        let emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 2000);
    }
}
