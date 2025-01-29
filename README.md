#!/bin/bash

# Set project name
PROJECT_NAME="mern-chat-app"

echo "🚀 Setting up MERN Chat Application..."
mkdir $PROJECT_NAME && cd $PROJECT_NAME

# === Create README.md ===
echo "📝 Creating README.md file..."
cat <<EOL > README.md
# MERN Chat Application

A real-time chat application built using the MERN stack with **Socket.io** for one-to-one messaging, file sharing with preview, online/offline status, and user profile configuration.

## Features
✅ **One-to-One Messaging** – Real-time private chat between users.  
✅ **Real-Time Communication** – Powered by **Socket.io** for instant message updates.  
✅ **Online/Offline Status** – Users can see who is online or offline.  
✅ **File Sharing with Preview** – Share images, videos, and documents with preview support.  
✅ **Profile Configuration** – Users can update their profile details, including a profile photo.  
✅ **Message History** – Previous conversations are stored and accessible.  

## Tech Stack
- **Frontend:** React.js, Zustand, Tailwind CSS  
- **Backend:** Node.js, Express.js, MongoDB  
- **WebSockets:** Socket.io  
- **Authentication:** JWT (JSON Web Token)  
- **Storage:** Multer (for file uploads)  
- **Database:** MongoDB + Mongoose  

## Installation

### Prerequisites
- Node.js installed  
- MongoDB installed and running  

### Steps

1. **Clone the repository**  
   \`\`\`sh
   git clone https://github.com/yourusername/mern-chat-app.git
   cd mern-chat-app
   \`\`\`

2. **Install dependencies**  

   **Backend:**  
   \`\`\`sh
   cd backend
   npm install
   \`\`\`

   **Frontend:**  
   \`\`\`sh
   cd ../frontend
   npm install
   \`\`\`

3. **Set up environment variables**  
   Create a \`.env\` file in the **backend** directory and add:  
   \`\`\`env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   \`\`\`

4. **Start the backend server**  
   \`\`\`sh
   cd backend
   npm run dev
   \`\`\`

5. **Start the frontend server**  
   \`\`\`sh
   cd frontend
   npm run dev
   \`\`\`

6. **Run the application**  
   Open **http://localhost:3000** in your browser.  

## Contributing
Pull requests are welcome! Open an issue for feature requests or bug fixes.  

## License
This project is open-source under the **MIT License**.  
EOL

echo "✅ README.md created successfully!"

# === Backend Setup ===
echo "📦 Setting up Backend..."
mkdir backend && cd backend
npm init -y

# Install backend dependencies
npm install express mongoose dotenv cors socket.io jsonwebtoken bcryptjs multer nodemon

# Create Backend Files & Folders
mkdir models routes controllers config middleware uploads
touch server.js .env config/db.js

# Write .env example
cat <<EOL > .env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EOL

echo "✅ Backend setup complete!"

# === Frontend Setup ===
cd ..
echo "🎨 Setting up Frontend..."
mkdir frontend && cd frontend
npm create vite@latest . --template react
npm install
npm install zustand axios socket.io-client tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Create Frontend Files
mkdir src/store src/components src/pages src/utils
touch src/store/chatStore.js src/store/authStore.js

echo "✅ Frontend setup complete!"

# === Final Message ===
cd ..
echo "🚀 MERN Chat Application setup completed!"
echo "📌 Next steps:"
echo "1. Configure .env file in backend"
echo "2. Implement backend routes and models"
echo "3. Start backend: cd backend && npm run dev"
echo "4. Start frontend: cd frontend && npm run dev"
