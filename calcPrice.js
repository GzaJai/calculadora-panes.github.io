function calcPrecio(num1, num2){
  let harinaPorPan = num1 / 2;
  let levaduraPorPan = num2 / 5;

  let costoPan = levaduraPorPan + harinaPorPan;

  console.log(costoPan);
};
function calcCant(num1){
  let harinaNecesaria = (num1 * 0.5) *1000+"g";
  let levaduranecesaria = (num1 * 0.01) * 1000+"g";

  let respuesta = `Se necesitaran ${harinaNecesaria} de harina y ${levaduranecesaria} de levadura`;
  console.log(respuesta);
};