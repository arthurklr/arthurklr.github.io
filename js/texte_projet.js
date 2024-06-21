document.addEventListener('DOMContentLoaded', function() {
    const h2 = document.getElementById('project-name');
    const text = h2.textContent;
    h2.innerHTML = '';

    // Wrap each letter in a span
    text.split('').forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        h2.appendChild(span);
    });

    const spans = h2.querySelectorAll('span');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const offset = h2.offsetTop;
        const distance = scrollPosition - offset;
        
        spans.forEach((span, index) => {
            const transformValue = `translate(${(index % 2 === 0 ? distance : -distance) / 5}px, ${distance / 5}px) rotate(${distance / 5}deg)`;
            const opacityValue = 1 - Math.min(1, Math.abs(distance) / 500);
            span.style.transform = transformValue;
            span.style.opacity = opacityValue;
        });
    });
});