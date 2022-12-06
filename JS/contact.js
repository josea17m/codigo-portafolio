// Show contact

contact.addEventListener("click", () => {
    if (changes.divProyectsVisible() || changes.divSkillsVisible()) {
      changes.removeDiSk();
      changes.removeDiPr();
      changes.removeProyectColor();
      changes.addDiCo();
      changes.contactColor();
      changes.removeBackgroundI();
      changes.removeBackgroundS();
      changes.removeBackgroundP();
      changes.addBackgroundC();
      return;
    }
  
    if (changes.divContactVisible()) {
      changes.removeDiCo();
      changes.removeContactColor();
      changes.removeProyectColor();
      changes.removePrBa();
      changes.removeBackgroundC();
      changes.addBackgroundI();
    } else if (!changes.divContactVisible()) {
      changes.addDiCo();
      changes.contactColor();
      changes.removeBackgroundI();
      changes.removeBackgroundS();
      changes.removeBackgroundP();
      changes.addBackgroundC();
      changes.addPrBa();
    }
  });