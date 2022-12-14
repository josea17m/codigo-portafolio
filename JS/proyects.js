// Muestra el contenido y fondo de proyectos

proyects.addEventListener("click", () => {
    if (changes.divContactVisible() || changes.divSkillsVisible()) {
      changes.removeDiSk();
      changes.removeDiCo();
      changes.addDiPr();
      changes.removeContactColor();
      changes.removeSkillsColor();
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

proyectsPhone.addEventListener("click", () => {
  changes.toggleMenu();
  h1Name.innerText = "Proyectos";
  changes.backgroundSpace();
  changes.proyectColorH1();
  changes.removeDivMainBanner();
  changes.removeDivSkills();
  changes.removeDivContact();
  changes.removeDivMainBanner();
  changes.removeContactColorH1();
  changes.removeSkillsColorH1();
  changes.divProyects();
})