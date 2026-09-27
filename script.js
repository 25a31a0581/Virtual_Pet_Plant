let water = 100;
let sun = 100;
let growthStage = 0; // 0: Seed, 1: Sprout, 2: Small Plant, 3: Blooming Flower

const messages = [
    "Your little seed is resting comfortably in the soil.",
    "Look at those tiny green leaves popping out! It's growing!",
    "Your plant is thriving, growing strong and healthy stems!",
    "Incredible! Your dedication paid off—it's a gorgeous blooming flower! 🎉"
];

function updateUI() {
    document.getElementById("waterText").innerText = water;
    document.getElementById("sunText").innerText = sun;

    document.getElementById("waterFill").style.width = water + "%";
    document.getElementById("sunFill").style.width = sun + "%";

    let mood = "Happy! 😊";
    if (water < 30 || sun < 30) {
        mood = "A bit thirsty/dim 💧";
    }
    if (water <= 0 || sun <= 0) {
        mood = "Wilted 🥀";
    }
    document.getElementById("moodText").innerText = mood;

    // Render graphical plant parts based on growth stage
    let visualContainer = document.getElementById("plantVisual");
    if (growthStage === 0) {
        visualContainer.innerHTML = `<div class="seed"></div>`;
    } else if (growthStage === 1) {
        visualContainer.innerHTML = `
            <div class="stem"></div>
            <div class="sprout-leaf-left"></div>
            <div class="sprout-leaf-right"></div>
        `;
    } else if (growthStage === 2) {
        visualContainer.innerHTML = `
            <div class="big-stem"></div>
            <div class="leaf-big-1"></div>
            <div class="leaf-big-2"></div>
        `;
    } else if (growthStage === 3) {
        visualContainer.innerHTML = `
            <div class="big-stem"></div>
            <div class="leaf-big-1"></div>
            <div class="leaf-big-2"></div>
            <div class="flower-bloom" style="display: block;"></div>
        `;
    }
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
    if (water > 40 && sun > 40 && growthStage < 3) {
        growthStage++;
        document.getElementById("message").innerText = messages[growthStage];
    }
}

setInterval(function() {
    if (water > 0) water -= 4;
    if (sun > 0) sun -= 4;

    if (water <= 0 || sun <= 0) {
        document.getElementById("message").innerText = "⚠️ Oh no! Your plant is wilting! Quick, give it water and sun!";
    }
    
    updateUI();
}, 3500);

updateUI();
