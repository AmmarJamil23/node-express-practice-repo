const bcrypt = require("bcrypt");

const storedHash = " $2b$12$Hkkh4euPV/4SWy5OizPNFuf/jJYjvElC731I/xkdhpJPQHnAk7Zua";

async function login(inputPassword) {
  const isMatch = await bcrypt.compare(inputPassword, storedHash);

  if (isMatch) {
    console.log("Login successful  password is correct");
  } else {
    console.log("Login failed  password is incorrect");
  }
}

login("Secret1");
