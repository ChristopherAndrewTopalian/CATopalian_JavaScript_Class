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
    }

    attack()
    {
        cl(this.name + ' used ' + this.power);
    }
}

//----//

class Sparkling extends Creature
{
    constructor(info)
    {
        super(info);

        // extended class only properties
        this.charge = info.charge;
        this.electricAffinity = 0.85;
    }

    specialMove()
    {
        cl(this.name + ' unleashed Thunder Spiral!');
    }

    useCharge()
    {
        // draining charge
        this.charge = this.charge - 10;

        cl(this.name + ' now has ' + this.charge + ' charge left');
    }

    electricDash()
    {
        cl(this.name + ' is Dashing with Current.');
    }
}

//----//

// es6
//let sparklingFind = creatureData.find(p => p.name === 'Sparkling');

// es5
let sparklingFind = creatureData.find(function(p)
{
    return p.name === 'Sparkling';
});

let sparkling = new Sparkling(sparklingFind);

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

