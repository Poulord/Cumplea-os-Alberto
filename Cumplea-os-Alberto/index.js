// Control del modal, validación de credenciales y persistencia del estado ADMIN
const ADMIN_USER = "alberto";
const ADMIN_PASS = "felizcumple";

const selectors = {
    modalBackdrop: document.getElementById("loginModal"),
    openButton: document.getElementById("adminAccessButton"),
    closeButton: document.getElementById("closeModalButton"),
    form: document.getElementById("adminLoginForm"),
    username: document.getElementById("username"),
    password: document.getElementById("password"),
    error: document.getElementById("loginError"),
    status: document.getElementById("adminStatus"),
    secretCard: document.querySelector("[data-admin-card]")
};

/**
 * Comprueba el estado en localStorage y actualiza la interfaz.
 */
function updateAdminUI() {
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    if (selectors.secretCard) {
        selectors.secretCard.classList.toggle("magic-card--disabled", !isAdmin);
    }

    if (selectors.status) {
        selectors.status.textContent = isAdmin
            ? "Modo ADMIN activado ✅"
            : "";
    }
}

/**
 * Abre el modal de acceso.
 */
function openModal() {
    selectors.modalBackdrop?.classList.add("is-visible");
    selectors.modalBackdrop?.setAttribute("aria-hidden", "false");
    setTimeout(() => selectors.username?.focus(), 50);
}

/**
 * Cierra el modal de acceso y limpia el formulario.
 */
function closeModal() {
    selectors.modalBackdrop?.classList.remove("is-visible");
    selectors.modalBackdrop?.setAttribute("aria-hidden", "true");
    selectors.form?.reset();
    if (selectors.error) selectors.error.textContent = "";
}

/**
 * Maneja el envío del formulario de login.
 */
function handleLogin(event) {
    event.preventDefault();

    const userValue = selectors.username?.value.trim().toLowerCase();
    const passValue = selectors.password?.value.trim();

    const isValid = userValue === ADMIN_USER && passValue === ADMIN_PASS;

    if (isValid) {
        localStorage.setItem("isAdmin", "true");
        closeModal();
        updateAdminUI();
    } else if (selectors.error) {
        selectors.error.textContent = "Acceso denegado. Tu magia no es suficiente, impostor.";
    }
}

/**
 * Escucha por la tecla Escape para cerrar el modal.
 */
function handleKeyDown(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}

/**
 * Inicializa todos los listeners de la página principal.
 */
function init() {
    updateAdminUI();

    selectors.openButton?.addEventListener("click", openModal);
    selectors.closeButton?.addEventListener("click", closeModal);
    selectors.form?.addEventListener("submit", handleLogin);

    selectors.modalBackdrop?.addEventListener("click", (event) => {
        if (event.target === selectors.modalBackdrop) {
            closeModal();
        }
    });

    document.addEventListener("keydown", handleKeyDown);
}

document.addEventListener("DOMContentLoaded", init);
