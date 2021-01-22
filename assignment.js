//https://github.com/Genius15066/JavaScript-assignment

//Converting kilometer into meter 
function kilometerToMeter(kilometer)
{
    var meter;
    if(kilometer>=0)
    {
        return meter=kilometer*1000;
    }
    else{
        return "Distance can't be negative";
    }
}

//Calculate the cost of your budget
 
function budgetCalculator(watch,phone,laptop)
{
    var totalCost;
    if(watch>=0 && phone>=0 && laptop>=0)
    {
        totalCost=(watch*50) + (phone*100) + (laptop*500);
        return totalCost;
    }
    return "No of items can't be negative";
}

//Calculate the bill of hotel 

function hotelCost(days)
{
    var totalHotelCost;

    if(days>0)
    {
        if(days<=10)
        {
            totalHotelCost=days*100;
        }
        else if( days<=20)
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

//Find the largest name  friend 

function megaFriend(friendsName)
{

    if(friendsName.length!=0)
    {
        var largestName=friendsName[0],i=1;
        while(i<friendsName.length)   //traversing the array using while loop
        {
            if(friendsName[i].length> largestName.length)
            {
                largestName=friendsName[i]; 
                
            }
            i++;
        }
        return largestName;
    }
    else{
        return "You haven't put any name in the array";
    }
  
}






