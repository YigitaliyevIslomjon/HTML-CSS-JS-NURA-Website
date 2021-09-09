window.addEventListener('load', function1);
window.addEventListener('load', function2);
window.addEventListener('load', function3);
window.addEventListener('load', function4);

function function1(){
  const numb = document.getElementById("counter-number-1");
  let counter = 3800;
  setInterval(()=>{
    if(counter == 4000){
      clearInterval();
    }
    else{     
       counter+=1;
      numb.innerText = counter ;
    }
  },1);
}


function function2(){
  const numb = document.querySelector("#counter-number-2");
  let counter = -180;
  setInterval(()=>{
    if(counter == 14){
      clearInterval();
    }
    else{     
       counter+=1;
      numb.textContent = counter ;
    }
  },1);
}

function function3(){
  const numb = document.querySelector("#counter-number-3");
  let counter = 2800;
  setInterval(()=>{
    if(counter == 3000){
      clearInterval();
    }
    else{     
       counter+=1;
      numb.textContent = counter ;
    }
  },1);
}
function function4(){
  const numb = document.querySelector("#counter-number-4");
  let counter = -180;
  setInterval(()=>{
    if(counter == 8){
      clearInterval();
    }
    else{     
       counter+=1;
      numb.textContent = counter ;
    }
  },1);
}