// CATopalian_JavaScript_Vehicle_Class.js

// base vehicle data
let vehicleData = 
[
    {
        name: 'RoadRunner',
        power: 'Turbo Boost',
        hp: 170,
        type: 'Car',
        fuel: 100
    },
    {
        name: 'IronHauler',
        power: 'Heavy Pull',
        hp: 250,
        type: 'Truck',
        fuel: 180,

        // New property specific to Trucks
        cargoCapacity: 5000
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
// find by name (case insensitive)
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
// Holds properties shared by ALL vehicles
class Vehicle
{
    constructor(info)
    {
        this.name = info.name;
        this.power = info.power;
        this.hp = info.hp;
        this.type = info.type;

        // Safety: default to 100 if missing
        this.fuel = info.fuel || 100;
    }

    identify()
    {
        cl('This is ' + this.name);
    }

    usePower()
    {
        cl(this.name + ' activated ' + this.power);
    }

    useFuel()
    {
        if (this.fuel >= 10)
        {
            this.fuel = this.fuel - 10;
            cl(this.name + ' now has ' + this.fuel + ' fuel left');
        }
        else
        {
            cl(this.name + ' is out of fuel!');
        }
    }
}

//----//

// THE SUB-CLASS (Car Specific)
class Car extends Vehicle
{
    constructor(info)
    {
        super(info);

        // Car-only properties
        this.traction = 0.85;
    }

    drift()
    {
        cl(this.name + ' performed a drift!');
    }

    turboDash()
    {
        cl(this.name + ' dashed forward with turbo!');
    }
}

// THE SUB-CLASS (Truck Specific)
class Truck extends Vehicle
{
    constructor(info)
    {
        // Send the info up to Vehicle class
        super(info);

        // Load the Truck-specific cargo capacity
        // Safety: default to 1000 lbs if missing
        this.cargoCapacity = info.cargoCapacity || 1000;
    }

    haul()
    {
        cl(this.name + ' is hauling a heavy load of ' + this.cargoCapacity + ' lbs!');
    }
}

//----//

// CAR EXAMPLE
let roadRunnerData = fibn(vehicleData, 'RoadRunner');

if (roadRunnerData)
{
    let roadrunner = new Car(roadRunnerData);

    roadrunner.identify();
    roadrunner.useFuel();
    roadrunner.drift(); 
}

//----//

// TRUCK EXAMPLE
let haulerData = fibn(vehicleData, 'IronHauler');

if (haulerData)
{
    let hauler = new Truck(haulerData);

    hauler.identify();
    
    // This method now uses the new property we just added
    hauler.haul(); 
}

//----//

/*
Output:
This is RoadRunner
RoadRunner now has 90 fuel left
RoadRunner performed a drift!
This is IronHauler
IronHauler is hauling a heavy load of 5000 lbs!
*/

//----//

/*
    This shows adding unique properties to sub-classes.
    - Cars get 'traction' (for drifting)
    - Trucks get 'cargoCapacity' (for hauling)
    - EVERYONE gets 'fuel' (from the parent Vehicle class)
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

