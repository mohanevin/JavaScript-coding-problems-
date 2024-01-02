function undefinedToNull(arg) {
  // your code here
  if(arg===undefined)
  {
    return null;
  }
  else if(Array.isArray(arg))
  {
    return arg.map(undefinedToNull)
  }
  else if(Object.prototype.toString.call(arg) === '[object Object]')
  {
    return Object.keys(arg).reduce((acc,key)=>({
      ...acc,[key]:undefinedToNull(arg[key])
    }),{})
  }
  return arg;
}
