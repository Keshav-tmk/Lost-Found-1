document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById('loginForm');

  if (!loginForm) return; // Only run if loginForm exists (index.html)

  // Hardcoded credentials (demo only)
  const credentials = {
    username: 'admin',
    password: '1234'
  };

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === credentials.username && password === credentials.password) {
      alert('Login successful!');
      localStorage.setItem('user', username);
      window.location.href = "post.html"; // redirect to post.html
    } else {
      alert('Invalid username or password');
    }
  });
});
