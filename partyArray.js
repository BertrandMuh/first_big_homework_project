
// PSEUDOCODE
// // 1. create a function that takes name and dish
// const compare = (name, dish) => name[0].toUpperCase() == dish[0].toUpperCase() && name.at(-1) == dish.at(-1);


// let result = compare('beard', 'Bird');
// console.log(result);

// // // Method to take one item out of an array
// // slice(), pop(), shift()
// // // Method to capitalize a string
// // str.charAt(0).toUpperCase() + str.slice(1);
// // // Method to make an array from a string, with each character being an element
// // Array.from()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from


// // Method to get the first character in a string
// Array.at(0)  Array.charAt(0);
// // Method to organize an array from least to greatest
// Array.sort()
// // Method to flip array
// Array.reverse()
// // Method to add two arrays together
// str1.concat(str2);
// // Method to check if an object has a property
// hasOwnProperty()
// // BOUNUS:
// // I want to see if “hello” and “Hello” are the same
// ==
// // I want to see what properties an object has (not the values)

// // I want to round a number up
// Math.ceil();

// // Bonus 2:
// // 5. I want to generate a completely random number
// Math.random()
// // 6. I want to randomize my array

// // 7. I want to check if two arrays are the same

let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]

// Prompt 1: double the hitpoints of everyone in the party
const doubleHitpoints = () => {
    party.forEach(element => {
        element.hitpoints *= 2;
    })
}
doubleHitpoints();
console.log(party);
//Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
const subtractHitpoints = (userName, point) => {
    party.forEach(element => {
        if (element.name.toLowerCase() == userName.toLowerCase()) {
            if (element.hitpoints - point < 0) {
                element.hitpoints = 0;
            }
            else {
                element.hitpoints -= point;
            }
        }
    })
}

subtractHitpoints('timothy', 5);
//console.log(party)
//Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
const changeCompanionType = (userName, companionType) => {
    party.forEach(element => {
        if (element.name.toLowerCase() == userName.toLowerCase()) {
            element.companion.type = companionType
        }
    })
}

changeCompanionType('sarah', 'jellyfish')
//console.log(party)
// // Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
const healing = (userName) => {
    party.forEach(element => {
        if (element.name.toLowerCase() == userName.toLowerCase()) {
            if (element.belongings.includes("potion")) {
                element.hitpoints += 20;
                element.belongings.splice(element.belongings.indexOf('potion'), 1)
            }
            else {
                console.log('The health can not be improved because the user does not have the potion')
            }
        }
    })
}

healing('timothy');
//console.log(party);
// Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings.
const steal = (userName1, userName2, item) => {
    for (i = 0; i < party.length; i++) {
        //do this if the user we are stealing from does not have the item we want to steal
        if (party[i].name.toLowerCase() == userName2.toLowerCase()) {
            let newArray = party[i].belongings.map(x => x.toLowerCase());
            if (!newArray.includes(item.toLowerCase())) {
                console.log(`${userName2[0].toUpperCase() + userName2.slice(1)} doesn't have any ${item} for ${userName1[0].toUpperCase() + userName1.slice(1)} to steal.`);
            }
            //do this if the user we are stealing from has the item we want to steal
            else if (party[i].belongings.includes(item)) {
                party[i].belongings.splice(party[i].belongings.indexOf(item), 1);
                party.forEach(el => {
                    if (el.name.toLowerCase() == userName1.toLowerCase()) {
                        el.belongings.push(item);
                    }
                })
            }
        }
    }
}
steal('timothy', 'joline', 'bread');
//console.log(party)

// Prompt 6: Joline got upset and left the party. Take her out of the array.
const removePlayer = (player) => {
    party.forEach((el, el_idx) => {
        if (el.name.toLowerCase() == player.toLowerCase()) {
            party.splice(el_idx, 1);
        }
    })
}

removePlayer('joline');
//console.log(party)
// Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)
const aventurer = (newAdventurer) => {
    party.push(newAdventurer)
}
aventurer({
    name: 'John',
    hitpoints: 10,
    belongings: ['apple', 'gun'],
    companion: {
        name: 'Zaxby',
        type: 'dog'
    }
});
//console.log(party)
// Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)
const goldFound = (gold) => {
    let share = gold / party.length;
    party.forEach(el => {
        el.gold = share;
    })
}
goldFound(200);
//console.log(party)

// Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear.
const changeCompanion = (aventurer, companionName, companionType, price) => {
    party.forEach(el => {
        if (el.name.toLowerCase() == aventurer.toLowerCase()) {
            el.companion.name = companionName;
            el.companion.type = companionType;
            el.gold -= price;
        }
    })
}
changeCompanion('sarah', 'Booboo', 'Bear', 2);
//console.log(party)
// Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword"
const rustySword = (aventurer) => {
    party.forEach(el => {
        if (el.name.toLowerCase() == aventurer.toLowerCase()) {
            el.belongings.forEach((item, idx) => {
                if (item.toLowerCase() == 'sword') {
                    el.belongings[idx] = 'Rusty Sword';
                }
            })
        }
    })
}
rustySword('timothy');
//console.log(party)
// Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.
const setLeader = (userName) => {
    party.forEach(el => {
        if (el.name.toLowerCase() == userName.toLowerCase()) {
            el.leader = true;
        }
        else {
            el.leader = false;
        }
    })
}
setLeader('John');
console.log(party);