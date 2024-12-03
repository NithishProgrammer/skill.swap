// Elements
const userForm = document.getElementById('userForm');
const userNameInput = document.getElementById('userName');
const welcomeMessage = document.getElementById('welcomeMessage');
const getStartedBtn = document.getElementById('getStartedBtn');
let email = document.getElementById('useremail');

// Check if user data exists
const userName = localStorage.getItem('userName');

if (userName) {
    // Personalize the welcome message
    welcomeMessage.innerHTML = `
        <h2>Welcome back, ${userName}!</h2>
        <p>Ready to swap skills and learn something new?</p>
    `;
    document.querySelector('.form-section').style.display = 'none';
    getStartedBtn.style.display = 'block';
}

// Save user data
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = userNameInput.value.trim();
    userForm.action = "https://formsubmit.co/" + email.value;
    userForm.method = "POST"


    if (name) {
        localStorage.setItem('userName', name);
        welcomeMessage.innerHTML = `
            <h2>Welcome, ${name}!</h2>
            <p>Get started with your skill-swapping journey.</p>
        `;
        document.querySelector('.form-section').style.display = 'none';
        getStartedBtn.style.display = 'block';
    }
});
