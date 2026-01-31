// CATopalian_JavaScript_Creature_Class.js

let creatureData = 
[
    {
        name: 'Sparkling',
        power: 'Lightning Burst',
        hp: 35,
        type: 'Electric'
    },
    {
        name: 'Flarecub',
        power: 'Ember Roar',
        hp: 39,
        type: 'Fire'
    }
];

//----//

// fibn.js
// find item by name (case-insensitive)

function fibn(array, name)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i].name.toLowerCase() === name.toLowerCase())
        {
            return array[i];
        }
    }
    return null; // Return null if not found
}

//----//

// THE BASE CLASS
// Holds logic that ALL creatures share
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
        console.log(this.name);
    }

    attack()
    {
        console.log(this.name + ' used ' + this.power);
    }
}

// THE TYPE CLASS
class ElectricType extends Creature
{
    constructor(info)
    {
        super(info);
        // We can add electric-specific properties here if needed
        // e.g., this.mood = 'Happy';
    }

    specialMove()
    {
        console.log(this.name + ' unleashed an Electric Shock!');
    }
}

//----//

// Find the data for Sparkling
let sparklingData = fibn(creatureData, 'Sparkling');

// Create the instance using the TYPE class, not the name class
// We check if it exists first to prevent errors
if (sparklingData)
{
    let sparkling = new ElectricType(sparklingData);

    //----//

    sparkling.specialMove();
    sparkling.attack(); // It also has the base Creature methods
}

//----//

/*
Output:
Sparkling unleashed an Electric Shock!
Sparkling used Lightning Burst
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

