//https://github.com/UsmaanFarooq/3rd-Assignment

//Problem-1

function kilometerToMeter(Kilometer){
    var total= Kilometer*1000;
    return total;
}
var meters = kilometerToMeter(20);


//Problem-2

function budgetCalculator(watch,phone,laptop){
    var total = watch*50 + phone*100 + laptop*500;
    return total;
}
var result = budgetCalculator(5,5,5);


//Problem-3

function hotelCost(totalDay) {
var totalCost = 0;
if(totalDay<= 10){
    totalCost = totalDay * 100;
}
else if(totalDay<= 20){
    var firstPart = 10 * 100;
    var remaining = totalDay - 10;
    var secondPart = remaining * 80;
    totalCost = firstPart + secondPart;
}
else{
    var firstPart = 10*100;
    var secondPart =10*80;
    var remaining = totalDay - 20;
    var thirdPart = remaining * 50;
    totalCost = firstPart + secondPart + thirdPart;
}
 return totalCost;   
}
var result = hotelCost(10);


//Problem-4

function megaFriend(a, b, c, d){
    var friend = arguments[0];
    for (i = 0; i < arguments.length; i++){
        if (arguments[i].length > friend.length){
            friend = arguments[i];
        }
    }
    return friend;
}
var result = megaFriend("Liam", "William", "James", "Benjamin", "Alexander");

