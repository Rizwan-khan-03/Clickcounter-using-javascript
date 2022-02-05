 let value =document.getElementById('value');
 let decrease =document.querySelector('.decrease');
 let increase =document.querySelector('.increase');
 let reset =document.querySelector('.reset');
 let count =0;
 increase.addEventListener("click", function() {
     count++;
     value.innerHTML =count;
     if (count > 0) {
      value.style.color = "green";
    }
     console.log(count)
    
   });
 decrease.addEventListener("click", function() {
     count--;
     value.innerHTML =count;
     if (count < 0) {
      value.style.color = "red";
    }
     console.log(count)
    
   });
   reset.addEventListener("click", function() {
   
     count=0;
     value.innerHTML=count;
     if (count === 0) {
      value.style.color = "#222";
    }
     console.log(count)
    
   });

//  //set inital value to zero
//  let count = 0;
//  // select value and buttons using forEach loop
//  const value = document.querySelector("#value");
//  const btns = document.querySelectorAll(".btn");

//  btns.forEach(function (btn) {
//    btn.addEventListener("click", function (e) {
//      const styles = e.currentTarget.classList;
//      if (styles.contains("decrease")) {
//        count--;
//      } else if (styles.contains("increase")) {
//        count++;
//      } else {
//        count = 0;
//      }

//      if (count > 0) {
//        value.style.color = "green";
//      }
//      if (count < 0) {
//        value.style.color = "red";
//      }
//      if (count === 0) {
//        value.style.color = "#222";
//      }
//      value.textContent = count;
//    });
//  });

console.log(value)
console.log(decrease)
console.log(increase)
console.log(reset)
