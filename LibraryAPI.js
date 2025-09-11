/*
the five most important HTTP methods are GET, POST, PUT, PATCH, 
and DELETE. These methods define how a client (like Thunder 
Client, Postman, or even a browser) communicates with the server.

The GET method is used to retrieve data from the server. 
It does not require a request body and does not change 
anything on the server. For example, calling GET /api/books 
returns a list of all books, while GET /api/books/2 fetches
 a single book with ID 2. GET is idempotent, meaning running 
 it multiple times gives the same result.

The POST method is used to send data to the server to create 
something new. It requires a request body, usually in JSON format,
 such as when adding a new book with a title and author. 
 Each POST call creates a new resource, so it is not idempotent 
 — calling it twice might create two books. The server usually
  responds with the new object and a status code 201 Created.

The PUT method replaces an existing resource completely.
 When you send a PUT request, you must provide all fields 
 of the object, not just the ones you want to change. 
 For example, PUT /api/books/2 could replace the book with 
 ID 2 by sending a completely new title and author. PUT is 
 idempotent because sending the same replacement again doesn’t 
 change the result further.

The PATCH method is similar to PUT, but instead of replacing 
everything, it updates only specific fields of a resource. 
You can send just the fields you want to modify, like updating 
only the title of a book while leaving its author unchanged. 
PATCH is also idempotent because applying the same update again
 doesn’t cause extra changes.

Finally, the DELETE method removes a resource from the server. 
It doesn’t need a request body since the item is usually 
identified by the URL, such as DELETE /api/books/3. 
If the resource exists, the server deletes it and returns 
a confirmation message. If it doesn’t exist, the server 
often responds with a 404 Not Found. Like GET, DELETE is 
idempotent — once the item is deleted, repeating the same 
request has no further effect.

In summary, GET retrieves data, POST creates data, PUT 
replaces data, PATCH updates data, and DELETE removes data.
 Together, these five methods form the foundation of almost 
 every API you will use or build.
*/

import express from "express"

const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    {id: 1, title: "Atomic Habits", author: "James Clear"},
    {id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt"},
    {id:3, title: "How to win friends and influence people", author: "Dale Carnegie"}
];

app.listen(PORT, () => {
    console.log(`Library API running on ${PORT}`);
});

// GET ALL BOOKS
 app.get("/api/books", (req, res) => {
    res.send(books);
 });

// GET => Get sepecific book
app.get("/api/books/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));

    if(!book){
        return res.status(404).send({ message: "Book not found"});
    }
    res.send(book);
});

// POST => Add a new book
app.post("/api/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    }

    books.push(newBook);

    res.status(201).send({ message: "Book added", book: newBook});
});

// PUT => Replace a book completely
app.put("/api/books/:id", (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));

    if(bookIndex === -1){
        return res.status(404).send({ message: "Book not found"});
    }

    books[bookIndex] = {
        id: books[bookIndex].id,
        title: req.body.title,
        author: req.body.author
        
    };

    res.send({ message: "Book replaced", book: books[bookIndex]});
});

//PATCH => Update a book partially
app.patch("/api/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).send({ message: "Book not found" });
  }

  if (req.body.title) book.title = req.body.title;
  if (req.body.author) book.author = req.body.author;
  if (req.body.year) book.year = req.body.year;

  res.send({ message: "Book updated partially", book });
});

//DELETE => Remove a book

app.delete("/api/books/:id", (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));

  if (bookIndex === -1) {
    return res.status(404).send({ message: "Book not found" });
  }

  const deletedBook = books.splice(bookIndex, 1);
  res.send({ message: "Book deleted", book: deletedBook[0] });
});


