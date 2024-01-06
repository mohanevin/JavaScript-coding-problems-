let arr=[1,2,3,4,5]


Array.prototype.myMap=function (callback){
    let result=[];
    for(let i=0;i<this.length;i++)
    {
        result.push(callback(this[i],i,this))
    }
    return result;
}

let resArr=arr.myMap((i)=>i*2)
console.log(resArr)
