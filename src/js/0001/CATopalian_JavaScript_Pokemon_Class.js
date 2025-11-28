// CATopalian_JavaScript_Pokemon_Class.js

let pokemonData = 
[
    {
        name: 'Pikachu',
        power: 'Thunderbolt',
        hp: 35,
        type: 'Electric'
    },
    {
        name: 'Charmander',
        power: 'Flamethrower',
        hp: 39,
        type: 'Fire'
    }
];

//----//

// fibn.js

function fibn(array, name)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i].name.toLowerCase() === name.toLowerCase())
        {
            // return the element
            return array[i];
        }
    }
    // not found
    return null;
}

//----//

class Pokemon
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

    // shared battle function
    attack()
    {
        alert(this.name + ' used ' + this.power);
    }
}

class Pikachu extends Pokemon
{
    constructor(info)
    {
        super(info);
    }

    specialMove()
    {
        alert(this.name + ' used Volt Tackle!');
    }
}

//----//

let pikachu = new Pikachu(fibn(pokemonData, 'Pikachu'));

//----//

pikachu.specialMove();

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

