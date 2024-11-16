document.addEventListener("DOMContentLoaded", function() {
    const roles = ["A WEB DEVELOPER","A WEB DESIGNER", "A PROGRAMMER","An AI ENGINEER","A COPY WRITER" , "An AGENCY OWNER", "A SOFTWARE ENGINEER"];
    const typewriterText = document.querySelector(".typewriter-text");
    let index = 0;

    function typeRole() {
        typewriterText.textContent = "";
        let currentRole = roles[index];
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < currentRole.length) {
                typewriterText.textContent += currentRole.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    index = (index + 1) % roles.length;
                    typeRole();
                }, 2000); // Waiting  before deleting
            }
        }, 150);
    }

    typeRole();
});

