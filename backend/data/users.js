import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Peter Madu',
    email: 'peter@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mike Ogwu',
    email: 'mike@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
