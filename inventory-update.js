function updateInventory(curInv, delivery) {
    let inv = new Map();

    curInv.forEach(elem => {
        inv.set(elem[1], elem[0]);
    });

    delivery.forEach(elem => {
        if (inv.has(elem[1])) {
            let oldQuantity = inv.get(elem[1]);
            inv.set(elem[1], oldQuantity + elem[0]);
        }
        else inv.set(elem[1], elem[0]);
    });

    let newInv = [];
    inv.forEach((key,value) => {
        newInv.push([key,value])
    })

    let sorted = newInv.sort((a, b) => a[1].localeCompare(b[1]))

    return sorted;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var delivery = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, delivery);