// function outer() {
//   let movie = 'Amadeus';

//   function inner() {
//     // let movie = "The Shining";

//     function extraInner() {
//       //movie is not defined in this function
//       //but it has access to parent function's variables
//       console.log(movie.toUpperCase())
//     }
//     extraInner();
//   }
//   inner();
// }

// outer(); //'AMADEUS'
function o() {
  let h = "s";
  function i() {
    let x = 1;
    let h = "b";
    console.log(h);
    function ei() {
      console.log(h.toLocaleUpperCase());
    }
    ei();
  }
  i();
  // console.log(x);
}
console.log(o());
