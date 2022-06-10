let drivers = ['Normani', 'Ally', 'Dinah', 'Lauren'];
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
    
}
console.log(returnFirstTwoDrivers(drivers));
const returnLastTwoDrivers = function (drivers){

    return drivers.slice(-2);
}
let selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers] 
console.log(selectingDrivers[0]);

    
let num2= 4;
function createFareMultiplier (num){

    // let multiply= ()=> num*4;
    return function multiply(num2){
        return num * num2
    };      
}
const fare= createFareMultiplier(num2)

console.log(fare(2));


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);




function selectDifferentDrivers(drivers,fn){
    return fn(drivers);

}
selectDifferentDrivers(drivers, returnLastTwoDrivers());
