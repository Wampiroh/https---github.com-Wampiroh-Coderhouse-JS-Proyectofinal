function totalhorasdormido() {
  return (
    horasdormidas("Lunes") +
    horasdormidas("Martes") +
    horasdormidas("Miercoles") +
    horasdormidas("Jueves") +
    horasdormidas("Viernes") +
    horasdormidas("Sabado") +
    horasdormidas("Domingo")
  );
}

//calculando horas dormidas faltantes
const totalhorasdormidasfaltantes = () => {
  let horasdormidas = horasdormidas();
  let horasideales = horasideales();
};

// calcular horas dormidas ideales

const horasdormidasideales = () => {
  let horasideales = 8;
  return horasideales * 7;
};

const tefaltadormir = (dia) => {
  prompt("Ingrese las horas de sueño de acuerdo al día de la semana:");
  switch (dia) {
    case "Lunes":
      prompt("¿Cuántas horas dormiste el Lunes?");
      return alert(horasdormidas("Lunes") + " muy bien muy bien.");
    case "Martes":
      prompt("¿Y el Martes?");
      return alert("Ok, dormiste " + horasdormidas("Martes") + "horas.");
    case "Miércoles":
      prompt("¿Bueno, y el Miércoles?");
      return alert("Ok, ok, " + horasdormidas("Miercoles") + "ya, sigamos.");
    case "Jueves":
      prompt("¿Y qué tal el Jueves? Cada vez más cerca el fin de semana...");
      return alert(horasdormidas("Jueves") + " muy bien, muy bien.");
    case "Viernes":
      prompt("¡Por fin! Viernes");
      return alert(horasdormidas("Viernes") + "¿preparándote para mañana?");
    case "Sabado":
      prompt("Día sagrado, Sábado, ¿hoy se duerme o no se duerme? 🙄");
      return alert(horasdormidas("Sabado") + "ya veo, ya veo.");
    case "Domingo":
      prompt(
        "Ahora sí, el día más sagrado de todos. ¿Cuántas horas dormiremos hoy?"
      );
      return alert("Perfecto, " + horasdormidas("Domingo") + " horas.");
      break;
  }
};
//corre el programa
tefaltadormir();
// --------

//output the result to the user, with hours, by comparing actualSleepHours and idealSleepHours
if (totalhorasdormidasfaltantes === totalhorasdormidasfaltantes) {
  prompt(
    "Dormiste " +
      horasdormidas +
      " horas en la semana, es la cantidad ideal de sueño."
  );
}
if (horasdormidas > horasdormidasideales) {
  prompt(
    "Dormiste " +
      (horasdormidas - horasdormidasideales) +
      " son más horas de lo idea. Felicidades."
  );
}
if (horasdormidas < horasdormidasideales) {
  prompt(
    "Dormiste " +
      (horasdormidasideales - totalhorasdormido) +
      " horas, te hicieron falta algunas. Deberías descansar un poco más."
  );
}
