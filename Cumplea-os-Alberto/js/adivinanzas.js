// Banco de preguntas personalizadas
const questions = [
    {
        question: "Cuando quedamos para jugar fútbol, ¿qué hechizo usa Alberto para aparecer justo al límite del tiempo?",
        options: [
            "Aparición puntual nivel Hermione",
            "Retrasum Máximus (pero llega con sonrisa)",
            "Portus directo del sofá al campo"
        ],
        answerIndex: 1
    },
    {
        question: "El plan perfecto para Alberto un sábado por la noche incluye...",
        options: [
            "Una maratón de pelis del Ministerio",
            "Cuidar dragones hasta las 3 a.m.",
            "Convocar a la orden para unas risas y, de paso, una ronda"
        ],
        answerIndex: 2
    },
    {
        question: "¿Cuál es su hechizo favorito para esquivar responsabilidades de gimnasio?",
        options: [
            "Expecto procrastinus",
            "Mañanaempiezo totalus",
            "Wingardium leviosa, para levantar pesas sin tocarlas"
        ],
        answerIndex: 1
    },
    {
        question: "Cuando promete forrarse, ¿qué criatura fantástica seguimos esperando que aparezca?",
        options: [
            "Un hipogrifo con nóminas",
            "Un dragón cargado de galeones",
            "Una lechuza con ofertas de trabajo"
        ],
        answerIndex: 1
    },
    {
        question: "¿Cómo describe Alberto su fidelidad al grupo de amigos?",
        options: [
            "Soy más leal que un Gryffindor a su capa",
            "Solo escribo cuando no me queda batería",
            "Estoy aquí siempre, salvo que me quede dormido" 
        ],
        answerIndex: 0
    },
    {
        question: "Cuando toca elegir música en el coche, ¿qué estilo invoca?",
        options: [
            "Baladas de sirenas para relajarse",
            "Himnos futboleros para cantar a pleno pulmón",
            "Silencius totalus para escuchar nuestros pensamientos"
        ],
        answerIndex: 1
    },
    {
        question: "Si Alberto fuera profesor en Hogwarts, ¿qué asignatura daría con más arte?",
        options: [
            "Defensa Contra el Mal Humor",
            "Transformaciones de planes de última hora",
            "Historia de las promesas épicas"
        ],
        answerIndex: 0
    }
];

let currentQuestion = 0;
let score = 0;
let acceptingAnswers = true;

const questionCounter = document.getElementById("questionCounter");
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const feedback = document.getElementById("feedback");
const results = document.getElementById("results");
const quizWrapper = document.getElementById("quiz");

/**
 * Pinta la pregunta actual y sus opciones en pantalla.
 */
function renderQuestion() {
    const question = questions[currentQuestion];
    questionCounter.textContent = `Hechizo ${currentQuestion + 1} de ${questions.length}`;
    questionText.textContent = question.question;
    feedback.textContent = "";

    answerOptions.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.type = "button";
        button.textContent = option;
        button.addEventListener("click", () => handleAnswer(index));
        answerOptions.appendChild(button);
    });

    acceptingAnswers = true;
}

/**
 * Gestiona la selección de respuesta y avanza al siguiente enunciado.
 */
function handleAnswer(selectedIndex) {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;

    const question = questions[currentQuestion];
    const isCorrect = selectedIndex === question.answerIndex;

    if (isCorrect) {
        score += 1;
        feedback.textContent = "¡Hechizo correcto! Tu varita chispea de orgullo.";
        feedback.style.color = "#0f5132";
    } else {
        feedback.textContent = "Hechizo fallido. El pergamino se te ha pegado a la cara.";
        feedback.style.color = "#8c1627";
        triggerShake();
    }

    setTimeout(() => {
        currentQuestion += 1;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }, 1100);
}

/**
 * Aplica la animación de sacudida en caso de error.
 */
function triggerShake() {
    if (!quizWrapper) return;
    quizWrapper.classList.remove("shake");
    // Forzar reflow para reiniciar la animación
    void quizWrapper.offsetWidth;
    quizWrapper.classList.add("shake");
}

/**
 * Muestra el resultado final y, si corresponde, la pista secreta.
 */
function showResults() {
    questionCounter.hidden = true;
    questionText.textContent = "Evaluación completada";
    answerOptions.innerHTML = "";
    feedback.textContent = "";

    const summary = document.createElement("p");
    summary.textContent = `Has demostrado un nivel de mago ${score}/${questions.length}.`;

    const message = document.createElement("p");
    if (score > 4) {
        message.innerHTML = "El Ministerio te concede nivel de Autorización. Usuario: <strong>alberto</strong> / Palabra secreta: <strong>felizcumple</strong>.";
    } else {
        message.textContent = "Tu varita está defectuosa. Vuelva a Registro para afilar sus chistes.";
    }

    results.innerHTML = "";
    results.append(summary, message);
    results.hidden = false;
}

/**
 * Inicializa el cuestionario al cargar la página.
 */
function initQuiz() {
    renderQuestion();
}

document.addEventListener("DOMContentLoaded", initQuiz);
