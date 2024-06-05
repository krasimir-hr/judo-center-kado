window.onload = function() {
    window.addEventListener('scroll', function() {
        window.scrollTo({
            top: window.scrollY + window.innerHeight, // Scroll down by 100vh
            behavior: 'smooth' // Smooth scrolling animation
        });
    });
};