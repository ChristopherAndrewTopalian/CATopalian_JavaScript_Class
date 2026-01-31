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

class Vehicle
{
    constructor(info)
    {
        // info has name, power, hp, type
        this.name = info.name;
        this.power = info.power;
        this.hp = info.hp;
        this.type = info.type;
    }

    identify()
    {
        alert('this is ' + this.name);
    }

    usePower()
    {
        alert(this.name + ' activated ' + this.power);
    }
}

class Car extends Vehicle
{
    constructor(info)
    {
        super(info);
    }

    drift()
    {
        alert(this.name + ' performed a drift!');
    }
}

class Truck extends Vehicle
{
    constructor(info)
    {
        super(info);
    }

    haul()
    {
        alert(this.name + ' hauled a heavy load!');
    }
}

//----//

let roadrunner = new Car(fibn(vehicleData, 'RoadRunner'));

roadrunner.drift();

//----//

/*
RoadRunner performed a drift!
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

