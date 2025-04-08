// Verificar autenticación
function checkAuth() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
  
    // Si no está logueado, redirigir al login
    if (isLoggedIn !== "true") {
      window.location.href = "../index.html"
      return false
    }
  
    return true
  }
  
  // Función para cerrar sesión
  function logout() {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("username")
    localStorage.removeItem("loginTime")
    window.location.href = "../index.html"
  }
  
  // Ejecutar verificación al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    // Verificar autenticación
    checkAuth()
  
    // Configurar botón de cerrar sesión si existe
    const logoutBtn = document.getElementById("logoutBtn")
    if (logoutBtn) {
      logoutBtn.addEventListener("click", logout)
    }
  
    // Mostrar nombre de usuario si existe el elemento
    const usernameDisplay = document.getElementById("usernameDisplay")
    if (usernameDisplay) {
      const username = localStorage.getItem("username") || "Usuario"
      usernameDisplay.textContent = username
    }
  })
  