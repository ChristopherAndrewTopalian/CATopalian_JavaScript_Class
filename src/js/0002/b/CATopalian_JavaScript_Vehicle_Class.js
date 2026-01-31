// CATopalian_JavaScript_Vehicle_Class.js

// base vehicle data
let vehicleData = 
[
    {
        name: 'RoadRunner',
        power: 'Turbo Boost',
        hp: 170,
        type: 'Car',

        // new property
        fuel: 100
    },
    {
        name: 'IronHauler',
        power: 'Heavy Pull',
        hp: 250,
        type: 'Truck',
        fuel: 180
    }
];

//----//

// shortcuts

function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

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

class Vehicle
{
    constructor(info)
    {
        // base properties
        this.name = info.name;
        this.power = info.power;
        this.hp = info.hp;
        this.type = info.type;
    }

    identify()
    {
        cl('this is ' + this.name);
        alert('this is ' + this.name);
    }

    usePower()
    {
        cl(this.name + ' activated ' + this.power);
        alert(this.name + ' activated ' + this.power);
    }
}

//----//

class Car extends Vehicle
{
    constructor(info)
    {
        super(info);

        // new extended class properties
        this.fuel = info.fuel;
        this.traction = 0.85;
    }

    drift()
    {
        cl(this.name + ' performed a drift!');
        alert(this.name + ' performed a drift!');
    }

    useFuel()
    {
        this.fuel = this.fuel - 10;

        cl(this.name + ' now has ' + this.fuel + ' fuel left');
        alert(this.name + ' now has ' + this.fuel + ' fuel left');
    }

    turboDash()
    {
        cl(this.name + ' dashed forward with turbo!');
        alert(this.name + ' dashed forward with turbo!');
    }
}

//----//

// create instance
let roadrunner = new Car(fibn(vehicleData, 'RoadRunner'));

//----//

roadrunner.identify();
roadrunner.useFuel();
roadrunner.drift();
roadrunner.turboDash();

//----//

/*
this is RoadRunner
RoadRunner now has 90 fuel left
RoadRunner performed a drift!
RoadRunner dashed forward with turbo!
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

