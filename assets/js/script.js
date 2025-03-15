function handleClick(action) {
            if (action === 'funFact') {
                const funFacts = [
                    'I can code in multiple programming languages!',
                    'I love integrating anime themes into my projects!',
                    'I enjoy exploring new technologies and learning new things!'
                ];
                document.getElementById('fun-fact').textContent = funFacts[Math.floor(Math.random() * funFacts.length)];
            } else if (action === 'toggleMenu') {
                document.querySelector('nav ul').classList.toggle('active');
            }
        }

document.addEventListener("DOMContentLoaded", function() {
            const image = document.getElementById("myImage");
            const originalSrc = image.src;
            const hoverSrc = "assets/img/nad.png"; // Change this to the hover image

            image.addEventListener("mouseover", function() {
                image.src = hoverSrc;
            });

            image.addEventListener("mouseout", function() {
                image.src = originalSrc;
            });
        });

    // Show Random Fun Fact
    function showFunFact() {
        const facts = [
            "I started coding when I was 12!",
            "I once built a website in just 3 hours!",
            "I love debugging more than writing new code!"
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById('about-description').innerText = randomFact;
    }