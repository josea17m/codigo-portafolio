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

contactPhone.addEventListener("click", () => {
  changes.toggleMenu();
  h1Name.innerText = "Contacto";
  changes.removeDivSkills();
  changes.removeBackgroundSpace();
  changes.removeDivProyects();
  changes.removeDivMainBanner();
  changes.removeDivMainBanner();
  changes.contactColorH1();
  changes.removeSkillsColorH1();
  changes.removeProyectColorH1();
  changes.divContact();
});

// Confirmation of sent message

// buttonSubmit.addEventListener("click", () => {
//   changes.messageSentShow();
//   setTimeout(() => {
//     changes.messageSentHidden();
//   }, 2000);
// });
