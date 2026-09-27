let water = 100;
let sun = 100;
let growthStage = 0; // 0: Seed, 1: Sprout, 2: Small Plant, 3: Blooming Flower

const plantEmojis = ["🌰", "🌱", "🌿", "🌸"];
const messages = [
    "Your little seed is resting comfortably in the soil.",
    "Look at those tiny green leaves popping out! It's growing!",
    "Your plant is thriving, growing strong and healthy stems!",
    "Incredible! Your dedication paid off—it's a gorgeous blooming flower! 🎉"
];

function updateUI() {
    // Update text stats
    document.getElementById("waterText").innerText = water;
    document.getElementById("sunText").innerText = sun;

    // Update progress bar widths
    document.getElementById("waterFill").style.width = water + "%";
    document.getElementById("sunFill").style.width = sun + "%";

    // Mood and visual check
    let mood = "Happy! 😊";
    if (water < 30 || sun < 30) {
        mood = "A bit thirsty/dim 💧";
    }
    if (water <= 0 || sun <= 0) {
        mood = "Wilted 🥀";
    }
    document.getElementById("moodText").innerText = mood;
    document.getElementById("plantEmoji").innerText = plantEmojis[growthStage];
}

function waterPlant() {
    water = Math.min(100, water + 30);
    document.getElementById("message").innerText = "You gave it fresh water! It looks refreshed. 💧";
    checkGrowth();
    updateUI();
}

function sunlightPlant() {
    sun = Math.min(100, sun + 30);
    document.getElementById("message").innerText = "You moved it into warm, cozy sunshine! ☀️";
    checkGrowth();
    updateUI();
}

function checkGrowth() {
    // If stats are healthy, progress growth up to max stage (3)
    if (water > 40 && sun > 40 && growthStage < 3) {
        growthStage++;
        document.getElementById("message").innerText = messages[growthStage];
    }
}

// Decrease stats every 3.5 seconds to simulate real-time care
setInterval(function() {
    if (water > 0) water -= 4;
    if (sun > 0) sun -= 4;

    if (water <= 0 || sun <= 0) {
        document.getElementById("message").innerText = "⚠️ Oh no! Your plant is wilting! Quick, give it water and sun!";
    }
    
    updateUI();
}, 3500);

// Initialize layout on load
updateUI();
