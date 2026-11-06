# Cinema Guru

A movie discovery web app built with **React** as part of the Holberton School curriculum.
Users can sign up, browse a catalog of movies, filter and sort them, and keep personal lists of **favorites** and **movies to watch later**. The interface uses a dark **Halloween theme**.

---

## Features

- **Authentication**: register, log in and log out. The JWT token is stored in `localStorage`.
- **Movie browsing**: paginated list of movies with a **Load More..** button.
- **Search & filters**:
  - search by title
  - filter by release year (min / max)
  - filter by genre (action, drama, comedy, sci-fi, …)
  - sort by latest, oldest, highest rated or lowest rated
- **Personal lists**: add or remove a movie from **Favorites** or **Watch Later** in one click.
- **Latest Activities**: the sidebar shows recent user actions (added / removed).
- **Halloween theme**: spooky font (Creepster), orange glow effects and a pumpkin cursor.

---

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [React 18](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Dev server and build tool |
| [React Router](https://reactrouter.com/) | Page navigation |
| [Axios](https://axios-http.com/) | HTTP requests to the API |
| [Font Awesome](https://fontawesome.com/) | Icons |
| [normalize.css](https://necolas.github.io/normalize.css/) | CSS reset |

---

## Project Structure

```text
src/
├── App.jsx                     # Checks the token and shows Authentication or Dashboard
├── main.jsx                    # Entry point
├── components/
│   ├── Activity.jsx            # One line of the "Latest Activities" list
│   ├── general/                # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── SearchBar.jsx
│   │   └── SelectInput.jsx
│   ├── movies/                 # Movie-related components
│   │   ├── Filter.jsx          # Search, years, sort and genre tags
│   │   ├── MovieCard.jsx       # Poster, title, synopsis, genres, favorite / watch later buttons
│   │   └── Tag.jsx             # Clickable genre tag
│   └── navigation/
│       ├── Header.jsx          # Avatar, welcome message, logout
│       └── SideBar.jsx         # Navigation menu + latest activities
└── routes/
    ├── auth/
    │   ├── Authentication.jsx  # Switches between Login and Register
    │   ├── Login.jsx
    │   └── Register.jsx
    └── dashboard/
        ├── Dashboard.jsx       # Layout + routes (/home, /favorites, /watchlater)
        ├── HomePage.jsx        # All movies with filters
        ├── Favorites.jsx       # "Movies you like"
        └── WatchLater.jsx      # "Movies to watch later"
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Yarn](https://yarnpkg.com/) (v1)
- [Docker](https://www.docker.com/) to run the API
- The **Cinema Guru API**: `holbertonschool-cinema-guru-API`

### 1. Start the API

```bash
cd holbertonschool-cinema-guru-API
docker compose up
```

The API runs on **<http://localhost:8000>**.

> **Warning:** The API recreates the database every time it starts (`sequelize.sync({ force: true })`).
> All accounts, favorites and activities are deleted, so you have to **register again** after each restart.

### 2. Start the front-end

```bash
cd holbertonschool-cinema-guru
yarn install
yarn dev
```

The app runs on **<http://localhost:3000>**.
Vite forwards every `/api` request to the API (see `vite.config.js`).

---

## API Endpoints Used

All routes except register and login need the header `Authorization: Bearer <token>`.

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/api/auth/register` | Create an account |
| `POST` | `/api/auth/login` | Log in and get a token |
| `POST` | `/api/auth/` | Check the token |
| `GET` | `/api/titles/advancedsearch` | Search movies (`minYear`, `maxYear`, `genres`, `title`, `sort`, `page`) |
| `GET` | `/api/titles/favorite/` | Get the user's favorites |
| `POST` / `DELETE` | `/api/titles/favorite/:imdbId` | Add / remove a favorite |
| `GET` | `/api/titles/watchlater/` | Get the user's watch later list |
| `POST` / `DELETE` | `/api/titles/watchlater/:imdbId` | Add / remove from watch later |
| `GET` | `/api/activity` | Get the latest activities |

---

## Available Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the development server |
| `yarn build` | Build the app for production |
| `yarn preview` | Preview the production build |
| `yarn lint` | Run ESLint |

---

## Author

**Malik** — [@malik31200](https://github.com/malik31200)
Holberton School project.
