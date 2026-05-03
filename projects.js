let Projects = {
  project1: [
    {
      title: "Click to see the demo",
      src: "/images/ecommerce.png",
      alt: "Calculator ",
    },
    {
      title: "Ecommerce",
      description: `Developed a Single Vendor E-Commerce Web Application where one seller manages all products and orders. Implemented JWT-based authentication and authorization to secure user access. Built a dynamic cart system that updates items and quantities in real time. Added full product management features including product upload, update, delete, view, and search. Integrated Supabase Storage Bucket for secure image/file storage. Designed  clean and structured (20+) REST APIs to handle users, products, cart, and authentication efficiently.`,
    },
  ],
  project2: [
    (img = {
      title: "Click to see the demo",
      src: "/images/calculator.png",
      alt: "Calculator ",
    }),
    (text = {
      title: "Calculator",
      description: `Basic Calculator with Responsive Design


          I created a Basic Calculator with a fully responsive design using HTML, CSS, and JavaScript. This calculator
          performs fundamental arithmetic operations, including addition (+), subtraction (-), multiplication (*), and
          division (/).

          Features:
          - Responsive Design: Works seamlessly across all screen sizes, from desktops to mobile devices.
          - User-Friendly Interface: Clean layout with easy-to-use buttons.
          - Basic Functionality: Supports essential operations for everyday calculations.
          - Real-Time Result: Instant calculation upon user input for a smooth experience.

          This project showcases my skills in building functional, visually appealing, and responsive web applications
          using core front-end technologies.`,
    }),
  ],
};

const projectContainer = document.getElementById("projects");
let flag = 1;

for (const key in Projects) {
  if (!Object.hasOwn(Projects, key)) continue;

  const element = Projects[key];
  console.log(element);

  //project div
  const Projectdiv = document.createElement("div");
  Projectdiv.className = "project";
  const projectImgDiv = document.createElement("div");
  projectImgDiv.className = "project-image";

  //create image tag
  const projectImg = document.createElement("img");
  projectImg.title = element[0]["title"];
  projectImg.src = element[0]["src"];
  projectImg.alt = element[0]["alt"];
  projectImgDiv.appendChild(projectImg);

  const projectDescriptionDiv = document.createElement("div");
  projectDescriptionDiv.className = "project-text";
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  h3.innerHTML = `<b>${element[1]["title"]}</b>`;
  p.innerHTML = element[1]["description"];
  projectDescriptionDiv.appendChild(h3);
  projectDescriptionDiv.appendChild(p);

  if (flag) {
    Projectdiv.appendChild(projectImgDiv);
    Projectdiv.appendChild(projectDescriptionDiv);
    flag = 0;
  } else {
    Projectdiv.appendChild(projectDescriptionDiv);
    Projectdiv.appendChild(projectImgDiv);
    flag = 1;
  }

  projectContainer.appendChild(Projectdiv);
}
