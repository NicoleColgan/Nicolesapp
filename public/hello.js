// create aray of 5 objects
//each object has make model year and mileage
//iterate over the array and place them in tabular form
var vehicle = [];
var car1 = {make: "Ford", model: "Focus", year: "2020", mileage: "20"};
var car2 = {make: "Ford", model: "Fiesta", year: "2010", mileage: "30"};
var car3 = {make: "Mercedez", model: "Benz", year: "2020", mileage: "20"};
var car4 = {make: "Toyota", model: "Camary", year: "2020", mileage: "20"};
var car5 = {make: "BMW", model: "BMW M5", year: "2020", mileage: "20"};
vehicle.push(car1, car2, car3, car4, car5);
for(var i = 0; i<5;i++)
{
    window.alert(vehicle[i]);
}
window.alert("hello");

