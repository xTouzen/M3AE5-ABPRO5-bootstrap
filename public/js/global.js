
  document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("backgroundAudio");
    const toggleBtn = document.getElementById("soundToggle");
    const icon = document.getElementById("soundIcon");

    // Cargar preferencia
    let soundEnabled = localStorage.getItem("soundEnabled");
    if (soundEnabled === null) {
      soundEnabled = "true"; // Valor por defecto
      localStorage.setItem("soundEnabled", soundEnabled);
    }

    const updateIcon = () => {
      if (soundEnabled === "true") {
        icon.classList.remove("bi-volume-mute-fill");
        icon.classList.add("bi-volume-up-fill");
      } else {
        icon.classList.remove("bi-volume-up-fill");
        icon.classList.add("bi-volume-mute-fill");
      }
    };

    const playOrPause = () => {
      if (soundEnabled === "true") {
        audio.play().catch(() => {}); // evita error de autoplay en algunos navegadores
      } else {
        audio.pause();
      }
    };

    toggleBtn.addEventListener("click", () => {
      soundEnabled = soundEnabled === "true" ? "false" : "true";
      localStorage.setItem("soundEnabled", soundEnabled);
      playOrPause();
      updateIcon();
    });

    // Iniciar al cargar
    updateIcon();
    playOrPause();
  });

