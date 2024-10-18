alert ("Vamos conhecer sobre Bikes! ")

const data = [
    {
        question: "Qual é a principal vantagem de uma bicicleta de montanha em relação a uma bicicleta de estrada?",
        a: "Maior velocidade",
        b: "Melhor tração em terrenos acidentados",
        c: "Peso mais leve",
        d: "Maior conforto em longas distâncias",
        correct: "b",
    },
    {
        question: "Qual é o termo usado para descrever o conjunto de marchas em uma bicicleta?",
        a: "Transmissão",
        b: "Eixo",
        c: "Pneu",
        d: "Quadro",
        correct: "a",
    },
    {
        question: "Qual é a importância de calibrar a pressão dos pneus da bicicleta?",
        a: "Aumentar a durabilidade da bicicleta",
        b: "Melhorar a eficiência do pedalar e a segurança",
        c: "Aumentar a velocidade máxima",
        d: "Prolongar a vida útil do guidão",
        correct: "b",
    },
    {
        question: "Qual é o principal componente que ajuda a reduzir o impacto e as vibrações ao andar em terrenos irregulares?",
        a: "Selim",
        b: "Suspensão",
        c: "Rodas",
        d: "Corrente",
        correct: "b",
    },
    {
        question: "Qual é o nome da técnica que permite a um ciclista subir uma ladeira mais facilmente?",
        a: "Sprint",
        b: "Cadência",
        c: "Pacing",
        d: "Drafting",
        correct: "b",
    },
    {
        question: "O que é uma bicicleta fixa (fixie)?",
        a: "Uma bicicleta que não tem marchas",
        b: "Uma bicicleta cujo movimento da roda traseira está diretamente ligado aos pedais",
        c: "Uma bicicleta de competição",
        d: "Uma bicicleta de turismo",
        correct: "b",
    },
    {
        question: "Qual é o efeito do 'drafting' em um grupo de ciclistas?",
        a: "Aumenta a resistência ao vento",
        b: "Diminui a resistência ao vento",
        c: "Melhora a visibilidade",
        d: "Aumenta a fricção",
        correct: "b",
    },
    {
        question: "Qual é o principal objetivo de um capacete de ciclismo?",
        a: "Proteger o ciclista de chuva",
        b: "Aumentar a aerodinâmica",
        c: "Proteger a cabeça em caso de queda",
        d: "Melhorar a aparência do ciclista",
        correct: "c",
    },
    {
        question: "Qual tipo de freio é mais comum em bicicletas de alta performance?",
        a: "Freio a disco",
        b: "Freio de aro",
        c: "Freio de tambor",
        d: "Freio hidráulico",
        correct: "a",
    },
    {
        question: "O que significa o termo 'gear ratio' (relação de marcha) em uma bicicleta?",
        a: "A relação entre a velocidade e a potência",
        b: "A relação entre o número de dentes na coroa e na catraca",
        c: "A relação entre o peso do ciclista e a bicicleta",
        d: "A relação entre a resistência e a velocidade",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');

const submitBtn = document.querySelector('.submit');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = data[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    optionA.innerText = currentQuizData.a;
    optionB.innerText = currentQuizData.b;
    optionC.innerText = currentQuizData.c;
    optionD.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelect() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelect();

    if (answer) {
        if (answer === data[currentQuiz].correct) {
            score++;
        }
    }
    currentQuiz++;

    if (currentQuiz < data.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <h2>Você respondeu ${score}/${data.length} Questões Corretas!</h2>
            <button onclick="location.reload()">Reiniciar</button>
        `;
    }
});

loadQuiz();
