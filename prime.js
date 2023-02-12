const checkPrime = (num) => {
    let count = 0;
    for(let i = 1; i <= num; i++){
      if(num % i === 0){
        count++
      }
    }
    if(count === 2) console.log('Is prime');
    else console.log('Not a Prime')
  }
  checkPrime(0)
  checkPrime(1)
  checkPrime(23)