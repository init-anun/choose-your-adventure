# Interactive Story Generator - Frontend Client

This directory contains the React + Vite frontend application for the Interactive Story Generator. It serves as the user interface where players can prompt themes, watch the story generation progress, and play the generated "Choose Your Own Adventure" game.

For a comprehensive overview of the full project architecture (including the FastAPI backend and SQLite database), please refer to the [Root README](../README.md).

---

## 🛠️ Getting Started

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18 or higher)

### Installation

1.  Navigate to this folder (if not already there):
    ```bash
    cd frontend
    ```

2.  Install the required dependencies:
    ```bash
    npm install
    ```

### Running the Application

*   **Start the development server**:
    ```bash
    npm run dev
    ```
    This launches the local development server at `http://localhost:5173`. Make sure the FastAPI backend is running on `http://localhost:8000` so that API calls succeed.

*   **Build for production**:
    ```bash
    npm run build
    ```
    This compiles and bundles the asset files into the `dist/` directory, optimized for web production.

*   **Preview the production build locally**:
    ```bash
    npm run preview
    ```

---

## 📂 Key Components & Structure

*   [App.jsx](./src/App.jsx): Main router and page layout container.
*   [components/StoryGenerator.jsx](./src/components/StoryGenerator.jsx): View for entering a theme and requesting a new story. Polls the backend for job completion.
*   [components/StoryLoader.jsx](./src/components/StoryLoader.jsx): Fetches and loads the completed adventure graph by ID.
*   [components/StoryGame.jsx](./src/components/StoryGame.jsx): The core gameplay interface that navigates the branching story options.
*   [components/ThemeInput.jsx](./src/components/ThemeInput.jsx): Input form for typing a new adventure theme.
*   [components/LoadingStatus.jsx](./src/components/LoadingStatus.jsx): Displays loading progress status during story generation.
*   [vite.config.js](./vite.config.js): Handles proxy rules mapping `/api` calls directly to the local FastAPI port (`8000`).

