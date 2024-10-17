document.getElementById('nav-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = this.querySelector('i');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
});

function toggleExperience(item) {
    item.classList.toggle('open');
}

const projects = [
    {
        title: "Web Application Penetration Testing",
        description: "Conducted an extensive security assessment on a live web application...",
        link: "#"
    },
    {
        title: "Custom Python Script for Network Scanning",
        description: "Created a custom Python script for network scanning...",
        link: "#"
    },
    {
        title: "Capture The Flag (CTF) Challenges",
        description: "Participated in various CTF challenges...",
        link: "#"
    }
];

function loadProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Read More</a>
        `;
        container.appendChild(projectCard);
    });
}

document.addEventListener('DOMContentLoaded', loadProjects);
