// CATopalian_JavaScript_Pokemon_Class.js

// base pokemon data
let pokemonData = 
[
    {
        name: 'Pikachu',
        power: 'Thunderbolt',
        hp: 35,
        type: 'Electric',
        stamina: 100
    },
    {
        name: 'Charmander',
        power: 'Flamethrower',
        hp: 39,
        type: 'Fire',
        stamina: 95
    }
];

//----//

// shortcuts

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
// Holds everything that is SHARED by all Pokemon (HP, Name, Power, Stamina)
class Pokemon
{
    constructor(info)
    {
        this.name = info.name;
        this.power = info.power;
        this.hp = info.hp;
        this.type = info.type;

        // Safety Pattern: default to 100 if missing
        this.stamina = info.stamina || 100;
    }

    sayName()
    {
        cl(this.name);
    }

    attack()
    {
        cl(this.name + ' used ' + this.power);
    }

    useStamina()
    {
        if (this.stamina >= 15)
        {
            this.stamina = this.stamina - 15;
            cl(this.name + ' now has ' + this.stamina + ' stamina left');

        }
        else
        {
            cl(this.name + ' is too tired!');
        }
    }
}

//----//

// THE SUB-CLASS (Specific to Electric)
class ElectricPokemon extends Pokemon
{
    constructor(info)
    {
        // Send shared info (including stamina) up to Pokemon class
        super(info);

        // Electric-only properties
        this.electricSkill = 0.92;
    }

    specialMove()
    {
        cl(this.name + ' unleashed a High Voltage Attack!');
    }

    // This is specific flavor text, so it stays in the subclass
    sparkDash()
    {
        cl(this.name + ' dashed with sparks!');
    }
}

//----//

// Find Data
let pikachuData = fibn(pokemonData, 'Pikachu');

// Create Instance (Safety Check)
if (pikachuData)
{
    // We use ElectricPokemon because the type is Electric
    let pikachu = new ElectricPokemon(pikachuData);

    //----//

    pikachu.sayName();
    pikachu.attack();
    pikachu.useStamina(); // Now works via the Base Class!
    pikachu.sparkDash(); // Specific to Electric
    pikachu.specialMove();
}

//----//

/*
Output:
Pikachu
Pikachu used Thunderbolt
Pikachu now has 85 stamina left
Pikachu dashed with sparks!
Pikachu unleashed a High Voltage Attack!
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

