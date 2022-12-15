const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const textArea = document.querySelector("textarea");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");

const expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  message: /^[a-zA-ZÀ-ÿ\s]{1,500}$/
};

const actionsValidation = {
  nameCorrect: () => {
    inputName.classList.add("correct")
    inputName.classList.remove("wrong")
  },
  nameWrong: () => {
    inputName.classList.add("wrong")
    inputName.classList.remove("correct")
  },
  emailCorrect: () => {
    inputEmail.classList.add("correct")
    inputEmail.classList.remove("wrong")
  },
  emailWrong: () => {
    inputEmail.classList.add("wrong")
    inputEmail.classList.remove("correct")
  },
  messageCorrect: () => {
    textArea.classList.add("correct")
    textArea.classList.remove("wrong")
  },
  messageWrong: () => {
    textArea.classList.add("wrong")
    textArea.classList.remove("correct")
  }
}

const validation = (e) => {
  switch (e.target.name) {
    case "name":
        expressions.name.test(e.target.value) ?  actionsValidation.nameCorrect() : actionsValidation.nameWrong();
      break;

    case "email":
      expressions.email.test(e.target.value) ?  actionsValidation.emailCorrect() : actionsValidation.emailWrong();
      break;

    case "message":
      expressions.message.test(e.target.value) ?  actionsValidation.messageCorrect() : actionsValidation.messageWrong();
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validation);
  input.addEventListener("blur", validation);
});

textArea.addEventListener("keyup", validation);
textArea.addEventListener("blur", validation);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hola");
});
