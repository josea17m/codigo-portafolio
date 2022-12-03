// Muestra el contenido y fondo de contacto

contact.addEventListener("click", () => {
    if (changes.divProyectsVisible() || changes.divSkillsVisible()) {
      changes.removeDiSk();
      changes.removeDiPr();
      changes.addDiCo();
      changes.contactColor();
      changes.removefondoI();
      changes.removefondoS();
      changes.removefondoP();
      changes.addfondoC();
      return;
    }
  
    if (changes.divContactVisible()) {
      changes.removeDiCo();
      changes.removeContactColor();
      changes.removePrBa();
      changes.removefondoC();
      changes.addfondoI();
    } else if (!changes.divContactVisible()) {
      changes.addDiCo();
      changes.contactColor();
      changes.removefondoI();
      changes.removefondoS();
      changes.removefondoP();
      changes.addfondoC();
      changes.addPrBa();
      return;
    }
  });