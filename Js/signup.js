const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");

function setError(input, errorEl, msg) {
  errorEl.textContent = msg;
  input.classList.add("input-error");
}

function clearError(input, errorEl) {
  errorEl.textContent = "";
  input.classList.remove("input-error");
}

function validEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function clearSuccess() {
  successMsg.textContent = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearSuccess();

  let ok = true;

  // NAME
  const nVal = nameInput.value.trim();
  if (!nVal) {
    ok = false;
    setError(nameInput, nameError, "Emri është i detyrueshëm.");
  } else if (nVal.length < 2) {
    ok = false;
    setError(nameInput, nameError, "Emri duhet të ketë të paktën 2 shkronja.");
  } else {
    clearError(nameInput, nameError);
  }

  // EMAIL
  const eVal = email.value.trim();
  if (!eVal) {
    ok = false;
    setError(email, emailError, "Email është i detyrueshëm.");
  } else if (!validEmail(eVal)) {
    ok = false;
    setError(email, emailError, "Email nuk është i vlefshëm (p.sh. you@example.com).");
  } else {
    clearError(email, emailError);
  }

  // PASSWORD
  const pVal = password.value;
  if (!pVal) {
    ok = false;
    setError(password, passwordError, "Password është i detyrueshëm.");
  } else if (pVal.length < 6) {
    ok = false;
    setError(password, passwordError, "Password duhet të ketë minimum 6 karaktere.");
  } else {
    clearError(password, passwordError);
  }

  if (ok) {
    successMsg.textContent = "Signup valid ";
    
  }
});

// Live validation (opsionale)
nameInput.addEventListener("blur", () => {
  clearSuccess();
  const v = nameInput.value.trim();
  if (!v) setError(nameInput, nameError, "Emri është i detyrueshëm.");
  else if (v.length < 2) setError(nameInput, nameError, "Minimum 2 shkronja.");
  else clearError(nameInput, nameError);
});

email.addEventListener("blur", () => {
  clearSuccess();
  const v = email.value.trim();
  if (!v) setError(email, emailError, "Email është i detyrueshëm.");
  else if (!validEmail(v)) setError(email, emailError, "Email nuk është i vlefshëm.");
  else clearError(email, emailError);
});

password.addEventListener("blur", () => {
  clearSuccess();
  const v = password.value;
  if (!v) setError(password, passwordError, "Password është i detyrueshëm.");
  else if (v.length < 6) setError(password, passwordError, "Minimum 6 karaktere.");
  else clearError(password, passwordError);
});