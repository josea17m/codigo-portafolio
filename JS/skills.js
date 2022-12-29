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

// Icons

javascript.addEventListener("mouseover", () => {
  changes.javascriptName();
});

javascript.addEventListener("mouseout", () => {
  changes.javascriptName();
});

typescript.addEventListener("mouseover", () => {
  changes.typescriptName();
});

typescript.addEventListener("mouseout", () => {
  changes.typescriptName();
});

react.addEventListener("mouseover", () => {
  changes.reactName();
});

react.addEventListener("mouseout", () => {
  changes.reactName();
});

git.addEventListener("mouseover", () => {
  changes.gitName();
});

git.addEventListener("mouseout", () => {
  changes.gitName();
});

html.addEventListener("mouseover", () => {
  changes.htmlName();
});

html.addEventListener("mouseout", () => {
  changes.htmlName();
});

css.addEventListener("mouseover", () => {
  changes.cssName();
});

css.addEventListener("mouseout", () => {
  changes.cssName();
});

node.addEventListener("mouseover", () => {
  changes.nodeName();
});

node.addEventListener("mouseout", () => {
  changes.nodeName();
});

sql.addEventListener("mouseover", () => {
  changes.sqlName();
});

sql.addEventListener("mouseout", () => {
  changes.sqlName();
});

// Phone Mode

skillsPhone.addEventListener("click", () => {
  changes.toggleMenu();
  h1Name.innerText = "Habilidades";
  changes.removeDivProyects();
  changes.removeBackgroundSpace();
  changes.removeDivMainBanner();
  changes.removeDivContact();
  changes.removeDivMainBanner();
  changes.removeProyectColorH1();
  changes.removeContactColorH1();
  changes.skillsColorH1();
  changes.divSkills();
})