document.addEventListener('DOMContentLoaded', () => {
    const ctaBtn = document.getElementById('cta-btn');
    
    ctaBtn.addEventListener('click', () => {
        const servicesSection = document.getElementById('services');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });

    console.log('Digital Solutions project loaded successfully!');
});
