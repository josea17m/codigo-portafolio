// Objeto con todas las acciones de cambio de fondo y contenido

const changes = {
  messageSentShow: function () {
    return messageSent.classList.add("deslizar");
  },

  messageSentHidden: function () {
    return messageSent.classList.remove("deslizar");
  },

  skillsColor: function () {
    return navBar.classList.add("skills-color");
  },
  removeSkillsColor: function () {
    return navBar.classList.remove("skills-color");
  },

  contactColor: function () {
    return navBar.classList.add("contact-color");
  },
  removeContactColor: function () {
    return navBar.classList.remove("contact-color");
  },

  proyectColor: function () {
    return navBar.classList.add("proyect-color");
  },
  removeProyectColor: function () {
    return navBar.classList.remove("proyect-color");
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

  addfondoI: function () {
    fondo.classList.add("home-image");
  },
  addfondoS: function () {
    fondo.classList.add("skills-image");
  },
  addfondoP: function () {
    fondo.classList.add("proyects-image");
  },
  addfondoC: function () {
    fondo.classList.add("contact-image");
  },

  removefondoI: function () {
    fondo.classList.remove("home-image");
  },
  removefondoS: function () {
    fondo.classList.remove("skills-image");
  },
  removefondoP: function () {
    fondo.classList.remove("proyects-image");
  },
  removefondoC: function () {
    fondo.classList.remove("contact-image");
  },
};
