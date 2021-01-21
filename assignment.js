//

//Converting kilometer into meter using kilometerToMeter function
function kilometerToMeter(kilometer)
{
    let meter;
    if(kilometer>=0)
    {
        return meter=kilometer*1000;
    }
    else{
        return "Distance can't be negative";
    }
}

//Calculate the cost of your budget using budgetCalculator function
 
function budgetCalculator(watch,phone,laptop)
{
    let totalCost;
    if(watch>=0 && phone>=0 && laptop>=0)
    {
        totalCost=(watch*50) + (phone*100) + (laptop*500);
        return totalCost;
    }
    return "No of items can't be negative";
}

//find the charge of hotel using hotelCost function

function hotelCost(days)
{
    let totalHotelCost;

    if(days>0)
    {
        if(days<=10)
        {
            totalHotelCost=days*100;
        }
        else if(days>10 && days<=20)
        {
            totalHotelCost=(days*100)-(days-10)*20;
            
        }
        else{
            totalHotelCost=(10*100)+(10*80)+(days-20)*50;
        }
        return totalHotelCost;
    }

    else if(days==0)
    {
        return "you wasn't stay in the hotel";
    }
    else{
        return "No of days stay in the hotel can't be negative";
    }
}

//Find the largest name friend using megaFriend function

function megaFriend(friendsArray)
{
   let largestName=friendsArray[0],i=1;
   while(i<friendsArray.length)   //traversing the array using while loop
   {
       if(friendsArray[i].length> largestName.length)
       {
           largestName=friendsArray[i]; 
           
       }
       i++;
   }
   return largestName;
}
