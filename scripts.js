const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;
let timer;

/* Cores */

const colors = [
    // Poder
    {
        color: '#8b00ff',
        rgb: '139, 0, 255'
    },

    // Espaço
    {
        color: '#007bff',
        rgb: '0, 123, 255'
    },

    // Mente
    {
        color: '#ffd700',
        rgb: '255, 215, 0'
    },

    // Realidade
    {
        color: '#ff0000',
        rgb: '255, 0, 0'
    },

    // Tempo
    {
        color: '#00ff44',
        rgb: '0, 255, 68'
    },

    // Alma
    {
        color: '#ff7b00',
        rgb: '255, 123, 0'
    }
];

/* Atualiza as cores */

function updateColors() {
    const currentColor = colors[active];

    document.documentElement.style.setProperty('--primary-color', currentColor.color);
    document.documentElement.style.setProperty('--primary-rgb', currentColor.rgb);
}

/* Atualiza o slide */

function update(direction) {
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

    if (direction > 0) {
        active++;

        if (active === total) {
            active = 0;
        }
    } else if (direction < 0) {
        active--;

        if (active < 0) {
            active = total - 1;
        }
    }

    items[active].classList.add('active');
    dots[active].classList.add('active');

    numberIndicator.textContent = String(active + 1).padStart(2, '0');

    updateColors();
    restartTimer();
}

/* Reinicia o timer */

function restartTimer() {
    clearInterval(timer);

    timer = setInterval(() => {
        update(1);
    }, 15000);
}

/* Navegação */

prevButton.addEventListener('click', () => {
    update(-1);
});

nextButton.addEventListener('click', () => {
    update(1);
});

/* Inicialização */

updateColors();
restartTimer();