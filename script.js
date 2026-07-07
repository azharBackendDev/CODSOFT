

const URL = 'http://localhost:5000';

// Smooth scroll for links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        const href = e.target.getAttribute('href');

        if (href === 'images/AZHAR-AKHTAR.pdf') return;

        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Handle form submit
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    let p = document.querySelector('#feedbackmsg');

    p.style.display = 'block';
    p.innerHTML = 'Sending...';

    try {
        const response = await fetch(`${URL}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        if (!response.ok) {
               p.style.color = 'red';
                p.innerHTML = 'Something went wrong Please check your connection and try again!';
            return;
        }

        const data = await response.json();
        if (data.success === true) {
            p.style.color = 'green';
            p.innerHTML = 'Form submitted successfully!';
            form.reset();
        }
    } catch (error) {
        p.style.color = 'red';
        p.innerHTML = 'Error sending message!';
    }
});

// 🌐 Mobile Menu Toggle
let icon = document.getElementById('scroll-icon');
let menu = document.getElementById('menu-option');

icon.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.position = 'absolute';
        menu.style.top = '60px'; // below header
        menu.style.right = '20px';
        menu.style.background = '#fff';
        menu.style.height= '20rem'
        menu.style.padding = '10px';
        menu.style.borderRadius = '10px';
        menu.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        menu.style.zIndex = '1000';
    }
});
