// CATopalian_JavaScript_Vehicle_Class.js

let vehicleData = 
[
    {
        name: 'RoadRunner',
        power: 'Turbo Boost',
        hp: 170,
        type: 'Car'
    },
    {
        name: 'IronHauler',
        power: 'Heavy Pull',
        hp: 250,
        type: 'Truck'
    }
];

//----//

// shortcuts

function cl(whichMessage)
{
    let result = console.log(whichMessage);
    return result;
}

//----//

// fibn.js
// find by name (case-insensitive)
function fibn(array, name)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i].name.toLowerCase() === name.toLowerCase())
        {
            return array[i];
        }
    }
    return null;
}

//----//

// THE BASE CLASS
// Shared logic for ALL vehicles
class Vehicle
{
    constructor(info)
    {
        this.name = info.name;
        this.power = info.power;
        this.hp = info.hp;
        this.type = info.type;
    }

    identify()
    {
        cl('This is ' + this.name);
    }

    usePower()
    {
        cl(this.name + ' activated ' + this.power);
    }
}

// THE SUB-CLASSES

class Car extends Vehicle
{
    constructor(info)
    {
        super(info);
        // We could add car-specific data here later (e.g., spoilerType)
    }

    drift()
    {
        cl(this.name + ' performed a drift!');
    }
}

class Truck extends Vehicle
{
    constructor(info)
    {
        super(info);
        // We could add truck-specific data here later (e.g., cargoCapacity)
    }

    haul()
    {
        cl(this.name + ' hauled a heavy load!');
    }
}

//----//

// CAR EXAMPLE
let roadRunnerData = fibn(vehicleData, 'RoadRunner');

// Safety Check
if (roadRunnerData)
{
    let roadrunner = new Car(roadRunnerData);
    
    roadrunner.identify();
    roadrunner.drift(); // Only Cars can drift
}

//----//

// TRUCK EXAMPLE (To show the difference)
let haulerData = fibn(vehicleData, 'IronHauler');

// Safety Check
if (haulerData)
{
    let hauler = new Truck(haulerData);

    hauler.identify();
    hauler.haul(); // Only Trucks can haul
}

//----//

/*
Output:
This is RoadRunner
RoadRunner performed a drift!
This is IronHauler
IronHauler hauled a heavy load!
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

