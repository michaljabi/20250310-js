let x = 0

setInterval(() => {
   console.log('Use outer scope', ++x);
}, 1000)


setInterval(() => {
    let z = 0;
    console.log('Not using outer scope', ++z);
 }, 1000)

