fetch("./naam.json")
  .then((response) => response.json())
  .then((data) => {
    const titel = document.getElementById("titel")
    const desc = document.getElementById("beschrijving")
    titel.innerHTML = data.mijnFilmCollectie[0].titel;
    desc.innerHTML = data.mijnFilmCollectie[3].beschrijving
  });
