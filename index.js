// GET HTML ELEMENTS

const openSurpriseButton =
    document.getElementById("openSurprise");

const surpriseSection =
    document.getElementById("surprise");

const readLetterButton =
    document.getElementById("readLetter");

const letterDialog =
    document.getElementById("letterDialog");

const closeLetterButton =
    document.getElementById("closeLetter");

const finalSurpriseButton =
    document.getElementById("finalSurprise");

const toast =
    document.getElementById("toast");

const heartsContainer =
    document.getElementById("hearts");


// PHOTO GALLERY ELEMENTS

const ourMomentsCard =
    document.getElementById("ourMomentsCard");

const photosDialog =
    document.getElementById("photosDialog");

const closePhotosButton =
    document.getElementById("closePhotos");


// ALWAYS FOREVER VIDEO ELEMENTS

const alwaysForeverCard =
    document.getElementById("alwaysForeverCard");

const foreverVideoPage =
    document.getElementById("foreverVideoPage");

const foreverVideo =
    document.getElementById("foreverVideo");

const closeForeverVideoButton =
    document.getElementById("closeForeverVideo");


// OPEN MAIN SURPRISE

openSurpriseButton.addEventListener("click", () => {

    surpriseSection.classList.remove("hidden");

    surpriseSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    openSurpriseButton.innerHTML =
        'Surprise Unlocked ♥';

    makeHearts(18);

});


// OPEN PHOTO GALLERY

function openPhotos() {

    photosDialog.showModal();

    makeHearts(12);

    const gallery =
        document.querySelector(".gallery");

    const photos =
        gallery.querySelectorAll("img");

    gallery.classList.add("reveal-active");

    photos.forEach((photo, index) => {

        photo.classList.remove("revealed");

        photo.style.animationDelay =
            `${index * 0.45}s`;

        window.setTimeout(() => {

            photo.classList.add("revealed");

        }, 100);

    });

}


// OPEN GALLERY ON CLICK

ourMomentsCard.addEventListener("click", openPhotos);


// OPEN GALLERY USING KEYBOARD

ourMomentsCard.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        openPhotos();

    }

});


// RESET GALLERY ANIMATION

function resetGalleryAnimation() {

    const gallery =
        document.querySelector(".gallery");

    gallery.classList.remove("reveal-active");

    gallery.querySelectorAll("img").forEach(photo => {

        photo.classList.remove("revealed");

        photo.style.animationDelay = "";

    });

}


// CLOSE PHOTO GALLERY

closePhotosButton.addEventListener("click", () => {

    photosDialog.close();

    resetGalleryAnimation();

});


// CLICK OUTSIDE PHOTO GALLERY TO CLOSE

photosDialog.addEventListener("click", (event) => {

    if (event.target === photosDialog) {

        photosDialog.close();

        resetGalleryAnimation();

    }

});


// OPEN LETTER

readLetterButton.addEventListener("click", () => {

    letterDialog.showModal();

    makeHearts(8);

});


// CLOSE LETTER

closeLetterButton.addEventListener("click", () => {

    letterDialog.close();

});


// CLICK OUTSIDE LETTER TO CLOSE

letterDialog.addEventListener("click", (event) => {

    if (event.target === letterDialog) {

        letterDialog.close();

    }

});


// =================================
// ALWAYS FOREVER VIDEO FUNCTIONS
// =================================


// OPEN FULL SCREEN VIDEO

function openForeverVideo() {

    foreverVideoPage.classList.add("active");

    foreverVideoPage.setAttribute("aria-hidden", "false");

    document.body.classList.add("video-open");

    makeHearts(15);

    foreverVideo.currentTime = 0;

    // Try to play automatically.
    // If browser blocks autoplay, user can press play.

    foreverVideo.play().catch(() => {

        console.log("Please press play to start the video.");

    });

}


// CLOSE FULL SCREEN VIDEO

function closeForeverVideo() {

    foreverVideo.pause();

    foreverVideo.currentTime = 0;

    foreverVideoPage.classList.remove("active");

    foreverVideoPage.setAttribute("aria-hidden", "true");

    document.body.classList.remove("video-open");

}


// OPEN VIDEO WHEN CARD IS CLICKED

alwaysForeverCard.addEventListener("click", openForeverVideo);


// OPEN VIDEO USING KEYBOARD

alwaysForeverCard.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        openForeverVideo();

    }

});


// CLOSE VIDEO BUTTON

closeForeverVideoButton.addEventListener("click", closeForeverVideo);


// CLOSE VIDEO USING ESCAPE KEY

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        foreverVideoPage.classList.contains("active")
    ) {

        closeForeverVideo();

    }

});


// FINAL SURPRISE BUTTON

finalSurpriseButton.addEventListener("click", () => {

    makeHearts(28);

    toast.classList.add("show");

    window.setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

});


// FLOATING HEARTS FUNCTION

function makeHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("span");

        heart.className = "heart";

        heart.textContent =
            Math.random() > 0.5 ? "♥" : "♡";

        heart.style.left =
            `${Math.random() * 100}%`;

        heart.style.fontSize =
            `${12 + Math.random() * 20}px`;

        heart.style.animationDuration =
            `${6 + Math.random() * 5}s`;

        heart.style.animationDelay =
            `${Math.random() * 1.5}s`;

        heartsContainer.appendChild(heart);

        window.setTimeout(() => {

            heart.remove();

        }, 12000);

    }

}


// INITIAL DREAMY HEARTS

window.setTimeout(() => {

    makeHearts(8);

}, 1000);


// CONTINUOUS BACKGROUND HEARTS

window.setInterval(() => {

    if (!document.hidden) {

        makeHearts(2);

    }

}, 7000);
function checkPassword() {
  const enteredPass = document.getElementById('passwordInput').value;
  const correctPass = "1020"; 

  if (enteredPass === correctPass) {
    document.getElementById('passwordScreen').style.display = 'none';
    document.body.style.overflow = 'auto';
  } else {
    document.getElementById('wrongMsg').style.display = 'block';
  }
}

// Website open avvagane scroll aapakunda
document.body.style.overflow = 'hidden';
function togglePass() {
  const input = document.getElementById('passwordInput');
  const eye = document.getElementById('eyeIcon');
  
  if (input.type === "password") {
    input.type = "text";
    eye.textContent = "🙈"; // kanipistundi ani
  } else {
    input.type = "password";
    eye.textContent = "👁️"; // malli dots
  }
}