const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const lengthPw = input.length;
    const blurValue = 20 - lengthPw * 2;
    background.style.filter = `blur(${blurValue}px)`;
});