// Feet to Mile Converter function

function feetToMile(feet) {
	if (feet < 0 ) {
		return " Feet can't be nagative.";
    } 
    else {
		return (feet*0.000189394);
	}
}

console.log(feetToMile(100000));


// Wood Calculator

function woodCalculator(chair, table, bed){
    let chairWoodCount = chair*1;
    let tableWoodCount = table*3;
    let bedWoodCount = bed*5;

    totalWoodNeed = (chairWoodCount + tableWoodCount + bedWoodCount)
    return totalWoodNeed;

}

let ChairNeed = 12;
let TableNeed = 5;
let bedNeed = 5;

console.log("Total Wood Need " + woodCalculator(ChairNeed, TableNeed, bedNeed) + " cubic feet.");


// Brick Calculator function

function brickCalculator(floor) {
    if (floor <=10) {
        brickNeed = floor * (15*1000)
        return brickNeed;
    }

    else if (floor >= 11 && floor <= 20) {
        let firstTenFloor = 10;
        floor = (floor - firstTenFloor);

        firstTenFloor = firstTenFloor * (15*1000)

        brickNeed = (floor*12)*1000 + firstTenFloor
        return brickNeed;
    }

    else if(floor>= 21) {
        let firstTenFloor = 10;
        let secoundTenFloor = 10;

        let twentyAboveFloor = floor - (firstTenFloor+secoundTenFloor);

        firstTenFloor = (10*15)*1000;
        secoundTenFloor = (10*12)*1000;
        twentyAboveFloor = (twentyAboveFloor*10)*1000;

        brickNeed = (firstTenFloor + secoundTenFloor + twentyAboveFloor)
        return brickNeed;

    }
}

let totalFloor = 5;

console.log(brickCalculator(totalFloor));



// tinyFriend function

function tinyFriend(friendName) {
    let smallName = friendName[0];
    let smallNameLength = friendName[0].length;

    for (let i=0; i<friendName.length; i++) {
        let nameElement = friendName[i].length

        if(nameElement < smallNameLength) {
            smallNameLength = nameElement
            smallName = friendName[i];
        }
    }

    return smallName;
    
}

let friends = ['Shimul', 'Sojol', 'Sourav', 'Rana', 'Eva']

console.log(tinyFriend(friends))