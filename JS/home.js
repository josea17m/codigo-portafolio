// Show home

home.addEventListener("click", () => {
    changes.removeDiCo();
    changes.removeDiPr();
    changes.removeDiSk();
    changes.removePrBa();
    changes.removeContactColor();
    changes.removeSkillsColor();
    changes.removeProyectColor();
    changes.removeBackgroundI();
    changes.removeBackgroundS();
    changes.removeBackgroundP();
    changes.removeBackgroundC();
    changes.addBackgroundI();
  });

  homePhone.addEventListener("click", () => {
    changes.toggleMenu();
    h1Name.innerText = "Sobre mi";
    changes.removeBackgroundSpace();
    changes.removeDivSkills();
    changes.removeDivProyects();
    changes.removeDivContact();
    changes.removeSkillsColorH1();
    changes.removeProyectColorH1();
    changes.removeContactColorH1();
    changes.divMainBanner();
  });