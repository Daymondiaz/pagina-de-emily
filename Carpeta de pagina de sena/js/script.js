const form = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let usuario = document.getElementById("usuario").value.trim();
  let password = document.getElementById("password").value.trim();

  if (usuario === "" || password === "") {
    mensaje.textContent = "⚠️ Todos los campos son obligatorios.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "✅ Bienvenido " + usuario + "!";
    mensaje.style.color = "green";
    form.reset();
  }
});

