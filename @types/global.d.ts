declare global {
    interface Window { recaptchaVerifier: any; }
}

window.recaptchaVerifier = window.recaptchaVerifier || {}