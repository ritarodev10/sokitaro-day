// Sound utility for playing audio effects

export const playNewspaperSound = () => {
  try {
    const audio = new Audio("/assets/sounds/newspaper-opened.mp3");
    audio.volume = 0.5; // Set volume to 50%
    audio.play().catch((error) => {
      // Handle autoplay restrictions
      console.log("Sound play prevented:", error);
    });
  } catch (error) {
    console.log("Error playing sound:", error);
  }
};

