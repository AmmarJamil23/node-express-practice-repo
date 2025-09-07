/*
Query parameters are extra key=value pairs that you append to a URL after a ?
example :
/api/user?filter=name&value=1
In the above examplle the filter = name and value = 1
In express we access them using the method "req.query" and this
returns an object.
USE CASE:
They are used to pass additional information to the server without
changing the route itself.
Examples:
Pagination: /api.users?page=2&limit=10
Sorting: /api/products?sort=price&order=asc
Filtering: /api/users?ag=30
Searching: /api/books?q=javascript.
We dont nned a separate route for each filter, page, or search. 
One route can handle multiple variations.
*/


import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.status(201).send( {msg: "Chaining"});
});

const users = [
    { id: 1, name: "User1", age: 50 },
    { id: 2, name: "User2", age: 20 },
    { id: 3, name: "User3", age: 34 },
    { id: 4, name: "User4", age:44},
    {id: 5, name: "User5", age:38},
    { id: 6, name: "User6", age:27},
];

app.get('/api/users', (req, res) => {
  const { filter, value } = req.query;

  if (!filter || !value) {
    return res.send(users);
  }

  const filteredUsers = users.filter(user => {
    const fieldValue = String(user[filter]); // convert to string
    return fieldValue.includes(value);
  });

  res.send(filteredUsers);
});



app.get('/api/users/:id', (req, res) => {
   const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ error: "User not found" });
    }
})


app.get('/api/products', (req, res) => {
    res.send([{id: 1, productname: "Shoes", price: 12.99}])
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});