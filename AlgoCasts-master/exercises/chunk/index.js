// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let i = 0;
//     let j = 0;
//     let myResult = [];
//     let smallerArray = [];
//     while (i < array.length)
//     {
//         if(array.length == 1)
//         {
//             myResult.push([array[i]]);
//             break;
//         }
//         while (j < size)
//         {
//             if(array[i] == undefined)
//             {
//                 break;
//             } 
//             smallerArray.push(array[i]);
//             array.shift();
//             j++;
//         }
//         j=0;
//         i=0;
//         myResult.push(smallerArray);
//         smallerArray = [];   
//     }
//     console.log(myResult);
//     return myResult;
    
// }

// Udemy Solution # 1
// Create an empty array to hold chunks called chunked
// For each element in the chunked array
//         Retrieve the last element in the chunked array
//         If last element doesnot exist or if its length is equal to chunk size
//              push a new chunk into chunked with current element
//         else add the current element into the chunked.
// function chunk(array, size)
// {
//     const chunked = [];
//     for(let element of array)
//     {
//         const last = chunked[chunked.length -1];
//         if(!last || last.length === size)
//         {
//             chunked.push([element]);
//         }
//         else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }

// Usage of slice. my solution
// function chunk(array, size)
// {
//     const chunked = [];
//     let index = 0;

//     while (index < array.length)
//     {
//         let smallerChunk = array.slice(index,size);
//         if(smallerChunk.length === size)
//         {
//             chunked.push(smallerChunk);
//         }
//         else {
//             chunked.push(array.slice(index));
//         }
//         index = index + size;
//     }
    
    
// }

// Usage of Slice Udemy Solution
function chunk(array, size)
{
    const chunked = [];
    let index = 0;
    while(index < array.length)
    {
        chunked.push(array.slice(index,index + size));
        index = index + size;
    }
    
    return chunked;
}

chunk([1, 2, 3,4], 2);

module.exports = chunk;
