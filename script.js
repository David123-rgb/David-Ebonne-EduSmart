//Toggle navigation menu
const toggle = document.getElementById('menu-toggle');
const navlinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});

//Form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    alert('Message sent successfully!');
    form.reset();
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 80) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
        });

        function toggleDetails() {
            const details = document.getElementById("course-details");
            if (details.style.display === "none") {
                details.style.display = "block";
            } else {
                details.style.display = "none";
            }
            }


            function toggleDataDetails() {
                const dataDetails = document.getElementById("data-course-details");
                if (dataDetails.style.display === "none") {
                    dataDetails.style.display = "block";
                } else {
                    dataDetails.style.display = "none";
                }
                }

                function toggleUIUXDetails() {
                    const uiuxDetails = document.getElementById("uiux-course-details");
                    if (uiuxDetails.style.display === "none") {
                        uiuxDetails.style.display = "block";
                } else {
                    uiuxDetails.style.display = "none";
                }
                }

        