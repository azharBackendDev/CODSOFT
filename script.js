document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
      const href = e.target.getAttribute('href');

      if (href === 'images/AZHAR-AKHTAR.pdf') {
          return;  
      }

      if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
          }
      }
  });
});