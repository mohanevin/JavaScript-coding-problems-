const count=(()=>{
  let value=0;
  function func(){
    return ++value;
  }
  func.reset=()=>
  {
    value=0;
  }
  return func;
})();
