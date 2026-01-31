// CATopalian_JavaScript_Vehicle_Class.js

// vehicle data
let vehicleData = 
[
    {
        name: 'RoadRunner',
        type: 'Car',
        hp: 170,
        fuel: 100,
        power: 'Turbo Boost'
    },
    {
        name: 'IronHauler',
        type: 'Truck',
        hp: 250,
        fuel: 180,
        power: 'Heavy Pull',
        cargoCapacity: 5000
    },
    // NEW: Motorcycle Data
    {
        name: 'StreetViper',
        type: 'Motorcycle',
        hp: 90,
        fuel: 40, 
        power: 'Nitrous Burst',
        
        // Specific to bikes
        agility: 95
    },
    // NEW: Plane Data
    {
        name: 'SkyKing',
        type: 'Plane',
        hp: 400,
        fuel: 500,
        power: 'Afterburner',
        
        // Specific to planes
        wingspan: 60
    }
];

//----//

function cl(whichMessage)
{
    let result = console.log(whichMessage);
    return result;
}

// fibn.js
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

// BASE CLASS
class Vehicle
{
    constructor(info)
    {
        this.name = info.name;
        this.type = info.type;
        this.power = info.power;
        this.hp = info.hp;
        
        // Shared Safety Pattern
        this.fuel = info.fuel || 50; 
    }

    identify()
    {
        cl('Vehicle ID: ' + this.name + ' (' + this.type + ')');
    }

    useFuel(amount)
    {
        if (this.fuel >= amount)
        {
            this.fuel = this.fuel - amount;
            cl(this.name + ' fuel level: ' + this.fuel);
            return true; // Report success
        }
        else
        {
            cl(this.name + ' is out of fuel!');
            return false; // Report failure
        }
    }
}

//----//

// SUB-CLASS
class Motorcycle extends Vehicle
{
    constructor(info)
    {
        super(info);
        this.agility = info.agility || 50;
    }

    // Only bikes can do this
    popWheelie()
    {
        if (this.agility > 80)
        {
            cl(this.name + ' pops a massive wheelie!');
        }
        else
        {
            cl(this.name + ' tried to wheelie but wobbled.');
        }
    }
}

// SUB-CLASS
class Plane extends Vehicle
{
    constructor(info)
    {
        super(info);
        this.wingspan = info.wingspan || 30;
        this.altitude = 0; // Planes start on the ground
    }

    takeOff()
    {
        // Using the parent method to check fuel first!
        if (this.useFuel(20))
        {
            this.altitude = 1000;
            cl(this.name + ' takes off! Altitude is now ' + this.altitude + 'ft.');
        }
    }

    doBarrelRoll()
    {
        if (this.altitude > 500)
        {
            cl(this.name + ' does a barrel roll with its ' + this.wingspan + 'ft wingspan!');
        }
        else
        {
            cl(this.name + ' is too low to stunt!');
        }
    }
}

//----//

// The Motorcycle
let bikeData = fibn(vehicleData, 'StreetViper');

if (bikeData)
{
    let myBike = new Motorcycle(bikeData);
    
    myBike.identify();
    myBike.popWheelie(); // Unique to Bike
    myBike.useFuel(5);   // Shared from Vehicle
}

cl('---');

//-//

// The Plane
let planeData = fibn(vehicleData, 'SkyKing');

if (planeData)
{
    let myPlane = new Plane(planeData);

    myPlane.identify();
    
    // Logic check: Can't barrel roll on the ground
    myPlane.doBarrelRoll(); 

    // Now take off
    myPlane.takeOff();

    // Now we can stunt
    myPlane.doBarrelRoll();
}

//----//

/*
Output:
Vehicle ID: StreetViper (Motorcycle)
StreetViper pops a massive wheelie!
StreetViper fuel level: 35
---
Vehicle ID: SkyKing (Plane)
SkyKing is too low to stunt!
SkyKing fuel level: 480
SkyKing takes off! Altitude is now 1000ft.
SkyKing does a barrel roll with its 60ft wingspan!
*/

//----//

/*
    We are adding two new types: 'Motorcycle' and 'Plane'.
    
    This shows how the 'Vehicle' parent class is flexible enough
    to handle things that drive AND things that fly.
    1. Motorcycle: Has 'agility' for stunts.
    2. Plane: Has 'altitude' and 'wingspan'.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

