/* =========================
   ELEMENTS
========================= */

const screens = document.querySelectorAll(".screen");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const decorateSound = document.getElementById("decorateSound");
const candleSound = document.getElementById("candleSound");
const blowSound = document.getElementById("blowSound");
const confettiSound = document.getElementById("confettiSound");
const cheerSound = document.getElementById("cheerSound");

/* =========================
   STOP SOUNDS
========================= */

function stopCakeSounds() {

    [decorateSound, candleSound, blowSound]
    .forEach(sound => {

        if(sound){

            sound.pause();
            sound.currentTime = 0;
        }
    });
}

/* =========================
   SCREEN NAVIGATION
========================= */

function showScreen(screenId){

    stopCakeSounds();

    screens.forEach(screen=>{
        screen.classList.remove("active");
    });

    document
        .getElementById(screenId)
        .classList.add("active");

    adjustMusic(screenId);
}

window.showScreen = showScreen;

document
.querySelectorAll(".nextBtn")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const target =
        button.dataset.target;

        if(target){

            showScreen(target);
        }
    });
});

/* =========================
   MUSIC
========================= */

let musicPlaying = false;

musicBtn.addEventListener("click",()=>{

    if(!musicPlaying){

        bgMusic.volume = 0.3;

        bgMusic.play();

        musicBtn.innerHTML =
        "🎵 Music Playing";

        musicPlaying = true;
    }
});

function adjustMusic(screenId){

    if(!musicPlaying) return;

    if(screenId === "cakeScreen"){

        bgMusic.volume = 0.2;

    }else{

        bgMusic.volume = 0.3;
    }
}

/* =========================
   PASSWORD LOCK
========================= */

const unlockBtn =
document.getElementById("unlockBtn");

const passwordInput =
document.getElementById("passwordInput");

const lockGif =
document.getElementById("lockGif");

const lockMessage =
document.getElementById("lockMessage");

const PASSWORD = "220321";

unlockBtn.addEventListener("click",()=>{

    if(passwordInput.value === PASSWORD){

        lockGif.src =
        "assets/gifs/correct.gif";

        lockMessage.innerHTML =
        "Yayyy ❤️ Welcome Bujjoda";

        setTimeout(()=>{

            showScreen(
                "welcomeScreen"
            );

        },2000);

    }else{

        lockGif.src =
        "assets/gifs/wrong.gif";

        lockMessage.innerHTML =
        "Ayyooo 😒 Wrong Password";

        passwordInput.value = "";
    }
});

/* =========================
   CAKE
========================= */

const decorateBtn =
document.getElementById("decorateBtn");

const blowBtn =
document.getElementById("blowBtn");

const cakeImage =
document.getElementById("cakeImage");

const candleContainer =
document.getElementById("candleContainer");

const flame =
document.getElementById("flame");

const sparkles =
document.getElementById("sparkles");

const balloonsContainer =
document.getElementById(
"balloonsContainer"
);

/* =========================
   SPARKLES
========================= */

function createSparkles(){

    sparkles.innerHTML = "";

    for(let i=0;i<35;i++){

        const sparkle =
        document.createElement("div");

        sparkle.className =
        "sparkle";

        sparkle.innerHTML = "✨";

        sparkle.style.left =
        Math.random()*320 + "px";

        sparkle.style.top =
        Math.random()*250 + "px";

        sparkles.appendChild(
            sparkle
        );
    }
}

/* =========================
   BALLOONS
========================= */

function createBalloons(){

    balloonsContainer.innerHTML = "";

    const colors = [
        "🎈",
        "🎈",
        "🎈",
        "🎈"
    ];

    for(let i=0;i<25;i++){

        const balloon =
        document.createElement("div");

        balloon.classList.add(
            "balloon"
        );

        balloon.innerHTML =
        colors[
            Math.floor(
            Math.random()*colors.length
            )
        ];

        balloon.style.left =
        Math.random()*100 + "%";

        balloon.style.animationDelay =
        Math.random()*6 + "s";

        balloon.style.fontSize =
        25 + Math.random()*25 + "px";

        balloonsContainer.appendChild(
            balloon
        );
    }
}

/* =========================
   DECORATE CAKE
========================= */

decorateBtn.addEventListener("click",()=>{

    createSparkles();

    createBalloons();

    if(decorateSound){

        decorateSound.volume = 0.7;
        decorateSound.play();
    }

    cakeImage.classList.add(
        "decorate"
    );

    setTimeout(()=>{

        cakeImage.src =
        "assets/photos/cake-after.png";

        candleContainer.classList.add(
            "show"
        );

        if(candleSound){

            candleSound.volume = 0.7;
            candleSound.play();
        }

    },1200);

    decorateBtn.style.display =
    "none";

    blowBtn.style.display =
    "inline-block";
});

/* =========================
   BLOW CANDLE
========================= */

