const bcrypt = require("bcrypt");

const saltRounds = 12;

storedHAsh = "$2b$12$pMZEEv6E3pjlFMb0LlXfQ.7pQD/zhvyfZwJ/10ZAXgbRQE0wMfBAu"

async function signup(password) {
  const passwordHash = await bcrypt.hash(password, saltRounds);

  console.log("Original Password:", password);

  console.log("Password Hash:", passwordHash);

  return passwordHash;
}

signup("Secret1");
