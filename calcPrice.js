function calculoCosto(){
  const precioHarina = document.querySelector("#precioHarina").value;
  const precioLevadura = document.querySelector("#precioLevadura").value;
  let costoPorPan = (precioHarina*.5) + (precioLevadura*.2);
  const resDisplay = document.querySelector(".price-res");
  resDisplay.innerHTML = `Cada pan tiene un costo de $${costoPorPan}`;
};
document.querySelector("#precioButton").addEventListener("click", calculoCosto);
document.querySelector("#precioButton").addEventListener("touchend", calculoCosto)