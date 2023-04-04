const returnFirstTwoDrivers = function(driverList) {
    return driverList.slice(0,2);
}

const returnLastTwoDrivers = function(driverList) {
    return driverList.slice(driverList.length-2,driverList.length);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fareMult) {
    const fareMultiplier = function(fare){
        return fareMult * fare;
    }
    return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverList,selectedList) {
    if (selectedList == returnFirstTwoDrivers) {
        return selectingDrivers[0](driverList);
    } else if (selectedList == returnLastTwoDrivers) {
        return selectingDrivers[1](driverList);
    }
}
