const text = [
    'AI & Data Science Enthusiast',
    'Full Stack Web Developer',
    'Problem Solver',
    'Tech Explorer'
];

let count = 0;
let index = 0;
const typingElement = document.getElementById('typing');

function typeWriter() {
    if (count === text.length) {
        count = 0;
    }

    const currentText = text[count];
    typingElement.textContent = currentText.slice(0, ++index);

    if (index === currentText.length) {
        count++;
        index = 0;
        setTimeout(typeWriter, 1400);
    } else {
        setTimeout(typeWriter, 100);
    }
}

typeWriter();
