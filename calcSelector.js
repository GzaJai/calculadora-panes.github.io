const articuloPrecio = document.querySelector("#precio");
const articuloCantidad = document.querySelector("#cantidad");
const selectorPrecio =  document.querySelector("#selector-precio");
const selectorCantidad = document.querySelector("#selector-cantidad");


document.querySelector("#selector-precio").addEventListener("click", ()=>{
  articuloPrecio.classList.remove("hide");
  articuloCantidad.classList.add("hide");
  selectorPrecio.classList.add("seccion-activa");
  selectorPrecio.classList.remove("seccion");
  selectorCantidad.classList.remove("seccion-activa");
  selectorCantidad.classList.add("seccion");
})
document.querySelector("#selector-cantidad").addEventListener("click", ()=>{
  articuloPrecio.classList.add("hide");
  articuloCantidad.classList.remove("hide");
  selectorPrecio.classList.remove("seccion-activa");
  selectorPrecio.classList.add("seccion");
  selectorCantidad.classList.add("seccion-activa");
  selectorCantidad.classList.remove("seccion");
})