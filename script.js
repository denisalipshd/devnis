const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");

  const icon = hamburger.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("show-menu")) {
      navLinks.classList.remove("show-menu");

      const icon = hamburger.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const submitButton = e.submitter;

  submitButton.textContent = "Mengirim...";
  submitButton.disabled = true;

  setTimeout(() => {
    alert("Terima kasih, " + data.get("name") + "! Pesanmu sudah terkirim.");

    // Aktifkan kembali tombol
    submitButton.textContent = "Kirim Pesan";
    submitButton.disabled = false;

    form.reset();
  }, 1500);
});
