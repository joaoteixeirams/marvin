function removerPosicao (y,x) {
  
  y.splice(x-1,1 )
return y
    
}

console.log(removerPosicao([42, "xyz", true, 0, 14]))