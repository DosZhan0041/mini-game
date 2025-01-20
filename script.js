let data = {
    "name": "Alexey Mirnov",
    "email": "Alexey.ivanov@example.com",
    "age": 20,
    "city": "Almaty",
    "isSubscribed": true
  }
 
  console.log(data);

let a = JSON.stringify(data);
console.log(a)
  

let b = JSON.parse(a)
console.log(b);
