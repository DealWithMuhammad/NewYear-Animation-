const svg = document.getElementById("svg");
const tl = gsap.timeline();
const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
let fireworksDisplayed = false;

function startTimer() {
  let seconds = 57;
  const timerElement = document.getElementById("timer");
  const checkBoxes = document.querySelectorAll(".wrapper");

  // Countdown interval
  const countdownInterval = setInterval(() => {
    timerElement.innerText = seconds;

    if (seconds > 60) {
      document.getElementById("days").innerText = "365";
      document.getElementById("hour").innerText = "24";
      document.getElementById("minute").innerText = "60";

      tl.from(".loader-wrap-heading ", {
        delay: 1,
      }).to(".loader-wrap-heading ", {
        delay: 1,
      });

      tl.to(svg, {
        duration: 1,
        attr: { d: curve },
        ease: "power2.easeIn",
      }).to(svg, {
        duration: 0.8,
        attr: { d: flat },
        ease: "power2.easeOut",
      });

      tl.to(".loader-wrap", {
        y: -1500,
      });

      tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
      });

      setTimeout(() => {
        // tl.from(
        //   ".new_year h1",
        //   {
        //     y: 100,
        //     opacity: 0,
        //   },
        //   "-=1.5"
        // );

        checkBoxes.forEach((checkBox) => {
          checkBox.style.display = "block";
        });
      }, 100);

      timerElement.innerText = "60";

      clearInterval(countdownInterval);
      if (!fireworksDisplayed) {
        // Start fireworks animation
        const fireworks = document.querySelectorAll(".firework");
        fireworks.forEach((firework) => {
          firework.style.animationPlayState = "running";
        });

        newYear[0].style.display = "block";
        fireworksDisplayed = true;
      }
    }

    seconds++;
  }, 1000);
}

window.onload = startTimer;
