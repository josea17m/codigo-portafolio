// Muestra el contenido y fondo de proyectos

proyects.addEventListener("click", () => {
    if (changes.divContactVisible() || changes.divSkillsVisible()) {
      changes.removeDiSk();
      changes.removeDiCo();
      changes.addDiPr();
      changes.proyectColor();
      changes.removeBackgroundI();
      changes.removeBackgroundS();
      changes.removeBackgroundC();
      changes.addBackgroundP();
      return;
    }
  
    if (changes.divProyectsVisible()) {
      changes.removeDiPr();
      changes.removePrBa();
      changes.removeProyectColor();
      changes.removeBackgroundP();
      changes.addBackgroundI();
    } else if (!changes.divProyectsVisible()) {
      changes.addDiPr();
      changes.proyectColor();
      changes.removeBackgroundI();
      changes.removeBackgroundS();
      changes.removeBackgroundC();
      changes.addBackgroundP();
      changes.addPrBa();
    }
  });