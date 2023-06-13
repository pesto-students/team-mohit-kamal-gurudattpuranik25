function showAlert(alertId) {
  const bootstrapAlert = document.querySelector("#" + alertId);
  const collapse = new bootstrap.Collapse(bootstrapAlert);
  collapse.show();
}

const modalYesBtn = document.querySelector("[data-bs-target] ");
modalYesBtn.addEventListener("click", function () {
  const sendBtn = document.querySelector("#send-message-btn");
  sendBtn.style.display = "none";
  showAlert("conf-alert");
});

// document.querySelector("#contact-modal").addEventListener("click", () => {
//   const sendBtn = document.querySelector("#send-message-btn");
//   sendBtn.style.display = "block";
//   showAlert("conf-alert");
// });
