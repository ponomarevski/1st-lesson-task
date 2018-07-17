'use strict';

let transmissions = ['manual', 'automatic'];
let fuelTypes = ['gasoline', 'diesel'];
let carBodies = {
    J: 'Jeep', 
    U: 'Universal'
};

let cars = [{age: 21, transmission: 1, model: 'BMW', modelSpec: '640', mileage: 77666, fuelType: 1, carBody: 'J'},
            {age: 30, transmission: 2, model: 'VW', modelSpec: '337', mileage: 69894, fuelType: 2, carBody: 'U'}
        
]

let newcar = cars.map((car) =>  ({
    releaseDate: 2018 - car.age,
    transmission: transmissions[car.transmission - 1],
    model: `${car.model} ${car.modelSpec}`,
    mileage: `${( Math.floor(car.mileage/1000) )}k` ,
    fuelType:fuelTypes[car.fuelType - 1],
    carBody: carBodies[car.carBody]


}));

console.log(newcar);