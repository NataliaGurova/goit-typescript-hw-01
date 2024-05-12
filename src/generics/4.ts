
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(userToUpdate: Partial<User>) {
  // Оновлення користувача
return { ...userToUpdate };
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

