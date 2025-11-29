// CATopalian_JavaScript_Pokemon_Class.js

// base pokemon data
let pokemonData = 
[
    {
        name: 'Pikachu',
        power: 'Thunderbolt',
        hp: 35,
        type: 'Electric',

        // new property
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

class Pokemon
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

class Pikachu extends Pokemon
{
    constructor(info)
    {
        super(info);

        // new extended class properties
        this.stamina = info.stamina;
        this.electricSkill = 0.92;
    }

    specialMove()
    {
        cl(this.name + ' used Volt Tackle!');
        alert(this.name + ' used Volt Tackle!');
    }

    useStamina()
    {
        this.stamina = this.stamina - 15;

        cl(this.name + ' now has ' + this.stamina + ' stamina left');
        alert(this.name + ' now has ' + this.stamina + ' stamina left');
    }

    sparkDash()
    {
        cl(this.name + ' dashed with sparks!');
        alert(this.name + ' dashed with sparks!');
    }
}

//----//

let pikachu = new Pikachu(fibn(pokemonData, 'Pikachu'));

//----//

pikachu.sayName();
pikachu.attack();
pikachu.useStamina();
pikachu.sparkDash();
pikachu.specialMove();

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

