// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
// matrix (5)
// [[1, 2, 3, 4, 5],
// [16,17,18,19,6],
// [15,24,25,20,7],
// [14,23,22,21,8],
// [13,12,11,10,9]]

function matrix(n) {
    const results = [];

    for (let i=0; i<n; i++)
    {
        results.push([])
    }
    
    let counter = 1;

    let start_row = 0;
    let end_row = n - 1;
    let start_col = 0;
    let end_col = n - 1;

    while (start_row <= end_row && start_col <= end_col)
    {
        // first column
        for(let i=start_col; i<=end_col; i++)
        {
            results[start_row][i] = counter;
            counter++;
        }
        start_row++;

        // right column
        for(let i=start_row; i<=end_row; i++)
        {
            results[i][end_col] = counter;
            counter++;
        }
        end_col--;

        // bottow row
        for(let i=end_col; i>= start_col; i--)
        {
            results[end_row][i] = counter;
            counter++;
        }
        end_row--;

        // left column

        for(let i=end_row; i>=start_row; i--)
        {
            results[i][start_col] = counter;
            counter++;
        }
        start_col++;

    }
    
    let j = 0;
    while(j < results.length)
    {
        console.log(`col:${j} =>  ${results[j]}`);
        j++
        
    }
    

}
matrix(3);

module.exports = matrix;
