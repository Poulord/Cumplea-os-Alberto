// Respuestas correctas (puedes cambiarlas)
const correctAnswers = {
    1: "portero",
    2: "puma", // o la marca de su coche
    3: "karim benzema" // acepta diferentes formatos
};

// Mensajes secretos que se mostrarán al acertar
const secretMessages = {
    1: "Alberto, eres el mejor portero que conozco. ¡Ataja todos los retos como atajas los balones!",
    2: "Como buen conductor, sigues siempre el camino correcto en la vida. ¡Eres un amigo de los de verdad!",
    3: "Hala Madrid! Eres tan leal a tus amigos como los madridistas a su equipo. ¡Eso no tiene precio!"
};

function checkAnswer(riddleNumber) {
    const userAnswer = document.getElementById(`answer${riddleNumber}`).value.toLowerCase();
    const resultElement = document.getElementById(`result${riddleNumber}`);
    
    if (userAnswer.includes(correctAnswers[riddleNumber])) {
        resultElement.textContent = secretMessages[riddleNumber];
        resultElement.style.color = "green";
        resultElement.classList.remove("hidden");
    } else {
        resultElement.textContent = "¡Casi! Inténtalo de nuevo.";
        resultElement.style.color = "red";
        resultElement.classList.remove("hidden");
    }
}