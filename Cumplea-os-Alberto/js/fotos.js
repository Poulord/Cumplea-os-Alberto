const nostalgiaCaptions = [
    "Ese día supimos que la amistad de Alberto era más fuerte que cualquier encantamiento olvidado.",
    "El héroe bajo palos, deteniendo balones y malos ratos a partes iguales.",
    "Rumbo a otra aventura con la mejor compañía, sin importar el destino.",
    "Una celebración que sigue iluminando la sala común cada vez que la recordamos."
];

const troleoCaptions = [
    "Momento exacto en el que Alberto prometió llegar temprano... y aún seguimos esperando.",
    "La portería quedó encantada para que los balones sintieran respeto (o miedo).",
    "Expedición oficial en busca del dragón millonario que nunca llegó.",
    "Sopló las velas pidiendo madurar... luego pidió otra ronda." 
];

let nostalgiaMode = true;

const captionElements = document.querySelectorAll('.memory-caption');
const toggleButton = document.getElementById('captionModeToggle');

/**
 * Actualiza los pies de foto en función del modo activo.
 */
function updateCaptions() {
    const source = nostalgiaMode ? nostalgiaCaptions : troleoCaptions;
    captionElements.forEach((caption) => {
        const index = Number(caption.dataset.index || 0);
        caption.textContent = source[index] || '';
    });
}

/**
 * Cambia entre modo nostalgia y modo troleo.
 */
function toggleMode() {
    nostalgiaMode = !nostalgiaMode;
    toggleButton.textContent = nostalgiaMode ? 'Modo Nostalgia 🥲' : 'Modo Troleo 🤡';
    updateCaptions();
}

function initGallery() {
    updateCaptions();
    toggleButton?.addEventListener('click', toggleMode);
}

document.addEventListener('DOMContentLoaded', initGallery);
