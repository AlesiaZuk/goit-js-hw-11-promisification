const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  return Promise.resolve(updatedUsers);
};

const logger2 = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger2);
toggleUserState(users, "Lux").then(logger2);
