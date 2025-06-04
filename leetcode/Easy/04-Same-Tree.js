var isSameTree = function(p, q) {
    console.log(p.length)
    console.log(q.length)

    if (p.length !== q.length)
        return false;

    
    for (let i = 0; i < p.length; i++)
        if (p[i] !== q[i]) return false;

    return true;
};

// console.log(isSameTree([1, 2, 3], [1, 2, 5]));
// console.log(isSameTree([1, 2, 3], [1, null, 5]));
// console.log(isSameTree([1, 2, 3], [1, 2, 3]));
console.log(isSameTree([1, 2], [1,null,2]));