function recordatorio(dia, mensaje="") {
  const d = dia.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  const agenda = {
    lunes: "atender un cliente específico",
    martes: "visitar una agencia fuera de la ciudad",
    miercoles: "llevar a mi hija al ballet",
    jueves: "priorizar entregas de desarrollo",
    viernes: "atender problemas de manera remota",
    sabado: "hacer lo que mi esposa quiera"
  };
  const act = agenda[d];
  const pref = mensaje ? mensaje.trim()+" " : "";
  return act ? `${pref}Hoy ${dia} tienes que ${act}.` : `${pref}Hoy no hay actividad asignada.`;
}

const $dia = document.getElementById("dia");
const $msg = document.getElementById("mensaje");
const $out = document.getElementById("salida");
document.getElementById("btn").addEventListener("click", () => {
  $out.textContent = recordatorio($dia.value, $msg.value);
});
