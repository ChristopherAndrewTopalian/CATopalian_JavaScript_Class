// CATopalian_JavaScript_Creature_Class.js

// base creature data
let creatureData = 
[
    {
        name: 'Sparkling',
        power: 'Lightning Burst',
        hp: 35,
        type: 'Electric',
        // This property is unique to Electric types
        charge: 100
    },
    {
        name: 'AmberFlare',
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

// THE BASE CLASS
// Handles the shared logic: Name, HP, basic Power
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
        // Pass basic info to the parent Creature class
        super(info);

        // Initialize Electric-specific properties
        // Safety: default to 0 if 'charge' is missing in the data
        this.charge = info.charge || 0; 
        this.electricAffinity = 0.85;
    }

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

// es5 find
let sparklingFind = creatureData.find(function(p)
{
    return p.name === 'Sparkling';
});

// Create the instance using the generic TYPE class
// We check if data was found to prevent errors
if (sparklingFind)
{
    let sparkling = new ElectricCreature(sparklingFind);

    //----//

    // sparkling actions
    sparkling.sayName(); // Inherited from Creature
    sparkling.specialMove(); // Specific to ElectricCreature
    sparkling.useCharge();    // Specific to ElectricCreature
    sparkling.electricDash(); // Specific to ElectricCreature
}

//----//

/*
Output:
Sparkling
Sparkling unleashed an Electric Spiral!
Sparkling now has 90 charge left
Sparkling is Dashing with Current.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

