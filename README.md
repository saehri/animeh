<h1 align="center">✨ Welcome to Animeh ✨</h1>

![Cover](https://utfs.io/f/136c9cb5-d84a-4043-a0d0-15cfb4f35ecc-qmtq0.webp)

## ✋ Introduction

<p>
Welcome to the Animeh, a platform that allows users to submit and retrieve reviews for their favorite anime series. This API is designed to provide a seamless experience for authors who want to share their thoughts on specific anime titles.</p>

#### 1.1 How we build Animeh

<a target="_blank" href="https://drive.google.com/drive/folders/1uR90HHNmOJSJLRoo1DirfDdIeJM1Ddae?usp=drive_link">Click here to read more about our process in building this API.</a>

<h4>1.2 Key Features</h4>
<ul>
<li><strong>Submit Reviews:</strong> Authors can submit their reviews for a particular anime, including a rating and optional comments.</li>
<li><strong>Retrieve Reviews:</strong> Users can retrieve reviews for a specific anime, gaining insights from the community's opinions.</li>
</ul>

## Getting started guide

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

## API Design

### 🔒 Authentication and Authorization

<p>Some of the URL Endpoint on this API are protected. Here are the list of the protected Endpoint and what it needs to unlock them:</p>

---

### 🔚 Author Endpoint

---

#### A. Get List of Authors

- Endpoint: `/api/author`
- Request methods: **GET**
- Request header: `Authorization = Bearer JWT_TOKEN`
- Authorization:
  - This endpoint can be accessed only if author `{isAdmin: true}`
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

---

#### B. Get Author by Their Id

- Endpoint: `/api/author/:authorId`
- Parameters: `Author id`
- Request methods: **GET**
- Request header: `Authorization = Bearer JWT_TOKEN`
- Expected response:
  ```
  {
    "success": true,
    "data": {
        "id": 7,
        "name": "bahree",
        "email": "saepulbahree36@gmail.com",
        "password": "",
        "hashedPassword": "$2b$08$Bsljhab.PrKfOS.lTADCped4sqLlSClNJOHxufnb5fmQj1rootL.y",
        "isAdmin": true,
        "createdAt": "2024-02-03T04:02:35.625Z",
        "updatedAt": "2024-02-03T06:16:58.800Z",
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
        ]
    },
    "serverRespondeAt": "2024-02-04T01:29:45.029Z"
    }
  ```
- Error handling:
  - Error: Response data is null
    - Cause: There are no user with the specified id
    - Solution: Make sure the user id is valid

---

#### C. Create New Author

- Endpoint: `/api/author/signup`
- Request methods: **POST**
- Request body:
  ```
  {
   "name": "fikry",
   "email": "fikry@gmail.com",
   "password": "fikry123@"
  }
  ```
- Expected response:
  ```
  {
    "success": true,
    "message": "Author is created!",
    "data": {
        "id": 9,
        "name": "fikry",
        "email": "fikry@gmail.com",
        "password": "",
        "hashedPassword": "$2b$08$tGDSabwXTRLOORhRUSfTGuSwBZE882P27HF0c7ZLp.EHMkGiOTDSK",
        "isAdmin": false,
        "createdAt": "2024-02-04T01:32:29.044Z",
        "updatedAt": "2024-02-04T01:32:29.044Z"
    }
   }
  ```
- Error handling
  - Error: Author name, email, or password cannot be undefined.
    - Cause: Incomplete request body.
    - Solution: Make sure the request body is complete.
  - Error: Email is already used. Please use another one.
    - Cause: Trying to sign up with used email.
    - Solution: Use new email address.

---

#### D. Author Signin

- Endpoint: `/api/author/sigin`
- Request methods: **POST**
- Request body:
  ```
  {
   "email": "fikry@gmail.com",
   "password": "fikry123@"
  }
  ```
- Expected response:
  ```
  {
    "message": "Sigin in success!",
    "success": true,
    "data": {
        "id": 9,
        "name": "fikry",
        "email": "fikry@gmail.com",
        "password": "",
        "hashedPassword": "$2b$08$tGDSabwXTRLOORhRUSfTGuSwBZE882P27HF0c7ZLp.EHMkGiOTDSK",
        "isAdmin": false,
        "createdAt": "2024-02-04T01:32:29.044Z",
        "updatedAt": "2024-02-04T01:32:29.044Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNzA3MDExMjMzLCJleHAiOjE3MDc2MTYwMzN9.QGfhd5ij-Vg170B6Kxf36daQevoaOTtuQZmiT897WsU"
   }
  ```
- Error handling
  - Error: Email or password cannot be empty!.
    - Cause: Incomplete request body.
    - Solution: Make sure the request body is complete.

---

#### E. Editing Author Data

- Endpoint: `/api/author/:authorId`
- Parameters: `Author Id`
- Request methods: **PUT**
- Request body:

  ```
  {
   [authorDataKey]: [new data]
  }

   Example:

   {
    "isAdmin": true
   }
  ```

- Expected response:
  ```
  {
    "success": true,
    "data": {
        "id": 9,
        "reviews": [],
        "name": "fikry",
        "email": "fikry@gmail.com",
        "posts": [],
        "createdAt": "2024-02-04T01:32:29.044Z",
        "isAdmin": true,
        "updatedAt": "2024-02-04T01:56:39.021Z"
    },
    "message": "Author successfully edited",
    "serverRespondeAt": "2024-02-04T01:56:39.051Z"
   }
  ```
- Error handling
  - Error: Request body cannot be empty.
    - Cause: Incomplete request body.
    - Solution: Make sure the request body is complete.

---

#### F. Deleting Author

- Endpoint: `/api/author/:authorId`
- Parameters: `Author Id`
- Request methods: **DELETE**
- Expected response:
  ```
  {
    "message": "Author is successfully deleted.",
    "success": true
   }
  ```
- Error handling
  - Error: Invalid user id.
    - Cause: There are no record with the specified id. Please provide valid user id.
    - Solution: Provide a valid user id.

---

<br>

### Animes Endpoint

---

#### A. Get List of Animes

- Endpoint: `/api/animes`
- Request methods: **GET**
- Request header: `Authorization = Bearer JWT_TOKEN`
- Expected response:
  ```
  {
    "success": true,
    "responseDataLength": 3,
    "data": [
        {
            "id": 3,
            "title": "Jujutsu Kaisen",
            "synopsis": "Lorem ipsum dolor sit amet",
            "genres": "",
            "reviews": [
                {
                    "id": 1,
                    "likertScale": 4,
                    "content": "I love the cheeky story. Nice series ♥.",
                    "author": {
                        "id": 7,
                        "email": "saepulbahree36@gmail.com",
                        "name": "bahree"
                    },
                    "createdAt": "2024-02-03T10:59:04.757Z",
                    "updatedAt": "2024-02-03T12:00:29.003Z"
                }
            ],
            "coverImage": "",
            "author": {
                "id": 7,
                "name": "bahree",
                "email": "saepulbahree36@gmail.com",
                "isAdmin": true
            },
            "createdAt": "2024-02-03T10:05:02.580Z",
            "updatedAt": "2024-02-03T10:19:45.408Z"
        },
        {
            "id": 4,
            "title": "Second post",
            "synopsis": null,
            "genres": "",
            "reviews": [],
            "coverImage": "",
            "author": {
                "id": 7,
                "name": "bahree",
                "email": "saepulbahree36@gmail.com",
                "isAdmin": true
            },
            "createdAt": "2024-02-03T10:05:16.669Z",
            "updatedAt": "2024-02-03T10:05:16.669Z"
        },
        {
            "id": 5,
            "title": "Doraemon",
            "synopsis": null,
            "genres": "",
            "reviews": [],
            "coverImage": "",
            "author": {
                "id": 7,
                "name": "bahree",
                "email": "saepulbahree36@gmail.com",
                "isAdmin": true
            },
            "createdAt": "2024-02-03T15:37:12.172Z",
            "updatedAt": "2024-02-03T15:37:12.172Z"
        }
    ],
    "serverRespondeAt": "2024-02-04T02:48:34.715Z",
    "isEmpty": false
  }
  ```

---

#### B. Get Anime by Id

- Endpoint: `/api/animes/:animeId`
- Parameters: `Anime id`
- Request methods: **GET**
- Request header: `Authorization = Bearer JWT_TOKEN`
- Expected response:
  ```
  {
    "success": true,
    "data": {
        "id": 3,
        "title": "Jujutsu Kaisen",
        "synopsis": "Lorem ipsum dolor sit amet",
        "coverImage": "",
        "genres": "",
        "authorId": 7,
        "createdAt": "2024-02-03T10:05:02.580Z",
        "updatedAt": "2024-02-03T10:19:45.408Z",
        "author": {
            "id": 7,
            "name": "bahree",
            "email": "saepulbahree36@gmail.com",
            "password": "",
            "hashedPassword": "$2b$08$Bsljhab.PrKfOS.lTADCped4sqLlSClNJOHxufnb5fmQj1rootL.y",
            "isAdmin": true,
            "createdAt": "2024-02-03T04:02:35.625Z",
            "updatedAt": "2024-02-03T06:16:58.800Z"
        },
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
        ]
    },
    "serverRespondeAt": "2024-02-04T02:51:45.220Z"
  }
  ```
- Error handling:
  - Error: Response data is null
    - Cause: There are no user with the specified id
    - Solution: Make sure the user id is valid

---

#### C. Create Anime Entry

- Endpoint: `/api/animes`
- Request methods: **POST**
- Request header: `Authorization = Bearer JWT_TOKEN`
- Authorization:
  - This endpoint can be accessed only if author `{isAdmin: true}`
- Request body:
  ```
  {
    "title": "Naruto",
    "synopsis": "Lorem ipsum dolor sit amet",
    "authorId": 7
  }
  ```
- Expected response:
  ```
  {
    "success": true,
    "message": "Post is successfully created!",
    "data": {
        "id": 6,
        "title": "Naruto",
        "synopsis": Lorem ipsum dolor sit amet,
        "coverImage": "",
        "genres": "",
        "authorId": 7,
        "createdAt": "2024-02-04T02:56:49.112Z",
        "updatedAt": "2024-02-04T02:56:49.112Z"
    }
  }
  ```
- Error handling
  - Error: Post title, synopsis, or authorId cannot be undefined.
    - Cause: Incomplete request body.
    - Solution: Make sure the request body is complete.
  - Error: Author with the id provided does not exist in our record. Make sure you provided the correct id.
    - Cause: The authorId does not exist.
    - Solution: Make sure you provided the correct id.
  - Error: Unauthorized access. You need to be an admin to do this operation.
    - Case: The user is not an admin.
    - Solution: You need to register as an admin.

---

#### D. Edit Anime Data

- Endpoint: `/api/animes/:authorId/:animesId`
- Parameters: `authodId = AuthorId & animesId = AnimesId`
- Request methods: **PUT**
- Request body:

  ```
  {
   [authorDataKey]: [new data]
  }

   Example:

   {
    "synopsis": "The story revolves around Yuji Itadori, a high school student with exceptional physical abilities. After the death of his grandfather, Yuji finds himself drawn into the world of Jujutsu Sorcery when he comes into contact with a cursed object—a rotting finger imbued with an ancient curse."
  }
  ```

- Authorization:
  - This endpoint can be accessed only if author `{isAdmin: true}`
- Expected response:
  ```
  {
    "success": true,
    "data": {
        "id": 3,
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
        "title": "Jujutsu Kaisen",
        "synopsis": "The story revolves around Yuji Itadori, a high school student with exceptional physical abilities. After the death of his grandfather, Yuji finds himself drawn into the world of Jujutsu Sorcery when he comes into contact with a cursed object—a rotting finger imbued with an ancient curse.",
        "coverImage": "",
        "genres": "",
        "authorId": 7,
        "author": {
            "id": 7,
            "name": "bahree",
            "email": "saepulbahree36@gmail.com",
            "password": "",
            "hashedPassword": "$2b$08$Bsljhab.PrKfOS.lTADCped4sqLlSClNJOHxufnb5fmQj1rootL.y",
            "isAdmin": true,
            "createdAt": "2024-02-03T04:02:35.625Z",
            "updatedAt": "2024-02-03T06:16:58.800Z"
        },
        "createdAt": "2024-02-03T10:05:02.580Z",
        "updatedAt": "2024-02-04T03:39:28.762Z"
    },
    "message": "Post successfully edited",
    "serverRespondeAt": "2024-02-04T03:39:28.775Z"
  }
  ```
- Error handling
  - Error: Request body cannot be empty.
    - Cause: Incomplete request body.
    - Solution: Make sure the request body is complete.
  - Error: Unauthorized, admin only.
    - Cause: Invalid authorId or author is not registered as an admin.
    - Solution: Make sure the authorId is valid and the author is registered as an admin.
  - Error: There are no record of post with the specified id.
    - Cause: animesId is not valid.
    - Solution: Make sure the animeId is valid.

---

#### E. Delete Anime Data

- Endpoint: `/api/animes/authorId:/:animesId`
- Request methods: **DELETE**
- Parameters: `authodId = AuthorId & animesId = AnimesId`
- Authorization:
  - This endpoint can be accessed only if author `{isAdmin: true}`
- Expected response:
  ```
  {
    "success": true,
    "message": "Post successfully deleted!",
    "serverRespondeAt": "2024-02-04T06:43:06.844Z"
  }
  ```
- Error handling
  - Error: Invalid user id.
    - Cause: There are no record with the specified id. Please provide valid user id.
    - Solution: Provide a valid user id.

---

#### F. Search Animes

- Endpoint: `/api/animes/search?query=value`
- Request methods: **DELETE**
- Parameters:

  ```
  Query: can be any title, or synopsis.
  Value is string where empty space is replace with plus (+) sign.

  Example:
  /api/animes/search?title=Spirited+Away
  ```

- Expected response:
  ```
  {
    "success": true,
    "responseDataLength": 1,
    "data": [
        {
            "id": 8,
            "title": "Spirited Away",
            "synopsis": "Ten-year-old Chihiro and her parents end up at an abandoned amusement park inhabited by supernatural beings. Soon, she learns that she must work to free her parents who have been turned into pigs.",
            "coverImage": "",
            "genres": "",
            "authorId": 7,
            "createdAt": "2024-02-04T06:48:29.495Z",
            "updatedAt": "2024-02-04T06:48:29.495Z",
            "author": {
                "id": 7,
                "name": "bahree",
                "email": "saepulbahree36@gmail.com",
                "password": "",
                "hashedPassword": "$2b$08$Bsljhab.PrKfOS.lTADCped4sqLlSClNJOHxufnb5fmQj1rootL.y",
                "isAdmin": true,
                "createdAt": "2024-02-03T04:02:35.625Z",
                "updatedAt": "2024-02-03T06:16:58.800Z"
            },
            "reviews": []
        }
    ],
    "serverRespondeAt": "2024-02-04T06:49:17.666Z",
    "isEmpty": false
  }
  ```

---

<br>

### Review Endpoint

---

#### A. Get List of Reviews

- Endpoint: `/api/review`
- Request methods: **GET**
- Request header: `Authorization = Bearer JWT_TOKEN`
- Expected response:
  ```
  {
    "success": true,
    "responseDataLength": 1,
    "data": [
        {
            "id": 3,
            "content": "Amazing animation and music ♥.",
            "likertScale": 5,
            "postId": 8,
            "author": {
                "id": 7,
                "name": "bahree",
                "email": "saepulbahree36@gmail.com",
                "password": "",
                "hashedPassword": "$2b$08$Bsljhab.PrKfOS.lTADCped4sqLlSClNJOHxufnb5fmQj1rootL.y",
                "isAdmin": true,
                "createdAt": "2024-02-03T04:02:35.625Z",
                "updatedAt": "2024-02-03T06:16:58.800Z"
            },
            "authorId": 7,
            "createdAt": "2024-02-04T06:59:28.138Z",
            "updatedAt": "2024-02-04T06:59:28.138Z"
        }
    ],
    "serverRespondeAt": "2024-02-04T07:00:20.747Z",
    "isEmpty": false
  }
  ```

---

#### B. Create Review

- Endpoint: `/api/review`
- Request methods: **POST**
- Request header: `Authorization = Bearer JWT_TOKEN`
- Request body:

  ```
  {
    "likertScale": 4,
    "content": "Amazing animation and music ♥.",
    "postId": 3,
    "authorId": 7
  }


  NOTE:
  - likertScale is integer from 1 to 5 inclusive.
  ```

- Expected response:
  ```
  {
    "success": true,
    "message": "Review is successfully created!",
    "data": {
        "id": 3,
        "likertScale": 5,
        "content": "Amazing animation and music ♥.",
        "postId": 8,
        "authorId": 7,
        "createdAt": "2024-02-04T06:59:28.138Z",
        "updatedAt": "2024-02-04T06:59:28.138Z"
    }
  }
  ```

---

#### C. Edit Review

- Endpoint: `/api/reviews/:reviewsId`
- Parameters: `reviewsId = Review Id`
- Request methods: **PUT**
- Request body:

  ```
  {
   [reviewDataKey]: [new data]
  }

   Example:

   {
    "likertScale": 2,
    "content": "Worst thing ever."
  }
  ```

- Expected response:
  ```
  {
    "success": true,
    "data": {
        "id": 3,
        "likertScale": 2,
        "content": "Worst thing ever.",
        "post": {
            "id": 8,
            "title": "Spirited Away",
            "synopsis": "Ten-year-old Chihiro and her parents end up at an abandoned amusement park inhabited by supernatural beings. Soon, she learns that she must work to free her parents who have been turned into pigs.",
            "coverImage": "",
            "genres": "",
            "authorId": 7,
            "createdAt": "2024-02-04T06:48:29.495Z",
            "updatedAt": "2024-02-04T06:48:29.495Z"
        },
        "postId": 8,
        "authorId": 7,
        "author": {
            "id": 7,
            "name": "bahree",
            "email": "saepulbahree36@gmail.com",
            "password": "",
            "hashedPassword": "$2b$08$Bsljhab.PrKfOS.lTADCped4sqLlSClNJOHxufnb5fmQj1rootL.y",
            "isAdmin": true,
            "createdAt": "2024-02-03T04:02:35.625Z",
            "updatedAt": "2024-02-03T06:16:58.800Z"
        },
        "createdAt": "2024-02-04T06:59:28.138Z",
        "updatedAt": "2024-02-04T07:05:11.395Z"
    },
    "message": "Review successfully edited",
    "serverRespondeAt": "2024-02-04T07:05:11.406Z"
  }
  ```
- Error handling
  - Error: Request body cannot be empty.
    - Cause: Incomplete request body.
    - Solution: Make sure the request body is complete.
  - Error: Unauthorized, admin only.
    - Cause: Invalid authorId or author is not registered as an admin.
    - Solution: Make sure the authorId is valid and the author is registered as an admin.
  - Error: There are no record of post with the specified id.
    - Cause: animesId is not valid.
    - Solution: Make sure the animeId is valid.

---

#### D. Delete Review

- Endpoint: `/api/review/:reviewId`
- Request methods: **DELETE**
- Parameters: `reviewId = Review Id`
- Expected response:
  ```
  {
    "success": true,
    "message": "Post successfully deleted!",
    "serverRespondeAt": "2024-02-04T06:43:06.844Z"
  }
  ```
- Error handling
  - Error: Invalid user id.
    - Cause: There are no record with the specified id. Please provide valid user id.
    - Solution: Provide a valid user id.

---
