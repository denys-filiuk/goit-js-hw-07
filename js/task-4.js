const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const pwd = event.target.elements.password.value;

  const eventObject = {
    email: email,
    password: pwd,
  };

  if (email !== "" && pwd !== "") {
    console.log(eventObject);
  } else {
    alert("All form fields must be filled in");
  }
  form.reset();
}
