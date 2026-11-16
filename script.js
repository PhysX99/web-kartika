/*
  PENGATURAN TAUTAN KARTIKA PRODUCTION
  Nomor WhatsApp: 082225355527
  Link YouTube: https://youtube.com/@kartikaproduction
*/
const LINKS = {
  whatsappNumber: "6282225355527",
  whatsappMessage: "Halo Kartika Production, saya ingin bertanya tentang jasa dokumentasi.",
  youtubeUrl: "https://youtube.com/@kartikaproduction?si=ZwbC8FRq8m5oeZ7z"
};

const whatsapp = document.getElementById("whatsappLink");
const youtube = document.getElementById("youtubeLink");
const waNumber = LINKS.whatsappNumber.replace(/\D/g, "");

if (/^62\d{8,15}$/.test(waNumber)) {
  whatsapp.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(LINKS.whatsappMessage)}`;
} else {
  whatsapp.href = "https://wa.me/";
  whatsapp.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Nomor WhatsApp belum diatur. Edit file script.js terlebih dahulu.");
  });
}

if (/^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(LINKS.youtubeUrl)) {
  youtube.href = LINKS.youtubeUrl;
} else {
  youtube.href = "https://www.youtube.com/";
  youtube.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Link YouTube belum diatur. Edit file script.js terlebih dahulu.");
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
