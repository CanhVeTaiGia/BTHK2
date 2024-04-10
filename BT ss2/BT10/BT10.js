const users = [
  {
    name: "Nguyễn Văn A",
    address: "Hà Nội",
    email: "nva@rikkei.com",
  },
  {
    name: "Trần Văn Bình",
    address: "Hà Nội",
    email: "tvbinh@rikkei.com",
  },
  {
    name: "Nguyễn Hồng Anh",
    address: "Thái Bình",
    email: "nhanh@gmail.com",
  },
  {
    name: "Lê Văn Nam",
    address: "Hà Nội",
    email: "lvnam@gmail.com",
  },
];

function filterByAddressAndEmail(users, address, email){
  const filteredUsers = users.filter(user => {
      return user.address === address && user.email.endsWith(email);
  });
  const foundUser = filteredUsers.find(user => {
      return user.address === address && user.email.endsWith(email);
  });
  return foundUser;
}

console.log(filterByAddressAndEmail(users, "Thái Bình", "@gmail.com"));
console.log(filterByAddressAndEmail(users, "Hà Nội", "@rikkei.com"));
