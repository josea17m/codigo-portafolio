// Background and content change actions

const changes = {
  javascriptName: function () {
    jsName.classList.toggle("visiblee");
  },

  typescriptName: function () {
    tsName.classList.toggle("visiblee");
  },

  reactName: function () {
    reactName.classList.toggle("visiblee");
  },

  gitName: function () {
    gitName.classList.toggle("visiblee");
  },

  cssName: function () {
    cssName.classList.toggle("visiblee");
  },

  htmlName: function () {
    htmlName.classList.toggle("visiblee");
  },

  nodeName: function () {
    nodeName.classList.toggle("visiblee");
  },

  sqlName: function () {
    sqlName.classList.toggle("visiblee");
  },

  toggleMenu: function () {
    navbarContracted.classList.toggle("visibility");
  },

  messageSentShow: function () {
    messageSent.classList.add("deslizar");
  },

  messageSentHidden: function () {
    messageSent.classList.remove("deslizar");
  },

  backgroundSpace: function() {
    background.classList.add("display-none");
  },
  removeBackgroundSpace: function() {
    background.classList.remove("display-none");
  },

  //Skills

  skillsColor: function () {
    navBar.classList.add("skills-color");
  },
  removeSkillsColor: function () {
    navBar.classList.remove("skills-color");
  },

  divSkills:function () {
    divSkills.classList.add("display-grid");
  },

  removeDivSkills:function () {
    divSkills.classList.remove("display-grid");
  },
  

  removeDiSk: function () {
    divSkills.classList.remove("visible");
  },
  addDiSk: function () {
    divSkills.classList.add("visible");
  },
  
  skillsColorH1: function () {
    h1Name.classList.add("skills-color");
  },
  removeSkillsColorH1: function () {
    h1Name.classList.remove("skills-color");
  },


  addBackgroundS: function () {
    background.classList.add("skills-image");
  },

  removeBackgroundS: function () {
    background.classList.remove("skills-image");
  },
  // Contact

  contactColor: function () {
    navBar.classList.add("contact-color");
  },
  removeContactColor: function () {
    navBar.classList.remove("contact-color");
  },

  divContact:function () {
    divContact.classList.add("display-flex");
  },

  removeDivContact:function () {
    divContact.classList.remove("display-flex");
  },

  removeDiCo: function () {
    divContact.classList.remove("visible");
  },

  addDiCo: function () {
    divContact.classList.add("visible");
  },

  contactColorH1: function () {
    h1Name.classList.add("contact-color");
  },
  removeContactColorH1: function () {
    h1Name.classList.remove("contact-color");
  },

  addBackgroundC: function () {
    background.classList.add("contact-image");
  },

  removeBackgroundC: function () {
    background.classList.remove("contact-image");
  },

  // Proyect

  proyectColor: function () {
    navBar.classList.add("proyect-color");
  },
  removeProyectColor: function () {
    navBar.classList.remove("proyect-color");
  },

  proyectColorH1: function () {
    h1Name.classList.add("proyect-color");
  },
  removeProyectColorH1: function () {
    h1Name.classList.remove("proyect-color");
  },
  removeDiPr: function () {
    divProyects.classList.remove("visible-proyects");
  },

  divProyects:function () {
    divProyects.classList.add("display-grid");
  },

  removeDivProyects:function () {
    divProyects.classList.remove("display-grid");
  },

  addDiPr: function () {
    divProyects.classList.add("visible-proyects");
  },

  addBackgroundP: function () {
    background.classList.add("proyects-image");
  },
  removeBackgroundP: function () {
    background.classList.remove("proyects-image");
  },

  //Home

  removePrBa: function () {
    presetationBanner.classList.remove("ocultar");
  },

  addPrBa: function () {
    presetationBanner.classList.add("ocultar");
  },


  divMainBanner:function () {
    mainBanner.classList.add("display-flex");
    document.getElementById("mainBanner2").classList.add("display-flex");
  },

  removeDivMainBanner:function () {
    mainBanner.classList.remove("display-flex");
    document.getElementById("mainBanner2").classList.remove("display-flex");

    mainBanner.classList.add("display-none");
    document.getElementById("mainBanner2").classList.add("display-none");
  },

  addBackgroundI: function () {
    background.classList.add("home-image");
  },

  removeBackgroundI: function () {
    background.classList.remove("home-image");
  },

    /**/

    divContactVisible: function () {
      return divContact.classList.contains("visible");
    },
    divProyectsVisible: function () {
      return divProyects.classList.contains("visible-proyects");
    },
    divSkillsVisible: function () {
      return divSkills.classList.contains("visible");
    },
  
};
