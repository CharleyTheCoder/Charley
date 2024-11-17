// Get all link elements
const links = document.querySelectorAll('.link');

// Apply a ripple effect on each link click
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove existing ripples
        const existingRipple = link.querySelector('.ripple');
        if (existingRipple) existingRipple.remove();

        // Create ripple span
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        // Set the size and position of the ripple
        const maxDimension = Math.max(link.clientWidth, link.clientHeight);
        ripple.style.width = ripple.style.height = `${maxDimension}px`;
        ripple.style.left = `${e.clientX - link.getBoundingClientRect().left - maxDimension / 2}px`;
        ripple.style.top = `${e.clientY - link.getBoundingClientRect().top - maxDimension / 2}px`;

        // Add ripple to the link and remove it after animation
        link.appendChild(ripple);
        setTimeout(() => ripple.remove(), 500);
    });
});
// Click to enter functionality
document.getElementById('enter-screen').addEventListener('click', function() {
    this.style.display = 'none';
});
