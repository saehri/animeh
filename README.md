<h1 align="center">✨ Welcome to Animeh ✨</h1>

![Cover](https://utfs.io/f/136c9cb5-d84a-4043-a0d0-15cfb4f35ecc-qmtq0.webp)

<h2>✋ Introduction</h2>
<p>
Welcome to the Animeh, a platform that allows users to submit and retrieve reviews for their favorite anime series. This API is designed to provide a seamless experience for authors who want to share their thoughts on specific anime titles.</p>

<h4>1.1 How we build Animeh</h4>
<a target="_blank" href="https://drive.google.com/drive/folders/1uR90HHNmOJSJLRoo1DirfDdIeJM1Ddae?usp=drive_link">Click here to read more about our process in building this API.</a>

<h4>1.2 Key Features</h4>
<ul>
<li><strong>Submit Reviews:</strong> Authors can submit their reviews for a particular anime, including a rating and optional comments.</li>
<li><strong>Retrieve Reviews:</strong> Users can retrieve reviews for a specific anime, gaining insights from the community's opinions.</li>
</ul>

<h2>Getting started guide</h2>

1. **Download the Codes**

   - Clone the repository to your local machine using the following command:
     ```
     git clone [https://github.com/saehri/animeh]
     ```

2. **Open the Codes on Your Favorite Code Editor**
   - Navigate to the project folder in your terminal or file explorer.
   - Open the codebase using your preferred code editor.
3. **Run npm install**
   - Install the project dependencies by running the following command:
     ```
     npm install
     ```
4. **Run npm run dev**
   - Start the development server with the following command:
     ```
     npm run dev
     ```
5. **Open Postman to play around with the API**
   - Launch Postman or your preferred API testing tool.
   - Use the provided API documentation to interact with the API endpoints.

**Note:** Ensure you have Node.js and npm installed on your machine before running the commands. If not, you can download them from [Node.js website](https://nodejs.org/).

Feel free to reach out if you encounter any issues or have questions.

<h2>API Documentation</h2>
<h4>API Design</h4>

<h5>Authentication and Authorization</h5>
<p>Some of the URL Endpoint on this API are protected. Here are the list of the protected Endpoint and what it needs to unlock them:</p>

<h5>1.1 Author</h5>
---<br>

**Get list of authors**

- Endpoint: `/api/author`
- Request methods: **GET**
- Request header: `Authorization = Bearer JWT_TOKEN`
- Expected response:
  ```
  {
   "success": true,
   "responseDataLength": 1,
   "data": [
       {
           "id": 7,
           "reviews": [
               {
                   "id": 1,
                   "likertScale": 4,
                   "content": "I love the cheeky story. Nice series ♥.",
                   "postId": 3,
                   "authorId": 7,
                   "createdAt": "2024-02-03T10:59:04.757Z",
                   "updatedAt": "2024-02-03T12:00:29.003Z"
               }
           ],
           "name": "bahree",
           "email": "saepulbahree36@gmail.com",
           "posts": [
               {
                   "id": 3,
                   "title": "Jujutsu Kaisen",
                   "synopsis": "Lorem ipsum dolor sit amet",
                   "coverImage": "",
                   "genres": "",
                   "authorId": 7,
                   "createdAt": "2024-02-03T10:05:02.580Z",
                   "updatedAt": "2024-02-03T10:19:45.408Z"
               },
               {
                   "id": 4,
                   "title": "Second post",
                   "synopsis": null,
                   "coverImage": "",
                   "genres": "",
                   "authorId": 7,
                   "createdAt": "2024-02-03T10:05:16.669Z",
                   "updatedAt": "2024-02-03T10:05:16.669Z"
               },
               {
                   "id": 5,
                   "title": "Doraemon",
                   "synopsis": null,
                   "coverImage": "",
                   "genres": "",
                   "authorId": 7,
                   "createdAt": "2024-02-03T15:37:12.172Z",
                   "updatedAt": "2024-02-03T15:37:12.172Z"
               }
           ],
           "isAdmin": true,
           "createdAt": "2024-02-03T04:02:35.625Z",
           "updatedAt": "2024-02-03T06:16:58.800Z"
       }
   ],
   "serverRespondeAt": "2024-02-04T00:50:02.436Z",
   "isEmpty": false
   }
  ```
  <br>---<br>
