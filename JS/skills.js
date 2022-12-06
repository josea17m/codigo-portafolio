// Show skills

skills.addEventListener("click", () => {
  if (changes.divProyectsVisible() || changes.divContactVisible()) {
    changes.removeDiCo();
    changes.removeDiPr();
    changes.removeContactColor();
    changes.removeProyectColor();
    changes.skillsColor();
    changes.addDiSk();
    changes.removeBackgroundI();
    changes.removeBackgroundP();
    changes.removeBackgroundC();
    changes.addBackgroundS();
    return;
  }

  if (changes.divSkillsVisible()) {
    changes.removeDiSk();
    changes.removeSkillsColor();
    changes.removeProyectColor();
    changes.removePrBa();
    changes.removeBackgroundS();
    changes.addBackgroundI();
  } else if (!changes.divSkillsVisible()) {
    changes.addDiSk();
    changes.skillsColor();
    changes.removeBackgroundI();
    changes.removeBackgroundP();
    changes.removeBackgroundC();
    changes.addBackgroundS();
    changes.addPrBa();
  }
});