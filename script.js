// Lista dei lavori
const lavori = [
  { titolo: "Web Developer", luogo: "Italia" },
  { titolo: "Java Developer", luogo: "USA" },
  { titolo: "Designer", luogo: "Italia" }
];

// Prendo gli elementi HTML
const jobInput = document.getElementById("jobInput");
const locationInput = document.getElementById("locationInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

// Aggiungo evento al bottone
searchBtn.addEventListener("click", function () {
  // Pulisco i risultati precedenti
  results.innerHTML = "";

  // Prendo i valori scritti dall'utente
  const titolo = jobInput.value.toLowerCase();
  const luogo = locationInput.value.toLowerCase();

  // Ciclo su tutti i lavori
  for (let i = 0; i < lavori.length; i++) {
    const lavoro = lavori[i];
    const titoloOk = lavoro.titolo.toLowerCase().includes(titolo);
    const luogoOk = lavoro.luogo.toLowerCase().includes(luogo);

    if (titoloOk && luogoOk) {
      const li = document.createElement("li");
      li.innerText = lavoro.titolo + " - " + lavoro.luogo;
      results.appendChild(li);
    }
  }

  // Se non trova nulla
  if (results.innerHTML === "") {
    const li = document.createElement("li");
    li.innerText = "Nessun lavoro trovato ";
    results.appendChild(li);
  }
});
