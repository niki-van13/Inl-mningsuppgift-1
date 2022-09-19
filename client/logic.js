

async function onLoad() {

	await getBurgers()
	
	
}

async function getBurgerstore() {
    
    const apiBurgers = await fetch("http://localhost:8000/api/burgers")
    const apiData =  await apiBurgers.json()
    console.log(apiData)
        for (let i = 0; i < apiData.length; i++) {
           const burgerstore = apiData[i]
           const container = document.getElementById("Extburger")
		   let burgerstoreContainer = document.createElement("div")
		   burgerstoreContainer.classList.add("burgerStoreDiv")
		
		let name = document.createElement('h1')
		name.innerHTML = burgerstore.name
		container.append(burgerstoreContainer)
        burgerstoreContainer.append(name) 
		
		let desp = document.createElement('h2')
		desp.innerHTML = burgerstore.description
		container.append(burgerstoreContainer)
        burgerstoreContainer.append(desp) 
		
		let hlink = document.createElement('p')
		hlink.innerHTML = burgerstore.web
		container.append(burgerstoreContainer)
        burgerstoreContainer.append(hlink) 
		}
}



    await getBurgers()
 
}


const getBurgers = async (event) => {

    try {
        

		//clean
		document.getElementById("burger").innerHTML = "";
       // document.getElementById("cart").innerHTML=""
		
		
        const response = await fetch("http://localhost:8000/burgers")

        const response = await fetch("http://localhost:3001/burgers")

        const data = await response.json()
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            const burgers = data[i]
            console.log(burgers.Name)

        const container = document.getElementById("burger")
        let burgersContainer = document.createElement("div")
        burgersContainer.classList.add("burgerDiv")
        let title = document.createElement("a")


        //cambiato qua 
        title.innerHTML =  burgers.Name + " / " + burgers.Price + ":- Sek"

        title.innerHTML = burgers.Name + burgers.Price

        container.append(burgersContainer)
        burgersContainer.append(title) 
        
        }

    } catch(err) {
        console.error(err)
    }
}

/*
const getOrders = async (event) => {

    try {
        
		//clean
		// document.getElementById("cart").innerHTML=""
		 
		
		
        const response = await fetch("http://localhost:8000/burgers")
        const data = await response.json()
        console.log(data)
		console.log(data.length)
		if (data.length > 1) {	// if have order
			for (let i = 1; i < data.length; i++) {
				const burgers = data[i]
				console.log(burgers.Name)
				const container = document.getElementById("cart")
				let burgersContainer = document.createElement("div")
				burgersContainer.classList.add("burgerDiv")
				let title = document.createElement("a")
				title.innerHTML = burgers.Name + " / " + burgers.Price + ":- Sek"
				container.append(burgersContainer)
				burgersContainer.append(title) 
			}
        }else {
				const burgers = data[0]
				console.log(burgers.Name)
				const container = document.getElementById("cart")
				let burgersContainer = document.createElement("div")
				burgersContainer.classList.add("burgerDiv")
				let title = document.createElement("a")
				title.innerHTML = burgers.Name + " / " + burgers.Price + ":- Sek"
				container.append(burgersContainer)
				burgersContainer.append(title) 
		}

    } catch(err) {
        console.error(err)
    }
}
*/

const addBurgers = async (event) => {
    
	const burgerName = document.getElementById("burgerName").value
    const burgerPrice = document.getElementById("burgerPrice").value
    const newBurger = {
        //cambio
        Name: burgerName,
        Price: burgerPrice
      
    }
    
    try {
        
        
        const response = await fetch("http://localhost:8000/burgers", {


const addBurgers = async (event) => {
    
    try {
        
        const newBurger = {
            Name: "Veggie Burger",
            Price: 276
        }


        
        const response = await fetch("http://localhost:3001/burgers", {

            method: "POST", 
            headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify(newBurger)

        }) 
        
        const data = await response.json()
            console.log(data)

            //cambio
            getBurgers()	//refresh UI



        } catch(err) {
            console.error(err)
        }
    }


 

    
document.getElementById("createBtn").addEventListener("click", getBurgers)
document.getElementById("collectBtn").addEventListener("click", addBurgers)

//document.getElementById("sOrderBtn").addEventListener("click", getOrders)
document.getElementById("gExtBtn").addEventListener("click", getBurgerstore)
window.addEventListener('load', onLoad) 
window.addEventListener("load", getOrders)

window.addEventListener('load', onLoad) 


    

