// Muestra el contenido y fondo de habilidades

skills.addEventListener("click", () => {
    if (changes.divProyectsVisible() || changes.divContactVisible()) {
      changes.removeDiCo();
      changes.removeDiPr();
      changes.addDiSk();
      changes.removefondoI();
      changes.removefondoP();
      changes.removefondoC();
      changes.addfondoS();
      return;
    }
  
    if (changes.divSkillsVisible()) {
      changes.removeDiSk();
      changes.removePrBa();
      changes.removefondoS();
      changes.addfondoI();
    } else if (!changes.divSkillsVisible()) {
      changes.addDiSk();
      changes.removefondoI();
      changes.removefondoP();
      changes.removefondoC();
      changes.addfondoS();
      changes.addPrBa();
      return;
    }
  });