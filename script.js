// ======================
// CARROSSEL
// ======================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}, 3000);


// ======================
// CONTADOR DE TEMPO
// ======================

const contador = document.getElementById("contador");

// COLOQUE A DATA DO RELACIONAMENTO AQUI
const dataRelacionamento = new Date("2026-05-08T00:00:00");

function atualizarContador() {

    const agora = new Date();

    let anos = agora.getFullYear() - dataRelacionamento.getFullYear();
    let meses = agora.getMonth() - dataRelacionamento.getMonth();
    let dias = agora.getDate() - dataRelacionamento.getDate();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    if (dias < 0) {
        meses--;
        dias += 30;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    contador.innerHTML = `
        Te amo há <br>
        ${anos > 0 ? anos+' anos<br>': ''}
        ${meses > 0 ? meses+' meses<br>': ''}
        ${dias > 0 ? dias+' dias<br>': ''}
        ${horas > 0 ? horas+' horas<br>': ''}
        ${minutos > 0 ? minutos+' minutos<br>': ''}
        e<br>
        ${segundos > 1 ? segundos +' segundos 🤍' : segundos + ' segundo 🤍'}
    `;
}

setInterval(atualizarContador, 1000);

atualizarContador();


// ======================
// ANIMAÇÃO DE CORAÇÕES
// ======================

const relationshipDate = document.getElementById("relationship-date");

relationshipDate.addEventListener("click", () => {

    for (let i = 0; i < 30; i++) {
        const icons = ['🤍', '😍', '😘']
        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";

        heart.style.fontSize =
            Math.random() * 30 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
});

// ======================
// CORAÇÕES DE FUNDO
// ======================

const backgroundHearts =
    document.querySelector(".background-hearts");

function createFloatingHeart() {
    const icons = ['🤍', '❤️']
    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];

    // posição aleatória
    heart.style.left = Math.random() * 100 + "vw";

    // tamanho aleatório
    heart.style.fontSize =
        Math.random() * 30 + 15 + "px";

    // duração aleatória
    heart.style.animationDuration =
        Math.random() * 10 + 10 + "s";

    // transparência aleatória
    heart.style.opacity =
        Math.random() * 0.5;

    backgroundHearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 30000);
}

// cria vários continuamente
setInterval(createFloatingHeart, 2000);