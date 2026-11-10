# DJRe – Social Web App (React + Django)

DJRe is a full‑stack social web application combining a React frontend with a Django REST backend. It enables users to create posts, comment, and interact with each other in real time, providing a modern responsive user experience.

## Features

- **User management** – secure registration, login, and JWT‑based authentication.
- **Posts & feeds** – create, edit, and delete posts with pagination.
- **Comments & likes** – threaded commenting and reaction system for engaging discussions.
- **Real‑time updates** – leverage WebSockets to push new posts and comments instantly.
- **Responsive design** – mobile‑first UI built with React and modern CSS.
- **Backend API** – RESTful API built with Django and Django REST Framework.
- **Admin dashboard** – manage users and content with Django admin.

## Tech Stack

- **Frontend:** React, JavaScript, HTML, CSS, Axios
- **Backend:** Python, Django, Django REST Framework
- **Database:** PostgreSQL (or SQLite for development)
- **DevOps:** Docker, Docker Compose, GitHub Actions for CI/CD

## Architecture

DJRe follows a micro‑frontend/backend architecture:

- The **React** frontend (in `frontend/`) interacts with the backend via REST APIs, handling routing and UI state.
- The **Django** backend (in `backend/`) exposes REST endpoints, handles authentication, and integrates the ORM with the database.
- Real‑time functionality can be supported using channels/ WebSockets.

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js and npm
- PostgreSQL (or SQLite)
- Docker and Docker Compose (optional for containerised setup)

### Installation

```bash
# Clone the repo
git clone https://github.com/Timelaying/DjRe.git
cd DjRe

# Set up and activate a Python virtual environment
python -m venv venv
source venv/bin/activate  # on Windows use venv\Scripts\activate

# Install backend dependencies
cd backend
pip install -r requirements.txt

# Run database migrations
python manage.py migrate

# Start the Django development server
python manage.py runserver
```

In a new terminal:

```bash
# Install frontend dependencies and start the React dev server
cd DjRe/frontend
npm install
npm start
```

The backend runs on `http://localhost:8000` and the frontend on `http://localhost:3000`. Update `.env` files as needed for environment variables.

## Tests

Backend tests can be run with:

```bash
cd backend
python manage.py test
```

Add frontend tests using Jest or React Testing Library (coming soon).

## Roadmap

- Deploy production configuration with Docker Compose
- Implement notifications and real‑time chat
- Enhance accessibility and add dark mode
- Write comprehensive frontend tests

## Contributing

Contributions are welcome! Please open an issue to propose a feature or report a bug, and submit a pull request with your changes. Make sure to follow the project's code style guidelines.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## Deploy (Render + Vercel + Neon)

- **Database:** a free Postgres database from [Neon](https://neon.tech). Copy its connection string.
- **API (Render web service):** root directory `backend`, runtime Python 3, build command `bash build.sh`, start command `gunicorn backend.wsgi`. Environment variables: `DATABASE_URL` (the Neon string), `SECRET_KEY` (any long random value) and `PYTHON_VERSION` (for example `3.12.7`).
- **Frontend (Vercel):** root directory `frontend`, framework Vite. Environment variable `VITE_API_URL` set to the Render service URL (no trailing slash). `frontend/vercel.json` makes client-side routes such as `/login` work on refresh.

Free Render services sleep when idle, so the first request after a quiet period takes about 50 seconds.
