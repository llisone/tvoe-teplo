// ===== НАВИГАЦИЯ =====
const btns = document.querySelectorAll('.nav-btn');
const pages = {
    home: document.getElementById('page-home'),
    days: document.getElementById('page-days'),
    messages: document.getElementById('page-messages'),
    playlist: document.getElementById('page-playlist')
};

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        Object.values(pages).forEach(p => p.classList.remove('active'));
        pages[btn.dataset.page].classList.add('active');
    });
});

// ===== СЧЁТЧИК ДНЕЙ =====
const start = new Date('2026-07-15');
const now = new Date();
const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
document.getElementById('daysCount').textContent = diff;

// ===== РАНДОМ (главная) =====
const warm = [
    'Ты — моё тепло ☀️',
    'Я думаю о тебе ❤️',
    'Ты делаешь мир ярче 🌸',
    'Спасибо, что ты есть 🫂',
    'Ты — самая тёплая душа ✨'
];

document.getElementById('randomBtn').addEventListener('click', () => {
    document.getElementById('randomMsg').textContent = warm[Math.floor(Math.random() * warm.length)];
});

// ===== ЛЮБОВНЫЕ СООБЩЕНИЯ =====
const love = [
    'Ты — моя вселенная 🌌',
    'Я люблю тебя ❤️',
    'Ты — лучшее, что случилось 🌟',
    'Каждый день с тобой — подарок 🎁',
    'Ты — причина моей улыбки 😊'
];

document.getElementById('loveBtn').addEventListener('click', () => {
    document.getElementById('loveMsg').textContent = love[Math.floor(Math.random() * love.length)];
});

// ===== ТЕМА =====
let dark = true;
document.getElementById('themeBtn').addEventListener('click', () => {
    dark = !dark;
    document.body.classList.toggle('light', !dark);
    document.getElementById('themeBtn').textContent = dark ? '🌙' : '☀️';
});