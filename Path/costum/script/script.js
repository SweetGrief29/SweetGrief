const checkbox = document.getElementById("checkbox");
const CheckboxLabel = document.getElementById("CheckboxLabel");
const NavPC = document.getElementById("NavPc");
const NavLinkDark = document.querySelectorAll(".nav-link");
const Nickname = document.getElementById("Nickname");
const NicknameAndroid = document.getElementById("NicknameAndroid");
const Sosmeds = document.querySelectorAll(".sosmed");
const OffcanvasAndroid = document.getElementById("offcanvasAndroid");
const ResumeBackground = document.getElementById("ResumeBackground");
const TombolCards = document.querySelectorAll(".TombolCard");

// Menyimpan lokal ketika tombol Darkmode aktif sebelumnya
function checkDarkMode() {
  const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

  checkbox.checked = isDarkModeEnabled;

  if (isDarkModeEnabled) {
    CheckboxLabel.style.backgroundColor = "black";
    NavPC.style.backgroundColor = "#222831";
    OffcanvasAndroid.style.backgroundColor = "#222831";
    Nickname.style.color = "#EEEEEE";
    NicknameAndroid.style.color = "#EEEEEE";
    ResumeBackground.style.backgroundColor = "#393E46"; //Warna Background untuk file resume
    TombolCards.forEach(function (TombolCard) {
      //Tombol card file Resume
      TombolCard.style.color = "#03575c";
      TombolCard.addEventListener("mouseenter", function () {
        TombolCard.style.backgroundColor = "#03575c";
        TombolCard.style.color = "#EEEEEE";
      });
      TombolCard.addEventListener("mouseleave", function () {
        TombolCard.style.backgroundColor = "";
        TombolCard.style.color = "#03575c";
      });
    });
    Sosmeds.forEach(function (sosmed) {
      sosmed.style.color = "#EEEEEE";
      sosmed.style.backgroundColor = "#03575c";
    });
    NavLinkDark.forEach(function (navLink) {
      navLink.style.color = "#03575c";
      if (!navLink.classList.contains("active")) {
        navLink.classList.add("whiteelse");
      }
      if (navLink.classList.contains("active")) {
        navLink.style.color = "#EEEEEE";
        navLink.classList.add("dark");
        navLink.classList.remove("white");
      }
      navLink.addEventListener("mouseenter", function () {
        if (!navLink.classList.contains("active")) {
          navLink.style.backgroundColor = "#EEEEEE";
          navLink.style.color = "#000000";
        }
      });
      navLink.addEventListener("mouseleave", function () {
        if (!navLink.classList.contains("active")) {
          navLink.style.backgroundColor = "";
          navLink.style.color = "#03575c";
        }
      });
    });
  } else {
    CheckboxLabel.style.backgroundColor = "";
    NavPC.style.backgroundColor = "";
    OffcanvasAndroid.style.backgroundColor = "";
    Nickname.style.color = "";
    NicknameAndroid.style.color = "";
    ResumeBackground.style.backgroundColor = ""; //Warna Background untuk file resume
    TombolCards.forEach(function (TombolCard) {
      //Tombol card file Resume
      TombolCard.style.color = "";
      TombolCard.addEventListener("mouseenter", function () {
        TombolCard.style.backgroundColor = "";
        TombolCard.style.color = "";
      });
      TombolCard.addEventListener("mouseleave", function () {
        TombolCard.style.backgroundColor = "";
        TombolCard.style.color = "";
      });
    });
    Sosmeds.forEach(function (sosmed) {
      sosmed.style.color = "";
      sosmed.style.backgroundColor = "";
    });
    NavLinkDark.forEach(function (navLink) {
      navLink.style.color = "";
      if (!navLink.classList.contains("active")) {
        navLink.classList.add("whiteelse");
      }
      if (!navLink.classList.contains("active")) {
        navLink.classList.add("whiteelse");
      }
      if (navLink.classList.contains("active")) {
        navLink.style.color = "#000000";
        navLink.classList.remove("dark");
        navLink.classList.add("white");
      }
      navLink.addEventListener("mouseenter", function () {
        if (!navLink.classList.contains("active")) {
          navLink.style.backgroundColor = "#EEEEEE";
          navLink.style.color = "#000000";
        }
      });
      navLink.addEventListener("mouseleave", function () {
        if (!navLink.classList.contains("active")) {
          navLink.style.backgroundColor = "";
          navLink.style.color = "";
        }
      });
    });
  }
}

