const info = {

    name: 'Amit Gupta',

    email: 'xyz@gmail.com',

    age: 22,

    dob: '08/02/2000',

};

// Iterate over the info object using for..in the loop

for (const key in user) {

    // console.log(`${key}: ${user[key]}`);
    if (user.hasOwnProperty(obj)) {

        console.log(`${key}: ${user[key]}`);
    }

}


// In JavaScript, the function hasOwnProperty() method is used to see if the object has the specified property as its property.


// Object.keys() method

const subjects = {
    java: 12,

    javascript: 15,

    nodejs: 25,

    php: 35
};

// Convert object to key's array

const keys = Object.keys(subjects);

// print all keys

console.log(keys);

// [ 'java', 'javascript', 'nodejs', 'php' ]

// Iterating over the object

keys.forEach((key, index) => {
    console.log(`${key}: ${courses[key]}`);
});


const students = {
    Amit: 90,
    Aditya: 80,
    Satyam: 75,
    Achyut: 77 ,
    senkathir:"43" 
  }
  
  const values = Object.values(students)
  console.log(values)


  const student= {
    Amit: 90,
    Aditya: 80,
    Satyam: 75,
    Achyut: 77  
  }
  
  const test = Object.entries(student)
  console.log(test)
  
  
