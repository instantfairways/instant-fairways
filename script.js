const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();

/*
  FORM SETUP:
  This demo form validates fields in the browser but does NOT send enquiries.
  Before launch, connect it to Formspree (or another form service) and replace
  the submit handler below with the endpoint provided by that service.
*/
const form = document.querySelector("#enquiry-form");
const status = document.querySelector("#form-status");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  status.textContent = "Your form is ready, but enquiries are not connected yet. Please contact the business owner while the form is being configured.";
});
