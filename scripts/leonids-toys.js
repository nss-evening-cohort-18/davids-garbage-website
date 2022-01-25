const smartWatch = {
    id: 1,
    name: "PineTime",
    price: 1000000,
    minAge: 15,
    maxAge: 29,
    weight: .5
}

const smartRefrigerator = {
    id: 2,
    name: "Samsung Galaxy Fridge",
    price: 19999,
    minAge: 4,
    maxAge: 99,
    weight: 250.2
}

const smartChair = {
    id: 3,
    name: "La-Z-Chair",
    price: 9999,
    minAge: 1,
    maxAge: 100,
    weight: 100.0,
}

const arrayOfWatches = [
    {
        id: 1,
        name: "PineTime",
        price: 25,
        minAge: 15,
        maxAge: 29,
        weight: .5
    },
    {
        id: 2,
        name: "Galaxy Gear",
        price: 300,
        minAge: 15,
        maxAge: 19,
        weight: .5
    },
    {
        id: 3,
        name: "Apple Watch",
        price: 1000000,
        minAge: 9,
        maxAge: 100,
        weight: .5
    }
]

const newWatch = {
    id:4,
    name: "Apple Watch 2",
    price: 2000000,
    minAge: 9,
    maxAge: 100,
    weight: .5
}

for (var thing in arrayOfWatches) {
    thing = {newthing: "thing"}
    console.log(thing)
}

// console.log(smartWatch["maxAge"])
console.log(arrayOfWatches.length);
arrayOfWatches.push(newWatch)
console.log(arrayOfWatches.length);
console.log(arrayOfWatches);