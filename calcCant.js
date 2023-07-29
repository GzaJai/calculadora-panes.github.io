//  calculos de la harina necesaria

function harinaCalc (){
  const inputCant = document.querySelector("#cantInput").value;
  if((inputCant*.5) >= 1){
    var hRes = "Se necesitan " +(inputCant*.5) +"Kg de harina.";
  }else if(inputCant < 1){
    var hRes = "ERROR";
  }else{ 
    var hRes = "Se necesitan " +(inputCant*.5)*1000+"g de harina."};
  let cantHarina = hRes;
  const restList = document.querySelector("#res-list");
  const oldChild = document.querySelector("#h-list-item");
  if(oldChild == undefined){  
    var hli = document.createElement("li");
    hli.setAttribute("id","h-list-item");
  }else{
    restList.removeChild(oldChild);
    var hli = document.createElement("li");
    hli.setAttribute("id","h-list-item");
  }
  hli.innerText = `${cantHarina}`;
  restList.append(hli);
}

// calculos de la levadura necesaria

function levaduraCalc (){
  const inputCant = document.querySelector("#cantInput").value;
  const lConvert = (inputCant*.01);
  if((lConvert) >= 1){
    var lRes = "Se necesitan " + lConvert +"Kg de levadura.";
  }else if(inputCant < 1){
    var lRes = "Ingrese un número válido.";
  }else{ 
    var lRes = "Se necesitan " + lConvert*1000+"g de levadura."};

  let cantLevadura = lRes;
  const restList = document.querySelector("#res-list");
  const oldChild = document.querySelector("#l-list-item");
  if(oldChild == undefined){  
    var lli = document.createElement("li");
    lli.setAttribute("id","l-list-item");
  }else{
    restList.removeChild(oldChild);
    var lli = document.createElement("li");
    lli.setAttribute("id","l-list-item");
  }
  lli.innerText = `${cantLevadura}`;
  restList.append(lli);
}

function showRes(){
  harinaCalc();
  levaduraCalc();
  document.querySelector(".init-mes").classList.add("hide");
}
document.querySelector("#cantButton").addEventListener("click", showRes);
document.querySelector("#cantButton").addEventListener("touchend", showRes);