const bcrypt = require('bcrypt');

async function VerifyPassword(){
  const myPassword = 'admin 123'
  const hash = '$2b$10$iSHfWLjCjJIWCT6/p0wRSu8BcNLF0SCljEY1Ei1bsdldPgMfvbFKe'
const isMatch = await bcrypt.compare(myPassword,hash);
console.log(isMatch);
}


VerifyPassword();
