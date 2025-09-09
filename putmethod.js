import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

const users = [
    { id: 1, name: "User1", age: 50 },
    { id: 2, name: "User2", age: 20 },
    { id: 3, name: "User3", age: 34 },
    { id: 4, name: "User4", age: 44 },
    { id: 5, name: "User5", age: 38 },
    { id: 6, name: "User6", age: 27 },
];

// GET all users with optional filter
app.get('/api/users', (req, res) => {
  const { filter, value } = req.query;

  if (!filter || !value) {
    return res.send(users);
  }

  const filteredUsers = users.filter(user => {
    const fieldValue = String(user[filter]);
    return fieldValue.includes(value);
  });

  res.send(filteredUsers);
});

// POST new user
app.post("/api/users", (req, res) => {
  const {body} = req;
  const newUser = { id: users[users.length - 1].id + 1, ...body};
  users.push(newUser);
  return res.status(201).send(newUser);
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
   const userId = parseInt(req.params.id);
   const user = users.find(u => u.id === userId);

   if (user) {
       res.send(user);
   } else {
       res.status(404).send({ error: "User not found" });
   }
});


app.put("/api/users/:id", (req, res) => {
    const {body, params: { id },} = req;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)) return res.sendStatus(400);

    const  findUserIndex = users.findIndex(
        (user) => user.id === parsedId
    );

    if(findUserIndex === -1) return res.sendStatus(404);

    users[findUserIndex] = { id: parsedId, ...body};

    return res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
