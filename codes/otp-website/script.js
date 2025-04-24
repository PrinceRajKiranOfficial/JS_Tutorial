const otpInputs = document.querySelectorAll('.otp-input');
const form = document.getElementById('otp-form');
const message = document.getElementById('message');
const resendBtn = document.getElementById('resend-btn');

let generatedOTP = generateOTP();

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function clearInputs() {
    otpInputs.forEach(input => input.value = '');
    otpInputs[0].focus();
}

function getEnteredOTP() {
    let otp = '';
    otpInputs.forEach(input => {
        otp += input.value;
    });
    return otp;
}

otpInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length > 0 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredOTP = getEnteredOTP();
    if (enteredOTP === generatedOTP) {
        message.style.color = 'green';
        message.textContent = 'OTP Verified Successfully!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid OTP. Please try again.';
    }
});

resendBtn.addEventListener('click', () => {
    generatedOTP = generateOTP();
    message.style.color = 'blue';
    message.textContent = 'New OTP has been sent. Please check.';
    clearInputs();
    console.log('Generated OTP:', generatedOTP); // For demo purposes, show OTP in console
});

// Initialize focus on first input
otpInputs[0].focus();
console.log('Generated OTP:', generatedOTP); // For demo purposes, show OTP in console
