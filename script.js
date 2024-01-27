/*function* fibonacciGenerator(limit) {
    let a = 0, b = 1;
  
    while (a <= limit) {
      const reset = yield a;
      
      if (reset) {
        a = 0;
        b = 1;
      } else {
        [a, b] = [b, a + b];
      }
    }
  }
  
  
  const fibGen = fibonacciGenerator(10);
  
 
  console.log(fibGen.next()); 
  console.log(fibGen.next()); 
  console.log(fibGen.next()); 
  console.log(fibGen.next()); 
  console.log(fibGen.next());
  console.log(fibGen.next());
  console.log(fibGen.next());
  console.log(fibGen.next());*/


  /*function* flatten(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        yield* flatten(item);
      } else {
        yield item;
      }
    }
  }
  
  const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
  const flattenGen = flatten(nestedArr);
  
  console.log([...flattenGen]);*/


  async function* asyncGenerator(promises) {
    for (const promise of promises) {
      try {
        yield await promise;
      } catch (error) {
        yield Promise.reject(error);
      }
    }
  }
  
  const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 500));
  const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));
  const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Error'), 1500));
  
  const promises = [promise1, promise2, promise3];
  const resultGen = asyncGenerator(promises);
  
  (async () => {
    for await (const result of resultGen) {
      console.log(result);
    }
  })();
  
  
       