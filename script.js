// Get all project elements
const projects = document.querySelectorAll('.project');

// Add event listeners to each project
projects.forEach(project => {
    // Add hover effect on mouse enter
    project.addEventListener('mouseenter', () => {
        project.classList.add('expanded'); // Add the 'expanded' class
    });

    // Remove hover effect on mouse leave
    project.addEventListener('mouseleave', () => {
        project.classList.remove('expanded'); // Remove the 'expanded' class
    });
});