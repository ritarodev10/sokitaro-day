// Sound utility for playing audio effects

export const playNewspaperSound = () => {
  try {
    const audio = new Audio("/assets/sounds/newspaper-opened-3.mp3");
    audio.volume = 0.5; // Set volume to 50%
    audio.play().catch((error) => {
      // Handle autoplay restrictions
      console.log("Sound play prevented:", error);
    });
  } catch (error) {
    console.log("Error playing sound:", error);
  }
};

export const playNewspaperClosedSound = () => {
  try {
    const audio = new Audio("/assets/sounds/newspaper-closed.mp3");
    audio.volume = 0.5; // Set volume to 50%
    audio.play().catch((error) => {
      // Handle autoplay restrictions
      console.log("Sound play prevented:", error);
    });
  } catch (error) {
    console.log("Error playing sound:", error);
  }
};

export const playWebButtonSound = () => {
  try {
    const audio = new Audio("/assets/sounds/web-button-1.mp3");
    audio.volume = 0.5; // Set volume to 50%
    audio.play().catch((error) => {
      // Handle autoplay restrictions
      console.log("Sound play prevented:", error);
    });
  } catch (error) {
    console.log("Error playing sound:", error);
  }
};
