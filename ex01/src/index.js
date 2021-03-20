function myRecursion(arr, n) {
    var num ;
    if (n <= 0) {
        return 0;
    }
        num = myRecursion(arr, n - 1) + arr[n - 1];
        return num;
    
}

console.log(myRecursion([1], 0));
console.log(myRecursion([1, 2, 3, 4], 2));
console.log(myRecursion([1, 2, 3, 4], 3));
console.log(myRecursion([1, 2, 3, 4, 5, 6], 5));
module.exports = myRecursion;