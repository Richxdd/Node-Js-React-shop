const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzNzE5Nzk3N30.2GVRcDszXq6rr8h7Drs5Rz0TQv9lBU0o_o0cAg5Z7FM'

function verifyToken(token,secret){
  return jwt.verify(token,secret);
}

const payload = verifyToken(token,secret);
console.log(payload);
