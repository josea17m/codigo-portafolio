// Objeto con todas las acciones de cambio de fondo y contenido

const changes = {
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
    fondo.classList.add("inicio-image");
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
    fondo.classList.remove("inicio-image");
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
