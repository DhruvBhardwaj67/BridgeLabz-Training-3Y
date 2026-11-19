
let temperature = 28;
let isRaining = false;
let windSpeed = 10;
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}

if ((temperature > 35 && !isRaining) || windSpeed > 40) {
    console.log("Warning: Extreme weather conditions!");
}
