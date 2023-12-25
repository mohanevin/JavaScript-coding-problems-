var flat = function (arr, n) {
    let res=[]
    for(let i of arr)
    {
        if(Array.isArray(i)&&n>0)res.push(...flat(i,n-1))
        else res.push(i)
    }
    return res;
};
