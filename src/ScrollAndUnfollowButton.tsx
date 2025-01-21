import React from 'react';

const ScrollAndUnfollowButton: React.FC = () => {
  // Function to scroll to the bottom of the page with 1.5-second intervals
  const autoScrollToBottom = async (): Promise<string> => {
    return new Promise((resolve) => {
      let previousHeight = 0;
      const interval = setInterval(() => {
        // Scroll down by a set amount
        window.scrollBy(0, 1000);

        // Get the current scroll height
        const currentHeight = document.documentElement.scrollHeight;

        // Check if we've reached the bottom
        if (currentHeight === previousHeight) {
          clearInterval(interval);
          resolve("Reached the bottom of the page.");
        } else {
          previousHeight = currentHeight;
        }
      }, 1500); // 1.5-second interval between scrolls
    });
  };

  // Function to simulate "Unfollow" button clicks
  const unfollowActions = () => {
    // Select all buttons with the specified class
    const buttons = document.querySelectorAll<HTMLElement>('main button span.artdeco-button__text');

    buttons.forEach((button, index) => {
      setTimeout(() => {
        // Simulate a button click
        (button as HTMLButtonElement).click(); // Type assertion to HTMLButtonElement
        console.log(`Clicked button ${index + 1}`);

        // Add a delay for the "Unfollow" action
        setTimeout(() => {
          // Find the span element with the exact text "Unfollow"
          const span = Array.from(document.querySelectorAll<HTMLElement>('span.artdeco-button__text'))
            .find(element => element.textContent?.trim() === "Unfollow");

          // Perform an action on the found span, e.g., click its parent button
          if (span) {
            const closestButton = span.closest('button');
            if (closestButton) {
              (closestButton as HTMLButtonElement).click(); // Type assertion to HTMLButtonElement
              console.log("Clicked the 'Unfollow' button.");
            }
          } else {
            console.log("No span with the text 'Unfollow' was found.");
          }
        }, 1000); // 1-second delay for the 'Unfollow' action
      }, index * 1000); // 1-second delay between each main button click
    });
  };

  // Main function to scroll and then perform actions
  const handleClick = async () => {
    console.log("Starting to scroll...");
    const scrollMessage = await autoScrollToBottom();
    console.log(scrollMessage);

    console.log("Starting unfollow actions...");
    unfollowActions();
  };

  return (
    <button onClick={handleClick}>
      Start Scroll and Unfollow Actions
    </button>
  );
};

export default ScrollAndUnfollowButton;
