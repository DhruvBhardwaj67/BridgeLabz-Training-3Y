
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Driver inherits User
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

// Trip class
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {

        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance!");
        }

        let farePerKm = 15;

        return this.distance * farePerKm;
    }
}

// Creating objects
let user = new User("Rahul", 4.5);

let driver = new Driver("Aman", 4.8, "Swift");

console.log("User:", user.name);
console.log("Driver:", driver.name);
console.log("Vehicle:", driver.vehicle);

// Valid trip
try {
    let trip = new Trip("Mathura", "Agra", 60);

    console.log("From:", trip.fromLocation);
    console.log("To:", trip.toLocation);
    console.log("Distance:", trip.distance, "KM");
    console.log("Total Fare: Rs.", trip.calculateFare());

} catch (error) {
    console.log("Error:", error.message);
}

// Invalid trip
try {
    let trip2 = new Trip("Delhi", "Agra", -10);

    console.log("Total Fare:", trip2.calculateFare());

} catch (error) {
    console.log("Error:", error.message);
}