blowBtn.addEventListener("click",()=>{

    if(musicPlaying){

        bgMusic.volume = 0.1;
    }

    if(blowSound){

        blowSound.volume = 0.9;
        blowSound.play();
    }

    setTimeout(()=>{

        flame.classList.add("out");

        confetti({
            particleCount:350,
            spread:130,
            origin:{y:0.6}
        });

    },500);

    setTimeout(()=>{

        if(confettiSound){

            confettiSound.volume = 1;
            confettiSound.play();
        }

        if(cheerSound){

            cheerSound.volume = 0.8;
            cheerSound.play();
        }

        showScreen(
            "loveScreen"
        );

        if(musicPlaying){

            bgMusic.volume = 0.3;
        }

    },1800);
});

/* =========================
   GALLERY
========================= */

const galleryData = [

    {
        image:"assets/photos/gallery1.jpg",
        text:"Our first selfie"
    },

    {
        image:"assets/photos/gallery2.jpg",
        text:"A small meet"
    },

    {
        image:"assets/photos/gallery3.jpg",
        text:"nenu thesina first selfie"
    },

    {
        image:"assets/photos/gallery4.jpg",
        text:"10th ipoyaka photo"
    },

    {
        image:"assets/photos/gallery5.jpg",
        text:"Temple date"
    },

    {
        image:"assets/photos/gallery6.jpg",
        text:"My favorite photo"
    },

    {
        image:"assets/photos/gallery7.jpg",
        text:"Unexpected photo"
    },

    {
        image:"assets/photos/gallery8.jpg",
        text:"Beach photo"
    },

    {
        image:"assets/photos/gallery9.jpg",
        text:"Cute memory"
    },

    {
        image:"assets/photos/gallery10.jpg",
        text:"Best day ❤️"
    }

];

const galleryContainer =
document.getElementById(
"galleryContainer"
);

function loadGallery(){

    galleryData.forEach(item=>{

        const card =
        document.createElement("div");

        card.className =
        "gallery-card";

        card.innerHTML = `
            <img src="${item.image}">
            <div class="gallery-text">
                ${item.text}
            </div>
        `;

        galleryContainer.appendChild(
            card
        );
    });
}

loadGallery();

/* =========================
   STARS
========================= */

const starsContainer =
document.getElementById(
"starsContainer"
);

const memoryText =
document.getElementById(
"memoryText"
);

const finalMessage =
document.getElementById(
"finalMessage"
);

const starMessages = [

"I love your eyes 👀",
"I love your smile 😁",
"I love your care 🫂",
"I love the way you treat me 💕",
"I am lucky to have you 🥰",
"You are the best thing in my life ❤️",
"You're my favorite distraction 😩",
"You always make me smile 😚",
"Being beautiful is your crime 😍",
"You make every day better ❤️"

];

let openedStars = 0;

function createStars(){

    const heartPoints = [

        [50,15],

        [35,5],
        [25,15],

        [20,30],
        [30,45],

        [50,70],

        [70,45],
        [80,30],

        [75,15],
        [65,5]

    ];

    for(let i=0;i<starMessages.length;i++){

        const star =
        document.createElement("div");

        star.classList.add("star");

        star.innerHTML = "⭐";

        star.style.left =
        heartPoints[i][0] + "%";

        star.style.top =
        heartPoints[i][1] + "%";

        star.addEventListener(
            "click",
            ()=>{

                memoryText.innerHTML =
                starMessages[i];

                star.animate(
                [
                    {
                        transform:"scale(1)"
                    },
                    {
                        transform:"scale(1.8)"
                    },
                    {
                        transform:"scale(1.2)"
                    }
                ],
                {
                    duration:500
                });

                if(
                    !star.classList.contains(
                    "opened"
                    )
                ){

                    star.classList.add(
                    "opened"
                    );

                    star.innerHTML = "🌟";

                    openedStars++;
                }

                if(
                    openedStars ===
                    starMessages.length
                ){

                    createHeartConstellation();
                }
            }
        );

        starsContainer.appendChild(
            star
        );
    }
}

createStars();


/* =========================
   HEART CONSTELLATION
========================= */

function createHeartConstellation(){

    memoryText.innerHTML =
    "✨ All Memories Unlocked ✨";

    starsContainer.innerHTML = "";

    const heartPoints = [

        [50,20],
        [40,10],
        [30,15],
        [25,30],
        [30,45],

        [50,70],

        [70,45],
        [75,30],
        [70,15],
        [60,10]

    ];

    heartPoints.forEach(point=>{

        const star =
        document.createElement("div");

        star.className = "star";

        star.innerHTML = "⭐";

        star.style.left =
        point[0]+"%";

        star.style.top =
        point[1]+"%";

        star.style.fontSize =
        "45px";

        starsContainer.appendChild(
            star
        );
    });

    setTimeout(()=>{

        finalMessage.style.display =
        "block";

    },2000);
}

/* =========================
   ORIGINAL MESSAGE TOGGLE
========================= */

const toggleOriginal =
document.getElementById(
"toggleOriginal"
);

const originalMessage =
document.getElementById(
"originalMessage"
);

if(toggleOriginal){

    originalMessage.style.display =
    "none";

    toggleOriginal.addEventListener(
    "click",
    ()=>{

        if(
            originalMessage.style.display
            === "none"
        ){

            originalMessage.style.display =
            "block";

        }else{

            originalMessage.style.display =
            "none";
        }
    });
}