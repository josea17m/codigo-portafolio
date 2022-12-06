// Main variables

const skills = document.getElementById("Skills");
const proyects = document.getElementById("Proyects");
const contact = document.getElementById("Contact");
const home = document.getElementById("Home");
const presetationBanner = document.getElementById("presentationBanner");
const background = document.getElementById("background");
const divSkills = document.getElementById("divSkills");
const divProyects = document.getElementById("divProyects");
const divContact = document.getElementById("divContact");
const navBar = document.getElementById("navBar");


const buttonSubmit = document.getElementById("buttonSubmit");
const messageSent = document.getElementById("message-sent");

// Confirmation of sent message

buttonSubmit.addEventListener("click", () => {
  changes.messageSentShow();
  setTimeout(() => {
    changes.messageSentHidden();
  }, 2000);
});