// Memanggil fucntion Pengimpanan lokal Darkmode
checkDarkMode();

// Mengolah data ketika Darkmode On/Off
checkbox.addEventListener("change", function () {
  const isDarkModeEnabled = checkbox.checked;

  localStorage.setItem("darkModeEnabled", isDarkModeEnabled);

  if (isDarkModeEnabled) {
    CheckboxLabel.style.backgroundColor = "black";
    NavPC.style.backgroundColor = "#222831";
    OffcanvasAndroid.style.backgroundColor = "#222831";
    Nickname.style.color = "#EEEEEE";
    NicknameAndroid.style.color = "#EEEEEE";
    ResumeBackground.style.backgroundColor = "#393E46"; //Warna Background untuk file resume
    TombolCards.forEach(function (TombolCard) {
      //Tombol card file Resume
      TombolCard.style.color = "#03575c";
      TombolCard.addEventListener("mouseenter", function () {
        TombolCard.style.backgroundColor = "#03575c";
        TombolCard.style.color = "#EEEEEE";
      });
      TombolCard.addEventListener("mouseleave", function () {
        TombolCard.style.backgroundColor = "";
        TombolCard.style.color = "#03575c";
      });
    });
    Sosmeds.forEach(function (sosmed) {
      sosmed.style.color = "#EEEEEE";
      sosmed.style.backgroundColor = "#03575c";
    });
    NavLinkDark.forEach(function (navLink) {
      navLink.style.color = "#03575c";
      if (navLink.classList.contains("active")) {
        navLink.style.color = "#EEEEEE";
        navLink.classList.add("dark");
        navLink.classList.remove("white");
      }
      navLink.addEventListener("mouseenter", function () {
        if (!navLink.classList.contains("active")) {
          navLink.style.backgroundColor = "#EEEEEE";
          navLink.style.color = "#000000";
        }
      });
      navLink.addEventListener("mouseleave", function () {
        if (!navLink.classList.contains("active")) {
          navLink.style.backgroundColor = "";
          navLink.style.color = "#03575c";
        }
      });
    });
  } else {
    CheckboxLabel.style.backgroundColor = "";
    NavPC.style.backgroundColor = "";
    OffcanvasAndroid.style.backgroundColor = "";
    Nickname.style.color = "";
    NicknameAndroid.style.color = "";
    ResumeBackground.style.backgroundColor = ""; //Warna Background untuk file resume
    TombolCards.forEach(function (TombolCard) {
      //Tombol card file Resume
      TombolCard.style.color = "";
      TombolCard.addEventListener("mouseenter", function () {
        TombolCard.style.backgroundColor = "";
        TombolCard.style.color = "";
      });
      TombolCard.addEventListener("mouseleave", function () {
        TombolCard.style.backgroundColor = "";
        TombolCard.style.color = "";
      });
    });
    Sosmeds.forEach(function (sosmed) {
      sosmed.style.color = "";
      sosmed.style.backgroundColor = "";
    });
    NavLinkDark.forEach(function (navLink) {
      navLink.style.color = "";
      if (!navLink.classList.contains("active")) {
        navLink.classList.add("whiteelse");
      }
      if (navLink.classList.contains("active")) {
        navLink.style.color = "#000000";
        navLink.classList.remove("dark");
        navLink.classList.add("white");
      }
      navLink.addEventListener("mouseenter", function () {
        if (!navLink.classList.contains("active")) {
          navLink.style.backgroundColor = "#EEEEEE";
          navLink.style.color = "#000000";
        }
      });
      navLink.addEventListener("mouseleave", function () {
        if (!navLink.classList.contains("active")) {
          navLink.style.backgroundColor = "";
          navLink.style.color = "";
        }
      });
    });
  }
});
