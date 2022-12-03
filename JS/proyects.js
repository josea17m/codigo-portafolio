// Muestra el contenido y fondo de proyectos

proyects.addEventListener("click", () => {
    if (changes.divContactVisible() || changes.divSkillsVisible()) {
      changes.removeDiSk();
      changes.removeDiCo();
      changes.addDiPr();
      changes.removefondoI();
      changes.removefondoS();
      changes.removefondoC();
      changes.addfondoP();
      return;
    }
  
    if (changes.divProyectsVisible()) {
      changes.removeDiPr();
      changes.removePrBa();
      changes.removefondoP();
      changes.addfondoI();
    } else if (!changes.divProyectsVisible()) {
      changes.addDiPr();
      changes.removefondoI();
      changes.removefondoS();
      changes.removefondoC();
      changes.addfondoP();
      changes.addPrBa();
      return;
    }
  });