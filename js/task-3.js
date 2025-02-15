const userName = document.querySelector("#name-input");
const greetingMessage = document.querySelector("#name-output");

userName.addEventListener("input", (event) => {
  const input = event.currentTarget.value.trim();
  if (input !== "") {
    greetingMessage.innerHTML = input;
  } else {
    greetingMessage.innerHTML = "Anonymous";
  }
});
