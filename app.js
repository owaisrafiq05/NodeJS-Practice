// //fetch is a brower's web API
// //node js execute JS from outside of browser
// we have to restart server everytime when we make changes to the code
//server is start by writing "node xyz_name.js" command on the terminal
import express, { response } from "express";

const app = express()
const PORT = 5000;

app.get( "/", (request, response) => {
    response.send("Hello World from Owais!");
})

const products = [
          {
            "id": "1",
            "title": "1984",
            "author": "George Orwell",
            "genre": "Dystopian fiction",
            "year_published": 1949,
            "price": 10.99,
            "available": true
          },
          {
            "id": "2",
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "genre": "Southern Gothic",
            "year_published": 1960,
            "price": 12.99,
            "available": true
          },
          {
            "id": "3",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Tragedy",
            "year_published": 1925,
            "price": 9.99,
            "available": false
          }
      ]

app.get("/product",(request,response) => {
    response.send(products);
})


app.get("/product/:id",(request,response) => {
  const singleProducts = products.find((products) => products.id === +request.params.id);
  console.log("single products",singleProducts);
  response.send(singleProducts);
  console.log(request.params.id);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
