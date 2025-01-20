let data = {
    "name": "Иван Иванов",
    "email": "ivan.ivanov@example.com",
    "age": 30,
    "city": "Москва",
    "isSubscribed": true
  }
 
  console.log(data);

let a = JSON.stringify(data);
console.log(a)
  

let b = JSON.parse(a)
console.log(b);
