import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "puneet.puri999@gmail.com",
    password: bcrypt.hashSync("Northeastern@2001", 10),
    isAdmin: true,
  },
  {
    name: "Puneet Puri",
    email: "doomsday25092001@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Shveta Puri",
    email: "feebie7@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users; 