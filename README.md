# Football Players React App ⚽

A responsive and interactive React application that displays a list of football players using **React-Bootstrap** cards. Each player card shows details like name, team, nationality, jersey number, age, and image. Clicking a card opens a modal with a larger view of the player's image.

The app is styled with a football field green theme, floating card effects, and a stylish title font.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Author](#author)

---

## Demo

[![Screenshot-2025-09-17-151732.png](https://i.postimg.cc/7PTpx7ry/Screenshot-2025-09-17-151732.png)](https://postimg.cc/V5m7gJN7)

---

## Features

- Responsive layout using **Bootstrap 5**.
- Player cards with hover float effect.
- Modal popup to view a larger player image.
- Styled with a football field green theme.
- Stylish header with custom font ("Orbitron").
- Cards maintain correct aspect ratio using `object-fit: cover`.

---

## Technologies

- [React.js](https://reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap 5](https://getbootstrap.com/)
- CSS (custom styling for cards and title)

---

## Usage

- The app displays a list of football players in cards.

- Hover over a card to see it float slightly.

- Click on a card to open a modal with a larger image of the player.

- The layout adjusts automatically for mobile, tablet, and desktop screens.

---

## Project Structure

players-cards/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Player.js
│ │ ├── PlayersList.js
│ ├── data/
│ │ └── players.js
│ ├── App.js
│ ├── App.css
│ └── index.js
├── package.json
└── README.md

- Player.js → Player card component with modal and hover float effect.

- PlayersList.js → Maps through the player array and displays cards in a responsive grid.

- players.js → Array of player objects with name, team, nationality, jersey number, age, and image URL.

## Styling Notes

- **Header:**  
  Uses the _Orbitron_ font, bold, italic, with a green background matching the football field theme.

- **Cards:**

  - Green-themed with `rgba` backgrounds to match the field.
  - Hover effect using `transform: translateY(-10px)` and `box-shadow`.
  - Card images use `object-fit: cover` to maintain proper aspect ratio.

- **Layout:**
  - Bootstrap `Container` + `Row` + `Col` with `g-4` for consistent gaps.
  - Responsive breakpoints (`xs`, `sm`, `md`, `lg`) ensure cards wrap naturally.
  - Bottom padding ensures the last row is fully visible without scrolling issues.

## Author

**Yosef Berrak**

- GitHub: [youssefberrk](https://github.com/youssefberrk)
- LinkedIn: [www.linkedin.com/in/youssef-berrakouan](https://www.linkedin.com/in/youssef-berrakouan)
