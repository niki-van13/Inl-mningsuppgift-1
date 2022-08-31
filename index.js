import express from "express";
import axios from "axios";
import { nanoid } from "nanoid";
const app = express()
const port = 3001

app.use(express.json())
app.use("/", express.static("client"))



app.get("/api/burgers", async (req, res) => {

  try {
    const options = {
      method: 'GET',
      url: 'https://burgers1.p.rapidapi.com/burgers',
      headers: {
        'X-RapidAPI-Key': '8e0745a5admshf51c0217e0542cep134952jsnc4c461e4e424',
        'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
      }
    };

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

  } catch(err) {
    res.status(400).json(err.message)
  }
})


// Lista 
let burgers = [
  {
    id: nanoid(),
    Name: "Big Mac",
    Price: 220 
  },
  {
    id: nanoid(),
    Name: "Humami Bacon",
    Price: 250
  },
  {
    id: nanoid(),
    Name: "Summer burger",
    Price: 300
  }
]


app.get("/burgers", (req, res) => {
  
  try {
    res.json(burgers)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

app.get("/burgers/:id", (req, res) => {
  try {
      const foundBurgers = burgers.find((burgers) => {
          if(burgers.id == req.params.id) {
              return true
          }
      })

      if(!foundBurgers) {
          throw new Error("Id does not exists...")
      }

      res.json(foundBurgers)
  } catch(err) {
      res.status(404).json(err.message)
  }
})

//  POST
app.post("/burgers", (req, res) => {
  
  try {
    if (!req.body || (!req.body.Name || !req.body.Price)) {
      throw new Error("Data was not provided correctly!")
    }

    burgers.push({...req.body, ...{id: nanoid()}})
    res.json({status: "New burger added!"}) 

  } catch (err) {
    res.status(400).json(err.message)
  }

})





app.use((err, req, res, next) => {
  console.log(err.status)
  console.log(err.message)
  res.status(500).json(err)
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})



