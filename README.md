CS:GO Fan Hub

CS:GO Fan Hub is a single-page web application for fans of Counter-Strike: Global Offensive. It serves as a centralized hub featuring game guides, a weapon encyclopedia, and a contact portal. The application provides a smooth user experience with dynamic content updates (no full page reloads) and theme toggling between light and dark modes. Built as the final project for a web design course, this app demonstrates modern front-end practices in React and responsive design.

Project Description

This project is a front-end SPA (Single Page Application) that showcases key information and tools for CS:GO players:

Game Guides: Strategy guides and tips for improving gameplay, presented in an accessible format.

Weapon Library: A catalog of CS:GO weapons with details like category, damage, and descriptions.

User Interaction: A profile section to customize the displayed username, and a contact form for feedback or inquiries.

Theming: Users can switch between light and dark theme for comfortable viewing.

All content is handled on the client side using React. Navigation between sections (Home, Weapons, Guides, Contact) is instant and managed through the URL hash – simulating multi-page behavior without leaving the single-page app. This project does not require a backend server; data (like the weapon details) is loaded from local JSON files and images packaged with the app.

Features

Home Page: Welcomes users with a hero banner (CS:GO themed image and title) and introduction text. It highlights key focus areas for players with summary panels (e.g. Latest Highlights, Community Focus, Practice Ideas) and includes an FAQ-style accordion of tips. The accordion provides quick info on game modes, beginner tips, and team play in an expandable/collapsible format.

Weapons Page: An interactive weapons catalog that displays a grid of weapon cards. Users can filter the weapons by category (Rifle, Pistol, SMG, Sniper, or All) and sort the list by name or damage output. Each weapon card shows an image of the weapon, its name, category, and a brief description. The filtering and sorting are handled in real-time using React state and a local data source – for example, selecting "Rifle" will narrow the list to rifles only, and choosing "Sort by Damage" will order the cards by their damage value.

Guides Page: A collection of concise CS:GO guides and tips. This section is presented as a series of titled blocks with short paragraphs explaining strategies (e.g. Aim Fundamentals, Utility Usage, Economy Decisions). It offers quick learning bites for players to improve various aspects of their gameplay. (The Home page’s accordion also complements these guides with additional quick tips.)

Contact Page: A contact form that allows users to send a message or feedback. The form includes fields for name, email, message, and a dropdown to indicate how the user heard about the site. If "Other" is selected in the dropdown, an additional input appears for the user to specify the source. Client-side validation is implemented for all fields – for example, the email must be in a valid format and required fields cannot be empty. Validation errors are displayed inline with accessible error messages, and upon successful submission the form is replaced with a thank-you confirmation message (simulating a sent form).

Profile Modal: The header displays a default username (e.g. "Player1") and an Edit Profile button. Clicking this opens a modal dialog where the user can update their username. The modal is built using the HTML5 <dialog> element and includes a form requiring at least 2 characters for the name. On save, the updated name is reflected in the greeting on the header, demonstrating dynamic state updates in the app.

Theme Toggle: A Dark Mode / Light Mode switch is available in the header via a toggle button. The current theme state is indicated and pressing the button toggles the UI’s color scheme. This is achieved by adding or removing a .dark CSS class on the document body based on the user’s choice, instantly updating styles across the app.

Responsive Design: The layout is fully responsive. On larger screens, the navigation bar is shown in a horizontal menu. On smaller devices, the app uses a “hamburger” menu icon ☰ to toggle the navigation visibility. The navigation links collapse into a mobile-friendly dropdown menu when the hamburger is activated. All pages and components are designed with flexible CSS, ensuring usability on phones, tablets, and desktops.

Accessibility Features: The project follows accessibility best practices:

A Skip to main content link is the first element for keyboard and screen reader users, allowing them to jump straight to the main content area.

Navigation uses ARIA attributes like aria-current="page" to indicate the active page to assistive technologies, and the hamburger menu button has accessible labels and aria-expanded state indicators.

Dynamic content regions (like the main content container) use aria-live="polite" so screen readers announce page updates when navigating through the SPA without a full page reload.

Form validation errors are announced with role="alert" on error messages for immediate feedback to screen readers.

The profile edit modal uses semantic <dialog> and is properly labeled with aria-labelledby for the dialog title.

Tech Stack

JavaScript & React: The entire application is built with React (functional components with Hooks). React manages the UI state (current page, form inputs, theme, etc.) and updates the DOM dynamically. No additional front-end frameworks or routing libraries were used – the project demonstrates how to implement basic routing and modals with vanilla React and Web APIs.

Build Tools: Vite is used as the development server and build tool. Vite provides fast Hot Module Replacement for development and compiles the project into a static bundle for production. The project’s configuration and scripts are defined in package.json (e.g., npm run dev for development, npm run build for production build).

HTML5 & CSS3: Semantic HTML elements and modern CSS are used throughout. Layouts are created with flexbox and other responsive techniques (media queries) to ensure the site is mobile-friendly. Custom CSS files are organized by purpose (base styles, layout, components, navigation, pages, typography) and imported into the React app. The app also uses the HTML5 <dialog> element for the profile modal, demonstrating modern browser API usage.

Data Handling: Static JSON and images are bundled for dynamic content. For example, a weapons.json file provides an array of weapon data which is loaded and filtered in the Weapons page. All assets (images, JSON) are part of the front-end, allowing the app to run entirely in a static environment (no database or server required).

Installation

To run this project locally, ensure you have Node.js (and npm) installed.

Clone the repository: Download or clone the project source code to your machine.

Install dependencies: In the project directory, run npm install. This will download React, Vite, and other dependencies as specified in package.json.

Start the development server: Run npm run dev to launch Vite’s development server. By default, it will open at http://localhost:5173/ (the exact port may be indicated in the console). You should see the CS:GO Fan Hub application in your browser with hot-reloading enabled for any code changes.

Build for production (optional): Run npm run build to generate an optimized production build in the dist/ folder. You can preview the production build locally by running npm run preview after building.

No special configuration is needed to start; the project has no external API keys or environment variables. All content is self-contained, so the app should start up and display the Home page immediately after running the dev server.
