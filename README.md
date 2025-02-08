## Blog Mern App using ReactJs, MongoDB , Express and NodeJs

# Mahi Blogs Website

## Overview
Mahi Blogs Website is a full-stack blog management platform built using the MERN (MongoDB, Express.js, React, Node.js) stack. This platform allows users to create, edit, delete, and view blog posts. It also includes authentication, user roles, and a rich-text editor for blog content.

## Features
- User Authentication (JWT-based login & registration)
- Create, Read, Update, and Delete (CRUD) functionality for blogs
- Rich-text editor for blog content
- User roles (Admin, Editor, Reader)
- Commenting system
- Responsive design using Tailwind CSS
- RESTful API with Express.js & MongoDB
- Image upload support (Multer & Cloudinary integration)
- Deployed on AWS/Heroku with CI/CD support

## Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JSON Web Tokens (JWT), bcrypt
- **Deployment:** AWS/Heroku, Docker
- **Other Tools:** Multer, Cloudinary (for image uploads)

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v16 or later)
- MongoDB
- Git
- NPM or Yarn

### Clone Repository
```sh
git clone https://github.com/yourusername/mahi-blogs.git
cd mahi-blogs
```

### Backend Setup
```sh
cd backend
npm install
cp .env.example .env  # Add environment variables
npm start
```

### Frontend Setup
```sh
cd frontend
npm install
npm start
```

## Environment Variables
Create a `.env` file in the backend folder and set the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | User login |
| GET | `/api/blogs` | Get all blogs |
| POST | `/api/blogs` | Create a new blog (Auth required) |
| PUT | `/api/blogs/:id` | Update a blog (Auth required) |
| DELETE | `/api/blogs/:id` | Delete a blog (Admin only) |

## Deployment
- Backend deployed on AWS EC2/Heroku
- Frontend deployed on Vercel/Netlify
- MongoDB hosted on MongoDB Atlas

## Future Enhancements
- Add categories and tags for blogs
- Implement a search feature
- Improve SEO and social sharing previews
- Add an analytics dashboard

## Contributing
Feel free to fork this repository and submit pull requests. Follow the contribution guidelines before making changes.

## License
This project is open-source and available under the [MIT License](LICENSE).