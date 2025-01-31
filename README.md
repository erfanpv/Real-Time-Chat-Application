# ✨ Full Stack Realtime Chat App ✨

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

### Setup .env file

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```
