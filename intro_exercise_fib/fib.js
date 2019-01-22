/*
A fibonacci sequence is a series of numbers in which each number is the sum of
two preceeding numbers. The simplest is the series 1 1 2 3 5 8
*/

// Solution # 1: Recursive Solution
function fib(n)
{
    if (n < 2){
        return n;
    }
    return fib(n - 1) + fib(n - 2);
    
}
var num = 6;
for (var i = 1; i<=num; i++)
{
    console.log(fib(i));
}

// Solution # 2 : pushing to a empty list.

list = [];
function sol(num_series){
    for(var i = 0; i < num_series; i++)
    {
        if (list.length <= 1)
        {
            list.push(1);
        }
        else
        {
            list.push(list[i- 1] + list[i-2]);
        }
    }
    return list;
}

console.log(sol(6));