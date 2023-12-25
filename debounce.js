function debounce(func, wait) {
  let timer=null;
  return function(...args)
  {
   clearTimeout(timer)
   timer=setTimeout(()=>func(...args),wait) 
  }
}
