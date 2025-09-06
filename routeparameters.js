import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.status(201).send( {msg: "Chaining"});
});

const users = [
    { id: 1, name: "User1", age: 50 },
    { id: 2, name: "User2", age: 20 },
    { id: 3, name: "User3", age: 34 }
];

app.get('/api/users', (req, res) => {
    res.send([{ id: 1, name: "User1", age:50},
              { id: 2, name: "User2", age:20},
              { id: 3, name: "User3", age:34}
    ]);

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