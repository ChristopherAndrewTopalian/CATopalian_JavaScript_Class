// CATopalian_JavaScript_Pokemon_Class.js

// base pokemon data
let pokemonData = 
[
    {
        name: 'Pikachu',
        hp: 100, // Represents Max Power
        type: 'Electric',
        energy: 100
    },
    {
        name: 'Squirtle',
        hp: 100,
        type: 'Water',
        energy: 100
    },
    {
        name: 'Charmander',
        hp: 100,
        type: 'Fire',
        energy: 100
    }
];

//----//

function cl(whichMessage)
{
    let result = console.log(whichMessage);
    return result;
}

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

// BASE CLASS
class Pokemon
{
    constructor(info)
    {
        this.name = info.name;
        this.hp = info.hp;
        this.type = info.type;
        
        // Everyone has Energy to spend on cool moves
        this.energy = info.energy || 100;
    }

    sayName()
    {
        cl('=== ' + this.name + ' ===');
    }

    // A helper to use energy safely
    useEnergy(amount)
    {
        if (this.energy >= amount)
        {
            this.energy = this.energy - amount;
            return true; // Success
        }
        else
        {
            cl(this.name + ' needs to recharge energy!');
            return false; // Not enough
        }
    }
}

//----//

// sub class - ELECTRIC
class ElectricPokemon extends Pokemon
{
    constructor(info)
    {
        super(info);
        this.voltageMultiplier = 1; // Starts normal
    }

    // Action: Charge Up
    // Multiplies the power of the next move
    boostVoltage()
    {
        this.voltageMultiplier++;
        cl(this.name + ' is amplifying power! Multiplier: x' + this.voltageMultiplier);
    }

    castThunder()
    {
        if (this.useEnergy(10))
        {
            let totalPower = 50 * this.voltageMultiplier;
            cl(this.name + ' casts Thunder with ' + totalPower + ' power!');
            
            // Reset after the big blast
            this.voltageMultiplier = 1; 
        }
    }
}

// sub class - WATER
class WaterPokemon extends Pokemon
{
    constructor(info)
    {
        super(info);
        this.flowState = false; // A special mode for water flow
    }

    // Action: Enter Flow State
    enterFlow()
    {
        this.flowState = true;
        cl(this.name + ' enters a Hydro Flow state. Accuracy is now 100%.');
    }

    hydroPump()
    {
        if (this.useEnergy(10))
        {
            if (this.flowState === true)
            {
                cl(this.name + ' fires a Perfect Hydro Pump! Direct Hit!');
            }
            else
            {
                cl(this.name + ' fires a standard Hydro Pump.');
            }
        }
    }
}

// sub class - FIRE
class FirePokemon extends Pokemon
{
    constructor(info)
    {
        super(info);
        this.heatLevel = 1; // Starts at Level 1
    }

    // Action: Intensity
    stokeFlames()
    {
        this.heatLevel++;
        cl(this.name + ' intensity rises to Level ' + this.heatLevel);
    }

    // LOGIC GATING: The attack changes based on the Level
    unleashFire()
    {
        if (this.useEnergy(10)) 
        {
            if (this.heatLevel === 1)
            {
                cl(this.name + ' casts Ember.');
            } 
            else if (this.heatLevel === 2)
            {
                cl(this.name + ' blasts Flamethrower!');
            } 
            else
            {
                cl(this.name + ' does the ultimate FIRE SPIN!');
            }
        }
    }
}

//----//

// PIKACHU (Building up one massive hit)
let pikaData = fibn(pokemonData, 'Pikachu');
if (pikaData)
{
    let pikachu = new ElectricPokemon(pikaData);
    pikachu.sayName();
    pikachu.boostVoltage(); // x2
    pikachu.boostVoltage(); // x3
    pikachu.castThunder(); // 50 * 3 = 150 power!
}

// SQUIRTLE (Activating a mode)
let squirtleData = fibn(pokemonData, 'Squirtle');

if (squirtleData)
{
    let squirtle = new WaterPokemon(squirtleData);
    squirtle.sayName();
    squirtle.hydroPump(); // Normal
    squirtle.enterFlow(); // Activate Mode
    squirtle.hydroPump(); // Perfect
}

// CHARMANDER (Evolving the attack)
let charData = fibn(pokemonData, 'Charmander');

if (charData)
{
    let charmander = new FirePokemon(charData);

    charmander.sayName();
    
    // Level 1
    charmander.unleashFire(); // Ember

    // Level up
    charmander.stokeFlames();
    charmander.unleashFire(); // Flamethrower

    // Max Level
    charmander.stokeFlames();
    charmander.unleashFire(); // FIRE SPIN!
}

//----//

/*
Output:
=== Pikachu ===
Pikachu is amplifying power! Multiplier: x2
Pikachu is amplifying power! Multiplier: x3
Pikachu casts Thunder with 150 power!
=== Squirtle ===
Squirtle fires a standard Hydro Pump.
Squirtle enters a Hydro Flow state. Accuracy is now 100%.
Squirtle fires a Perfect Hydro Pump! Direct Hit!
=== Charmander ===
Charmander casts Ember.
Charmander intensity rises to Level 2
Charmander blasts Flamethrower!
Charmander intensity rises to Level 3
Charmander does the ultimate FIRE SPIN!
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

