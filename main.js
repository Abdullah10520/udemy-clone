
let UdemyBusinessLink = document.getElementById("Udemy-Business-Link");
let udemyBusiness = document.getElementById("Udemy-Business");

let teatctOnUdemyLink = document.getElementById("Teatct-On-Udemy-Link");
let teatctOnUdemy = document.getElementById("Teatct-On-Udemy");

let myLearningLink = document.getElementById("My-Learning-Link");
let myLearning = document.getElementById("My-Learning");

let favoratLink = document.getElementById("Favorat-Link");
let favorat = document.getElementById("Favorat");

let cartLink = document.getElementById("Cart-Link");
let cart = document.getElementById("Cart");

let notificationLink = document.getElementById("Notification-Link");
let notification = document.getElementById("Notification");

let development = document.getElementById("Development");
let business = document.getElementById("Business");
let financeAndAccounting = document.getElementById("Finance&Accounting");
let itAndSoftware = document.getElementById("IT&Software");
let officeProductivity = document.getElementById("Office-Productivity");
let personalDevelopment = document.getElementById("Personal-Development");
let design = document.getElementById("Design");
let marketing = document.getElementById("Marketing");
let helthAndFetness = document.getElementById("Helth&Fetness");
let music = document.getElementById("Music");


function displayCategory(link) {
    let content;
    switch (link.innerText) {
        case "Development":
            content = development;
            break;
        case "Business":
            content = business; 
            break;
        case "Finance&Accounting":
            content = financeAndAccounting;
            break;
        case "IT&Software":
            content = itAndSoftware;
            break;
        case "Office Productivity":
            content = officeProductivity;
            break;
        case "Personal Development":
            content = personalDevelopment;
            break;

        case "Design":
            content = design;
            break;
        case "Marketing":
            content = marketing;
            break;
        case "Helth&Fetness":
            content = helthAndFetness;
            break;
        case "Music":
            content = music;
            break;
    }
    content.classList.remove("hidden");
    content.classList.add("categoryShow");
    link.classList.add("categoryShow");
    let isEnter = false;
    link.addEventListener("mouseout", () => {
        content.addEventListener("mouseenter", () => {
            isEnter = true;
            content.classList.add("categoryShow");
            content.classList.remove("hidden");
            link.classList.add("categoryShow");
            // link.classList.remove("hidden");
        });

        if (!isEnter) {
            content.classList.remove("categoryShow");
            content.classList.add("hidden");
            link.classList.remove("categoryShow");
            // link.classList.add("hidden");
        }
        content.addEventListener("mouseleave", () => {
            content.classList.remove("categoryShow");
            content.classList.add("hidden");
            link.classList.remove("categoryShow");
            // link.classList.add("hidden");
            isEnter = false;
        });
    });
}

config(UdemyBusinessLink, udemyBusiness);
config(teatctOnUdemyLink, teatctOnUdemy);
config(myLearningLink, myLearning);
config(favoratLink, favorat);
config(cartLink, cart);
config(notificationLink, notification);
function config(link, content) {
    link.addEventListener("mouseover", () => {
        content.classList.remove("hidden");
        content.classList.add("visible");
    });
    let isEnter = false;
    link.addEventListener("mouseout", () => {

        content.addEventListener("mouseenter", () => {
            isEnter = true;
            content.classList.add("visible");
            content.classList.remove("hidden");
        });

        if (!isEnter) {
            content.classList.remove("visible");
            content.classList.add("hidden");
        }
        content.addEventListener("mouseleave", () => {
            content.classList.remove("visible");
            content.classList.add("hidden");
            isEnter = false;

        });
    });
}



// const track = document.getElementById("track");
//     const prevBtn = document.querySelector(".prev");
//     const nextBtn = document.querySelector(".next");
//     let currentIndex = 0;

//     function getVisibleCards() {
//       if (window.innerWidth <= 416) return 2;
//       if (window.innerWidth <= 768) return 3;
//       if (window.innerWidth <= 900) return 4;
//       return 5;
//     }

//     function updateCarousel() {
//       const cardWidth = track.querySelector(".card").offsetWidth + 20; 
//       track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//     }

//     nextBtn.addEventListener("click", () => {
//       const totalCards = track.children.length;
//       const visibleCards = getVisibleCards();
//       if (currentIndex < totalCards - visibleCards) {
//         currentIndex+=4;
//         if(currentIndex > totalCards - visibleCards) {
//           currentIndex = totalCards - visibleCards;
//         }
//         updateCarousel();
//       }
//     });

//     prevBtn.addEventListener("click", () => {
//       if (currentIndex > 0) {
//         currentIndex-=4;
//         if(currentIndex < 0) {
//           currentIndex = 0;
//         }
//         updateCarousel();
//       }
//     });

//     window.addEventListener("resize", updateCarousel);

const track = document.getElementById("track1");
  const prevBtn = document.querySelector(".prev1");
  const nextBtn = document.querySelector(".next1");
  let currentIndex = 0;

  function getVisibleCards() {
    if (window.innerWidth <= 600) return 2;
    if (window.innerWidth <= 900) return 3;
    return 5;
  }

  function updateCarousel() {
    const cardWidth = track.querySelector(".course-card").offsetWidth + 20;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const totalCards = track.children.length;
    const visibleCards = getVisibleCards();
    if (currentIndex < totalCards - visibleCards) {
      currentIndex += visibleCards;
      if (currentIndex > totalCards - visibleCards) currentIndex = totalCards - visibleCards;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    const visibleCards = getVisibleCards();
    if (currentIndex > 0) {
      currentIndex -= visibleCards;
      if (currentIndex < 0) currentIndex = 0;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);



