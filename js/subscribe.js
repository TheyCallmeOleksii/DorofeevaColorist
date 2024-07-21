ocument.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribe-form");
  const responseMessage = document.getElementById("response-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value;
    responseMessage.textContent = `Subscribed successfully with email: ${email}`;
    form.reset();
  });
});
