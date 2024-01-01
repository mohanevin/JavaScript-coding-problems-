function curry(fn) {
  // your code here
  return function innerCurry(...args)
  {
    if(args.length>=fn.length)
    {
      return fn.apply(this,args)
    }
    else
    {
      return innerCurry.bind(this,...args)
    }
  }
}
