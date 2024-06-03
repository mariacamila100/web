let currentStep = 1;
const progressBar = document.getElementById("myBar");
const formSteps = document.querySelectorAll(".form-step");

function nextStep() {
  console.log("Next step clicked");
  if (validateForm()) {
    currentStep++;
    if (currentStep > formSteps.length) {
      alert("¡Solicitud de crédito enviada!");
      return;
    }
    updateProgressBar();
  }
}

function updateProgressBar() {
  const stepPercentage = (currentStep - 1) * (100 / formSteps.length);
  progressBar.style.width = stepPercentage + "%";
  formSteps[currentStep - 2].style.display = "none"; // Oculta el formulario actual
  formSteps[currentStep - 1].style.display = "block"; // Muestra el siguiente formulario
}

function validateForm() {
  const currentForm = document.getElementById("step" + currentStep);
  if (!currentForm) {
    console.error("El formulario actual no pudo ser encontrado.");
    return false;
  }
  if (!currentForm.checkValidity()) {
    alert("Por favor completa todos los campos.");
    return false;
  }
  return true;
}

function submitForm() {
  if (validateForm()) {
    alert("¡Solicitud de crédito enviada!");
    // Aquí puedes enviar la solicitud del formulario a tu backend
  }
}
