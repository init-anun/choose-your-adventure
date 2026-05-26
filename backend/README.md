# Interactive Story Generator - FastAPI Backend

This directory contains the FastAPI backend for the Interactive Story Generator. It handles the dynamic generation of branching stories using LangChain and LLM APIs (Groq / Gemini / OpenAI), manages SQLite database persistence, and exposes API endpoints for story management and background processing.

For a comprehensive overview of the full project architecture, please refer to the [Root README](../README.md).

---

## 🛠️ Getting Started

### Prerequisites
*   [Python](https://www.python.org/) (v3.10 or higher)
*   An API Key from Groq (default), Gemini, or OpenAI.

### Installation & Configuration

1.  **Configure environment variables**:
    Create a `.env` file in this directory by copying the settings below. Fill in your API keys (e.g. `GROQ_API_KEY`):
    ```ini
    DATABASE_URL=sqlite:///./database.db
    API_PREFIX=/api
    DEBUG=true
    ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
    
    GROQ_API_KEY=your_groq_api_key_here
    GEMINI_API_KEY=your_gemini_api_key_here
    OPENAI_API_KEY=your_openai_api_key_here
    ```

2.  **Set up your Python virtual environment**:

    *   **Using standard `virtualenv` / `venv`**:
        ```bash
        # Create virtual env
        python3 -m venv .venv
        
        # Activate virtual env
        source .venv/bin/activate
        
        # Install packages
        pip install fastapi uvicorn sqlalchemy pydantic pydantic-settings python-dotenv langchain langchain-core langchain-groq langchain-google-genai langchain-openai
        ```

    *   **Using Conda**:
        ```bash
        # Create and activate a conda env
        conda create -n fastAPIenv python=3.12
        conda activate fastAPIenv
        
        # Install packages
        pip install fastapi uvicorn sqlalchemy pydantic pydantic-settings python-dotenv langchain langchain-core langchain-groq langchain-google-genai langchain-openai
        ```

---

## 🚀 Running the Server

Make sure your virtual/conda environment is active, then run:
```bash
uvicorn main:app --reload
```

The server will start at `http://localhost:8000`. 
*   **API Documentation**: Access the interactive OpenAPI Swagger UI at `http://localhost:8000/docs` or Redoc at `http://localhost:8000/redoc`.
*   **Database**: SQLite tables are automatically created inside `database.db` upon starting the server.

---

## 📂 Codebase Tour

*   [main.py](./main.py): Entry point for the FastAPI server, configures CORS and includes routers.
*   [core/story_generator.py](./core/story_generator.py): Story generation manager. Invokes the LLM and processes output into database models.
*   [core/prompts.py](./core/prompts.py): System instructions for the story-writing agent.
*   [core/models.py](./core/models.py): Pydantic schemas specifying structured response structures for LLMs.
*   [db/database.py](./db/database.py): Core SQLAlchemy SQLite database setup and session utility.
*   [models/](./models/): SQL database models (`Story`, `StoryNode`, `StoryJob`).
*   [schemas/](./schemas/): Pydantic request/response validation schemas.
*   [routers/](./routers/): API routes split into `/story` and `/job` handlers.