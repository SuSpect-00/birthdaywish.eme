// Password checking function
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    const password = passwordInput.value.toLowerCase().trim();
    
    // The answer to the riddle is "love"
    if (password === 'love') {
        // Success! Redirect to wish page
        window.location.href = 'wish.html';
    } else {
        // Show error message with a hint
        errorMessage.textContent = '💔 Not quite right, my love. Think about what we share... (Hint: 4 letters) 💕';
        passwordInput.value = '';
        passwordInput.focus();
        
        // Add shake animation to input
        passwordInput.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            passwordInput.style.animation = '';
        }, 500);
    }
}

// Allow Enter key to submit password
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
        passwordInput.focus();
    }
});

// Navigation functions
function goToCake() {
    window.location.href = 'cake.html';
}

function goToLetter() {
    window.location.href = 'letter.html';
}

function goHome() {
    window.location.href = 'index.html';
}

// Candle blowing function
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    const celebration = document.getElementById('celebration');
    const blowBtn = document.getElementById('blowBtn');
    
    // Hide flames one by one
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.opacity = '0';
            flame.style.transform = 'translateX(-50%) scale(0)';
        }, index * 200);
    });
    
    // Show celebration after all candles are blown
    setTimeout(() => {
        celebration.classList.remove('hidden');
        blowBtn.style.display = 'none';
        
        // Add confetti effect
        createConfetti();
    }, flames.length * 200 + 500);
}

// Confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '1000';
    document.body.appendChild(confettiContainer);
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `confettiFall ${2 + Math.random() * 3}s linear forwards`;
        confettiContainer.appendChild(confetti);
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 5000);
}

// Add shake animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some interactive elements on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add click effects to hearts
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.addEventListener('click', function() {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.5)';
            setTimeout(() => {
                this.style.animation = 'float 6s ease-in-out infinite';
                this.style.transform = '';
            }, 300);
        });
    });
    
    // Add typing effect to poem lines
    const poemLines = document.querySelectorAll('.poem-line');
    if (poemLines.length > 0) {
        poemLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            setTimeout(() => {
                typeWriter(line, text, 50);
            }, index * 800);
        });
    }
});

// Typewriter effect
function typeWriter(element, text, speed) {
    let i = 0;
    element.style.opacity = '1';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}