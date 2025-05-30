# Final Project Book Library

## Click on client or server to read the README file for each one , or read both here.

### Site Preview Video

[![Watch the video](https://i3.ytimg.com/vi/ATxQpqJ1TVU/maxresdefault.jpg)](https://www.youtube.com/watch?v=ATxQpqJ1TVU)

https://www.youtube.com/watch?v=ATxQpqJ1TVU&ab_channel=VramV


## Book Library Frontend

I have created a responsive book library using React for the frontend and MongoDB for the backend.

### Links

- Frontend: https://books-library.netlify.app/
- Backend: https://book-library-backend-7bi6.onrender.com/api/v1

---

## About

- Login and Sign-up with authorization.
- Each book has its own about page.
- You can read a book.
- You can add a book to your library.
- You can remove a book from your library.
- You can comment on a book.
- You can remove your comment.
- You can add your own book.
- You can delete your own book.
- You can search for a book.

---

- There are categories based on each book's category.
- There is a category for books added by people.
- You can check out books written by well known authors.
- There are Fairy Tales books.
- Book of the day section changes every 24 hours.

---

### Things to know

I have used puppeteer package to scrap books pages.

- The pages of the Fairy Tales are real pages.
- The pages of the other books are the same.

I couldn't find real pages for the other books so i just scraped random chapter

of a book and added it to the pages just to fill them.

- You can click on the email icon in the footer to contact me.

---

### Used packages

- Material UI
- Bootstrap
- React Page Flip
- React Toastify

---

## Preview

![home-page-1](./client/src/assets/home-1.png)
![home-page-2](./client/src/assets/home-2.png)
![home-page-3](./client/src/assets/home-3.png)
![home-page-4](./client/src/assets/home-4.png)
![sign-up](./client/src/assets/Signup.png)
![search-page](./client/src/assets/search-page.png)
![add-book](./client/src/assets/add-book.png)
![library](./client/src/assets/library.png)
![my-book](./client/src/assets/my-book.png)
![about](./client/src/assets/about.png)
![book-page](./client/src/assets/book-page.png)
![read-book](./client/src/assets/read-book.png)

---

# Book Library Backend

I have created a responsive book library using React for the frontend and MongoDB for the backend.

### Links

- Backend: https://book-library-backend-7bi6.onrender.com/api/v1
- Frontend: https://books-library.netlify.app/

---

### Used packages

- Mongoose
- Express
- Dotenv
- Cors
- Bcrypt
- JWT Token
- Puppeteer

---

## About

- There are four schemas. [User , Books , FairyTales , Comments]
- There are authorization tokens for each user.
- There is an error middleware.
- I used puppeteer locally because i couldn't deploy my backend with it. [puppeteer.js shows the work]

---

### Endpoints

- https://book-library-backend-7bi6.onrender.com/api/v1

- Routes
  ![routes](./server/assets/routess.png)

- Users
  ![user](./server/assets//user.png)

- Books
  ![books](./server/assets/books.png)

- FairyTales
  ![fairy tales](./server/assets/fairy-tales.png)

- Comments
  ![comments](./server/assets/comments.png)
