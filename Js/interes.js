function calcularCuota() {
  var monto = document.getElementById("monto").value;
  var tasa = document.getElementById("tasa").value;
  var plazo = document.getElementById("plazo").value;
  
  if (monto >= 0 && tasa >= 0 && plazo >= 0) {
    var interesMensual = (tasa / 100) / 12;
    var cuota = (monto * interesMensual) / (1 - Math.pow(1 + interesMensual, -plazo));
    document.getElementById("resultado").value = cuota.toFixed(2);
  } else {
    alert("No se permiten numeros negativos");
    document.getElementById("resultado").value = "Valores inválidos";
  }
  
  if (monto === "" && tasa === "" && plazo === "") {
    alert("Debes llenar los campos por favor");
  } else {
    var interesMensual = (tasa / 100) / 12;
    var cuota = (monto * interesMensual) / (1 - Math.pow(1 + interesMensual, -plazo));
    document.getElementById("resultado").value = cuota.toFixed(2);
  }
}