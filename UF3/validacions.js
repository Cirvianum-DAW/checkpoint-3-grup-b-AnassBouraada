// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");

// Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// els errors allà on consideris lògic

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
  input.insertAdjacentElement("afterend", error);
}

// Cada validació...

function validateName() {
  removeExistingError(nameInput);
  // Validació del nom...
  if (nameInput.value.length < 3 || nameInput.value.length > 50) {
    // Si no és vàlid...
    displayError(nameInput, "El nom no és vàlid");
  }
}

function validateSurname() {
  removeExistingError(surnameInput);
  // Validació del nom...
  if (surnameInput.value.length < 3 || surnameInput.value.length > 50) {
    // Si no és vàlid...
    displayError(surnameInput, "El cognom no és vàlid");
  }
}

// addEventListeners...
surnameInput.addEventListener("blur", validateSurname);
nameInput.addEventListener("blur", validateName);

// Selecció dels inputs...
const genderInput = document.getElementById("gender");
const ageInput = document.getElementById("age");

// Funció per validar el gènere
function validateGender() {
  removeExistingError(genderInput);
  // Validació del gènere...
  if (genderInput.value === "") {
    // Si no és vàlid...
    displayError(genderInput, "Si us plau, selecciona el teu gènere");
  }
}

// Funció per validar l'edat
function validateAge() {
  // Convertim l'edat a un nombre enter
  const age = parseInt(ageInput.value);
  // Validació de l'edat...
  if (isNaN(age) || age < 18) {
    // Si no és vàlid...
    alert("Has de ser major d'edat per poder realitzar la comanda");
  }
}

// Afegim event listeners per a la validació del gènere i l'edat
genderInput.addEventListener("change", validateGender);
ageInput.addEventListener("blur", validateAge);

const messageInput = document.getElementById("message");

// Funció per validar el missatge
function validateMessage() {
  removeExistingError(messageInput);
  // Validació del missatge...
  if (messageInput.value.length < 10 || messageInput.value.length > 200) {
    // Si no és vàlid...
    displayError(
      messageInput,
      "El text a ha de tenir com a mínim 10 caràcters i com a màxim 200"
    );
  }
}

messageInput.addEventListener("input", validateMessage);

const emailInput = document.getElementById("email");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Funció per validar l'email
function validateEmail() {
  removeExistingError(emailInput);
  // Validació de l'edat...
  if (!emailRegex.test(emailInput)) {
    // Si no és vàlid...
    alert("l'email ha de tenir el format correcte");
  }
}

emailInput.addEventListener("blur", validateEmail);
