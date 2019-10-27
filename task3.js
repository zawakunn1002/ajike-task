
let isbn13 =
[
  "9784274050190",
  "978404893065956",
  "9784ab7347784",
  "9784798121964",
  "1234567891234",
  "9784167913083"
];


for(i=0; i <= 5; i++){

  let start = isbn13[i].slice(0,3);
  let last = isbn13[i].slice(-1);


  if(isbn13[i].length !== 13) {
    console.log('false');
  }else if(start !== '978' && start !== '979'){
    console.log('false');
  }else{
    function judge(code){
        let even = 0;
        let odd = 0;
        let total = 0;
      for(let i = 0 ; i <= 11 ; i++){
        let int = code.slice(i,i+1);
        int = parseInt(int);
        if(i === 0 || (i % 2) === 0){
          odd = int * 1
          total += odd
        }else{
          even = int * 3
          total += even
        }
      }
      total = total % 10
      if(total % 10 == 0){
        total == 0;
      }else{
        total = 10 - total
      };


      let stringTotal = String(total);


      if(stringTotal !== last){
        console.log('false');
      }else{
        console.log('true');
      };
        return stringTotal;


    }
    judge(isbn13[i]);
  }

};





// function judge(code){
//     let even = 0;
//     let odd = 0;
//     let total = 0;
//   for(let i = 0 ; i <= 11 ; i++){
//     let int = code.slice(i,i+1);
//     int = parseInt(int)
//     if(i === 0 || (i % 2) === 0){
//       odd = int * 1
//       total += odd
//     }else{
//       even = int * 3
//       total += even
//     }
//   }
//   total = total % 10
//   if(total === 0){
//     total = 0;
//   }else{
//   total = 10 - total
//   };
//   console.log(total);
//   return total

// }

// judge("9784167913083");




