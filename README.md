
# Blogging Website

This blogging website allows users to create, manage, and view blog posts. It provides functionalities for user registration, authentication, and blog post management.
Developed a robust RESTful API for a dynamic blogging platform, integrating essential features such as user authentication, authorization, and seamless blog post management. Users can easily register and authenticate using JSON Web Tokens (JWT) for secure access to the system.

## Features

- **User Registration:** Allows users to create accounts by providing basic information.
- **User Authentication:** Provides secure login functionality for registered users.
- **Create Blog Posts:** Enables users to create new blog posts with titles and content.
- **View Blogs:** Displays all blog posts available on the platform.
- **Update and Delete Blogs:** Allows users to update or delete their existing blog posts.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcrypt


## API Endpoints

- **Author Registration:** `POST /api/v1/author/register`
- **Author Login:** `POST /api/v1/author/loginAuthor`
- **Create Blog Post:** `POST /api/v1/blogg/createBlog`
- **Get Blog by Author Id:** `GET /api/v1/blogg/getBlogs/:id`
- **Get All Blogs:** `GET /api/v1/blogg/getAllBlogg`
- **Update Blog Post:** `PUT /api/v1/updateBlogg/:id`
- **Delete Blog Post:** `DELETE /api/v1/deleteBlogg/:id`



