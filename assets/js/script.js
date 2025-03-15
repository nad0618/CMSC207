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
            "Family First: Whether I am lending an ear as a supportive brother or sharing wisdom as a caring father, I’m always there for relationship discussions and heartfelt advice.",
            "Puzzle Enthusiast: I love getting lost in the challenge of puzzles—exploring intricate brain-teasers that spark my curiosity and sharpen my problem-solving skills.",
            "Savvy Saver: I am money-driven in the best way—always hunting for clever ways to save and make smart financial choices, proving that a little frugality can lead to big rewards."
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById('about-description').innerText = randomFact;
    }