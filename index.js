import express from "express";
import axios from "axios";
import { nanoid } from "nanoid";
const app = express()
const port = 8000

app.use(express.json())
app.use(express.static("./client"))



app.get("/api/burgers", async (req, res) => {

    try {
    
        const options = {
        

      method: 'GET',
      url: 'https://burgers1.p.rapidapi.com/burgers',
	  headers: {
			'X-RapidAPI-Key': '60321cade2msh044434525184bdfp1b78aajsncb4de0e2ad1b',
			'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
		}
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);

        

        res.json(response.data)
    
    }).catch(function (error) {
        console.error(error);
    });
}catch(error) {
    console.log(error);
}
})



// Lista 
let burgers = [
  {

    Name: "Big Mac",
    Price: 220 
  },
  {
   
    Name: "Humami Bacon",
    Price: 250
  },
  {
   
    Name: "Summer burger",
    Price: 300
  }
]
let orderempty = [
  {
 
    Name: "You have no order.",
    Price: 0 
  }
]
let orders = [0]

app.get("/burgers", (req, res) => {
  
  try {
    res.json(burgers)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

app.get("/burgers", (req, res) => {
  
  try {
	  if (burgers.length < 2) {
		res.json(orderempty)
	  }else {
		res.json(burgers)
		console.log(burgers)
	  }
  } catch (err) {
    res.status(500).json(err.message)
  }
})


//  POST
app.post("/burgers", (req, res) => {
  
  try {
    if (!req.body  || (!req.body.Name) || (!req.body.Price)) {
      throw new Error("Data was not provided correctly!")
    }
	console.log(burgers.length)
	console.log(burgers.at(req.body.id))
  //cambio
	burgers.push(req.body)
	console.log(burgers)

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



