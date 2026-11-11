// Growth Hire Partners - shared site interactions
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // IMPORTANT: Replace this sample number with the company's verified WhatsApp number.
  const whatsappLink = document.getElementById("whatsappLink");
  if (whatsappLink) {
    const whatsappNumber = "91XXXXXXXXXX"; // Country code + number, digits only
    whatsappLink.href = `https://wa.me/${whatsappNumber}`;
    whatsappLink.addEventListener("click", event => {
      if (whatsappNumber.includes("X")) {
        event.preventDefault();
        alert("Please add the official WhatsApp number in js/main.js before using this button.");
      }
    });
  }

  const message = document.getElementById("formMessage");
  const employerForm = document.getElementById("employer-form");
  const candidateForm = document.getElementById("candidate-form");

  // These front-end handlers validate the form only. They do not send or store data.
  if (employerForm) {
    employerForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!employerForm.reportValidity()) return;
      if (message) message.textContent =
        "The form is ready, but it is not connected to an email or database yet. Connect a secure form backend before launch.";
      employerForm.reset();
    });
  }

  if (candidateForm) {
    candidateForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!candidateForm.reportValidity()) return;
      const file = candidateForm.querySelector('input[type="file"]').files[0];
      if (file && file.size > 5 * 1024 * 1024) {
        if (message) message.textContent = "Please choose a resume smaller than 5 MB.";
        return;
      }
      if (message) message.textContent =
        "Your details passed the demo checks. Resume upload is not active until secure server-side storage is configured.";
      candidateForm.reset();
    });
  }
});
