const otpInputs = document.querySelectorAll('input[type="tel"]');

otpInputs.forEach((input, index) => {

    input.addEventListener('input', () => {
        if (input.value.length === input.maxLength) {
            const nextInput = otpInputs[index + 1];
            if (nextInput) nextInput.focus();
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && input.value === '') {
            const prevInput = otpInputs[index - 1];
            if (prevInput) prevInput.focus();
        }
    });
});


// Timer
let totalSeconds = 119;
const timer = document.querySelector("#timer");

const timerInterval = setInterval(() => {
    if (totalSeconds <= 0) return clearInterval(timerInterval);

    const min = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;

    timer.textContent = min > 0 ? `${min}:${sec.toString().padStart(2, '0')}` : `${sec}`;

    totalSeconds--;
}, 1000);

