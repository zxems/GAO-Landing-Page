document.addEventListener('DOMContentLoaded', function() {
    // Handle video demo play button click
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            // Replace this URL with your actual video URL
            const videoUrl = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID';
            window.open(videoUrl, '_blank');
            
            // Alternatively, you could embed the video directly in the page:
            /*
            const videoContainer = document.querySelector('.video-container');
            videoContainer.innerHTML = `
                <iframe width="100%" height="600" 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1" 
                    title="Gmail Attachment Organizer Demo" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
            */
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .hero-cta a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only process if it's an anchor link
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href === '#' ? 'body' : href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Account for navbar height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Mobile navigation toggle (add a hamburger menu for smaller screens)
    // Note: You'll need to add a hamburger button in the HTML for this to work
    /*
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    */
}); 