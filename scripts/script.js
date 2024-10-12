document.addEventListener('DOMContentLoaded', () => {
    setInitialPositions();
});

function setInitialPositions() {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    if (image1 && image2) {
        image1.style.transform = 'translateY(-50%) translateX(-2em)';
        image2.style.transform = 'translateY(-50%) translateX(2em)';
    }
}

const section = document.querySelector('.scroll-section');
const maxScroll = section ? section.offsetHeight : 0;

window.addEventListener('scroll', () => {
    handleImageMovement();
    handleCircleAnimation();
});

function handleImageMovement() {
    const scrollPosition = Math.min(window.scrollY, maxScroll);
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    if (image1 && image2) {
        const maxTranslate = 32;
        const translateValue = Math.min(scrollPosition * 0.035, maxTranslate);
        image1.style.transform = `translateY(-50%) translateX(calc(-25em + ${translateValue}em))`;
        image2.style.transform = `translateY(-50%) translateX(calc(25em - ${translateValue}em))`;
    }
}

const animatedSection = document.querySelector('.animated-section');
const sectionCirkel = document.getElementById('sectionCirkel');
const scrollerOffset = document.querySelector('.scroller') ? document.querySelector('.scroller').offsetHeight : 0;

function handleCircleAnimation() {
    const rect = animatedSection ? animatedSection.getBoundingClientRect() : null;

    if (rect && sectionCirkel) {
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            let scrollPosition = window.scrollY - animatedSection.offsetTop;
            let count = (scrollPosition / scrollerOffset) * 100;
            count = Math.max(0, Math.min(count, 100));
            sectionCirkel.style.clipPath = `circle(${count}% at 50% 100%)`;
        }
    }
}

const cursor = document.querySelectorAll('.cursor');
const links = document.querySelectorAll("summary, a");

window.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.forEach(el => {
        el.style.top = `${y}px`;
        el.style.left = `${x}px`;
    });
});

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.forEach(el => el.classList.add("hover"));
    });
    link.addEventListener("mouseleave", () => {
        cursor.forEach(el => el.classList.remove("hover"));
    });
});

const button = document.querySelector('.button');



function wieBetaaldHetBier() {

    var namen = ["Ik heb weleens zand gegeten", "Ik eet me soms misselijk", "Ik ben weleens tegen een glazen muur gefietst",
        "Ik heb geen stalen zenuwen", "Ik heb mijn beide kleine tenen gebroken",
        "Ik ben mijn favoriete trui kwijt",
        "Ik heb ooit per ongeluk binnen vuurwerk afgestoken",
        "Ik ben bang voor vissen", "Ik ben goed in pingpong", "Ik hou niet van vieze handen", "Ik word nooit door muggen geprikt",
        "Ik luister naar Katy Perry", "Ik kan niet zo goed klussen",
        "Ik ben geen fan van naar de kapper gaan", "Pindakaas rechtstreeks uit de pot lepelen is m'n guilty pleasure", "Ik heb een kleine blaas", "Ik eet mijn yoghurt zonder granola",
        "Ik eet geen rauwe tomaat", "Ik wil ooit nog een tattoo", "Ik heb meegedaan aan de kids top 20", "Ik heb al 4x The Office uitgekeken"
    ];

    var randomGetal = Math.random() * 21;

    var pElement = document.querySelector("p.naam");


    randomGetal = Math.floor(randomGetal);

    pElement.textContent = namen[randomGetal];
}

button.addEventListener("click", wieBetaaldHetBier)

