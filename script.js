// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lidar com o envio do formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previne o envio padrão do formulário

            const submitButton = contactForm.querySelector('.btn-cta');
            const originalButtonText = submitButton.textContent;

            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            setTimeout(() => {
                alert('Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset(); // Limpa o formulário
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }, 1500); // Simula um atraso de 1.5 segundos para envio
        });
    }

    // --- Nova Funcionalidade: Animação Fade-in ao Scroll ---
    const fadeInElements = document.querySelectorAll('.js-fade-in');

    const observerOptions = {
        root: null, // viewport como root
        rootMargin: '0px',
        threshold: 0.2 // Elemento visível em 20% do viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Adiciona classe para iniciar animação
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});