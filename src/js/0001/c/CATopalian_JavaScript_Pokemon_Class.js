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
// Utility: Find item by name (case-insensitive)
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
// Contains properties and methods shared by ALL Pokemon, regardless of type.
class Pokemon
{
    constructor(info)
    {
        // Hydrate the object with data from our JSON source
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

// THE SUB-CLASS (TYPE SPECIFIC)
// We extend based on Type
class ElectricPokemon extends Pokemon
{
    constructor(info)
    {
        super(info); 
        // we can add specific electric properties here (e.g., this.voltage = 1000;)
    }

    specialMove()
    {
        // Logic specific to the Electric type
        console.log(this.name + ' is charging up static electricity!');
    }
}

//----//

// Retrieve the raw data object
let pikachuData = fibn(pokemonData, 'Pikachu');

// Instantiate using the Type Class
// We check if data exists to prevent errors
if (pikachuData)
{
    let pikachu = new ElectricPokemon(pikachuData);

    //----//

    // use a shared method (from Pokemon class)
    pikachu.attack(); 

    // use the type-specific methods (from ElectricPokemon class)
    pikachu.specialMove();
}

//----//

/*
Output:
Pikachu used Thunderbolt
Pikachu is charging up static electricity!
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

