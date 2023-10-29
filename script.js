// Create 5 users. Each user should be an object with the same properties. The user object will have the following properties:
// - firstName
// - lastName
// - age
// - email
// - hobbies  

// Create a function that takes in a users full name. This function should return the users hobbies. 

// Create a function that takes in a users email. This function should return the users email in all caps. 

// Create a function that takes in a users age. This function should return the users age in dog years.

// Create a function that takes in a number. Return only users that are under the age of the number passed in.

const users = [
  {firstName: 'Jon',
   lastName: 'Doe',
   age: 20,
   email: 'jondoe@gmail.com',
   hobbies: 'coding' 
  },
  {firstName: 'Jane',
   lastName: 'Doe',
   age: 30,
   email: 'janedoe@gmail.com',
   hobbies: 'cooking' 
  },
  {firstName: 'Jack',
   lastName: 'Smith',
   age: 25,
   email: 'jacksmith@gmail.com',
   hobbies: 'basketball' 
  },
  {firstName: 'Jim',
   lastName: 'Halpert',
   age: 30,
   email: 'jimhalpert@gmail.com',
   hobbies: 'officing' 
  },
  {firstName: 'Dwight',
   lastName: 'Jackson',
   age: 35,
   email: 'djackson@gmail.com',
   hobbies: 'soccer' 
  },
]

const getUserHobbies = (firstName, lastName) => {
  const fullName = users.find(fullName => fullName.firstName === firstName && fullName.lastName === lastName);
    return fullName.hobbies;
  }

console.log(getUserHobbies('Jim', 'Halpert'))
//This works, but I'm confused about why this syntax works for all the functions: fullName.firstName, fullName.lastName, user.email, etc.

const makeEmailCaps = (email) => {
    const user = users.find(user => user.email === email);
    return user.email.toUpperCase();
  }
//console.log(makeEmailCaps('jondoe@gmail.com'))

const dogYears = (age) => {
  const user = users.find(user => user.age === age);
  return user.age * 7
}
//console.log(dogYears(30));

const underAge = (num) => {
  const user = users.filter(user => user.age <num);
  return user
}
  //for (let i = 0; i < users.length; i++)
  //if (users[i].age < num) {
    //return users
  // Why does this only return one users under 30?

console.log(underAge(30))
