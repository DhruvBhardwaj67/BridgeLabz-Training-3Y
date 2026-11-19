
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

if (isSecure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

isWindowClosed = false;

isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

console.log(`After opening window: ${isSecure ? "Secure" : "Unsafe"}`);

if (!isDoorLocked || !isWindowClosed) {
    console.log("Warning: Door or window is unsecured!");
}
