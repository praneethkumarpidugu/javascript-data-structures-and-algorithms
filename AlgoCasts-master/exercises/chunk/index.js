// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let i = 0;
    let j = 0;
    let myResult = [];
    let smallerArray = [];
    while (i < array.length)
    {
        if(array.length == 1)
        {
            myResult.push([array[i]]);
            break;
        }
        while (j < size)
        {
            if(array[i] == undefined)
            {
                break;
            } 
            smallerArray.push(array[i]);
            array.shift();
            j++;
        }
        j=0;
        i=0;
        myResult.push(smallerArray);
        smallerArray = [];   
    }
    console.log(myResult);
    return myResult;
    
}

chunk([1,2,3],1);
module.exports = chunk;
