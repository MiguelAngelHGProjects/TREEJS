# A-Frame Hand Tracking with Gestures and Interactions

This A-Frame project showcases hand tracking with added gestures for grabbing objects, a button to toggle animations, and introduces a new object called "lollipop."

## Features

1. **Hand Tracking and Grabbing:**
   - Utilizes the `aframe-hands` component for hand tracking and grabbing controls.
   - Two entities (`rightHand` and `leftHand`) serve as controllers for hand interactions.

2. **Interactive Objects:**
   - Various geometric shapes (box, sphere, torus) are present in the scene.
   - The objects are interactive and respond to grabbing gestures.

3. **Lollipop Object:**
   - Introduces a new object called "lollipop" consisting of a cylinder and a sphere.
   - The lollipop is grabbable and throwable.

4. **Button for Animation:**
   - A menu with buttons is added, including a button labeled "Animator."
   - Clicking the "Animator" button toggles rotation animations on the currently visible geometry.

5. **Menu System:**
   - The menu allows users to switch between different geometries (box, sphere, torus, lollipop).
   - Includes a button for toggling dark mode, altering the scene's environment.

## Usage

1. Clone or download the repository.
2. Open the `index.html` file in a web browser that supports WebXR.
3. Use hand gestures to interact with and grab objects.
4. Toggle animations using the "Animator" button in the menu.
5. Explore the different geometries through the menu.

## Dependencies

- [A-Frame Hands](https://github.com/donmccurdy/aframe-hands)
- [A-Frame Extras](https://github.com/n5ro/aframe-extras)

## Additional Scripts

- `pinchable.js`: Enables pinching gestures.
- `color-change.js`: Allows changing the color of objects.
- `slider.js`: Implements a slider for interactive adjustments.
- `size-change.js`: Manages size changes of objects.
- `button.js`: Defines the behavior of buttons in the menu.
- `menu.js`: Handles the overall menu functionality.
- `pressable.js`: Adds pressable behavior to objects.
- `event-manager.js`: Manages events and interactions within the scene.

## Credits

This project builds upon the A-Frame framework and integrates additional components and scripts for enhanced interactions.

Feel free to experiment, modify, and extend the code for your own projects!

-<image src="aframe-master\lollipop.png" alt="Showing the lollipop">
