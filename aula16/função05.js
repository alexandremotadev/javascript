// RECURSIVIDADE

function fatorial(n) {
  if(n==1) {
    return 1
  } else {
    return n* fatorial(n-1) // função chamando ela mesma
  }
}

console.log(fatorial(5))

/*

5! = 5x4x3x2x1 = 120
5! = 5 * 4! = 120

n! = n * (n - 1)
1! = 1

*/