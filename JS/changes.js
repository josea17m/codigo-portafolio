// Background and content change actions

const changes = {
  messageSentShow: function () {
    messageSent.classList.add("deslizar");
  },

  messageSentHidden: function () {
    messageSent.classList.remove("deslizar");
  },

  skillsColor: function () {
    navBar.classList.add("skills-color");
  },
  removeSkillsColor: function () {
    navBar.classList.remove("skills-color");
  },

  contactColor: function () {
    navBar.classList.add("contact-color");
  },
  removeContactColor: function () {
    navBar.classList.remove("contact-color");
  },

  proyectColor: function () {
    navBar.classList.add("proyect-color");
  },
  removeProyectColor: function () {
    navBar.classList.remove("proyect-color");
  },
  divContactVisible: function () {
    return divContact.classList.contains("visible");
  },
  divProyectsVisible: function () {
    return divProyects.classList.contains("visible-proyects");
  },
  divSkillsVisible: function () {
    return divSkills.classList.contains("visible");
  },

  removePrBa: function () {
    presetationBanner.classList.remove("ocultar");
  },
  removeDiCo: function () {
    divContact.classList.remove("visible");
  },
  removeDiPr: function () {
    divProyects.classList.remove("visible-proyects");
  },
  removeDiSk: function () {
    divSkills.classList.remove("visible");
  },

  addPrBa: function () {
    presetationBanner.classList.add("ocultar");
  },
  addDiCo: function () {
    divContact.classList.add("visible");
  },
  addDiPr: function () {
    divProyects.classList.add("visible-proyects");
  },
  addDiSk: function () {
    divSkills.classList.add("visible");
  },

  addBackgroundI: function () {
    background.classList.add("home-image");
  },
  addBackgroundS: function () {
    background.classList.add("skills-image");
  },
  addBackgroundP: function () {
    background.classList.add("proyects-image");
  },
  addBackgroundC: function () {
    background.classList.add("contact-image");
  },

  removeBackgroundI: function () {
    background.classList.remove("home-image");
  },
  removeBackgroundS: function () {
    background.classList.remove("skills-image");
  },
  removeBackgroundP: function () {
    background.classList.remove("proyects-image");
  },
  removeBackgroundC: function () {
    background.classList.remove("contact-image");
  },
};
