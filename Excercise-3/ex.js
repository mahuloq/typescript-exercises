var car = {
    brand: "Toyota",
    speed: 120,
    accelerate: function () {
        console.log("The ".concat(this.brand, " is accelerating"));
    },
    brake: function () {
        console.log("The ".concat(this.brand, " is bad at breaking, you have crashed."));
    },
};
car.accelerate();
car.brake();
