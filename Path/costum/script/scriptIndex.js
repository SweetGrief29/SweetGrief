const checkbox = document.getElementById("checkbox");
const CheckboxLabel = document.getElementById("CheckboxLabel");
const NavPC = document.getElementById("NavPc");
const NavLinkDark = document.querySelectorAll(".nav-link");
const Nickname = document.getElementById("Nickname");
const NicknameAndroid = document.getElementById("NicknameAndroid");
const Sosmeds = document.querySelectorAll(".sosmed");
const OffcanvasAndroid = document.getElementById("offcanvasAndroid");
const Biotext = document.getElementById("Biotext");
const textDestination = document.getElementById("textDestination");

// Menyimpan lokal ketika tombol Darkmode aktif sebelumnya
function checkDarkMode() {
  const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

  checkbox.checked = isDarkModeEnabled;

  if (isDarkModeEnabled) {
    document.body.style.backgroundColor = "#393E46";
    CheckboxLabel.style.backgroundColor = "black";
    NavPC.style.backgroundColor = "#222831";
    OffcanvasAndroid.style.backgroundColor = "#222831";
    Nickname.style.color = "#EEEEEE";
    NicknameAndroid.style.color = "#EEEEEE";
    Biotext.style.color = "#EEEEEE";
    textDestination.style.color = "#00adb5";
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
    document.body.style.backgroundColor = "";
    CheckboxLabel.style.backgroundColor = "";
    NavPC.style.backgroundColor = "";
    OffcanvasAndroid.style.backgroundColor = "";
    Nickname.style.color = "";
    NicknameAndroid.style.color = "";
    Biotext.style.color = "";
    textDestination.style.color = "";
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
    document.body.style.backgroundColor = "#393E46";
    CheckboxLabel.style.backgroundColor = "black";
    NavPC.style.backgroundColor = "#222831";
    OffcanvasAndroid.style.backgroundColor = "#222831";
    Nickname.style.color = "#EEEEEE";
    NicknameAndroid.style.color = "#EEEEEE";
    Biotext.style.color = "#EEEEEE";
    textDestination.style.color = "#00adb5";
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
    document.body.style.backgroundColor = "";
    CheckboxLabel.style.backgroundColor = "";
    NavPC.style.backgroundColor = "";
    OffcanvasAndroid.style.backgroundColor = "";
    Nickname.style.color = "";
    NicknameAndroid.style.color = "";
    Biotext.style.color = "";
    textDestination.style.color = "";
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

// Teks yang ingin Anda animasikan
var text = "Frontend Developer";
var speed = 80; // Kecepatan mengetik (ms)
var deleteSpeed = 50; // Kecepatan menghapus (ms)
var loopDelay = 3000; // Waktu jeda sebelum mengulangi animasi (ms)

// Fungsi untuk mengetik dan menghapus teks secara berulang
function typeAndDelete() {
  document.getElementById("textDestination").innerHTML = ""; // Mengosongkan elemen sebelum memulai animasi baru
  typeWriter(); // Mulai mengetik
  setTimeout(deleteWriter, text.length * speed + loopDelay); // Tunggu sampai mengetik selesai, lalu mulai menghapus
}

// Fungsi untuk animasi mengetik
function typeWriter() {
  var charIndex = 0;
  var interval = setInterval(function () {
    if (charIndex < text.length) {
      document.getElementById("textDestination").innerHTML +=
        text.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(interval); // Hentikan interval setelah mengetik selesai
    }
  }, speed);
}

// Fungsi untuk animasi menghapus
function deleteWriter() {
  var charIndex = text.length - 1;
  var interval = setInterval(function () {
    if (charIndex >= 0) {
      var newText = text.substring(0, charIndex);
      document.getElementById("textDestination").innerHTML = newText;
      charIndex--;
    } else {
      clearInterval(interval); // Hentikan interval setelah menghapus selesai
      setTimeout(typeAndDelete, loopDelay); // Tunggu sebelum memulai kembali animasi
    }
  }, deleteSpeed);
}

// Mulai animasi ketika dokumen dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", function () {
  typeAndDelete();
});
