const cont =document.getElementById("container")

for(var i=0 ; i<101 ; i++){
  let btn= document.createElement("button")
  btn.className="btn"
  btn.innerHTML=i;
  btn.title=""
  if(i%2==0 && i!==2){
    btn.style.backgroundColor="green"
    btn.title="Even Number"
    
  }
  else if(isPrime(i)){
    if(i==2){
        btn.style.backgroundColor="red"
        btn.title="Prime  And Even Number"
    }
    else{
    btn.style.backgroundColor="red"
    btn.title="Prime Number"}

  }
  else{
    btn.style.backgroundColor="yellow"
    btn.title="Odd Number"
  }

  cont.appendChild(btn)
}


function isPrime(num) {
    for (var i = 2; i < num; i++) { 
      if(num % i === 0) return false; 
    }
    return num > 1; 
  }


