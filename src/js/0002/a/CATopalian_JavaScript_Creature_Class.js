// CATopalian_JavaScript_Creature_Class.js

/*
    This demonstrates how to handle specific data (like 'charge') 
    that only belongs to certain types of creatures.
*/

// base creature data
let creatureData = 
[
    {
        name: 'Sparkling',
        power: 'Lightning Burst',
        hp: 35,
        type: 'Electric',
        
        // This property is specific to Electric types.
        // The ElectricCreature class will know to look for this.
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

// THE BASE CLASS
// Handles the stuff everyone has (HP, Name, basic Power)
class Creature
{
    constructor(info)
    {
        this.name = info.name;
        this.power = info.power;
        this.hp = info.hp;
        this.type = info.type;
    }

    sayName()
    {
        cl(this.name);
    }

    attack()
    {
        cl(this.name + ' used ' + this.power);
    }
}

//----//

// THE TYPE CLASS
class ElectricCreature extends Creature
{
    constructor(info)
    {
        // Send the info up to the parent Creature class
        super(info);

        // Handle Electric-only properties
        // We set a default of 0 just in case the data is missing 'charge'
        this.charge = info.charge || 0; 
        this.electricAffinity = 0.85;
    }

    // this is an electric move
    specialMove()
    {
        cl(this.name + ' unleashed an Electric Spiral!');
    }

    useCharge()
    {
        if (this.charge >= 10)
        {
            this.charge = this.charge - 10;
            cl(this.name + ' now has ' + this.charge + ' charge left');
        }
        else
        {
            cl(this.name + ' is out of charge!');
        }
    }

    electricDash()
    {
        cl(this.name + ' is Dashing with Current.');
    }
}

//----//

// Find the data
let sparklingData = fibn(creatureData, 'Sparkling');

// Create the instance using the Type Class
if (sparklingData)
{
    // We use ElectricCreature because the data.type is 'Electric'
    let sparkling = new ElectricCreature(sparklingData);

    //----//

    // actions
    sparkling.sayName(); // from Base Class
    sparkling.specialMove(); // from Electric Class
    sparkling.useCharge(); // from Electric Class
    sparkling.electricDash(); // from Electric Class
}

//----//

/*
Output:
Sparkling
Sparkling unleashed an Electric Spiral!
Sparkling now has 90 charge left
Sparkling is dashing with current.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

