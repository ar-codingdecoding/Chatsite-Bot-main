# BeyondChats - AI Chatbot Setup Platform

BeyondChats is a user-friendly platform that allows businesses to easily set up and integrate AI-powered chatbots into their websites. This project implements a full-stack MERN (MongoDB, Express.js, React.js, Node.js) solution for chatbot configuration and deployment.

## 🚀 Live Demo
[Insert your deployed website URL here]

## ✨ Features

- **User Authentication**
  - Email/Password registration
  - Google OAuth integration
  - Email verification system

- **Organization Setup**
  - Company profile creation
  - Automatic website meta-description fetching
  - Website content analysis

- **Chatbot Configuration**
  - Automated website content scraping
  - Real-time scraping status monitoring
  - Content chunk management

- **Integration Tools**
  - One-click test deployment
  - Simple code snippet integration
  - Developer-friendly documentation
  - Integration verification system

## 🛠️ Tech Stack

- **Frontend**
  - React.js
  - Tailwind CSS
  - React Router DOM
  - @react-oauth/google
  - Lucide React Icons

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT Authentication

## 🏗️ Installation

1. Clone the repository
```bash
git clone [https://github.com/your-username/beyondchats.git](https://github.com/ar-codingdecoding/Chatsite-Bot-main/tree/main)
cd beyondchats
```

2. Install dependencies for both frontend and backend
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables
```bash
# Frontend (.env)
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_API_URL=http://localhost:5000

# Backend (.env)
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
```

4. Start the development servers
```bash
# Start backend server
cd backend
npm run dev

# Start frontend development server
cd frontend
npm run dev
```

## 📁 Project Structure

```
beyondchats/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
│
└── README.md
```

## 🔧 Configuration

### Google OAuth Setup
1. Go to the [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable the Google OAuth2 API
4. Create credentials (OAuth 2.0 Client ID)
5. Add authorized JavaScript origins and redirect URIs
6. Copy the Client ID to your environment variables

### MongoDB Setup
1. Create a MongoDB Atlas account or use a local MongoDB instance
2. Create a new cluster
3. Get your connection string
4. Add it to your backend environment variables

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-email` - Email verification

### Organization Endpoints
- `POST /api/org/setup` - Create organization profile
- `GET /api/org/website-meta` - Fetch website metadata
- `GET /api/org/pages` - Get scraped pages status

### Integration Endpoints
- `POST /api/integration/test` - Test chatbot integration
- `GET /api/integration/status` - Check integration status

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contact

Your Name - [ar.bppimt2022@gmail.com](mailto:ar.bppimt2022@gmail.com)

Project Link:([https://github.com/your-username/beyondchats](https://github.com/ar-codingdecoding/Chatsite-Bot-main/tree/main))

---

Made with ❤️ by [Ajay Raj]
