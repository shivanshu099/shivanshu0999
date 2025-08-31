
// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
});
// Tabs
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname) {
    Array.from(tablinks).forEach(link => link.classList.remove('active-link'));
    Array.from(tabcontents).forEach(content => content.classList.remove('active-tab'));
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}
var typed = new Typed('#element', {
    strings: ['Data Scientist', 'Python Developer', 'LLM Enthusiast', 'Web Developer', 'Machine Learning Engineer'],
    typeSpeed: 50,
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
    const myImage = document.getElementById("my_image");
    const defaultImage = "image_4.png";
    const hoverImage = "image_5.png";
    myImage.addEventListener("mouseover", function () {
        this.src = hoverImage;
    });
    myImage.addEventListener("mouseleave", function () {
        this.src = defaultImage;
    });
});

function marqueanimation() {

    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to(".marque ", {
                transform: "translateX(-200%)",
                duration: 4,
                repeat: -1,
                ease: "none",

            })

            gsap.to(".marque img", {
                rotate: 180,
            })
        }
        else {
            gsap.to(".marque ", {
                transform: "translateX(0%)",
                duration: 4,
                repeat: -1,
                ease: "none",

            })

            gsap.to(".marque img", {
                rotate: 0,
            })
        }
    })
}

marqueanimation()
