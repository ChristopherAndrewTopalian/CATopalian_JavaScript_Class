// CATopalian_JavaScript_Creature_Class.js

// base creature data
let creatureData = 
[
    {
        name: 'Sparkling',
        power: 'Lightning Burst',
        hp: 35,
        type: 'Electric',

        // new property stored directly in the object
        charge: 100
    },
    {
        name: 'Flarecub',
        power: 'Ember Roar',
        hp: 39,
        type: 'Fire'
    },
    {
        name: 'Aqualin',
        power: 'Tidal Pulse',
        hp: 47,
        type: 'Water'
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
// find item by name (case insensitive)
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

class Creature
{
    constructor(info)
    {
        // base properties
        this.name = info.name;
        this.power = info.power;
        this.hp = info.hp;
        this.type = info.type;
    }

    sayName()
    {
        cl(this.name);

        alert(this.name);
    }

    attack()
    {
        cl(this.name + ' used ' + this.power);

        alert(this.name + ' used ' + this.power);
    }
}

//----//

class Sparkling extends Creature
{
    constructor(info)
    {
        super(info);

        // new extended class only properties
        this.charge = info.charge;
        this.electricAffinity = 0.85;
    }

    specialMove()
    {
        cl(this.name + ' unleashed Thunder Spiral!');

        alert(this.name + ' unleashed Thunder Spiral!');
    }

    useCharge()
    {
        // draining charge
        this.charge = this.charge - 10;

        cl(this.name + ' now has ' + this.charge + ' charge left');

        alert(this.name + ' now has ' + this.charge + ' charge left');
    }

    electricDash()
    {
        cl(this.name + ' is Dashing with Current.');

        alert(this.name + ' is Dashing with Current.');
    }
}

//----//

// create instance from array data
let sparkling = new Sparkling(fibn(creatureData, 'Sparkling'));

//----//

// sparkling actions
sparkling.sayName();
sparkling.specialMove();
sparkling.useCharge();
sparkling.electricDash();

//----//

/*
Sparkling
Sparkling unleashed Thunder Spiral!
Sparkling now has 90 charge left
Sparkling is dashing with current.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

