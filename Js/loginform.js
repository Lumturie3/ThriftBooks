const form=document.getElementById("loginForm");
const email=document.getElementById("email");
const password = document.getElementById("password");

const emailError=document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");

function setError(input,errorEl,msg) {
    errorEl.textContent = msg;
    input.classList.add("input-error");

}

function clearError(input,errorEl) {
    errorEl.textContent = "";
    input.classList.remove("input-error");

}

function validEmail(v) {
    return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(v.trim());

}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  let ok = true;

  if (!email.value.trim()) {
    ok = false;
    setError(email, emailError, "Email është i detyrueshëm.");
  } else if (!validEmail(email.value)) {
    ok = false;
    setError(email, emailError, "Email nuk është i vlefshëm.");
  } else {
    clearError(email, emailError);
  }

  if (!password.value) {
    ok = false;
    setError(password, passwordError, "Password është i detyrueshëm.");
  } else if (password.value.length < 6) {
    ok = false;
    setError(password, passwordError, "Minimum 6 karaktere.");
  } else {
    clearError(password, passwordError);
  }

  if (ok) {

    console.log("Validimi kaloi ✅");

  }
});