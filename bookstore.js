document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // This is a simple check. In a real application, this would be handled securely on the server.
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'admin.html';
        } else {
            alert('Invalid username or password');
        }
    });
});