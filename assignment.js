 



//Kilometer to meter :
function kilometerToMeter(km){
    const meter = 1000;
    const results = km*meter;
    if(km>=0){
        return results;
    }else{
        return "Error!"
    }
}


//Budget Calculator:
function budgetCalculator(clock,phone,laptop){
    const clockPrice = 50*clock;
    const phonePrice = 100*phone;
    const laptopPrice = 500*laptop;
    const res = clockPrice+phonePrice+laptopPrice;
    if(clock>=0 && phone>=0 && laptop>=0){
        return res;
    }else{
        return "Error!"
    }
}


//Hotel Cost:
function hotelCost(day){
    if(day<0){
        return "Error!"
    }
    else if(day<=10){
        return day*100;
    }else if(day<=20){
        const tenDay = 10*100;
        const minus = day-10;
        const cost = minus*80;
        const totalCost = tenDay+cost;
        return totalCost;
    }else{
        const firstTen = 10*100;
        const secondTwenty = 10*80;
        const thirdUnlimited = day-20;
        const thirdCost = thirdUnlimited*50;
        const finalCost = firstTen+secondTwenty+thirdCost;
        return finalCost;
    }
}


//mega friend:
function megaFriend(arr){
    let mega = "";
    for(let i=0; i<arr.length; i++){
        if(mega.length<arr[i].length){
            mega=arr[i]
        }
    }
    return mega;
}
