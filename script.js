let water = 100;
let sun = 100;

function updateUI() {
    document.getElementById("waterText").innerText = water;
    document.getElementById("sunText").innerText = sun;

    document.getElementById("waterFill").style.width = water + "%";
    document.getElementById("sunFill").style.width = sun + "%";

    let mood = "Happy! 😊";
    let mouth = "◡";

    if (water < 30 || sun < 30) {
        mood = "A bit thirsty/dim 💧";
        mouth = "__";
    }
    if (water <= 0 || sun <= 0) {
        mood = "Wilted 🥀";
        mouth = "n";
    }
    
    document.getElementById("moodText").innerText = mood;
    document.getElementById("mouthExpression").innerText = mouth;
}

function waterPlant() {
    water = Math.min(100, water + 35);
    
    // Trigger Kettle & Rain Animation
    let kettle = document.getElementById("kettleIcon");
    let rain = document.getElementById("rainIcon");
    
    kettle.classList.add("active");
    rain.classList.add("active");
    document.getElementById("mouthExpression").innerText = "ᴗ";
    document.getElementById("message").innerText = "Yay! Fresh water bath! Ahhh, refreshing! 💧✨";

    setTimeout(() => {
        kettle.classList.remove("active");
        rain.classList.remove("active");
        updateUI();
    }, 1200);

    updateUI();
}

function sunlightPlant() {
    sun = Math.min(100, sun + 35);

    // Trigger Sun Animation
    let sunIcon = document.getElementById("sunIcon");
    
    sunIcon.classList.add("active");
    document.getElementById("mouthExpression").innerText = "ω";
    document.getElementById("message").innerText = "Ooh, warm sunshine! I feel so energized and happy! ☀️💛";

    setTimeout(() => {
        sunIcon.classList.remove("active");
        updateUI();
    }, 1500);

    updateUI();
}

// Stats slowly drop over time to keep the pet active
setInterval(function() {
    if (water > 0) water -= 3;
    if (sun > 0) sun -= 3;

    if (water <= 0 || sun <= 0) {
        document.getElementById("message").innerText = "⚠️ Brrr... I'm feeling weak! Please give me water and sun!";
    }
    
    updateUI();
}, 4000);

// Initialize interface on load
updateUI();
