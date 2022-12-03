// declaracion de variables principales

const skills = document.getElementById("Skills");
const proyects = document.getElementById("Proyects");
const contact = document.getElementById("Contact");
const inicio = document.getElementById("Inicio");
const presetationBanner = document.getElementById("presentationBanner");
const fondo = document.getElementById("fondo");
const divSkills = document.getElementById("divSkills");
const divProyects = document.getElementById("divProyects");
const divContact = document.getElementById("divContact");
const navBar = document.getElementById("navBar");


const buttonSubmit = document.getElementById("buttonSubmit");
const messageSent = document.getElementById("message-sent");

buttonSubmit.addEventListener("click", () => {
  changes.messageSentShow();
  setTimeout(() => {
    changes.messageSentHidden();
  }, 2000);
});
