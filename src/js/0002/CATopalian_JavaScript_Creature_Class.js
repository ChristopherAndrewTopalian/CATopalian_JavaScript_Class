// CATopalian_Creature_Class.js

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
    return null;
}

//----//

class Creature
{
    constructor(info)
    {
        // info is an object with name, power, hp, etc.
        this.name = info.name;
        this.power = info.power;
        this.hp = info.hp;
        this.type = info.type;
    }

    sayName()
    {
        alert(this.name);
    }

    attack()
    {
        alert(this.name + ' used ' + this.power);
    }
}

class Sparkling extends Creature
{
    constructor(info)
    {
        super(info);
    }

    specialMove()
    {
        alert(this.name + ' unleashed Thunder Spiral!');
    }
}

//----//

let sparkling = new Sparkling(fibn(creatureData, 'Sparkling'));

//----//

sparkling.specialMove();

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

