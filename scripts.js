document.addEventListener("DOMContentLoaded", function() {

    // Smooth Scroll for "About Us" and "Contact"
    const footerLinks = document.querySelectorAll('footer a');
    for (const link of footerLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const topPosition = targetElement.offsetTop;
                window.scrollTo({
                    top: topPosition,
                    behavior: "smooth"
                });
            }
        });
    }

    // Redirect to Typeform link when "Sign Up To Waitlist" is clicked
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        window.location.href = "https://iptor67su7y.typeform.com/to/KHwyneLb";
    });

});
