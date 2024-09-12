gsap.registerPlugin(ScrollTrigger)
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    // console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// let tl4 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".part-4",
//         start: "top top",
//         end: "300% 50%",
//         pin: true,
//         scrub: 1,
//     },
// });

// const tl4 = gsap.timeline({ paused: true });

// tl4.to(".c-one", {
//     marginTop: "-39%",
//     opacity: "1",
// }, 'sct-1')
// tl4.pause();

// tl4.to(".c-two", {
//     opacity: "1",
// }, 'sct-2')
// tl4.to(".c-one", {
//     marginTop: "-78%",
//     opacity: "0",
// }, 'sct-2')
// tl4.pause();

// tl4.to(".c-three", {
//     opacity: "1",
// }, 'sct-3')
// tl4.to(".c-two", {
//     opacity: "0",
// }, 'sct-3')
// tl4.to(".c-one", {
//     marginTop: "-120%",
// }, 'sct-3')
// tl4.pause();


// tl4.to(".c-three", {
//     opacity: "0",
// }, 'sct-4')
// tl4.to(".c-four", {
//     opacity: "1",
// }, 'sct-4')
// tl4.to(".c-one", {
//     marginTop: "-160%",
// }, 'sct-4')


// tl4.to(".c-five", {
//     opacity: "1",
// }, 'sct-5')
// tl4.to(".c-four", {
//     opacity: "0",
// }, 'sct-5')
// tl4.to(".c-one", {
//     marginTop: "-200%",
// }, 'sct-5')


// tl4.to(".c-six", {
//     opacity: "1",
// }, 'sct-6')
// tl4.to(".c-five", {
//     opacity: "0",
// }, 'sct-6')
// tl4.to(".c-one", {
//     marginTop: "-240%",
// }, 'sct-6')


// tl4.to(".c-seven", {
//     opacity: "1",
// }, 'sct-7')
// tl4.to(".c-six", {
//     opacity: "0",
// }, 'sct-7')
// tl4.to(".c-one", {
//     marginTop: "-280%",
// }, 'sct-7')

// tl4.to(".c-seven", {
//     opacity: "0",
// }, 'sct-8')
// tl4.to(".c-one", {
//     marginTop: "-320%",
// }, 'sct-8')


// tl4.to(".c-eight", {
//     opacity: "0",
// }, 'sct-6')
// tl4.to(".c-one", {
//     marginTop: "-360%",
// }, 'sct-6')



const gridItems = [...document.querySelectorAll('.grid > .grid__item')];

// document.getElementById("textcnt").addEventListener('click', function () {
//     document.getElementById("textcnt").style.marginTop = "-100%";
//     document.getElementById("textcnt").style.marginTop = '-' + document.getElementById("textcnt").style.marginTop + '%'; 
// })


var clickCount = 0;
function changeText() {
    
    if(clickCount == 0) {
        document.getElementById("textcnt").style.marginTop = '0%';
        clickCount++;
    }
    else if(clickCount == 1) {
        document.getElementById("textcnt").style.marginTop = '-29%';
        clickCount++;
    }
    else if(clickCount == 2) {
        document.getElementById("textcnt").style.marginTop = '-59%';
        clickCount++;
    }
    else if(clickCount == 3) {
        document.getElementById("textcnt").style.marginTop = '-89%';
        clickCount++;
    }
    else if(clickCount == 4) {
        document.getElementById("textcnt").style.marginTop = '-119%';
        clickCount++;
    }
    else if(clickCount == 5) {
        document.getElementById("textcnt").style.marginTop = '-149%';
        clickCount++;
    }
    else if(clickCount == 6) {
        document.getElementById("textcnt").style.marginTop = '-177%';
        clickCount++;
    }
    // else {
    //     document.getElementById("textcnt").style.marginTop = '0px';
    //     clickCount = 0;
    // }
    
}


// const lenis = new Lenis({
//     lerp: 0.1,
//     smooth: true,
// });
// const scrollFn = () => {
//     lenis.raf();
//     requestAnimationFrame(scrollFn);
// };
// requestAnimationFrame(scrollFn);

gridItems.forEach(item => {

    const image = item.querySelector('.grid__item-img, .grid__item-img2, .grid__item-img3');

    gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    })
        .set(image, {
            transformOrigin: `${gsap.utils.random(0, 1) > 0.5 ? 0 : 100}% 100%`
        })
        .to(image, {
            ease: 'none',
            opacity: 0
        });
});


const openPopupButtons = document.querySelectorAll('#open-popup, #open-popup-arrow');
const videoPopup = document.getElementById('video-popup');
const video = document.getElementById('popup-video');

function openPopup() {
    videoPopup.style.display = 'flex';
}

function closePopup() {
    videoPopup.style.display = 'none';
    video.pause();
    video.currentTime = 0;
}

function toggleVideoPlayback() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

openPopupButtons.forEach(button => {
    button.addEventListener('click', openPopup);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

video.addEventListener('click', toggleVideoPlayback);


