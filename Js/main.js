let continuar = true;

while (continuar) {

  let num1 = prompt("Ingresa el primer número:");


  let num2 = prompt("Ingresa el segundo número:");


  num1 = Number(num1);
  num2 = Number(num2);


  let operacion = prompt("Selecciona la operación a realizar: suma (+), resta (-), multiplicación (*) o división (/)");

  let resultado;

 
  if (operacion === "+") {
    resultado = num1 + num2;
  } else if (operacion === "-") {
    resultado = num1 - num2;
  } else if (operacion === "*") {
    resultado = num1 * num2;
  } else if (operacion === "/") {
    resultado = num1 / num2;
  } else {
    resultado = "Operación no válida";
  }


  console.log(resultado);
  const btnclick=document.getElementById("btnclick");

  function Enseñarresult(){
  return alert("El resultado es: "+resultado);
  };
  
  btnclick.addEventListener('click',Enseñarresult);

  let respuesta = confirm("¿Deseas realizar otra operación?");

  if (!respuesta) {
    continuar = false;
  }
}

