// Modal Logic
const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const loginContainer = document.getElementById('loginContainer');

// Open Modal
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

// Close Modal (via X button)
closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Close Modal (clicking outside the card)
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// Interactive Password Toggle
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});

// Dynamic Form Submission (Simulated)
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    loginBtn.classList.add('loading');
    loginBtn.textContent = 'Authenticating...';

    setTimeout(() => {
        loginBtn.classList.remove('loading');
        loginBtn.textContent = 'Success!';
        loginBtn.style.background = '#28a745'; 

        setTimeout(() => {
            loginBtn.textContent = 'Login';
            loginBtn.style.background = '';
            loginForm.reset();
            // Automatically close the modal on success
            modalOverlay.classList.remove('active');
        }, 1500);
    }, 1500);
});
