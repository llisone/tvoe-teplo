// ===== ЗАГРУЗКА =====
setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('content').style.display = 'flex';
}, 2000);

// ===== НАВИГАЦИЯ =====
const navBtns = document.querySelectorAll('.nav-btn');
const pages = {
    home: document.getElementById('page-home'),
    days: document.getElementById('page-days'),
    messages: document.getElementById('page-messages'),
    playlist: document.getElementById('page-playlist'),
    thoughts: document.getElementById('page-thoughts')
};

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const page = btn.dataset.page;
        Object.values(pages).forEach(p => p.classList.remove('active'));
        pages[page].classList.add('active');
    });
});

// ===== СЧЁТЧИК ДНЕЙ =====
const startDate = new Date('2026-07-15');
const now = new Date();
const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
document.getElementById('daysCount').textContent = diff;

// ===== СЛУЧАЙНЫЕ СООБЩЕНИЯ (главная) =====
const warmMessages = [
    'Ты — моё тепло ☀️',
    'Я думаю о тебе каждую минуту ❤️',
    'Ты делаешь мой мир ярче 🌸',
    'Спасибо, что ты есть 🫂',
    'Ты — самая тёплая душа, которую я знаю ✨',
    'Твоя улыбка — мой любимый свет 🌙'
];

document.getElementById('randomMessageBtn').addEventListener('click', () => {
    const msg = warmMessages[Math.floor(Math.random() * warmMessages.length)];
    document.getElementById('randomMessageDisplay').textContent = msg;
});

// ===== ЛЮБОВНЫЕ СООБЩЕНИЯ (страница) =====
const loveMessages = [
    'Ты — моя вселенная 🌌',
    'Я люблю тебя больше слов ❤️',
    'Ты — лучшее, что случалось со мной 🌟',
    'Каждый день с тобой — подарок 🎁',
    'Ты — причина моей улыбки 😊',
    'С тобой я чувствую себя живым 🔥'
];

document.getElementById('newMessageBtn').addEventListener('click', () => {
    const msg = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    document.getElementById('loveMessageDisplay').textContent = msg;
});

// ===== ТЕМА =====
let dark = true;
document.getElementById('themeToggle').addEventListener('click', () => {
    dark = !dark;
    document.body.classList.toggle('light', !dark);
    document.getElementById('themeToggle').textContent = dark ? '☀️' : '🌙';
});