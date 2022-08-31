

async function onLoad() {
    await getBurgers()
 
}

const getBurgers = async (event) => {

    try {
        
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
        title.innerHTML = burgers.Name + burgers.Price
        container.append(burgersContainer)
        burgersContainer.append(title) 
        
        }

    } catch(err) {
        console.error(err)
    }
}

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

        } catch(err) {
            console.error(err)
        }
    }


 

    
document.getElementById("createBtn").addEventListener("click", getBurgers)
document.getElementById("collectBtn").addEventListener("click", addBurgers)
window.addEventListener('load', onLoad) 


    