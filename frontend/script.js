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

// document.addEventListener('submit', ()=>{
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const msg = document.getElementById("msg").value;

//     if(!(email && name)) return alert('Name and emial are required');

//     alert(`form submit sucessfully\n\n name:${name}\n\n email:${email}\n\n msg:${msg}`);
    
    
//      window.location('#home');
    
// })