document.addEventListener('DOMContentLoaded', () => {
    const otpInput = document.querySelector('.otp-input');
    const submitBtn = document.querySelector('.submit-btn');
    const resendLink = document.querySelector('.resend-link');
    const messageDiv = document.querySelector('.message');

    let generatedOTP = generateOTP();

    function generateOTP() {
        // Generate a 4-digit random OTP
        const otp = Math.floor(1000 + Math.random() * 9000);
        console.log('Generated OTP:', otp); // For debugging, can be removed in production
        return otp.toString();
    }

    function showMessage(msg, isError = false) {
        messageDiv.textContent = msg;
        messageDiv.style.color = isError ? 'red' : 'green';
    }

    submitBtn.addEventListener('click', () => {
        const enteredOTP = otpInput.value.trim();
        if (enteredOTP === '') {
            showMessage('Please enter the OTP', true);
            return;
        }
        if (enteredOTP === generatedOTP) {
        showMessage('OTP Verified', false);
    } else {
        showMessage('Wrong OTP. Want to get new OTP?', true);
    }
    });

    resendLink.addEventListener('click', (e) => {
        e.preventDefault();
        generatedOTP = generateOTP();
        showMessage('New OTP sent. Please check and enter it.', false);
        otpInput.value = '';
    });
});
